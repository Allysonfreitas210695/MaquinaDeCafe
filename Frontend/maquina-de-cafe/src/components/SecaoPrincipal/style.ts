import styled from "styled-components";

export const Contaner__Secao_Principal = styled.div`
  display: flex;
`;

export const Conteudo__Secao = styled.div`
  width: 710px;
  padding-top: 125px;
  padding-left: 50px;
`;

export const Titulo = styled.h1`
  font-family: Tenor Sans;
  font-size: 50px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  width: 610px;

  span {
    color: #512615;
  }
`;

export const Descricao = styled.p`
  width: 610px;
  text-align: justify;
  padding-top: 20px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 17px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;
`;

export const Button_Secao = styled.a`
  background-color: #512615;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px 30px;
 

  button {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    text-align: justify;
    line-height: 100%;
    letter-spacing: 0%;
    margin-top: 30px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const Img__Secao = styled.img`
  position: absolute;
  bottom: 0;
  left: 75%;
  transform: translateX(-50%);
  max-width: 600px;
  z-index: 1;
`;

export const Img__Ellipe = styled.img`
  position: relative;
  top: 100px;
  left: 50px;
  height: 67vh;
  width: 40%;
  z-index: 0;
`;
