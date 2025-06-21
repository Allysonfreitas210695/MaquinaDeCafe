import styled from "styled-components";

export const Navegacao__Header = styled.div`
  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
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

export const Nav = styled.div`
  background-color: #3F1811;
  border-radius: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14rem;
  min-width: 1224px;
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
  color: ${({ active }) => (active ? "#3F1811" : "#fff")};
  padding: 0.8rem 1rem;
  border-radius: 59px; /* arredondado só à esquerda */
  transition: all 0.3s ease;
  cursor: pointer;

  .link {
    color: inherit;
    text-decoration: none;
  }
`;
