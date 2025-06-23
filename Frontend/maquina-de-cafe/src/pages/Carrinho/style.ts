import styled from "styled-components";

export const Container__Carrinho = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  .carrinho{
    display: flex;
    flex-direction: row-reverse;
    margin: 50px 30px;
  }
  
  .button{
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

