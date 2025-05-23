import styled from "styled-components";
import { media } from "../../styles/media";
import { Images } from "../../assets/Images";

export const Container__Pedido_Header = styled.div`
  background-image: url(${Images.Imagem4});
  background-color: #ffffff;
  background-size: cover;
  background-position: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
`;

export const Navegacao__Header = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-shadow: 0 0 0 24% #000000;

  img {
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
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
`;

export const Nav = styled.div`
  background-color: #6f4829;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  padding: 8px 70px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);

  .link {
    color: #ffffff;
    font-family: Sora;
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
`;

export const MenuItem = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ active }) => (active ? "#7B4A2E" : "#fff")};
  padding: 0.8rem 1rem;
  border-radius: 10px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  cursor: pointer;

  .link {
    color: inherit;
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
  padding-top: 200px;
  padding-left: 55px;
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
