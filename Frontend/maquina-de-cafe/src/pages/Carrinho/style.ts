import styled from "styled-components";

export const Container__Carrinho = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;

  .carrinho {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

export const Pedido__Escolha_Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0;

  .carrinho {
    width: 100%;
    max-width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    .container {
      width: 100% !important;
      max-width: 100% !important;
      padding: 0 !important;
      margin: 0 auto !important;
    }

    .card.cart {
      width: 100%;
      box-sizing: border-box;

      .steps {
        padding: 20px 30px;
        height: auto;
        max-height: none !important;
        overflow-y: visible !important;
      }

      .steps .step .tipos {
        display: flex;
        flex-direction: column;
        max-height: none !important;
        overflow-y: visible !important;
        padding-right: 10px !important;

        /* Esconder scrollbars se existirem */
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }

      .steps .step .tipos::-webkit-scrollbar {
        display: none !important;
      }
    }
  }

  @media (max-width: 768px) {
    .carrinho {
      padding: 0 10px;

      .card.cart {
        padding: 15px;
      }
    }
  }
`;

export const Container__Card_Carrinho = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
`;

export const BotoesTopo = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 30px;

  button {
    background: transparent;
    color: #512615;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #7a4e3a;
      background-color: rgba(81, 38, 21, 0.1);
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 15px 20px;

    button {
      font-size: 13px;
      padding: 8px 12px;
    }
  }
`;

export const BotoesRodape = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 30px;
  margin-top: auto;

  button {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    padding: 10px 24px;
    border-radius: 6px;
    transition: background-color 0.3s ease, color 0.3s ease;
    border: none;
    min-width: 140px;
  }

  .continuar {
    background: transparent;
    color: #512615;
    border: 2px solid #512615;

    &:hover {
      background-color: #512615;
      color: white;
    }
  }

  .confirmar {
    background-color: #512615;
    color: white;

    &:hover {
      background-color: #7a4e3a;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    button {
      width: 100%;
      min-width: unset;
      font-size: 13px;
      padding: 12px 0;
      border-radius: 32px;
    }
  }
`;

export const Ingredientes = styled.span`
  white-space: normal;
  display: block;
  font-size: 14px;
  color: #333;
`;
