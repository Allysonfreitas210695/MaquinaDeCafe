import styled from "styled-components";

export const Container__Feedback = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  position: relative; 

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  @media (max-width: 992px) {
    height: auto; 
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const Conteudo__Feedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  box-sizing: border-box; 

  width: 100%; 
  max-width: 1000px;
  min-width: 300px; 
  
  padding: 200px 40px 40px 40px;

  @media (max-width: 1200px) { 
    max-width: 900px;
  padding: 200px 40px 40px 40px;
  }

  @media (max-width: 992px) {
    width: 100%; 
    max-width: 100%;
    padding: 20px 15px 15px 15px;
    align-items: center; 
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 15px 10px 10px 10px; 
  }
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  gap: 3px;
  margin-bottom: 0; 
  width: 100%;
  min-height: 60px;
  overflow: visible;

  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
    min-height: 50px; 
  }

  @media (max-width: 768px) {
    min-height: 40px; 
  }

  span {
    font-weight: 700;
    font-size: 32px;
    line-height: 1.2; 
    color: #3f1811;
    white-space: normal; 
    word-break: break-word; 
    hyphens: auto; 
    max-width: 100%; 
    overflow: visible; 
    text-overflow: clip; 
    display: inline-block; 
    min-width: 1px; 
    min-height: 1.2em; 

    @media (min-width: 1001px) {
      font-size: 38px;
      line-height: 1.15;
    }

    @media (max-width: 992px) {
      font-size: 26px;
      line-height: 1.25; 
    }
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 1.3; 
    }
    @media (max-width: 480px) {
      font-size: 18px;
      line-height: 1.4; 
      white-space: normal; 
      overflow: visible; 
      text-overflow: clip; 
      max-width: 100%; 
    }
    @media (max-width: 380px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: #512615;
    max-width: 100%; 
    overflow: hidden; 
    text-overflow: ellipsis; 

    @media (min-width: 1001px) {
      font-size: 24px;
      line-height: 1.2;
    }

    @media (max-width: 992px) {
      font-size: 17px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const Atendimento = styled.div`
  background-color: #f7f0e3;
  border-radius: 8px;
  width: 100%; 
  max-width: 100%; 
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  gap: 8px;
  margin-top: 20px; 
  margin-bottom: 15px; 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  box-sizing: border-box; 


  @media (max-width: 992px) {
    margin: 15px auto; 
    align-items: center;
    text-align: center;
  }

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: #512615;
    max-width: 100%; 
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 1001px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: #512615;
    max-width: 100%; 
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 1001px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  .reacoes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
    gap: 15px;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box; 


    @media (max-width: 480px) {
      flex-wrap: wrap;
      gap: 10px;
      padding: 0 5px; 
      justify-content: center;
    }
  }

  .reacoes__conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    background-color: #fcfcfc;
    border: 1px solid #e0e0e0;
    padding: 8px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    min-width: 70px; 
    flex-shrink: 0; 
    box-sizing: border-box;

    &:hover {
      border-color: #B6895B;
      transform: translateY(-2px);
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06);
    }

    img {
      width: 40px;
      height: 40px;
      @media (min-width: 1001px) {
        width: 50px;
        height: 50px;
      }
    }

    span {
      font-weight: 600;
      font-size: 12px;
      line-height: 1.2;
      color: #512615;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      max-width: 100%; 

      @media (min-width: 1001px) {
        font-size: 13px;
      }
    }

    &.selected {
      border-color: #B6895B;
      background-color: #fffaf0;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      transform: translateY(-3px);
      span {
        color: #B6895B;
      }
    }
  }
`;

export const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  gap: 10px;
  width: 100%; 
  max-width: 100%; 
  margin-bottom: 20px;
  background-color: #f7f0e3;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  box-sizing: border-box; 


  @media (max-width: 992px) {
    margin: 15px auto;
    align-items: center;
    padding: 10px;
  }

  .header-produto {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start;
    gap: 2px;
    width: 100%;
    margin-bottom: 10px;

    @media (max-width: 992px) {
      align-items: center;
      text-align: center;
    }

    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 1.2;
      color: #512615;
      margin-bottom: 0;
      max-width: 100%; 
      overflow: hidden;
      text-overflow: ellipsis;

      @media (min-width: 1001px) {
        font-size: 22px;
      }
    }

    span {
      font-weight: 400;
      font-size: 13px;
      line-height: 1.3;
      color: #512615;
      max-width: 100%; 
      overflow: hidden;
      text-overflow: ellipsis;

      @media (min-width: 1001px) {
        font-size: 14px;
      }

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  .produto-item {
    background-color: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    box-sizing: border-box; 
  }

  .produto__conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    box-sizing: border-box; 


    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      text-align: left;
    }
    @media (max-width: 480px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }

  img {
    background-color: #ecdec9;
    border-radius: 6px;
    padding: 6px;
    width: 50px;
    height: 50px;
    object-fit: contain;
    flex-shrink: 0; 

    @media (min-width: 1001px) {
      width: 60px;
      height: 60px;
    }
  }

  .cafes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3px;
    flex-grow: 1; 
    min-width: 0; 

    @media (max-width: 768px) {
      align-items: flex-start;
    }
    @media (max-width: 480px) {
      align-items: center;
    }

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.3;
      color: #512615;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      max-width: 100%; 

      @media (min-width: 1001px) {
        font-size: 16px;
      }
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 1.3;
      color: #898476;
      white-space: nowrap; 
      overflow: hidden; 
      text-overflow: ellipsis; 
      max-width: 100%; 

      @media (min-width: 1001px) {
        font-size: 13px;
      }
    }
  }
`;

export const Observacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  gap: 6px;
  margin: 15px 0 25px 0;
  width: 100%; 
  max-width: 100%; 
  box-sizing: border-box; 


  @media (max-width: 992px) {
    margin: 10px auto 20px auto;
    align-items: center;
    text-align: center;
  }

  span {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    color: #512615;
    max-width: 100%; 
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 1001px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  textarea {
    background-color: #f8f5ed;
    width: 100%;
    min-height: 70px;
    padding: 8px;
    outline: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    color: #512615;
    font-size: 13px;
    height: 10px;
    resize: vertical;
    box-sizing: border-box;

    &::placeholder {
      color: #898476;
      opacity: 0.7;
    }

    &:focus {
      border-color: #B6895B;
      box-shadow: 0 0 0 1px rgba(182, 137, 91, 0.1);
    }
  }
`;

export const Button__Feedback = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
  gap: 15px;
  margin: 0; 
  width: 100%; 
  max-width: 100%; 
  box-sizing: border-box; 


  @media (max-width: 992px) {
    flex-direction: column;
    gap: 8px;
    margin: 0 auto; 
    justify-content: center;
  }

  .pular__valiacao,
  .enviar__avalicao {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.2;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 6px;
    transition: all 0.2s ease;
    width: auto;
    text-align: center;
    box-sizing: border-box;

    @media (min-width: 1001px) {
      font-size: 16px;
      padding: 12px 25px;
    }

    @media (max-width: 992px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 13px;
      padding: 8px 15px;
    }
  }

  .pular__valiacao {
    color: #512615;
    background-color: transparent;
    border: 1px solid #512615;

    &:hover {
      background-color: #512615;
      color: #ffffff;
      border-color: #512615;
    }
  }

  .enviar__avalicao {
    color: #ffffff;
    background-color: #512615;
    border: 1px solid #512615;
    cursor: pointer;

    &:hover {
      background-color: #7a4e3a;
      border-color: #7a4e3a;
    }
  }
`;