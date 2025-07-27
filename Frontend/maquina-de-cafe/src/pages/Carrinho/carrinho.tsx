import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { CardPagamento } from "../Pagamento/CardPagamento/card";
import { BsArrowLeftShort } from "react-icons/bs";
import { Images } from "../../assets/Images";
import Swal from 'sweetalert2';

export const Carrinho = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const totalFinal = cart.reduce((acc, item) => acc + item.valorTotalItem * item.quantidadeNoCarrinho, 0);

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

  const handleConfirmarPagamento = async () => {
    if (cart.length === 0) {
      await Swal.fire({
        icon: "error",
        title: "Não tem item no seu carrinho",
        text: "Verifique novamente o seu pedido antes de finalizar.",
        confirmButtonText: "Ok"
      });
      return;
    }

    navigate("/pagamento", { state: { cartItems: cart, total: totalFinal } });
  };

  return (
    <S.Container__Carrinho>
      <S.AcoesTopo>
        <BsArrowLeftShort onClick={handleVoltar} className="short" />
        <button onClick={handleCancelar}>Cancelar</button> 
      </S.AcoesTopo>

      <S.Pedido__Escolha_Carrinho>
        {cart.length === 0 ? (
          <S.CarrinhoVazio>
            <p>Seu carrinho está vazio.</p>
            <img src={Images.caffee} alt="Café Vazio" />
            <button onClick={() => navigate('/')}>Voltar ao Início</button>
          </S.CarrinhoVazio>
        ) : (
          <div className="carrinho">
            <CardPagamento pedidos={cart} checkoutPath="/pagamento" />
          </div>
        )}
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