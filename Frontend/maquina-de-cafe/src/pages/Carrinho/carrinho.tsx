import { Link } from "react-router-dom";
import { HeaderNavegacao } from "../FacaPedido/HeaderNavegacao/navegacao";
import { CardPagamento } from "../Pagamento/CardPagamento/card";
import * as S from "./style";

export const Carrinho = () => {
  const handleCategoryChange = (category: string) => {
    console.log(category);
  };

  return (
    <S.Container__Carrinho>
      <HeaderNavegacao onCategoryChange={handleCategoryChange} />
      <Link className="button" to={"/"}>
        VOLTAR
      </Link>
      <div className="carrinho">
        <CardPagamento />
      </div>
    </S.Container__Carrinho>
  );
};
