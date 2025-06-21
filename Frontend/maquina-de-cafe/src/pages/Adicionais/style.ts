import styled from "styled-components";
import { media } from "../../styles/media";

export const Container__Detalhes = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
  padding: 50px 0;

  .detalhe__card_cafe {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    margin-left: 1.5rem;
    padding-top: 80px;

    .card__cafe {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .header__container {
    background-color: transparent;
    width: 1270px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 8px 20px;

    h1 {
      font-family: Poppins;
      font-weight: 800;
      font-size: 42px;
      line-height: 130%;
      letter-spacing: 0%;
      text-decoration: none;
      color: #512615;
    }

    .button__cancelar {
      background-color: #552a18;
      padding: 15px 30px;
      color: #ffffff;
      text-decoration: none;
      border-radius: 50px;
      font-family: Sora;
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 0%;
      text-decoration: none;
      
    }
  }
`;

export const Detalhe__Header = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .detalhe {
    position: absolute;
    top: 32rem;
    left: 60px;
    bottom: start;
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: none;
    text-transform: uppercase;

    ${media.laptoplgheight} {
      padding-top: 70px;
    }

    ${media.tabletmdheight} {
      position: absolute;
      top: 420px;
      left: 70px;
    }
  }
`;

export const Detalhe__Titulo0 = styled.h1`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-weight: 800;
  font-size: 32px;
  color: #ffffff;
  line-height: 100%;
  letter-spacing: 0%;
  position: absolute;
  top: 63px;

  ${media.laptoplgheight} {
    padding-top: 10px;
  }

  ${media.tabletmdheight} {
    position: absolute;
    top: 55px;
  }
`;

export const Button = styled.div``;

export const Detalhe__Titulo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  color: #512615;
  line-height: 100%;
  letter-spacing: 0%;
  position: absolute;
  top: 185px;
  left: 60px;
  text-transform: uppercase;

  ${media.laptoplgheight} {
    padding-top: 30px;
  }

  ${media.tabletmdheight} {
    position: absolute;
    top: 155px;
    left: 70px;
  }
`;

export const Detalhes = styled.div`
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  background-color: #fcf7f0;
  border-radius: 16px;

  h1 {
    font-family: Sora;
    font-weight: 700;
    font-size: 34px;
    color: #2d0d0b;
    line-height: 100%;
    letter-spacing: 0%;

    ${media.laptoplgheight} {
    }

    ${media.tabletmdheight} {
    }
  }

  .adicionais {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 50px 0 0 80px;
  }
`;

export const Titulo1 = styled.h1`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 24px;
  color: #3f1811;
  line-height: 100%;
  letter-spacing: 0%;
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 30px 0px 8px 8px;
`;

export const Titulo2 = styled.h2`
  font-family: Poppins;
  font-weight: 400;
  font-size: 25px;
  color: #000000;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: justify;
  padding-top: 20px;
`;

export const Conteudo__Detalhes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 30px 50px;

  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #808080;
  }

  h3 {
    font-family: Poppins;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #3f1811;
  }

  .valor {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 2px 8px;
    width: 60px;
    border-radius: 10px;
    border: 1px solid #b6895b;
    margin-bottom: -12px;
    position: relative;
    top: 0;
    left: 14rem;
    z-index: 1;

    span {
      font-family: Sora;
      font-weight: 600;
      font-size: 10.68px;
      line-height: 150%;
      letter-spacing: 0%;
      color: #b6895b;
    }
  }

  .detalhe {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Arry__Detalhe = styled.div`
  background-color: #f3ebdd;
  border-radius: 10px;
  padding: 8px 20px;
  width: 300px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }

  .arry__detalhe {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 10px;
    padding-right: 70px;
  }
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
    border-radius: 10px;
    padding: 8px 80px;
    color: #ffffff;
  }
`;
