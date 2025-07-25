import { Link, useLocation } from "react-router-dom";
import * as S from "./style";
import { useState, useEffect } from "react";

interface IFacaPedidoProps {
  Link0: string;
  Link1: string;
  Link2: string;
  Link3: string;
  onCategoryChange: (category: string) => void;
}

const facaPedido: IFacaPedidoProps[] = [
  {
    Link0: "Todos",
    Link1: "Quentes",
    Link2: "Gelados",
    Link3: "Voltar",
    onCategoryChange: () => {},
  },
];

export const HeaderNavegacao = ({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void;
}) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  }, [location]);

  const handleMenuItemClick = (index: number, category: string) => {
    setActiveIndex(index);
    if (category !== "Voltar") {
      onCategoryChange(category);
    }
  };

  const paths = {
    Todos: "/pedido",
    Quentes: "/pedido?categoria=quentes",
    Gelados: "/pedido?categoria=gelados",
    Voltar: "/",
  };

  return (
    <>
      {facaPedido.map(({ Link0, Link1, Link2, Link3 }, id) => (
        <S.Navegacao__Header key={id}>
          <S.Nav>
            {[Link0, Link1, Link2, Link3].map((linkLabel, idx) => (
              <S.MenuItem
                key={idx}
                active={activeIndex === idx}
                onClick={() => handleMenuItemClick(idx, linkLabel)}
              >
                <Link
                  className="link"
                  to={paths[linkLabel as keyof typeof paths]}
                  style={linkLabel === "Voltar" ? { color: "#FFFFFF82" } : undefined}
                >
                  {linkLabel}
                </Link>
              </S.MenuItem>
            ))}
          </S.Nav>
        </S.Navegacao__Header>
      ))}
    </>
  );
};
