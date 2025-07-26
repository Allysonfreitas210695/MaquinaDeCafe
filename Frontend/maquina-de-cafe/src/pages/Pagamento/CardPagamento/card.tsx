import { Images } from "../../../assets/Images";
import * as S from "./style";
import { CardPagamentoProps } from "../../../service/interface";
import { useCart } from "../../Carrinho/CardContext/cardcontext";
import { useNavigate } from "react-router-dom"; 
import { FaTrash } from "react-icons/fa"; 
import Swal from 'sweetalert2'; 

export const CardPagamento = ({
  pedidos,
}: Pick<CardPagamentoProps, "pedidos" | "checkoutPath">) => {
  const { getCartTotal, removeFromCart, cart } = useCart(); 
  const navigate = useNavigate();

  const totalFinal = getCartTotal();

  const handleDeleteItem = (itemId: string) => {
    removeFromCart(itemId);
    if (cart.length - 1 === 0) { 
      Swal.fire({
        icon: "info", 
        title: "Carrinho Vazio!",
        text: "Seu carrinho está vazio. Redirecionando para a página de pedidos.",
        showConfirmButton: false, 
        timer: 3000, 
        timerProgressBar: true, 
      }).then(() => {
        navigate("/pedido"); 
      });
    }
  };

  return (
    <S.StyledWrapper>
      <div className="container">
        <div className="card cart">
          <div className="title">
            <img src={Images.Plus} alt="" />
            <span>Resumo do Pedido</span>
          </div>

          <div className="steps">
            <div className="step">
              <div className="tipos">
                {pedidos.map((item) => (
                  <div key={item.id} className="condeudo__tipos">
                    <div className="tipos__de_cafes">
                      <img src={Images.CafeExpresso} alt="" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.tamanhoSelecionado.descricao}</p>
                        {item.adicionaisSelecionados?.length > 0 && (
                          <span>
                            {item.adicionaisSelecionados
                              .map((adicional) => adicional.nome)
                              .join(" | ")}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="valor-e-acoes">
                      <div className="valor">
                        <span>
                          R$ {item.valorTotalItem.toFixed(2).replace(".", ",")}
                        </span>
                        <p>Qtd: {item.quantidadeNoCarrinho}</p>
                      </div>
                      <div className="acoes">
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="botao-excluir" 
                          title="Remover item"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <S.TotaisResumo>
                <div className="total">
                  <strong>Total:</strong>
                  <span>R$ {totalFinal.toFixed(2).replace(".", ",")}</span>
                </div>
              </S.TotaisResumo>
            </div>
          </div>
        </div>
      </div>
    </S.StyledWrapper>
  );
};