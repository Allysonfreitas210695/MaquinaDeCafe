import styled from "styled-components";

export const Container__Detalhes = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;

export const Detalhe__Header = styled.div`
  background-color: #512615;
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 150px;
  left: 0;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const Img__Detalhe = styled.img`
  margin-top: -140px;
`;

export const Detalhes = styled.div`
  max-width: 80vw;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
`;

export const Titulo1 = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 34px;
  color: #512615;
  line-height: 100%;
  letter-spacing: 0%;
  padding-top: 80px;
`;

export const Titulo2 = styled.h2`
  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: justify;
  padding-top: 10px;
`;

export const Conteudo__Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;

  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #808080;
  }

  h3 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #814e27;
  }
`;

export const Arry__Detalhe = styled.div`
  background-color: #f8f8f8;
  padding: 15px;
  border-radius: 10px;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Button__Detalhe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-top: 110px;
  gap: 30px;
  padding: 8px 20px;

  .item {
    background-color: #512615;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 10px 20px;

    img {
      width: 25px;
    }
  }
`;

export const Button__Item = styled.div`
  background-color: #512615;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 70px;
  padding: 15px 60px;

  span{
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #DAC8B3;
    text-align: justify;
  }
`;
