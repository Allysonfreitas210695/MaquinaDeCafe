import logo from "../../../assets/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import { useState, useEffect } from "react";
import { useCart } from '../../../pages/Carrinho/CardContext/cardcontext';

interface IMenuItem {
  label: string;
  path: string;
}

const menuItems: IMenuItem[] = [
  { label: "Todos", path: "/pedido" },
  { label: "Quentes", path: "/pedido?categoria=quentes" },
  { label: "Gelados", path: "/pedido?categoria=gelados" },
];

interface HeaderNavegacaoProps {
  onCategoryChange: (category: string) => void;
}

export const HeaderNavegacao = ({ onCategoryChange }: HeaderNavegacaoProps) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const { clearCart } = useCart();

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    const foundIndex = menuItems.findIndex(item => item.path === currentPath);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  }, [location]);

  const handleMenuItemClick = (index: number, category: string) => {
    setActiveIndex(index);
    onCategoryChange(category);
  };

  const handleLogoClick = () => {
    clearCart();
  };

  return (
    <S.Navegacao__Header>
      <Link to="/" onClick={handleLogoClick}>
        <img
          src={logo}
          alt="Logo Devine Café"
          style={{ height: "40px"}}
        />
      </Link>

      <S.NavContainer>
        <S.Nav>
          {menuItems.map((item, index) => (
            <S.MenuItem
              key={item.label}
              active={activeIndex === index}
              onClick={() => handleMenuItemClick(index, item.label)}
            >
              <Link className="link" to={item.path}>
                {item.label}
              </Link>
            </S.MenuItem>
          ))}
        </S.Nav>
      </S.NavContainer>
    </S.Navegacao__Header>
  );
};