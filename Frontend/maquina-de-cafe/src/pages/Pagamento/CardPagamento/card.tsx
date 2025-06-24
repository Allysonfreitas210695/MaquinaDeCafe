import { Link } from "react-router-dom";
import { Images } from "../../../assets/Images";
import * as S from "./style";
import { IoCartSharp } from "react-icons/io5";

const pedidos = [
  {
    id: 1,
    nome: "Café Expresso",
    ml: "100ml",
    com: "Leite x2",
    valor: "R$ 13,00",
    quant: "2",
  },
  {
    id: 2,
    nome: "Café Expresso",
    ml: "100ml",
    com: "Leite x2",
    valor: "R$ 13,00",
    quant: "2",
  },
  {
    id: 3,
    nome: "Café Expresso",
    ml: "100ml",
    com: "Leite x2",
    valor: "R$ 13,00",
    quant: "2",
  },
  {
    id: 4,
    nome: "Café Expresso",
    ml: "100ml",
    com: "Leite x2",
    valor: "R$ 13,00",
    quant: "2",
  },
];

export const CardPagamento = () => {
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
                        <h3>{item.nome}</h3>
                        <p>{item.ml}</p>
                        <span>{item.com}</span>
                      </div>
                    </div>
                    <div className="valor">
                      <span>{item.valor}</span>
                      <p>Qtd: {item.quant}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="payments">
                <div className="details">
                  <span>Subtotal:</span>
                  <h3>R$ 12,00</h3>
                  <span>Taxa de serviço:</span>
                  <h3>R$ 12,00</h3>
                </div>
                <div className="footer">
                  <div className="price">
                    <span>Total</span>
                    <p>R$ 24,00</p>
                  </div>
                  <Link className="checkout-btn" to={"/pedidofinalizado"}>
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
