import styled from "styled-components";

export const Container__Pedido_Finalizado = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 50px;
  box-sizing: border-box;
  width: 100%; 
  overflow-x: hidden; 
  
`;

export const Pedido__Confirmardo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 50px; 
  margin-bottom: 50px;
  padding: 0 20px; 
  text-align: center;
  width: 100%; 
  box-sizing: border-box; 

  .check {
    background-color: #deffee;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #14a767;
    font-size: 70px;
    padding: 15px;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #432c1b;
    padding-top: 5px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #859eba;
    text-align: center;
  }

  @media (max-width: 480px) {
    .check {
      font-size: 60px;
      padding: 12px;
    }
    span {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
    padding: 0 15px;
  }
`;

export const Detalhe__Pedido = styled.div`
  background-color: #ffffff;
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  padding: 30px;
  box-sizing: border-box;

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: calc(100% - 30px); 
  }
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #503526;
  }
  span {
    background-color: #e3cbb0;
    border-radius: 20px;
    padding: 10px 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #503526;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 18px;
    }
    span {
      font-size: 12px;
      padding: 8px 12px;
    }
  }
`;

export const Pedidos = styled.div`
  margin-top: 15px;
  padding-right: 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  .tipos__pedidos {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    .icon-wrapper {
      background-color: #e6e6e6;
      padding: 12px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 28px;
        color: #503526;
      }

      img {
        width: 28px;
        height: 28px;
        object-fit: contain;
      }
    }

    .pedido {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;

      span {
        font-family: 'Poppins', sans-serif;
        font-size: 17px;
        font-weight: 500;
        color: #3c2415;
        line-height: 1.3;
      }

      p {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #859eba;
        line-height: 1.3;
      }
    }
  }
  .valor {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #503526;
  }

  @media (max-width: 480px) {
    .tipos__pedidos .icon-wrapper {
      padding: 10px;
      svg, img {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }
    }
    .tipos__pedidos .pedido {
      span {
        font-size: 15px;
      }
      p {
        font-size: 13px;
      }
    }
    .valor {
      font-size: 16px;
    }
  }
`;

export const Total__Pedido = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;

  span,
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #503526;
  }

  @media (max-width: 480px) {
    span, p {
      font-size: 18px;
    }
  }
`;

export const Button__Pedido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
  width: 90%;
  max-width: 700px;

  button {
    width: 100%;
    padding: 20px 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .finalizar__pedido {
    background-color: #512615;
    color: #ffffff;

    &:hover {
      background-color: #3f1811;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
    &:active {
        transform: translateY(1px);
    }
  }

  .novo__pedido {
    background-color: #ffffff;
    color: #512615;
    border: 1px solid #d6ba95;

    &:hover {
      background-color: #f3ede6;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }
    &:active {
        transform: translateY(1px);
    }
  }

  @media (max-width: 768px) {
    button {
      font-size: 18px;
      padding: 18px 25px;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 16px;
      padding: 15px 20px;
    }
  }
`;

export const Preferencia = styled.h1`
  margin-top: 40px;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #859eba;
  text-align: center; 
  width: 100%; 
`;