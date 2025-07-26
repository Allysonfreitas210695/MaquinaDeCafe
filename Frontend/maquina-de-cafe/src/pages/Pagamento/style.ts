import styled from "styled-components";
import { media } from "../../styles/media"; 

export const Container__Tipo_Pagamento = styled.div`
  padding: 30px 20px;
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 90px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding-top: 80px;
    padding: 20px 15px;
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
  padding: 18px 25px;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #eee;

  .short {
    color: #3f1811;
    font-size: 30px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #7a4e3a;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #512615;
    flex-grow: 1;
    text-align: center;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    white-space: nowrap;


    @media (max-width: 768px) {
      font-size: 20px;
      padding-left: 10px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
      padding-left: 5px;
    }
  }

  .cancelar-btn {
    background: transparent;
    color: #512615;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #7a4e3a;
      background-color: rgba(81, 38, 21, 0.1);
    }

    @media (max-width: 480px) {
      padding: 6px 10px;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
  }
  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const Tipo__Confirmar_Pagamento = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Conteudo__Pagamento = styled.div`
  flex: 2;
  min-width: 450px;
  max-width: 600px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    min-width: unset;
    width: 95%;
    padding: 25px;
  }
`;

export const Tipo__Pagamento = styled.div`
`;

export const Escolha__Pagamento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Titulo__Pagamento = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 35px;
    height: 35px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: #512615;
    letter-spacing: -0.5px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
  }
`;

export const Button__Forma_Pagamento = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.div`
  button {
    background-color: #f3ede6;
    border: 1px solid #d4c0a5;
    color: #512615;
    padding: 15px 30px;
    border-radius: 12px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease-in-out;
    min-width: 160px;

    img {
      width: 25px;
      height: 25px;
      margin-bottom: 5px;
    }

    span {
      color: #512615;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 5px;
    }

    p {
      color: #8a7a6c;
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      line-height: 1.2;
      text-align: center;
    }

    &.selecionado {
      background-color: #512615;
      border-color: #512615;
      color: #fff;
      box-shadow: 0 4px 12px rgba(81, 38, 21, 0.3);

      span,
      p {
        color: #fff;
      }
    }

    &.desabilitado {
    }

    &:hover:not(.selecionado) {
      background-color: #e0d0c0;
      border-color: #a08060;
    }
  }
`;

export const Button__Texto = styled.div`
  margin-top: 30px;
  text-align: center;

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #6a5a4a;
    display: block;
    margin-bottom: 15px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 0;

    img {
      width: 25px;
      height: 25px;
    }

    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 19px;
      color: #512615;
      margin: 0;
    }
  }
`;

export const ResumoSimplificado = styled.div`
  flex: 1;
  padding: 35px 30px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px rgba(81, 38, 21, 0.1);
  min-width: 300px;
  max-width: 450px;
  position: sticky;
  top: 110px;
  align-self: flex-start;


  .title {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;

    img {
      width: 45px;
      height: 45px;
    }

    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 28px;
      color: #512615;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    color: #4a2f1b;
    margin: 10px 0;
    line-height: 1.5;
  }

  .confirmar {
    margin-top: 40px;
    width: 100%;
    background-color: #512615;
    color: #fff;
    border: none;
    padding: 18px 0;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Transição apenas para cor e sombra */
    box-shadow: 0 5px 15px rgba(81, 38, 21, 0.45);

    &:hover {
      background-color: #3f1f0e;
      /* Removido: transform: translateY(-2px); */ 
      box-shadow: 0 5px 15px rgba(81, 38, 21, 0.45); /* Mantido a mesma sombra ou ajustado conforme preferência */
    }

    &:disabled {
      background-color: #d4c0a5;
      color: #8c7866;
      cursor: not-allowed;
      box-shadow: none;
      transform: translateY(0);
    }
  }
`;

export const TotalPagamento = styled.div`
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px dashed #d4c0a5;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #512615;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 800;
    color: #3f1811;
  }
`;