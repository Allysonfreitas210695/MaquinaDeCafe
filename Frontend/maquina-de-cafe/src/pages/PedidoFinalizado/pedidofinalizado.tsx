import { Link } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { BsArrowLeftShort, BsCheck2 } from "react-icons/bs";

export const PedidoFinalizado = () => {
  const pedidos = [
    {
      id: 1,
      titulo: "Café Tradicional",
      ml: "50 ml",
      quant: "Quantidade: 2",
      valor: "R$ 10,00",
    },
    {
      id: 2,
      titulo: "Café Tradicional",
      ml: "50 ml",
      quant: "Quantidade: 2",
      valor: "R$ 10,00",
    },
  ];
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
          {pedidos.map((item) => (
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
          <p>R$ 18,00</p>
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
      <S.Status__do__Pedido>
        <h1>Status do Pedido</h1>
        <div className="status">
          <img src={Images.pedidoconfirmado} alt="" />
          <div className="confirmado">
            <span>Pedido Confirmado</span>
            <p>14:30</p>
          </div>
        </div>
        <div className="preparo">
          <img src={Images.empreparo} alt="" />
          <div className="em_preparo">
            <span>Em Preparo</span>
            <p>Agora</p>
          </div>
        </div>
        <div className="retirada">
          <img src="" alt="" />
          <div className="pronto_retirada">
            <span>Pronto para Retirada</span>
            <p>Em breve</p>
          </div>
        </div>
      </S.Status__do__Pedido>
      <S.Button__Pedido>
        <Link className="finalizar__pedido" to={""}>
          Finalizar Pedido
        </Link>
        <Link className="cancelar__pedido" to={"/cancelado"}>
          Cancelar Pedido
        </Link>
      </S.Button__Pedido>
      <S.Preferencia>Obrigado pela preferência!</S.Preferencia>
    </S.Container__Pedido_Finalizado>
  );
};
