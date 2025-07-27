// src/components/CardAdicionais/style.ts
import styled from "styled-components";

export const Container__Card_Adicionais = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
  /* ✅ AJUSTE AQUI: Remova ou reduza drasticamente o min-height fixo */
  /* min-height: 650px; */ /* Removido para permitir que o card se ajuste ao conteúdo */
  /* Se você precisa de um min-height, use um valor menor, como: */
  min-height: auto; /* Permite que o card se ajuste naturalmente */
  /* Ou, se a altura for um problema estético quando vazio, considere um valor como: */
  /* min-height: 400px; */ /* Apenas para garantir que não fique minúsculo */


  border-radius: 16px;
  border: 1px solid #80808021;
  padding: 20px;
  box-sizing: border-box;
  /* ✅ AJUSTE AQUI: Gerenciamento do scroll */
  /* overflow-y: auto; */ /* Vamos gerenciar o scroll de forma mais granular ou no container de adicionais */
  max-height: 90vh; /* Limita a altura máxima do card para evitar que ele ocupe a tela inteira */
  overflow-y: auto; /* Habilita o scroll para o card em si, se o conteúdo exceder max-height */

  /* Adicionar estilos de scrollbar para o card principal também */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #512615; /* Cor da scrollbar do card */
    border-radius: 8px;
    border: 2px solid #f1f1f1;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #7a4e3a; /* Hover para a scrollbar do card */
  }
  scrollbar-width: thin;
  scrollbar-color: #512615 #f1f1f1;


  @media (max-width: 1024px) {
    width: 400px;
    min-height: auto; /* Mantém a altura flexível */
    max-height: 85vh; /* Ajuste para telas menores */
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 380px;
    min-height: auto; /* Mantém a altura flexível */
    max-height: 80vh; /* Ajuste para telas menores */
    padding: 15px;
  }

  @media (max-width: 480px) {
    min-height: auto; /* Mantém a altura flexível */
    max-height: 75vh; /* Ajuste para telas menores */
    padding: 10px;
  }
`;

export const TituloEImagemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
`;

export const Titulo_Adicionais = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;

  span {
    font-family: Poppins;
    font-weight: 700;
    font-size: 34px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #432c1b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: block;
  }

  p {
    font-family: Poppins;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #80808099;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    display: block;
  }

  @media (max-width: 768px) {
    span {
      font-size: 28px;
    }
    p {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const Imag = styled.img`
  width: 120px;
  height: 120px;
  /* ✅ AJUSTE AQUI: Zero a margem superior da imagem */
  margin-top: 0; /* Remove a margem superior que empurrava para baixo */
  margin-bottom: 20px; /* Adiciona uma margem inferior para separar do conteúdo abaixo */
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-top: 0;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const StyledWrapper__Adicionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  /* ✅ AJUSTE AQUI: Seções de seleção de adicionais devem ter um limite de altura e scroll */
  /* max-height: 250px; */ /* Exemplo: limite a altura da seção de adicionais específicos (tamanho, açúcar, leite) */
  /* overflow-y: auto; */ /* Habilita o scroll APENAS para esta seção, se necessário */
  /* Removi o max-height e overflow-y daqui para testar o scroll principal do card */

  .tamanho_da_xicra,
  .tipos_de_acucar,
  .tipos_de_leite {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: center; /* Centraliza os itens horizontalmente */
    width: 100%;
    flex-wrap: wrap; /* Permite que os botões quebrem a linha */
    padding: 0 5px;

    /* ✅ AJUSTE AQUI: Centraliza a linha de botões se ela não ocupar a largura total */
    justify-content: center;


    @media (max-width: 480px) {
      gap: 3px;
      padding: 0 2px;
    }
  }
`;

interface WrapperAdicionaisTxProps {
  $active: boolean;
}

export const Wrapper__Adicionais_Tx = styled.div<WrapperAdicionaisTxProps>`
  background-color: ${(props) => (props.$active ? "#512615" : "transparent")};
  color: ${(props) => (props.$active ? "#fff" : "#C99963A3")};
  min-width: 60px;
  max-width: 90px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: -0.33px;
  padding: 0.6rem 0.8rem;
  border: 1px solid #C999631F;
  border-radius: 38px;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  margin: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0.5rem 0.7rem;
    min-width: 55px;
    max-width: 85px;
    margin: 2px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 0.4rem 0.6rem;
    min-width: 50px;
    max-width: 80px;
    margin: 1px;
  }
`;

export const Wrapper__Adicionais_Leite = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#512615" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#C99963A3")};
  min-width: 60px;
  max-width: 90px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.33px;
  padding: 0.6rem 0.8rem;
  border: 1px solid #6f482929;
  border-radius: 38px;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;

  .tipos_de_leite {
    span {
      color: inherit;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 0.5rem 0.7rem;
    min-width: 55px;
    max-width: 85px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0.4rem 0.6rem;
    min-width: 50px;
    max-width: 80px;
  }
`;

// Este componente 'Mais__Adicionais' parece ser um item *individual* da lista de adicionais extras (como 'Chocolate', 'Canela')
// Ele não deveria ter a responsabilidade de scrollar a lista inteira.
// A lista de adicionais extras (o container que agrupa vários 'Mais__Adicionais') é que precisa ter o scroll.
export const Mais__Adicionais = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* ✅ AJUSTE AQUI: Espaça os itens para lados opostos */
  gap: 20px;
  padding: 10px 0; /* Reduzindo o padding vertical */
  width: 100%;
  margin: 5px 0; /* Reduzindo a margem vertical */
  border-bottom: 1px solid #eee; /* Opcional: para separar os itens */
  &:last-child {
    border-bottom: none; /* Remove a borda do último item */
  }

  .tipos__adicionais {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 8px;
    flex-grow: 1;
    min-width: 0;

    span {
      font-family: Poppins;
      font-weight: 400;
      font-size: 17px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #c99963;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;

      img {
        width: 17px;
        flex-shrink: 0;
      }
    }
  }

  .valores {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;

    p {
      font-family: Poppins;
      font-weight: 300;
      font-size: 15px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #808080ad;
      white-space: nowrap;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 0;
    gap: 10px;
    .tipos__adicionais span {
      font-size: 15px;
    }
    .valores p {
      font-size: 13px;
    }
  }
`;

/* ✅ NOVO COMPONENTE: Container para a lista de "Mais Adicionais" */
export const ListaAdicionaisExtras = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 180px; /* Limita a altura para 3-4 itens (ajuste conforme necessário) */
  overflow-y: auto; /* Adiciona scroll apenas para esta lista de adicionais extras */
  margin-top: 15px; /* Espaço entre as opções (tamanho, leite) e os adicionais extras */
  margin-bottom: 15px; /* Espaço antes do total */
  padding-right: 5px; /* Para não cortar a scrollbar */

  &::-webkit-scrollbar {
    width: 6px; /* Scrollbar mais fina para esta seção */
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C99963; /* Cor mais clara para a scrollbar interna */
    border-radius: 6px;
    border: 2px solid #f1f1f1;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a37b58;
  }
  scrollbar-width: thin;
  scrollbar-color: #C99963 #f1f1f1;
`;


export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 10px 10px 0 10px; /* Adiciona um padding para não colar nas bordas do card */
  margin-top: auto; /* Empurra o Total e botões para o final do card */


  h1 {
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #512615;
    white-space: nowrap;
  }

  span {
    font-family: Poppins;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #808080ad;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 15px;
    }
    span {
      font-size: 15px;
    }
  }
`;

export const Button__Finalizar = styled.button`
  background-color: #512615;
  padding: 20px 100px;
  margin: 15px 0 10px 0; /* Ajustando margem superior e inferior */
  width: 100%;
  max-width: 410px;
  border-radius: 32px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #ffffff;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a4e3a;
  }

  @media (max-width: 768px) {
    padding: 15px 80px;
    font-size: 15px;
  }
  @media (max-width: 480px) {
    padding: 12px 60px;
    font-size: 14px;
    margin: 10px 0 5px 0; /* Ajuste para telas menores */
  }
`;

export const Div__Botao = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem; /* Margem menor em relação ao botão Finalizar */
  width: 100%;

  button {
    background-color: #5C3D2E;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background 0.3s ease;
    flex: 1;
    max-width: 180px;

    &:hover {
      background: #7a4e3a;
    }

    @media (max-width: 480px) {
      padding: 8px 15px;
      font-size: 0.9rem;
      max-width: 150px;
    }
  }
`;

export const BotaoPequeno = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  background-color: #5C3D2E;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  width: auto;
  max-width: 180px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7b4f3a;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
    max-width: 150px;
  }
`;