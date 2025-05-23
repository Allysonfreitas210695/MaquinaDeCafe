import { Link } from "react-router-dom";
import * as S from "./style";
import { CafeCard } from "../../components/CafeCard/cafecard";
import { useState } from "react";

interface IFacaPedidoProps {
  Link0: string;
  Link1: string;
  Link2: string;
  Link3: string;
  Link4: string;
  Link5: string;
  Link6: string;
}

const cafes = [
  {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
  {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
  {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
  {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
    {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
    {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
    {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
    {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
    {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
    {
    title: "Café Espresso",
    description: "O café clássico é o mais concentrado de todos.",
    price: 6.9,
    tag: "TRADICIONAL",
  },
  
];

const facaPedido: IFacaPedidoProps[] = [
  {
    Link0: "Todos",
    Link1: "Cafés",
    Link2: "Gelado",
    Link3: "Quente",
    Link4: "Especiais",
    Link5: "Combos",
    Link6: "Voltar",
  },
];

export const FacaPedido = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <S.Container__Pedido_Header>
      
      {facaPedido.map(
        ({ Link0, Link1, Link2, Link3, Link4, Link5, Link6 }) => (
          <S.Navegacao__Header>
            <S.Nav>
              <S.MenuItem
                active={activeIndex === 0}
                onClick={() => setActiveIndex(0)}
              >
                <Link className="link" to="">
                  {Link0}
                </Link>
              </S.MenuItem>
              <S.MenuItem
                active={activeIndex === 1}
                onClick={() => setActiveIndex(1)}
              >
                <Link className="link" to="">
                  {Link1}
                </Link>
              </S.MenuItem>
              <S.MenuItem
                active={activeIndex === 2}
                onClick={() => setActiveIndex(2)}
              >
                <Link className="link" to="">
                  {Link2}
                </Link>
              </S.MenuItem>
              <S.MenuItem
                active={activeIndex === 3}
                onClick={() => setActiveIndex(3)}
              >
                <Link className="link" to="">
                  {Link3}
                </Link>
              </S.MenuItem>
              <S.MenuItem
                active={activeIndex === 4}
                onClick={() => setActiveIndex(4)}
              >
                <Link className="link" to="">
                  {Link4}
                </Link>
              </S.MenuItem>
              <S.MenuItem
                active={activeIndex === 5}
                onClick={() => setActiveIndex(5)}
              >
                <Link className="link" to="">
                  {Link5}
                </Link>
              </S.MenuItem>
              <S.MenuItem
                active={activeIndex === 6}
                onClick={() => setActiveIndex(6)}
              >
                <Link className="link" to="">
                  {Link6}
                </Link>
              </S.MenuItem>
            </S.Nav>
          </S.Navegacao__Header>
        )
      )}

      <S.Pedido__Escolha>
        <S.Container__Card>
          {cafes.map(({ title, description, price, tag }) => (
            <CafeCard
              title={title}
              description={description}
              price={price}
              tag={tag}
            />
          ))}
        </S.Container__Card>
      </S.Pedido__Escolha>
      <S.Header__Titulo>Devine Café</S.Header__Titulo>
    </S.Container__Pedido_Header>
  );
};
