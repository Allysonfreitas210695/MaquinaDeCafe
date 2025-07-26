import styled from "styled-components";
import { media } from "../../../styles/media"; 

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
  font-family: 'Poppins', sans-serif; 

  ${media.tabletmd} { 
    padding: 10px 20px;
    background-color: #3F1811; 
  }

  ${media.mobilesm} { 
    padding: 10px 15px;
    flex-direction: row; 
    align-items: center; 
    justify-content: center; 
  }
`;

export const NavContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  ${media.tabletmd} { 
    display: none; 
  }

  ${media.mobilesm} { 
    display: none; 
  }
`;

export const Nav = styled.nav`
  background-color: #3F1811;
  border-radius: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8rem;
  padding: 12px 40px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);
  width: auto; 
  max-width: 100%; 
  font-family: 'Poppins', sans-serif;

  ${media.tabletmd} {
    gap: 2rem;
    padding: 8px 20px;
    border-radius: 40px;
    width: auto; 
  }

  ${media.mobilesm} { 
    flex-direction: column;
    gap: 1rem; 
    padding: 15px 10px; 
    border-radius: 20px;
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

    ${media.tabletmd} {
      font-size: 16px;
      gap: 15px;
    }

    ${media.mobilesm} {
      font-size: 14px;
      gap: 10px;
    }
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
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;

  .link {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: ${({ active }) => (active ? "#fff" : "#5C3D2E")};
    color: ${({ active }) => (active ? "#3F1811" : "#fff")};
  }

  ${media.tabletmd} {
    padding: 0.6rem 1.2rem;
    font-size: 14px;
    border-radius: 40px;
  }

  ${media.mobilesm} {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }
`;