import styled from "styled-components";
import { media } from "../../styles/media";

export const Container__Detalhes = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;

export const Detalhe__Header = styled.div`
  width: 300px;
  height: 100vh;
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

export const Img__Detalhe = styled.img`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

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
  margin-left: 330px;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 34px;
    color: #512615;
    line-height: 100%;
    letter-spacing: 0%;
    padding-top: 95px;


     ${media.laptoplgheight} {
      padding-top: 120px;
    }

    ${media.tabletmdheight} {
      margin-top: -40px;
    }
     
  }
`;

export const Titulo1 = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 34px;
  color: #512615;
  line-height: 100%;
  letter-spacing: 0%;
  margin-top: -30px;
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
  grid-template-columns: repeat(3, 1fr);
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
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 80px;

  .arry__detalhe {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
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

  span {
    font-family: Poppins;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #dac8b3;
    text-align: justify;
  }
`;
