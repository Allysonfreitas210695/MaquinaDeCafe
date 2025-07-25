import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import { useState, useEffect } from "react";

interface IMenuItem {
  label: string;
  path: string;
}

const menuItems: IMenuItem[] = [
  { label: "Todos", path: "/pedido" },
  { label: "Quentes", path: "/pedido?categoria=quentes" },
  { label: "Gelados", path: "/pedido?categoria=gelados" },
  { label: "Voltar", path: "/" },
];

interface HeaderNavegacaoProps {
  onCategoryChange: (category: string) => void;
}

export const HeaderNavegacao = ({ onCategoryChange }: HeaderNavegacaoProps) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {}, [location]);

  const handleMenuItemClick = (index: number, category: string) => {
    setActiveIndex(index);
    if (category !== "Voltar") {
      onCategoryChange(category);
    }
  };

  return (
    <S.Navegacao__Header>
      <S.Nav>
        {menuItems.map((item, index) => (
          <S.MenuItem
            key={item.label} // ✅ Usando label como key
            active={activeIndex === index}
            onClick={() => handleMenuItemClick(index, item.label)}
          >
            <Link
              className="link"
              to={item.path}
              style={item.label === "Voltar" ? { color: "#FFFFFF82" } : undefined}
            >
              {item.label}
            </Link>
          </S.MenuItem>
        ))}
      </S.Nav>
    </S.Navegacao__Header>
  );
};