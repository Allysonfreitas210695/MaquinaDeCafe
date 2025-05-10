import { Link } from "react-router-dom";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { CafeCard } from "../../components/CafeCard/cafecard";
import { useState } from "react";
import { BsColumnsGap } from "react-icons/bs";

interface IFacaPedidoProps {
  Link0: string;
  Link1: string;
  Link2: string;
  Link3: string;
  Link4: string;
  Link5: string;
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
];

const facaPedido: IFacaPedidoProps[] = [
  {
    Link0: "Cafés",
    Link1: "Gelado",
    Link2: "Quente",
    Link3: "Especiais",
    Link4: "Combos",
    Link5: "Voltar",
  },
];

export const FacaPedido = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <S.Container__Pedido_Header>
      {facaPedido.map(({ Link0, Link1, Link2, Link3, Link4, Link5 }) => (
        <S.Navegacao__Header>
          <img src={Images.Subtract} alt="" />
          <S.Header__Titulo>Devine Café</S.Header__Titulo>
          <S.Cafes>
            <Link className="links" to="">
              <BsColumnsGap />
              {Link0}
            </Link>
          </S.Cafes>
          <S.Nav>
            <S.MenuItem
              active={activeIndex === 1}
              onClick={() => setActiveIndex(1)}
            >
              <Link className="link" to="">
                <BsColumnsGap />
                {Link1}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 2}
              onClick={() => setActiveIndex(2)}
            >
              <Link className="link" to="">
                <BsColumnsGap />
                {Link2}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 3}
              onClick={() => setActiveIndex(3)}
            >
              <Link className="link" to="">
                <BsColumnsGap />
                {Link3}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 4}
              onClick={() => setActiveIndex(4)}
            >
              <Link className="link" to="">
                <BsColumnsGap />
                {Link4}
              </Link>
            </S.MenuItem>
            <S.MenuItem
              active={activeIndex === 5}
              onClick={() => setActiveIndex(5)}
            >
              <Link className="link" to="">
                <BsColumnsGap />
                {Link5}
              </Link>
            </S.MenuItem>
          </S.Nav>
        </S.Navegacao__Header>
      ))}

      <S.Pedido__Escolha>
        <S.Titulo>Nossos Cafés</S.Titulo>
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
      <S.Button__Seguir>
        <Link className="seguir__link" to={"/detalhe"}>
          <img src={Images.Seguir} alt="Seta de Seguir" />
        </Link>
      </S.Button__Seguir>
    </S.Container__Pedido_Header>
  );
};
