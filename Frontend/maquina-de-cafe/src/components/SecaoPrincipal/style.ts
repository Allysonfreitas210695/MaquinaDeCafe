import styled from "styled-components";
import { Link } from "react-router-dom";

export const Contaner__Secao_Principal = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
    letter-spacing: 0%;
    color: #282828b0;
  }
`;

export const Titulo = styled.h1`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 0%;
  width: 800px;
  color: #512615;
`;

export const Descricao = styled.p`
  width: 610px;
  text-align: justify;
  padding-top: 5px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #282522B5;
  margin-bottom: 40px;

  strong{
    color: #000000;
  }
`;

export const Button_Secao = styled(Link)`
  background-color: #512615;
  border-radius: 25px;
  padding: 15px 30px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  color: #f8f8f8;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  text-align: justify;
  line-height: 100%;
  letter-spacing: 0%;
  cursor: pointer;

  span{
    color: #f8f8f8; 
  }

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #6a3420;
  }
`;

export const Img__Secao = styled.img`
  position: fixed;
  right: 0;
  left: 0;
  height: 100%;
  z-index: 1;
`;
