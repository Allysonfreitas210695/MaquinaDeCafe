import styled from "styled-components";

export const Container__Tipo_Pagamento = styled.div`
  padding: 20px;
  height: 100vh;
  background-color: #ffffff;
`;

export const Pagamento__Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Titulo__pagamento_Header = styled.h1`
  font-family: Poppins, sans-serif;
  font-weight: 800;
  font-size: 36px;
  color: #512615;
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

    &:hover {
      color: #7a4e3a;
      background-color: rgba(81, 38, 21, 0.1);
    }
  }
`;

export const Tipo__Confirmar_Pagamento = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Conteudo__Pagamento = styled.div`
  flex: 2;
`;

export const Tipo__Pagamento = styled.div``;

export const Escolha__Pagamento = styled.div``;

export const Titulo__Pagamento = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 28px;
    color: #512615;
  }
`;

export const Button__Forma_Pagamento = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

export const Button = styled.div`
  button {
    background-color: #dcdcdc;
    border: none;
    color: #999;
    padding: 12px 25px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;

    img {
      width: 20px;
    }

    span, p {
      color: #aaa;
      font-family: Poppins, sans-serif;
    }

    &.selecionado {
      background-color: #512615;
      color: #fff;

      span, p {
        color: #fff;
      }
    }

    &.desabilitado {
      background-color: #dcdcdc;
      color: #999;
      cursor: pointer;
      opacity: 1;

      span, p {
        color: #aaa;
      }
    }

    &:hover {
      filter: brightness(0.95);
    }
  }
`;

export const Button__Texto = styled.div`
  margin-top: 25px;

  span {
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;

    img {
      width: 22px;
    }

    h2 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 18px;
      color: #512615;
      margin: 0;
    }
  }
`;

export const ResumoSimplificado = styled.div`
  flex: 1;
  padding: 30px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(81, 38, 21, 0.3);
  min-width: 320px;
  max-width: 400px;
  position: relative;

  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;

    img {
      width: 40px;
      height: 40px;
    }

    span {
      font-family: Poppins, sans-serif;
      font-weight: 700;
      font-size: 26px;
      color: #512615;
    }
  }

  p {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    color: #4a2f1b;
    margin: 8px 0;
  }

  .confirmar {
    margin-top: 35px;
    width: 100%;
    background-color: #512615;
    color: #fff;
    border: none;
    padding: 15px 0;
    border-radius: 50px;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(81, 38, 21, 0.4);

    &:hover {
      background-color: #3f1f0e;
    }

    &:disabled {
      background-color: #cfcfcf;
      color: #888;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
`;

export const TotalPagamento = styled.div`
  margin-top: 25px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #512615;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;