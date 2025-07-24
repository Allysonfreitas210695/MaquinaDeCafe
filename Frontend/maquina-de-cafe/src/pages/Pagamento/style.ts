import styled from "styled-components";

export const Container__Tipo_Pagamento = styled.div`
  background-color: #ffffff;
  padding: 50px 80px 8px 102px;
  display: flex;
  flex-direction: column;
`;

export const Pagamento__Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .button {
    font-family: Sora;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
    background-color: #3f1811;
    text-decoration: none;
    border-radius: 74px;
    padding: 15px 30px;
    margin-right: 30px;
  }
`;

export const Titulo__pagamento_Header = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 45px;
  line-height: 130%;
  letter-spacing: 0%;
  color: #512615;
  padding-left: 10px;
`;

export const Tipo__Confirmar_Pagamento = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  gap: 8rem;
  margin-top: -20px;
`;

export const Titulo__Detalhe = styled.h1`
  border-bottom: 1px solid #808080;
  color: #3f1811;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 8px 5px;
`;

export const Conteudo__Pagamento = styled.div``;

export const Tipo__Pagamento = styled.div``;

export const Titulo__Pagamento = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;

  h2 {
    color: #432c1b;
    font-family: Poppins;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const Button = styled.a`
  background-color: #f3ebdd;
  width: 200px;
  height: 120px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;

    span {
      color: #432c1b;
      text-decoration: none;
      font-family: Poppins;
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      cursor: pointer;
    }

    p {
      font-family: Poppins;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #aaaaaa;
    }
  }
`;

export const Button__Forma_Pagamento = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 0 20px;
`;

export const Escolha__Pagamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  border: 1px solid #f3ebdd;
  border-radius: 13px;
  padding: 30px;
  margin-top: 70px;

  span {
    font-family: Inter;
    font-weight: 600;
    font-size: 23.77px;
    line-height: 120%;
    letter-spacing: 0px;
    color: #ffffff;
  }
`;

export const Button__Texto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 35px;
  gap: 8px;

  span {
    font-family: Poppins;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #aaaaaa;
  }

  p, h2 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #c99963;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  
`;
