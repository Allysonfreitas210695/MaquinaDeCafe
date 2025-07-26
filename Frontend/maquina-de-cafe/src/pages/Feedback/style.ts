import styled from "styled-components";

export const Container__Feedback = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  justify-content: start;
`;

export const Img = styled.img`
  width: 600px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Conteudo__Feedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 50px 80px;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px;

  span {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
  }

  p {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
  }
`;

export const Atendimento = styled.div`
  background-color: #f7f0e3;
  border-radius: 8px;
  width: 500px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px;
  margin: 30px 0;

  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
  }

  span {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
  }

  .reacoes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 20px auto 0 auto;
  }
  .reacoes__conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    span {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #512615;
    }

     &.selected {
      border-color: #B6895B;
      background-color: #fffaf0; 
      width: 100px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
      transform: translateY(-5px); 
      padding: 8px;
      border-radius: 10px;
      span {
        color: #B6895B; // Mudar a cor do texto
      }
    }
  }
`;

export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;

  .produto__conteudo {
    background-color: #f7f0e3;
    border-radius: 8px;
    width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 8px;
    padding: 8px;

    img {
      background-color: #ecdec9;
      border-radius: 8px;
      padding: 8px;
      width: 50px;
    }
  }
  .cafes {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;

    span {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 39.5%;
      letter-spacing: 0%;
      color: #512615;
    }

    p {
      font-family: Inter;
      font-weight: 400;
      font-size: 14px;
      line-height: 39.5%;
      letter-spacing: 0%;
      color: #898476;
    }
  }

  .avaliacao {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 2px;

    h1{
       font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: 0%;
      color: #512615;
    }

    span {
      font-family: Poppins, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #512615;
      
    }
  }
`;

export const Observacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
  margin: 20px 0;

  span {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
  }

  p {
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #898476;
  }

  input {
    background-color: #f8f5ed;
    width: 500px;
    height: 50px;
    outline: none;
    border: 1px solid #f8f5ed;
    border-radius: 8px;
    color: #898476;
    font-size: 20px;
    padding: 5px;
  }
`;

export const Button__Feedback = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;

  .pular__valiacao {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
    text-decoration: none;
    background-color: transparent;
    padding: 15px 63px;
    border: 1px solid #512615;
    border-radius: 8px;
  }

  .enviar__avalicao {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #ffffff;
    text-decoration: none;
    background-color: #512615;
    padding: 16px 63px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
