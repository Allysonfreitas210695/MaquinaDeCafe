import styled from "styled-components";

export const Container__Pedido_Cancelado = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header__Pedido_Cancelado = styled.h1`
  font-family: Poppins;
  font-size: 25px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  color: #432c1b;
  padding: 20px 0;
  border-bottom: 1px solid #859eba;
  width: 100%;
  text-align: center;
`;

export const Pedido__Cancelado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8rem 0;
  gap: 15px;

  img {
    background-color: #ffdede;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    padding: 20px;
  }

  span {
    font-family: Poppins;
    font-size: 25px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0%;
    color: #432c1b;
  }

  p {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0%;
    color: #859eba;
  }
`;

export const Button__Novo_Pedido = styled.div`
  .novo__pedido {
    border: 1px solid #512615;
    border-radius: 10px;
    padding: 20px 200px;
    text-decoration: none;
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0%;
    color: #512615;
    box-shadow: 0 4.93px 9.86px 0 #00000025;
    transition: .8s;

    &:hover{
        background-color: #512615;
        color: #ffffff;
    }
  }
`;
