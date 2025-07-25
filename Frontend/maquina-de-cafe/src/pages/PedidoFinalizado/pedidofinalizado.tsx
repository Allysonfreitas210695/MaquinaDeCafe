import { Link, useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { BsArrowLeftShort, BsCheck2 } from "react-icons/bs";
import { CartItem, useCart } from "../Carrinho/CardContext/cardcontext";

export const PedidoFinalizado = () => {
   const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const pedidoItemsReais: CartItem[] = cart;

  const pedidosFormatadosParaExibicao = pedidoItemsReais.map(item => ({
    id: item.id,
    titulo: item.title,
    ml: item.tamanhoSelecionado ? `${item.tamanhoSelecionado.ml} ml` : 'N/A',
    quant: `Quantidade: ${item.quantidadeNoCarrinho || 1}`,
    valor: `R$ ${item.valorTotalItem.toFixed(2).replace(".", ",")}`,
    imageSrc: item.imageSrc || Images.caffee
  }));

  const totalRealDoPedido = pedidoItemsReais.reduce((acc, item) => acc + item.valorTotalItem, 0);

  const handleFinalizarPedido = () => {
    navigate("/feedback", { state: { itemsParaFeedback: pedidoItemsReais } });
    clearCart();
  };

  return (
    <S.Container__Pedido_Finalizado>
      <S.Header__Pedido>
        <BsArrowLeftShort className="short" />
        <h1>Pedido Finalizado</h1>
      </S.Header__Pedido>
      <div className="borda"></div>
      <S.Pedido__Confirmardo>
        <BsCheck2 className="check" />
        <span>Pedido Confirmado!</span>
        <p>Seu pedido foi processado com sucesso.</p>
      </S.Pedido__Confirmardo>
      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Detalhes do Pedido</h1>
          <span>#2025</span>
        </S.Detalhes>
        <S.Pedidos>
          {pedidosFormatadosParaExibicao.map((item) => (
            <S.Item key={item.id}>
              <div className="tipos__pedidos">
                <img src={Images.caffee} alt="imagem de cafe" />
                <div className="pedido">
                  <span>{item.titulo}</span>
                  <p>
                    {item.ml} . {item.quant}
                  </p>
                </div>
              </div>
              <span className="valor">{item.valor}</span>
            </S.Item>
          ))}
        </S.Pedidos>
        <S.Total__Pedido>
          <span>Total</span>
          <p>R$ {totalRealDoPedido.toFixed(2).replace(".", ",")}</p>
        </S.Total__Pedido>
      </S.Detalhe__Pedido>
      <S.Medoto_Pagamento>
        <div className="pagamento">
          <h1>Método de Pagamento</h1>
          <div className="cartao__de_credito">
            <img src={Images.visa} alt="imagem do cartao visa" />
            <div className="cartao">
              <span>Cartão de Crédito</span>
              <p>**** **** **** 1234</p>
            </div>
          </div>
        </div>
        <span className="aprovado">APROVADO</span>
      </S.Medoto_Pagamento>
      <S.Tempo__Preparo>
        <img src={Images.relogio} alt="imagem de relogio" />
        <div className="preparo">
          <h1>Tempo de Preparo</h1>
          <span>8 - 12 </span>
          <p>minutos</p>
        </div>
        <p className="pagragafo">Você será notificado quando estiver pronto.</p>
      </S.Tempo__Preparo>
      <S.Button__Pedido>
        <button className="finalizar__pedido" onClick={handleFinalizarPedido}>
          Finalizar Pedido
        </button>
        <Link className="cancelar__pedido" to={"/cancelado"}>
          Cancelar Pedido
        </Link>
      </S.Button__Pedido>
      <S.Preferencia>Obrigado pela preferência!</S.Preferencia>
    </S.Container__Pedido_Finalizado>
  );
};
