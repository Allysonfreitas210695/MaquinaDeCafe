import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { useState } from "react";
import { CriarPedidoRequest } from "../../service/interface";
import { criarPedido } from "../../service/pedido_api";
import axios from "axios";
import { BsArrowLeftShort } from "react-icons/bs";
export const TipoPagamento = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [formaSelecionada, setFormaSelecionada] = useState<
    "Pix" | "Dinheiro" | null
  >(null);

  const [loading, setLoading] = useState(false);

  const handleCancelar = () => {
    clearCart();
    navigate("/pedido");
  };

  const handleVoltar = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/carrinho");
    }
  };

  const extrairGuidPuro = (id: string) => {
    const guidRegex =
      /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
    const match = guidRegex.exec(id); // Using RegExp.exec()
    return match ? match[0] : id;
  };

  const handleConfirmarPagamento = async () => {
    if (!formaSelecionada) {
      alert("Por favor, selecione uma forma de pagamento.");
      return;
    }

    setLoading(true);
    try {
      const pedidosItens = cart.map((item) => ({
        cafeId: extrairGuidPuro(item.id) ?? "",
        quantidade: item.quantidadeNoCarrinho,
        tamanhoXicaraId: item.tamanhoSelecionado?.id || "",
        ingredientesAdicionaisIds: item.adicionaisSelecionados
          .map((adicional) => extrairGuidPuro(adicional.id))
          .filter((id): id is string => id !== null),
        tipoLeite: item.tipoLeite || "Integral",
        tipoAcucar: item.tipoAcucar || "SemAcucar",
        observacao: item.observacao || "",
      }));

      const pedido: CriarPedidoRequest = {
        formaPagamento: formaSelecionada,
        pedidosItens,
        valorTotal: getCartTotal(),
      };

      const response = await criarPedido(pedido);

      console.log("Resposta da criação do pedido:", response);

      const pedidoId = response?.id || response?.pedidoId;

      if (formaSelecionada === "Pix") {
        const hashPix = response?.hashPix;
        if (hashPix) {
          navigate("/pagamentopix", {
            state: {
              hashPix,
              pedidoId,
              formaPagamento: formaSelecionada,
              valorTotal: getCartTotal(),
              pedidosItens: cart.map((item) => ({
                id: item.id,
                nome: item.title,
                quantidade: item.quantidadeNoCarrinho,
                valorUnitario: item.valorTotalItem,
                ml: item.tamanhoSelecionado?.ml,
                tipoLeite: item.tipoLeite || "Integral",
                tipoAcucar: item.tipoAcucar || "SemAcucar",
                observacao: item.observacao || "",
                imageSrc: item.imageSrc || Images.caffee,
              })),
              statusPedido: response?.status || "Criado",
              tempoPreparoEstimado: "8 - 12 minutos",
            },
          });
        } else {
          alert("Erro: Hash PIX não retornado.");
          navigate("/cancelado");
        }
      } else if (formaSelecionada === "Dinheiro") {
        setTimeout(() => {
          if (
            response?.status === "Sucesso" ||
            response?.status === "Criado" ||
            response?.id
          ) {
            navigate("/pedidofinalizado", {
              state: {
                pedidoId: pedidoId,
                formaPagamento: formaSelecionada,
                valorTotal: getCartTotal(),
                pedidosItens: cart.map((item) => ({
                  id: item.id,
                  nome: item.title,
                  quantidade: item.quantidadeNoCarrinho,
                  valorUnitario: item.valorTotalItem,
                  ml: item.tamanhoSelecionado?.ml,
                  tipoLeite: item.tipoLeite || "Integral",
                  tipoAcucar: item.tipoAcucar || "SemAcucar",
                  observacao: item.observacao || "",
                  imageSrc: item.imageSrc || Images.caffee,
                })),
                statusPedido: response?.status || "Criado",
                tempoPreparoEstimado: "8 - 12 minutos",
                fullResponse: response,
              },
            });
          } else {
            navigate("/cancelado");
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      let errorMessage = "Ocorreu um erro inesperado.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.errorMessage || error.message;
      }
      alert(`Erro: ${errorMessage}`);
      navigate("/cancelado");
    } finally {
      setLoading(false);
    }
  };

  const dataHoraAtual = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const total = getCartTotal();

  return (
    <S.Container__Tipo_Pagamento>
      <S.AcoesTopo>
        <BsArrowLeftShort onClick={handleVoltar} className="short" />
        <span>Pronto para um Devine Café?</span>
        <button onClick={handleCancelar} className="cancelar-btn">
          Cancelar
        </button>
      </S.AcoesTopo>

      <S.Tipo__Confirmar_Pagamento>
        <S.Conteudo__Pagamento>
          <S.Tipo__Pagamento>
            <S.Escolha__Pagamento>
              <S.Titulo__Pagamento>
                <img src={Images.Ticket} alt="Imagem de Ticket" />
                <h2>Escolha a Forma de Pagamento</h2>
              </S.Titulo__Pagamento>

              <S.Button__Forma_Pagamento>
                <S.Button>
                  <button
                    className={
                      formaSelecionada === "Pix" ? "selected" : ""
                    }
                    onClick={() => setFormaSelecionada("Pix")}
                  >
                    <img src={Images.Veto1} alt="Pix" />
                    <span>Pix</span>
                    <p>Pagamento instantâneo</p>
                  </button>
                </S.Button>

                <S.Button>
                  <button
                    className={
                      formaSelecionada === "Dinheiro" ? "selected" : ""
                    }
                    onClick={() => setFormaSelecionada("Dinheiro")}
                  >
                    <img src={Images.Wallet} alt="Dinheiro" />
                    <span>Dinheiro</span>
                    <p>Pagamento na entrega</p>
                  </button>
                </S.Button>
              </S.Button__Forma_Pagamento>

              <S.Button__Texto>
                <span>
                  Após selecionar, siga as instruções no visor ao lado do totem.
                </span>
                <p>
                  <img src={Images.ShieldCheck} alt="Shield Check" />
                  <h2>Pagamento 100% seguro</h2>
                </p>
              </S.Button__Texto>
            </S.Escolha__Pagamento>
          </S.Tipo__Pagamento>
        </S.Conteudo__Pagamento>

        <S.ResumoSimplificado>
          <div className="title">
            <img src={Images.Plus} alt="imagem de mais" />
            <span>Resumo da Compra</span>
          </div>
          <p>
            <strong>Loja:</strong> Devine Café
          </p>
          <p>
            <strong>Data e Hora:</strong> {dataHoraAtual}
          </p>

          <S.TotalPagamento>
            <strong>Total a pagar:</strong>
            <span>R$ {total.toFixed(2).replace(".", ",")}</span>
          </S.TotalPagamento>

          <button
            className="confirmar"
            onClick={handleConfirmarPagamento}
            disabled={!formaSelecionada || loading}
          >
            Confirmar Pagamento
          </button>
        </S.ResumoSimplificado>
      </S.Tipo__Confirmar_Pagamento>
    </S.Container__Tipo_Pagamento>
  );
};