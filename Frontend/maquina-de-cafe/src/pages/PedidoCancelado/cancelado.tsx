import { Link } from "react-router-dom";
import * as S from "./style";
import { Images } from "../../assets/Images";

export const PedidoCancelado = () => {
  return (
      <S.Container__Pedido_Cancelado>
        <S.Header__Pedido_Cancelado>Pedido Cancelado</S.Header__Pedido_Cancelado>
      <S.Pedido__Cancelado>
        <img src={Images.cancelado} alt="imagem de x" />
        <span>Pedido Cancelado</span>
        <p>Seu pedido foi cancelado com sucesso.</p>
      </S.Pedido__Cancelado>
      <S.Button__Novo_Pedido>
        <Link className="novo__pedido" to="/pedido">Novo Pedido</Link>
      </S.Button__Novo_Pedido>
    </S.Container__Pedido_Cancelado>
  );
};
