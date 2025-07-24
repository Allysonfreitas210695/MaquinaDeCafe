import { Link } from "react-router-dom";
import { Images } from "../../../assets/Images";
import * as S from "./style";
import { IoCartSharp } from "react-icons/io5";
import { CardPagamentoProps } from "../../../service/interface";

export const CardPagamento = ({
  pedidos,
  subtotal,
  taxaServico,
  total,
  checkoutPath,
}: CardPagamentoProps) => {
  const finalCheckoutPath = checkoutPath ?? "/pedidofinalizado";

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
                        {item.adicionaisSelecionados &&
                          item.adicionaisSelecionados.length > 0 && (
                            <span style={{ whiteSpace: "pre-line" }}>
                              {item.adicionaisSelecionados
                                .map((adicional) => adicional.nome)
                                .join("\n")}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="valor">
                      <span>
                        {item.valorTotalItem.toFixed(2).replace(".", ",")}
                      </span>
                      <p>Qtd: {item.quantidadeNoCarrinho}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="payments">
                <div className="details">
                  <span>Subtotal:</span>
                  <h3>R$ {subtotal.toFixed(2).replace(".", ",")}</h3>
                  <span>Taxa de serviço:</span>
                  <h3>R$ {taxaServico.toFixed(2).replace(".", ",")}</h3>
                </div>
                <div className="footer">
                  <div className="price">
                    <span>Total</span>
                    <p>R$ {total.toFixed(2).replace(".", ",")}</p>
                  </div>
                  <Link className="checkout-btn" to={finalCheckoutPath}>
                    <IoCartSharp /> Confirmar Pagamento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </S.StyledWrapper>
  );
};
