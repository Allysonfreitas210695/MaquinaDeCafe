import { Link } from "react-router-dom";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { CafeCard } from "../../components/CafeCard/cafecard";

interface IFacaPedidoProps {
  Link1: string;
  Link2: string;
  Link3: string;
  Link4: string;
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
  { Link1: "Gelado", Link2: "Quente", Link3: "Especiais", Link4: "Combos" },
];

export const FacaPedido = () => {
  return (
    <S.Container__Pedido_Header>
      {facaPedido.map(({ Link1, Link2, Link3, Link4 }) => (
        <S.Navegacao__Header>
          <S.Header__Logo src={Images.LogoTelaEscolha} />
          <S.Nav>
            <Link className="link" to={""}>
              {Link1}
            </Link>
            <Link className="link" to={""}>
              {Link2}
            </Link>
            <Link className="link" to={""}>
              {Link3}
            </Link>
            <Link className="link" to={""}>
              {Link4}
            </Link>
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
        <Link className="seguir__link" to={""}>
          <img src={Images.Seguir} alt="Seta de Seguir" />
        </Link>
      </S.Button__Seguir>
    </S.Container__Pedido_Header>
  );
};
