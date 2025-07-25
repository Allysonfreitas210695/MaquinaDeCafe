import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useCart } from "./CardContext/cardcontext";
import { CardPagamento } from "../Pagamento/CardPagamento/card";

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

  const handleConfirmarPagamento = () => {
    navigate("/pagamento");
  };

  return (
    <S.Container__Carrinho>
      <S.BotoesTopo>
        <button onClick={handleCancelar}>Cancelar</button>
      </S.BotoesTopo>

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
