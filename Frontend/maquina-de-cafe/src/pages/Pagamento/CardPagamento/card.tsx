import { Images } from "../../../assets/Images";
import * as S from "./style";
import { CardPagamentoProps } from "../../../service/interface";

export const CardPagamento = ({
  pedidos,
}: Pick<CardPagamentoProps, "pedidos" | "checkoutPath">) => {
  // Cálculo de totais
  const subtotal = pedidos.reduce(
    (acc, item) => acc + item.valorTotalItem * item.quantidadeNoCarrinho,
    0
  );
  const taxa = subtotal * 0.1;
  const total = subtotal + taxa;

  return (
    <S.StyledWrapper>
      <div className="container">
        <div className="card cart">
          <div className="title">
            <img src={Images.Plus} alt="" />
            <span>Resumo do Pedido</span>
          </div>

          <div className="steps">
            <div className="step">
              <div className="tipos">
                {pedidos.map((item) => (
                  <div key={item.id} className="condeudo__tipos">
                    <div className="tipos__de_cafes">
                      <img src={Images.CafeExpresso} alt="" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.tamanhoSelecionado.descricao}</p>
                        {item.adicionaisSelecionados?.length > 0 && (
                          <span>
                            {item.adicionaisSelecionados
                              .map((adicional) => adicional.nome)
                              .join(" | ")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="valor">
                      <span>
                        R$ {item.valorTotalItem.toFixed(2).replace(".", ",")}
                      </span>
                      <p>Qtd: {item.quantidadeNoCarrinho}</p>
                    </div>
                  </div>
                ))}
              </div>

              <S.TotaisResumo>
                <div className="linha">
                  <strong>Subtotal:</strong>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="linha">
                  <strong>Taxa (10%):</strong>
                  <span>R$ {taxa.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="total">
                  <strong>Total:</strong>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
              </S.TotaisResumo>
            </div>
          </div>
        </div>
      </div>
    </S.StyledWrapper>
  );
};
