import styled from "styled-components";

export const Container__Carrinho = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

export const AcoesTopo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .short {
    color: #3f1811;
    font-size: 30px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #7a4e3a;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

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
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #7a4e3a;
      background-color: rgba(81, 38, 21, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 13px;
      padding: 8px 12px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      padding: 6px 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
  @media (max-width: 480px) {
    padding: 8px 10px;
  }
`;

export const Pedido__Escolha_Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0;
  padding-top: 80px;
  flex-grow: 1;

  .carrinho {
    width: 100%;
    /* REMOVIDO: max-width: 600px; */
    padding: 0 15px;
    /* REMOVIDO: margin: 0 auto; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .carrinho > .container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }

  .carrinho .card.cart {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
  }

  .carrinho .card.cart .steps {
    padding: 0;
    height: auto;
    max-height: none !important;
    overflow-y: visible !important;
  }

  .carrinho .card.cart .steps .step .tipos {
    display: flex;
    flex-direction: column;
    max-height: none !important;
    overflow-y: visible !important;
    padding-right: 0 !important;

    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }

  .carrinho .card.cart .steps .step .tipos::-webkit-scrollbar {
    display: none !important;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
    .carrinho {
      padding: 0 10px;
    }
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    .carrinho {
      padding: 0 5px;
    }
  }
`;

export const Container__Card_Carrinho = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export const BotoesRodape = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px 30px;
  margin-top: auto;
  width: 100%;
  box-sizing: border-box;

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
    padding: 15px 20px;

    button {
      width: 100%;
      min-width: unset;
      font-size: 13px;
      padding: 12px 0;
      border-radius: 32px;
    }
  }
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const Ingredientes = styled.span`
  white-space: normal;
  display: block;
  font-size: 14px;
  color: #333;
`;