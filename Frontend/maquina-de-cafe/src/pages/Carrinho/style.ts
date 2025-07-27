// src/pages/Carrinho/style.ts

import styled from "styled-components";

export const Container__Carrinho = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

export const AcoesTopo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  span { /* Estilo para o título "Carrinho" */
    font-size: 20px;
    font-weight: 600;
    color: #3f1811;
  }

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

  button {
    background: transparent;
    color: #512615;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #7a4e3a;
      background-color: rgba(81, 38, 21, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 13px;
      padding: 8px 12px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      padding: 6px 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
  @media (max-width: 480px) {
    padding: 8px 10px;
  }
`;

export const Pedido__Escolha_Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinha o conteúdo ao topo */
  width: 100%;
  padding: 0;
  padding-top: 80px; /* Espaço para o fixed AcoesTopo */
  flex-grow: 1; /* Ocupa o espaço restante */
  overflow-y: auto; /* Permite scroll se o conteúdo for muito longo */
`;

export const CarrinhoVazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px; /* Ajuste conforme necessário para centralizar bem */
  text-align: center;
  color: #666;
  padding: 20px;

  p {
    margin-top: 15px;
    font-size: 18px;
    color: #512615;
  }

  img {
    width: 120px;
    height: auto;
    margin-top: 20px;
    opacity: 0.7;
  }

  button {
    margin-top: 30px;
    padding: 12px 25px;
    background-color: #512615;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #7a4e3a;
    }
  }
`;

export const ListaItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espaço entre os itens do carrinho */
  padding: 20px;
  max-width: 800px; /* Limita a largura da lista de itens */
  margin: 0 auto; /* Centraliza a lista de itens */
  width: 100%; /* Garante que ocupe a largura disponível no max-width */
  box-sizing: border-box; /* Inclui padding na largura */
`;

export const ItemCarrinho = styled.div`
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  gap: 15px;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0; /* Impede que a imagem encolha */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const DetalhesItem = styled.div`
  flex-grow: 1; /* Ocupa o máximo de espaço disponível */

  h3 {
    margin: 0 0 5px 0;
    font-size: 18px;
    color: #3f1811;
  }

  p {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #666;
  }

  span {
    font-weight: bold;
    color: #512615;
    font-size: 16px;
  }
`;

export const ControleQuantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0; /* Impede que este bloco encolha */

  button {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 32px;
    height: 32px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3f1811; /* Cor para os botões +/- */

    &:hover {
      background-color: #e0e0e0;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #3f1811;
  }

  button.remover {
    background-color: #ff4d4f; /* Cor vermelha para remover */
    color: white;
    width: auto;
    padding: 5px 12px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    margin-left: 10px; /* Espaço entre o controle de quantidade e o botão remover */

    &:hover {
      background-color: #e60000;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-around;
    button.remover {
      margin-left: 0;
    }
  }
`;

export const BotoesRodape = styled.div`
  display: flex;
  flex-direction: column; /* Alinha o total e o botão de finalizar verticalmente */
  gap: 15px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);

  button.finalizar-pedido {
    width: 100%;
    padding: 15px;
    background-color: #512615;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #7a4e3a;
    }
  }

  @media (min-width: 769px) {
    /* Em telas maiores, podemos centralizar o rodapé */
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: bold;
  color: #3f1811;
  padding-bottom: 10px; /* Espaço antes do botão de finalizar */

  span:last-child {
    color: #512615; /* Cor para o valor total */
  }
`;

export const Container__Card_Carrinho = styled.div`
  /* Este componente parece não ser usado diretamente no carrinho.tsx atual,
     mas se você o usa em outro lugar ou planeja usá-lo, mantenha-o exportado. */
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
`;

export const Ingredientes = styled.span`
  /* Estilo para ingredientes, se aplicável */
  white-space: normal;
  display: block;
  font-size: 14px;
  color: #333;
`;