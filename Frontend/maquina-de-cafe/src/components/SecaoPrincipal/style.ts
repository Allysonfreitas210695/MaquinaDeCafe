import styled from "styled-components";


export const Contaner__Secao_Principal = styled.div`
  display: flex;
`;

export const Conteudo__Secao = styled.div`
  width: 710px;
  padding-top: 105px;
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
  margin-bottom: 30px;
`;

export const Button_Secao = styled.a`
  background-color: #512615;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px 30px;
 

  .button {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    text-align: justify;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Img__Secao = styled.img`
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: 0.2px;
  transform: translateX(-55%,-60%);
  max-width: 620px;
  z-index: 1;

`;

export const Img__Ellipe = styled.img`
  position: relative;
  top: 100px;
  left: 130px;
  height: 67vh;
  width: 440px;
  z-index: 0;
`;
