import styled from "styled-components";
import { Link } from "react-router-dom";

export const Contaner__Secao_Principal = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Conteudo__Secao = styled.div`
  width: 710px;
  padding-top: 105px;
  margin: 120px 150px;

  span {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: 0;
    color: #282828b0;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding-top: 50px;
    margin: 40px auto;
    text-align: center;

    span {
      font-size: 14px;
    }
  }
`;

export const Titulo = styled.h1`
  width: 800px;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0;
  color: #512615;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 28px;
  }
`;

export const Descricao = styled.p`
  width: 610px;
  margin-bottom: 40px;
  padding-top: 5px;
  text-align: justify;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  color: #282522b5;

  strong {
    color: #000000;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    padding-top: 10px;
  }
`;

export const Button_Secao = styled(Link)`
  width: 300px;
  padding: 15px 30px;
  border-radius: 25px;
  background-color: #512615;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  text-decoration: none;
  cursor: pointer;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  text-align: justify;
  line-height: 100%;
  letter-spacing: 0;

  span {
    color: #f8f8f8;
  }

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #6a3420;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 14px;
    padding: 12px 20px;
    justify-content: center;
  }
`;

export const Img__Secao = styled.img`
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1;

  @media (max-width: 1024px) {  /* tablets e menores */
    display: none;
  }
`;