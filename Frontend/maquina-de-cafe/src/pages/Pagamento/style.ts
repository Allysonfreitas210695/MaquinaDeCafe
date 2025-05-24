import styled from "styled-components";
import { Images } from "../../assets/Images";

export const Container__Tipo_Pagamento = styled.div`
  background-image: url(${Images.Imagem4});
  background-color: #ffffff;
  background-position: left;
  background-size: cover;
  padding: 50px 80px;
  display: flex;
  flex-direction: column;
`;

export const Tipo__Confirmar_Pagamento = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 22rem;
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
  color: #6f4829;
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  padding: 40px 5px 20px 5px;
`;

export const Escolha__Pagamento = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
  padding: 8px 5px;
`;

export const Button = styled.a<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#3F1811" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#3F1811")};
  border-radius: 5px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  cursor: pointer;

  button {
    border: 1px solid #3f1811;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 10px 15px;
    color: inherit;
    text-decoration: none;
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    cursor: pointer;
  }
`;

export const Pagamento__Propaganda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  padding-top: 50px;

  .propaganda {
    background-image: url(${Images.Banner});
    background-position: center;
    background-size: cover;
    width: 370px;
    height: 170px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    padding: 50px 30px;
    opacity: 0.8;

    span {
      font-family: Inter;
      font-weight: 600;
      font-size: 23.77px;
      line-height: 120%;
      letter-spacing: 0px;
      color: #ffffff;
    }

    button {
      background-color: #101010;
      color: #ffffff;
      padding: 8px 10px;
      border-radius: 10px;
      font-family: Poppins;
      font-weight: 600;
      font-size: 13px;
      line-height: 120%;
      letter-spacing: 0%;
      cursor: pointer;
    }
  }
`;


