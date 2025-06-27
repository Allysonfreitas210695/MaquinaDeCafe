import { Link } from "react-router-dom";
import { HeaderNavegacao } from "../FacaPedido/HeaderNavegacao/navegacao";
import { CardPagamento } from "../Pagamento/CardPagamento/card";
import * as S from "./style";
import { useCart } from "./CardContext/cardcontext";
import { Images } from "../../assets/Images";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";

export const Carrinho = () => {
  const handleCategoryChange = (category: string) => {
    console.log(category);
  };

  const { cart, removeFromCart, getCartSubtotal, getServiceFee, getCartTotal } =
    useCart();

  return (
    <S.Container__Carrinho>
      <HeaderNavegacao onCategoryChange={handleCategoryChange} />
      <Link className="button" to={"/"}>
        VOLTAR
      </Link>
      <S.Pedido__Escolha_Carrinho>
        <S.Container__Card_Carrinho>
          <div className="card cart" style={{ width: "100%" }}>
            <div className="title">
              <img src={Images.Plus} alt="" />{" "}
              <span>Itens no seu Carrinho</span>
            </div>
            <div className="steps">
              {cart.length === 0 ? (
                <p style={{ padding: "20px", textAlign: "center" }}>
                  Seu carrinho está vazio.
                </p>
              ) : (
                <div className="tipos">
                  {cart.map((item) => (
                    <div key={item.id} className="condeudo__tipos">
                      <div className="tipos__de_cafes">
                        <img
                          src={item.imageSrc || Images.CafeExpresso}
                          alt={item.title}
                        />
                        <div>
                          <h3>{item.title}</h3>
                          {/** <p>{item.tamanhoSelecionado.descricao}</p>
                          <p>Qtd: {item.quantidadeNoCarrinho}</p>*/}
                          <span>{item.description}</span>
                          {/**  {item.adicionaisSelecionados &&
                            item.adicionaisSelecionados.length > 0 && (
                              <span>
                                Com:{" "}
                                {item.adicionaisSelecionados
                                  .map((adicional) => adicional.nome)
                                  .join(", ")}
                              </span>
                            )}*/}
                        </div>
                      </div>
                      <div className="valor">
                        <span>
                          R$ {item.valorTotalItem.toFixed(2).replace(".", ",")}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            marginLeft: "10px",
                          }}
                        >
                          <div className="button__remover_atualizar">
                            <RiDeleteBinLine className="remover" />
                            <Link to={""}>
                              <BsPencil className="atualizar" />
                            </Link>
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </S.Container__Card_Carrinho>
        <div className="carrinho">
          <CardPagamento
            pedidos={cart}
            subtotal={getCartSubtotal()}
            taxaServico={getServiceFee()}
            total={getCartTotal()}
          />
        </div>
      </S.Pedido__Escolha_Carrinho>
    </S.Container__Carrinho>
  );
};
