import styled from "styled-components";
import { media } from "../../styles/media";

export const Container__Pedido_Header = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;

  .button__voltar {
    color: #ffffff;
    position: fixed;
    z-index: 1000;
    top: 2.6rem;
    right: 8.4rem;
    font-family: Sora;
    font-weight: 800;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: none;

    ${media.tabletmd} {
      top: 1.5rem;
      right: 1.5rem;
      font-size: 16px;
    }

    ${media.mobilesm} {
      top: 1rem;
      right: 1rem;
      font-size: 14px;
    }
  }

  ${media.tabletmd} {
    align-items: center;
    justify-content: flex-start;
  }

  ${media.mobilesm} {
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Cafes = styled.div`
  position: relative;
  top: 85px;
  right: 88px;
  transform: translate(50%, 50%);
  cursor: pointer;

  .links {
    color: #552a18;
    font-family: Poppins;
    font-weight: 800;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  ${media.laptoplgheight} {
    padding-top: 10px;
  }

  ${media.tabletmdheight} {
    position: relative;
    top: 67px;
    right: 88px;
  }

  ${media.tabletmd} { /* Usa tabletmd aqui */
    top: 0;
    right: auto;
    transform: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 15px 0;
  }

  ${media.mobilesm} { /* Usa mobilesm aqui */
    .links {
      font-size: 14px;
      gap: 10px;
      flex-direction: column;
    }
  }
`;

export const Header__Titulo = styled.span`
  font-family: Poppins;
  font-weight: 800;
  font-size: 33.33px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #512615;
  padding: 10px 6.5rem;
  position: relative;

  ${media.laptoplgheight} {
    padding-top: 25px;
  }

  ${media.tabletmdheight} {
    padding-top: 12px;
  }

  ${media.tabletmd} { /* Usa tabletmd aqui */
    font-size: 28px;
    padding: 15px 1rem;
    text-align: center;
    width: 100%;
  }

  ${media.mobilesm} { /* Usa mobilesm aqui */
    font-size: 22px;
    padding: 10px 0.5rem;
  }
`;

export const Titulo = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0%;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  color: #512615;

  ${media.tabletmd} { /* Usa tabletmd aqui */
    font-size: 28px;
    padding: 20px 15px;
    text-align: center;
  }

  ${media.mobilesm} { /* Usa mobilesm aqui */
    font-size: 22px;
    padding: 15px 10px;
  }
`;

export const Pedido__Escolha = styled.div`
  padding-top: 170px;
  padding-left: 55px;
  display: flex;
  flex-direction: column;

  ${media.tabletmd} { /* Usa tabletmd aqui */
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
  }

  ${media.mobilesm} { /* Usa mobilesm aqui */
    padding-top: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const Container__Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  width: 100%;

  ${media.laptoplg} { /* Usa laptoplg para 2 colunas */
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.tabletmd} { /* Usa tabletmd para 2 colunas */
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  ${media.mobilesm} { /* Usa mobilesm para 1 coluna */
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 0 10px;
  }
`;

export const Button__Seguir = styled.div`
  background-color: #512615;
  margin-left: auto;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-top: 110px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;

  img {
    width: 40px;
    height: 30px;
  }

  ${media.tabletmd} { /* Usa tabletmd aqui */
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
  }

  ${media.mobilesm} { /* Usa mobilesm aqui */
    margin-top: 30px;
    padding: 8px 15px;
    img {
      width: 30px;
      height: 20px;
    }
  }
`;

export const Div__Acoes = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 1000;

  button {
    background-color: #5c3d2e;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 18px;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;

    &:hover {
      background-color: #7a4e3a;
    }

    .carrinho__pedido {
      font-size: 24px;
      margin-right: 8px;
    }

    .quantidade {
      position: absolute;
      top: -6px;
      right: -6px;
      background: #fff;
      color: #5c3d2e;
      font-weight: bold;
      border-radius: 50%;
      padding: 4px 7px;
      font-size: 12px;
      border: 1px solid #5c3d2e;
    }
  }

  ${media.tabletmd} { /* Usa tabletmd aqui */
    top: 1rem;
    right: 1rem;
    button {
      padding: 8px 15px;
      font-size: 14px;
      .carrinho__pedido {
        font-size: 20px;
      }
      .quantidade {
        padding: 3px 6px;
        font-size: 11px;
      }
    }
  }

  ${media.mobilesm} { /* Usa mobilesm aqui */
    top: 0.5rem;
    right: 0.5rem;
    button {
      padding: 6px 12px;
      font-size: 12px;
      .carrinho__pedido {
        font-size: 18px;
        margin-right: 5px;
      }
      .quantidade {
        padding: 2px 5px;
        font-size: 10px;
      }
    }
  }
`;

export const PersonalizarSelecionadosButton = styled.button`
  /* Estilos específicos se houver, mas os acima já cobrem o básico */
  z-index: 1000;
  /* Adicione responsividade se este botão tiver layout ou tamanho fixo */
`;