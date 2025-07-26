import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useCart } from "./CardContext/cardcontext";
import { CardPagamento } from "../Pagamento/CardPagamento/card";
import { BsArrowLeftShort } from "react-icons/bs";

export const Carrinho = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const handleCancelar = () => {
    clearCart();
    navigate("/pedido");
  };

  const handleContinuarComprando = () => {
    navigate("/pedido");
  };

  const handleVoltar = () => {
    navigate(-1);
  };

  const handleConfirmarPagamento = () => {
    navigate("/pagamento");
  };

  return (
    <S.Container__Carrinho>
      <S.AcoesTopo>
        <BsArrowLeftShort onClick={handleVoltar} className="short" />
        <button onClick={handleCancelar}>Cancelar</button>
      </S.AcoesTopo>

      <S.Pedido__Escolha_Carrinho>
        <div className="carrinho">
          <CardPagamento pedidos={cart} checkoutPath="/pagamento" />
        </div>
      </S.Pedido__Escolha_Carrinho>

      <S.BotoesRodape>
        <button className="continuar" onClick={handleContinuarComprando}>
          Continuar comprando
        </button>
        <button className="confirmar" onClick={handleConfirmarPagamento}>
          Pagamento
        </button>
      </S.BotoesRodape>
    </S.Container__Carrinho>
  );
};