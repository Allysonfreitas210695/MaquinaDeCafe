import styled from "styled-components";

export const Container__Card_Adicionais = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  border-radius: 16px;
  border: 1px solid #80808021;
  padding: 20px;
`;

export const Titulo_Adicionais = styled.div`
  display: flex;
  flex-direction: column;

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

export const Wrapper__Adicionais_Tx = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#512615" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#C99963A3")};
  font-family: Sora;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.33px;
  width: 96px;
  padding: 0.6rem 1rem;
  border: 1px solid #6f482929;
  border-radius: 38px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;

  .tamanho_da_xicra {
    span {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export const Wrapper__Adicionais_Ta = styled.div<{ active: boolean }>`
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

  .tipos_de_acucar {
    span {
      color: inherit;
      text-decoration: none;
    }
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
  gap: 8rem;
  padding: 30px 0;

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
  gap: 9rem;

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
  padding: 10px 60px;
  margin: 20px 0;
  border-radius: 32px;
  font-family: Sora;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #ffffff;
  cursor: pointer;
`;
