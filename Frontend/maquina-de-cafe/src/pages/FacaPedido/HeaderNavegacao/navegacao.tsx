import { Link } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";

interface IFacaPedidoProps {
  Link0: string;
  Link1: string;
  Link2: string;
  Link3: string;
  Link4: string;
  Link5: string;
  Link6: string;
  onCategoryChange: (category: string) => void; // Nova propriedade: uma função que recebe uma string (a categoria)
}

const facaPedido: IFacaPedidoProps[] = [
  {
    Link0: "Todos",
    Link1: "Tradicionais",
    Link2: "Especiais",
    Link3: "Gelados",
    Link4: "Quentes",
    Link5: "Combos",
    Link6: "Voltar",
    onCategoryChange: () => {}, // Valor padrão (será sobrescrito pelo componente pai)
  },
];

export const HeaderNavegacao = ({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMenuItemClick = (index: number, category: string) => {
    setActiveIndex(index);
    onCategoryChange(category); // Chama a função passada pelo pai com a categoria
  };

  return (
    <>
      {facaPedido.map(({ Link0, Link1, Link2, Link3, Link4, Link5, Link6 }) => (
        <S.Navegacao__Header>
          <S.Nav>
            <S.MenuItem
              active={activeIndex === 0}
              onClick={() => handleMenuItemClick(0, Link0)}
            >
              <Link className="link" to="">
                {Link0}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 1}
              onClick={() => handleMenuItemClick(1, Link1)}
            >
              <Link className="link" to="">
                {Link1}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 2}
              onClick={() => handleMenuItemClick(2, Link2)}
            >
              <Link className="link" to="">
                {Link2}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 3}
              onClick={() => handleMenuItemClick(3, Link3)}
            >
              <Link className="link" to="">
                {Link3}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 4}
              onClick={() => handleMenuItemClick(4, Link4)}
            >
              <Link className="link" to="">
                {Link4}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 5}
              onClick={() => handleMenuItemClick(5, Link5)}
            >
              <Link className="link" to="">
                {Link5}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 6}
              onClick={() => handleMenuItemClick(6, Link6)}
            >
              <Link className="link" to="">
                {Link6}
              </Link>
            </S.MenuItem>
          </S.Nav>
        </S.Navegacao__Header>
      ))}
    </>
  );
};
