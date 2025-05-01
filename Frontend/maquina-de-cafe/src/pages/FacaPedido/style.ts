import styled from "styled-components";

export const Container__Pedido_Header = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;

export const Navegacao__Header = styled.div`
  background-color: #512615;
  width: 365px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

export const Header__Logo = styled.img`
  width: 150px;
  height: 130px;
`;

export const Nav = styled.div`
  padding-top: 90px;
  padding-right: 110px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  .link {
    color: #ffffff;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: none;
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
`;

export const Pedido__Escolha = styled.div`
  max-width: 80vw;
  margin-left: 370px;
  display: flex;
  flex-direction: column;
`;

export const Container__Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
`;
