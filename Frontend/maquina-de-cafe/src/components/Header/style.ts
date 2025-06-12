import styled from "styled-components";

export const Container__Header = styled.div`
  background-color: #dac8b3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 16px 36px;
`;

export const Logo__Header = styled.img`
  width: 76.75px;
  height: 77.13px;
`;

export const Conteudo__Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-right: 36px;
`;

export const Localizacao = styled.div`
  background-color: #512615;
  padding: 15px 20px;
  border-radius: 10px;
  color: #DAC8B3;
  font-family: "Poppins";
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
`;

export const Span = styled.span``;

export const Carrinho = styled.a`
  background-color: #512615;
  padding: 8px 10px;
  border-radius: 10px;
  color: #DAC8B3;
  font-size: 32px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
