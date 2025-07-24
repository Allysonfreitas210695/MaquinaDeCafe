import styled from "styled-components";

export const Container__Card_Adicionais = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
  height: 650px;
  border-radius: 16px;
  border: 1px solid #80808021;
  padding: 20px;
  
`;

export const Titulo_Adicionais = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;

  span {
    font-family: Sora;
    font-weight: 700;
    font-size: 34px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #432c1b;
    margin-right: 5rem;
  }

  p {
    font-family: Sora;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #80808099;
  }
`;

export const Imag = styled.img`
  width: 120px;
  height: 120px;
  margin: 40px 0;
`;

export const StyledWrapper__Adicionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .tamanho_da_xicra {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .tipos_de_acucar {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .tipos_de_leite {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;


interface WrapperAdicionaisTxProps {
  $active: boolean;
}

export const Wrapper__Adicionais_Tx = styled.div<WrapperAdicionaisTxProps>`
  background-color: ${(props) => (props.$active ? "#512615" : "transparent")}; /* Cor de fundo marrom quando ativo, transparente quando não ativo */
  color: ${(props) => (props.$active ? "#fff" : "#C99963A3")}; /* Cor do texto branca quando ativo, marrom claro quando não ativo */
  width: 96px; /* */
  font-family: Sora; /* */
  font-weight: 400; /* */
  font-size: 15px; /* */
  line-height: 100%; /* */
  letter-spacing: -0.33px; /* */
  padding: 0.6rem 1rem; /* */
  border: 1px solid #C999631F; /* */
  border-radius: 38px; /* */
  transition: all 0.3s ease; /* */
  text-align: center; /* */
  cursor: pointer; /* */
  margin: 5px; /* Adicionei um margin para espaçamento, pois é comum para botões em linha */
  display: inline-flex; /* Para que ocupem apenas o espaço necessário e fiquem lado a lado */
  align-items: center;
  justify-content: center;
  white-space: nowrap; /* Evita quebras de linha dentro do texto */

  /* Seção de hover (opcional, mas boa para feedback visual) */
  &:hover {
    opacity: 0.9;
  }
`;

export const Wrapper__Adicionais_Leite = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#512615" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#C99963A3")};
  width: 96px;
  font-family: Sora;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.33px;
  padding: 0.6rem 1rem;
  border: 1px solid #6f482929;
  border-radius: 38px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;

  .tipos_de_leite {
    span {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const Mais__Adicionais = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 150px;
  padding: 30px 0;
  overflow-y: scroll;
  width: 400px;
  height: 10vh;
  margin: 30px 0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #432c1b;
    border-radius: 8px;
    border: 2px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #432c1b;
  }

  scrollbar-width: thin;
  scrollbar-color: #432c1b #ffffff;

  .tipos__adicionais {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 8px;

    span {
      font-family: Sora;
      font-weight: 400;
      font-size: 17px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #c99963;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      img {
        width: 17px;
      }
    }
  }

  .valores {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      font-family: Sora;
      font-weight: 300;
      font-size: 15px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #808080ad;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 15rem;

  h1 {
    font-family: Sora;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #512615;
  }

  span {
    font-family: Sora;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #808080ad;
  }
`;

export const Button__Finalizar = styled.button`
  background-color: #512615;
  padding: 20px 100px;
  margin: 20px 0;
  width: 410px;
  border-radius: 32px;
  font-family: Sora;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #ffffff;
  cursor: pointer;
`;

export const Div__Botao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #5C3D2E;
    width: 400px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 12px 24px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #7a4e3a;
    }
  }
`;