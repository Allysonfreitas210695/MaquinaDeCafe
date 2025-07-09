import styled from "styled-components";

export const Container__Carrinho = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  .carrinho {
    display: flex;
    flex-direction: row-reverse;
    margin: 50px 30px;
  }

  .button {
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
  }
`;

export const Pedido__Escolha_Carrinho = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-left: 20px;

  .carrinho {
    flex: 1;
    max-width: 450px;
    display: flex;
  }
`;

export const Container__Card_Carrinho = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;

  .card.cart {
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    height: 73%;

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: #5c3d2e;
      }
    }

    .steps {
      overflow-y: scroll;
      padding-right: 10px;
      padding-left: 30px;
      padding-top: 20px;
      padding-bottom: 20px;
      height: 380px;

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
  scrollbar-color: #432c1b #f1f1f1;
    }

    .tipos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;

      .condeudo__tipos {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 8.76px 26.28px 0 #0000001a;
        border-radius: 10px;
        width: 270px;

        .tipos__de_cafes {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          img {
            width: 60px;
            height: 60px;
            border-radius: 8px;
            object-fit: cover;
          }
          div {
            h3 {
              margin: 8px 0;
              font-size: 1rem;
              text-align: center;
              font-family: Poppins;
              font-weight: 600;
              font-size: 20px;
              line-height: 100%;
              letter-spacing: 0%;
              color: #3f1811;
            }
            p {
              margin: 0;
              font-size: 0.9rem;
              color: #666;
            }
            span {
              font-size: 0.8rem;
              color: #888;
              text-align: center;
              align-items: end;
              justify-content: end;
              display: flex;
              text-align: center;
              font-family: Poppins;
              font-weight: 400;
              font-size: 13px;
              line-height: 100%;
              letter-spacing: 0%;
              color: #3f18114d;
            }
          }
        }
        .valor {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 50px;

          span {
            background-color: #512615;
            font-family: Poppins;
            font-weight: 400;
            font-size: 14px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 8px;
          }
          p {
            font-size: 0.9rem;
            color: #666;
          }

           .button__remover_atualizar{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 20px;

             .remover{
               font-size: 30px;
               cursor: pointer;
               color: #512615;
             }

             .atualizar{
              font-size: 23px;
               cursor: pointer;
               color: #512615;
             }
           }
        }
      }
    }
  }
`;
