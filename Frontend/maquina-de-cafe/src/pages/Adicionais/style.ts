// src/pages/Adicionais/style.ts
import styled from "styled-components";
import { media } from "../../styles/media";

export const Container__Detalhes = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Poppins;
  padding-top: 90px;
  padding-bottom: 30px;
  position: relative;
  overflow-x: hidden;

  .detalhe__card_cafe {
    display: flex;
    flex-direction: row; 
    gap: 2rem; 
    margin: 0 auto;
    padding: 20px 1.5rem;
    font-family: Poppins;
    flex-grow: 1;
    max-width: 1200px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap; 
  }

  .card__cafe {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: Poppins;
    flex-shrink: 1; 
    flex-basis: auto; 
    min-width: 320px; 
    max-width: 450px; 
  }

  @media (max-width: 1024px) {
    padding-top: 80px;
    .detalhe__card_cafe {
      gap: 1.5rem; 
      padding: 15px 1rem;
      flex-wrap: wrap; 
      justify-content: center; 
    }
    .card__cafe {
      min-width: 280px; 
      max-width: 400px;
      flex-basis: auto; 
    }
  }

  @media (max-width: 768px) {
    padding-top: 70px;
    .detalhe__card_cafe {
      flex-direction: column; 
      gap: 2.5rem;
      margin-left: 0;
      align-items: center;
      padding: 15px 1rem;
      flex-wrap: nowrap; 
    }
    .card__cafe {
      min-width: unset; 
      width: 100%; 
      max-width: 380px; 
    }
  }
  @media (max-width: 480px) {
    padding-top: 60px;
    .detalhe__card_cafe {
      gap: 1.5rem;
      padding: 10px 0.5rem;
    }
  }
`;

export const AcoesTopo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #eee;

  .short {
    color: #3f1811;
    font-size: 32px;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: #7a4e3a;
      transform: translateX(-3px);
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  span {
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    color: #512615;
    flex-grow: 1;
    text-align: center;
    margin-right: 50px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-right: 40px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
      margin-right: 30px;
    }
  }

  button {
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    color: #8a3f3f;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: #c94c4c;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
  @media (max-width: 480px) {
    padding: 10px 15px;
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

export const Detalhe__Content = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  flex-grow: 1; 
  min-width: 0; 

  span {
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px; 
    color: #3f1811;
    line-height: 120%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    max-width: 100%; 

    @media (max-width: 768px) {
      font-size: 22px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 16px;
    color: #808080;
    margin-top: 5px; 
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    span {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const Detalhes = styled.div`
  flex-grow: 1; 
  flex-basis: 50%; 
  min-width: 360px; 
  max-width: 650px; /* ✅ AJUSTADO: Aumentado para dar mais respiro às colunas de adicionais */
  width: 100%; 
  display: flex;
  flex-direction: column;
  background-color: #fcf7f0;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding-bottom: 30px;
  box-sizing: border-box; 

  h1 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 30px;
    color: #2d0d0b;
    line-height: 120%;
    letter-spacing: 0%;
    word-break: break-word; 

    @media (max-width: 768px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  .adicionais {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 40px 0 0 50px;

    img {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 768px) {
      padding: 30px 0 0 30px;
    }
    @media (max-width: 480px) {
      padding: 20px 0 0 20px;
      gap: 8px;
    }
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
  gap: 15px; 
  padding: 20px 20px; 
  overflow: hidden; 
  box-sizing: border-box; 

  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    color: #808080;
  }

  h3 {
    font-family: Poppins;
    font-weight: 600;
    font-size: 14px; 
    line-height: 100%;
    color: #3f1811;
  }

  .detalhe {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .valor {
    position: absolute;
    top: -8px; 
    right: -8px; 
    background-color: #5c3d2e;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 8px;
    font-family: Poppins;
    font-weight: 700;
    font-size: 12px;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    height: 25px;

    span {
      color: #ffffff;
      font-size: 12px;
      line-height: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    padding: 15px 20px; 
  }
  @media (max-width: 480px) {
    padding: 10px 15px; 
    .valor {
      font-size: 10px;
      padding: 3px 6px;
      min-width: 45px;
      height: 22px;
      top: -6px;
      right: -6px;
    }
  }
`;

export const Arry__Detalhe = styled.div`
  background-color: #f3ebdd;
  border-radius: 10px;
  padding: 15px 15px; 
  width: 100%; 
  box-sizing: border-box; 
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px; 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid #e0e0e0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);

  &.selected {
    border: 2px solid #5c3d2e !important;
    background-color: #e6dfd3;
    box-shadow: 0 4px 12px rgba(92, 61, 46, 0.25);
    transform: translateY(-2px);
  }

  &:hover {
    background-color: #e6dfd3;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 40px; 
    height: 40px; 
    object-fit: contain;
    flex-shrink: 0; 
  }

  .arry__detalhe {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1; 
    padding-right: 25px; 
    min-width: 0; 
  }

  h3 {
    font-size: 15px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    max-width: 100%; 
  }

  @media (max-width: 480px) {
    padding: 10px 10px; 
    min-height: 60px; 
    gap: 6px; 
    img {
      width: 30px; 
      height: 30px; 
    }
    .arry__detalhe {
      padding-right: 20px; 
    }
    h3 {
      font-size: 13px; 
    }
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

export const Div__Botao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #512615;
    color: white;
    padding: 15px 80px;
    width: 400px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #7a4e3a;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      width: 300px;
      padding: 12px 60px;
      font-size: 1rem;
    }
    @media (max-width: 480px) {
      width: 250px;
      padding: 10px 40px;
      font-size: 0.9rem;
    }
  }
`;