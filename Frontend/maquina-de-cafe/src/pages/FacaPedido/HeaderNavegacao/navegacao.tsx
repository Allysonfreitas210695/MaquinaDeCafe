import { Link } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";

interface IFacaPedidoProps {
  Link0: string;
  Link1: string;
  Link2: string;
 
  onCategoryChange: (category: string) => void; // Nova propriedade: uma função que recebe uma string (a categoria)
}

const facaPedido: IFacaPedidoProps[] = [
  {
    Link0: "Todos",
    Link1: "Quentes",
    Link2: "Gelados",
 
  
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
      {facaPedido.map(({ Link0, Link1, Link2 }, id) => (
        <S.Navegacao__Header key={id}>
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
          </S.Nav>
        </S.Navegacao__Header>
      ))}
    </>
  );
};
