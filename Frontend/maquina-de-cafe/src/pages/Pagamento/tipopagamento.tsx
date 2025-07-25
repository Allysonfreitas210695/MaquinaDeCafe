import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { useState } from "react";

export const TipoPagamento = () => {
  const navigate = useNavigate();
  const { getCartTotal, clearCart } = useCart();
  const [formaSelecionada, setFormaSelecionada] = useState<
    "pix" | "dinheiro" | null
  >(null);

  const handleCancelar = () => {
    clearCart();
    navigate("/pedido");
  };

  const handleConfirmar = () => {
    if (formaSelecionada) {
      navigate("/pedidofinalizado");
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
      <S.Pagamento__Header>
        <S.Titulo__pagamento_Header>
          Pronto para um Devine Café?
        </S.Titulo__pagamento_Header>
        <S.BotoesTopo>
          <button onClick={handleCancelar}>Cancelar</button>
        </S.BotoesTopo>
      </S.Pagamento__Header>

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
                      formaSelecionada === "pix"
                        ? "selecionado"
                        : "desabilitado"
                    }
                    onClick={() => setFormaSelecionada("pix")}
                  >
                    <img src={Images.Veto1} alt="Pix" />
                    <span>Pix</span>
                    <p>Pagamento instantâneo</p>
                  </button>
                </S.Button>

                <S.Button>
                  <button
                    className={
                      formaSelecionada === "dinheiro"
                        ? "selecionado"
                        : "desabilitado"
                    }
                    onClick={() => setFormaSelecionada("dinheiro")}
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
            onClick={handleConfirmar}
            disabled={!formaSelecionada}
          >
            Confirmar Pagamento
          </button>
        </S.ResumoSimplificado>
      </S.Tipo__Confirmar_Pagamento>
    </S.Container__Tipo_Pagamento>
  );
};
