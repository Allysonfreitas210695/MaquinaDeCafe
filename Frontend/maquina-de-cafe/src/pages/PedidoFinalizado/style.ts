import styled from "styled-components";

export const Container__Pedido_Finalizado = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .borda {
    border-top: 1px solid #859eba;
    width: 100%;
  }
`;

export const Header__Pedido = styled.div`
  margin-right: 28rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 25rem;
  padding: 20px 0;

  .short {
    color: #3f1811;
    font-size: 30px;
  }

  h1 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
    color: #432c1b;
  }
`;

export const Pedido__Confirmardo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 100px;

  .check {
    background-color: #deffee;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #14a767;
    font-size: 80px;
    padding: 20px;
  }

  span {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0%;
    color: #432c1b;
    padding-top: 8px;
  }

  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0%;
    color: #859eba;
  }
`;

export const Detalhe__Pedido = styled.div`
  background-color: #ffffff;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 3px 12px 0 #00000012;
  margin-top: 100px;
  padding: 50px 40px;
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 500;
    line-height: 39.5%;
    letter-spacing: 0%;
    color: #503526;
  }
  span {
    background-color: #e3cbb0;
    border-radius: 32.05px;
    padding: 15px 16px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24.3%;
    letter-spacing: 0%;
    color: #503526;
  }
`;

export const Pedidos = styled.div`
  margin-top: 30px;
  height: 120px;
  overflow-y: scroll;
  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #432c1b;
    border-radius: 8px;
    border: 2px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #432c1b;
  }

  scrollbar-width: thin;
  scrollbar-color: #c99963 #ffffff;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  .tipos__pedidos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      background-color: #c99963;
      padding: 5px;
      border-radius: 10px;
      width: 70px;
    }

    .pedido {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;

      span {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #3c2415;
      }

      p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #859eba;
      }
    }
  }
  .valor {
    font-family: Poppins;
    font-size: 23px;
    font-weight: 600;
    line-height: 39.5%;
    letter-spacing: 0%;
    color: #503526;
  }
`;

export const Total__Pedido = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  border-top: 1px solid #859eba;
  padding-top: 20px;

  span,
  p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 39.5%;
    letter-spacing: 0%;
    color: #503526;
  }
`;

export const Medoto_Pagamento = styled.div`
  background-color: #ffffff;
  width: 700px;
  border-radius: 30px;
  box-shadow: 0 3px 12px 0 #00000012;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px;
  margin: 50px 0;

  .aprovado {
    background-color: rgba(20, 167, 103, 0.3);
    border-radius: 10px;
    padding: 15px 20px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 39.5%;
    letter-spacing: 0%;
    color: #14a767;
  }

  .pagamento {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;

    h1 {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      line-height: 39.5%;
      letter-spacing: 0%;
      color: #503526;
    }
  }

  .cartao__de_credito {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      background-color: #dbeafe;
      padding: 15px;
      border-radius: 10px;
    }

    .cartao {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 25px;

      span {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #503526;
      }

      p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #859eba;
      }
    }
  }
`;

export const Tempo__Preparo = styled.div`
  background: linear-gradient(to right, #ffd094, #d06b23);
  width: 700px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px;
  margin: 50px 0;

  .preparo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    h1 {
      font-family: Poppins;
      font-size: 30px;
      font-weight: 600;
      line-height: 47.5%;
      letter-spacing: 0%;
      color: #503526;
      margin-bottom: 40px;
    }

    span {
      font-family: Poppins;
      font-size: 30px;
      font-weight: 600;
      line-height: 47.5%;
      letter-spacing: 0%;
      color: #503526;
    }

    p {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 47.5%;
      letter-spacing: 0%;
      color: #8b4513;
      margin-top: 20px;
    }
  }
  .pagragafo {
    margin: 30px 0;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 47.5%;
    letter-spacing: 0%;
    color: #ffffff;
  }
`;

export const Status__do__Pedido = styled.div`
  background-color: #ffffff;
  width: 700px;
  border-radius: 30px;
  box-shadow: 0 3px 12px 0 #00000012;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 50px 40px;
  margin: 50px 0;
  gap: 50px;

  h1 {
    font-family: Poppins;
    font-size: 29px;
    font-weight: 600;
    line-height: 47.5%;
    letter-spacing: 0%;
    color: #503526;
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      background-color: #22c55e;
      padding: 15px;
      border-radius: 100%;
    }
    .confirmado {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 20px;

      span {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #3c2415;
      }

      p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #859eba;
      }
    }
  }

  .preparo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      background-color: #4c6fff;
      padding: 15px;
      border-radius: 100%;
    }

    .em_preparo {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 20px;

      span {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #3c2415;
      }

      p {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #859eba;
      }
    }
  }

  .retirada {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      background-color: #4c6fff;
      padding: 25px;
      border-radius: 100%;
    }

    .pronto_retirada {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 20px;

      span {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #3c2415;
      }

      p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 39.5%;
        letter-spacing: 0%;
        color: #859eba;
      }
    }
  }
`;

export const Button__Pedido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;

  .finalizar__pedido {
    background-color: #512615;
    width: 700px;
    padding: 40px 30px;
    text-align: center;
    font-family: Inter;
    font-size: 39.45px;
    font-weight: 600;
    line-height: 39.5%;
    letter-spacing: 0%;
    color: #ffffff;
    text-decoration: none;
    border-radius: 20px;
    box-shadow: 0 3px 12px 0 #00000012;
  }

  .cancelar__pedido {
    background-color: transparent;
    width: 700px;
    padding: 40px 30px;
    text-align: center;
    font-family: Inter;
    font-size: 39.45px;
    font-weight: 600;
    line-height: 39.5%;
    letter-spacing: 0%;
    color: #512615;
    text-decoration: none;
    border-radius: 20px;
    border: 1px solid #d6ba95;
    box-shadow: 0 3px 12px 0 #00000012;
  }
`;

export const Preferencia = styled.h1`
  margin: 50px 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 39.5%;
  letter-spacing: 0%;
  color: #859eba;
`;
