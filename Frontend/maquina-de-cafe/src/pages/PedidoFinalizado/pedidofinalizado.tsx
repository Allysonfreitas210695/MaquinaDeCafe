import { useLocation, useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { BsArrowLeftShort, BsCheck2 } from "react-icons/bs";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { atualizarStatusPedido } from "../../service/pedido_api";
import axios from "axios";

interface PedidoItemFormatado {
  id: string;
  nome: string;
  quantidade: number;
  valorUnitario: number;
  ml?: number; 
  tipoLeite?: string;
  tipoAcucar?: string;
  observacao?: string;
  imageSrc?: string;
}

export const PedidoFinalizado = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();

  const {
    pedidoId,
    formaPagamento,
    valorTotal,
    pedidosItens,
    statusPedido,
    tempoPreparoEstimado,
  } = (location.state || {}) as {
    pedidoId?: string;
    formaPagamento?: string;
    valorTotal?: number;
    pedidosItens?: PedidoItemFormatado[]; 
    statusPedido?: string;
    tempoPreparoEstimado?: string;
  };

  const pedidosFormatadosParaExibicao = pedidosItens || [];
  const totalRealDoPedido = valorTotal || 0;

  const handleFinalizarPedido = async () => {
    if (!pedidoId) {
      alert("ID do pedido não encontrado para finalizar.");
      navigate("/");
      return;
    }

    console.log("Status atual do pedido (frontend):", statusPedido);

    if (statusPedido === "Pronto") {
      console.log(
        "Pedido já está pronto, não é necessário atualizar o status."
      );
      clearCart();
      navigate("/feedback", {
        state: { itemsParaFeedback: pedidosFormatadosParaExibicao, pedidoId },
      });
      return;
    }

    try {
      await atualizarStatusPedido(pedidoId, "Pronto");
      clearCart();
      navigate("/feedback", {
        state: { itemsParaFeedback: pedidosFormatadosParaExibicao, pedidoId },
      });
    } catch (error) {
      console.error("Erro ao finalizar pedido (status Pronto):", error);
  
         let errorMessage = "Ocorreu um erro inesperado. Tente novamente."; 

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.errorMessage || error.message;
      }
      
      alert(`Erro: ${errorMessage}`);
    }
  };

  const handleCancelarPedido = async () => {
    if (!pedidoId) {
      alert("ID do pedido não encontrado para cancelar.");
      navigate("/");
      return;
    }

    console.log(
      "Tentando cancelar pedido. ID:",
      pedidoId,
      "Status:",
      "Cancelado"
    );

    try {
      await atualizarStatusPedido(pedidoId, "Cancelado");
      clearCart();
      navigate("/cancelado");
    } catch (error) {
      console.error("Erro ao cancelar pedido:", error);
      alert("Ocorreu um erro ao cancelar o pedido. Tente novamente.");
    }
  };

  return (
    <S.Container__Pedido_Finalizado>
      <S.Header__Pedido>
        <BsArrowLeftShort className="short" />
        <h1>Pedido Finalizado</h1>
      </S.Header__Pedido>
      <div className="borda"></div>
      <S.Pedido__Confirmardo>
        <BsCheck2 className="check" />
        <span>Pedido Confirmado!</span>
        <p>Seu pedido foi processado com sucesso.</p>
      </S.Pedido__Confirmardo>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Detalhes do Pedido</h1>
          <span>#2025</span>
        </S.Detalhes>

        <S.Pedidos>
          {pedidosFormatadosParaExibicao.length > 0 ? (
            pedidosFormatadosParaExibicao.map((item, id) => (
              <S.Item key={item.id || id}>
                <div className="tipos__pedidos">
                  <img
                    src={item.imageSrc || Images.caffee}
                    alt={item.nome || "Café"}
                  />
                  <div className="pedido">
                    <span>{item.nome}</span>
                    <p>
                      {item.ml ? `${item.ml} ml` : ""} . Quantidade:{" "}
                      {item.quantidade}
                    </p>

                    {item.tipoLeite && item.tipoLeite !== "Integral" && (
                      <p>Leite: {item.tipoLeite}</p>
                    )}
                    {item.tipoAcucar && item.tipoAcucar !== "SemAcucar" && (
                      <p>Açúcar: {item.tipoAcucar}</p>
                    )}
                    {item.observacao && <p>Observação: {item.observacao}</p>}
                  </div>
                </div>

                <span className="valor">
                  R$ {(item.valorUnitario ?? 0).toFixed(2).replace(".", ",")}
                </span>
              </S.Item>
            ))
          ) : (
            <p>Nenhum item no pedido.</p>
          )}
        </S.Pedidos>

        <S.Total__Pedido>
          <span>Total</span>

          <p>R$ {totalRealDoPedido.toFixed(2).replace(".", ",")}</p>
        </S.Total__Pedido>
      </S.Detalhe__Pedido>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Método de Pagamento</h1>
        </S.Detalhes>
        <S.Pedidos>
          <S.Item>
            <div className="tipos__pedidos">
              <img src={Images.caffee} alt="ícone de método de pagamento" />
              <div className="pedido">
                <span>{formaPagamento === "Pix" ? "Pix" : "Dinheiro"}</span>
                <p>
                  {formaPagamento === "Pix"
                    ? "Código PIX"
                    : "Pagamento no local"}
                </p>
              </div>
            </div>
            <span
              className="valor"
              style={{ color: "green", fontWeight: "bold" }}
            >
              APROVADO
            </span>
          </S.Item>
        </S.Pedidos>
      </S.Detalhe__Pedido>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Tempo de Preparo</h1>
        </S.Detalhes>
        <S.Pedidos>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="pedido">
                <span>{tempoPreparoEstimado || "Aguardando estimativa"}</span>
                <p>Você será notificado quando estiver pronto.</p>
              </div>
            </div>
          </S.Item>
        </S.Pedidos>
      </S.Detalhe__Pedido>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Status do Pedido</h1>
        </S.Detalhes>
        <S.Pedidos>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="pedido">
                <span>Pedido Confirmado</span>
                <p>
                  {statusPedido === "Criado" || statusPedido === "Sucesso"
                    ? `Status: ${statusPedido}`
                    : "Aguardando confirmação"}
                </p>
              </div>
            </div>
          </S.Item>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="pedido">
                <span>Em Preparo</span>
                <p>
                  {statusPedido === "Em preparo"
                    ? "Seu café está sendo preparado"
                    : "Aguardando iniciar preparo"}
                </p>
              </div>
            </div>
          </S.Item>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="pedido">
                <span>Pronto para Retirada</span>
                <p>
                  {statusPedido === "Pronto"
                    ? "Seu café está pronto para ser retirado!"
                    : "Aguardando preparo"}
                </p>
              </div>
            </div>
          </S.Item>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="pedido">
                <span>Entregue</span>
                <p>
                  {statusPedido === "Entregue"
                    ? "Pedido entregue!"
                    : "Aguardando retirada"}
                </p>
              </div>
            </div>
          </S.Item>
        </S.Pedidos>
      </S.Detalhe__Pedido>

      <S.Button__Pedido>
        <button className="finalizar__pedido" onClick={handleFinalizarPedido}>
          Finalizar Pedido
        </button>

        <button className="cancelar__pedido" onClick={handleCancelarPedido}>
          Cancelar Pedido
        </button>
      </S.Button__Pedido>

      <S.Preferencia>Obrigado pela preferência!</S.Preferencia>
    </S.Container__Pedido_Finalizado>
  );
};
