import { useState } from "react";
import * as S from "./style";

export const CardPagamento = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 1));

  return (
    <S.StyledWrapper>
      <div className="container">
        <div className="card cart">
          <label className="title">
            <span>Total</span>
            <p>2 Itens</p>
          </label>
          <div className="steps">
            <div className="step">
              <div>
                <span>Café Expresso Duplo</span>
              </div>
              <div className="tipos">
                <div className="condeudo__tipos">
                  <div>
                    <span>Capuccino</span>
                    <p>R$ 6.00</p>
                  </div>
                  <div className="tipos__button">
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                  </div>
                </div>
              </div>
              <div className="tipos">
                <span>
                  Com <strong>Canela</strong>
                </span>
                <p>R$ 6.00</p>
              </div>
              <div className="tipos">
                <div className="condeudo__tipos">
                  <div>
                    <span>Duplo Creme de Leite</span>
                    <p>R$ 6.00</p>
                  </div>
                  <div className="tipos__button">
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                  </div>
                </div>
              </div>
              <div className="payments">
                <h1>Detalhes</h1>
                <div className="details">
                  <span>Café Expresso:</span>
                  <span>R$240.00</span>
                  <span>Café com Leite e Canela:</span>
                  <span>R$10.00</span>
                  <span>Biscoito:</span>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card checkout">
          <div className="footer">
            <label className="price">
              <span>Total</span>
              <p>R$ 8.00</p>
            </label>
            <button className="checkout-btn">Confirmar e Pagar</button>
          </div>
        </div>
      </div>
    </S.StyledWrapper>
  );
};
