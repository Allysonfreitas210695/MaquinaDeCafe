import styled from "styled-components";

export const Navegacao__Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background: transparent;
`;

export const NavContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  background-color: #3F1811;
  border-radius: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8rem;
  min-width: 700px;
  padding: 12px 40px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);

  @media (max-width: 768px) {
    min-width: auto;
    gap: 2rem;
    padding: 8px 20px;
    border-radius: 40px;
    width: 90%;
  }

  .link {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: color 0.3s ease;
  }

  .link:hover {
    color: #cfa67a;
  }
`;

export const MenuItem = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ active }) => (active ? "#3F1811" : "#fff")};
  padding: 0.8rem 1.6rem;
  border-radius: 59px;
  transition: all 0.3s ease;
  cursor: pointer;

  .link {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: ${({ active }) => (active ? "#fff" : "#5C3D2E")};
    color: ${({ active }) => (active ? "#3F1811" : "#fff")};
  }
`;