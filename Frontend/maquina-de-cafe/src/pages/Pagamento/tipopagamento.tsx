import * as S from "./style";
import { CardPagamento } from "./CardPagamento/card";
import { Images } from "../../assets/Images";
import { Link } from "react-router-dom";

export const TipoPagamento = () => {
  return (
    <S.Container__Tipo_Pagamento>
      <S.Pagamento__Header>
        <S.Titulo__pagamento_Header>Pronto para um Devine Café?</S.Titulo__pagamento_Header>
        <Link className="button" to="">Cancelar</Link>
      </S.Pagamento__Header>
      <S.Tipo__Confirmar_Pagamento>
        <S.Conteudo__Pagamento>
          <S.Tipo__Pagamento>
            <S.Escolha__Pagamento>
              <S.Titulo__Pagamento>
                <img src={Images.Ticket} alt="Imagem de Ticket" />
                Escolha a Forma de Pagamento
              </S.Titulo__Pagamento>
              <S.Button__Forma_Pagamento>
                <S.Button>
                  <button>
                    <img src={Images.vetor} alt="" />
                    <span>Cartão</span>
                    <p>Crédito ou Débito</p>
                  </button>
                </S.Button>
                <S.Button>
                  <button>
                    <img src={Images.Veto1} alt="" />
                    <span>Pix</span>
                    <p>Crédito ou Débito</p>
                  </button>
                </S.Button>
                <S.Button>
                  <button>
                    <img src={Images.Wallet} alt="" />
                    <span>Dinheiro</span>
                    <p>Crédito ou Débito</p>
                  </button>
                </S.Button>
                <S.Button>
                  <button>
                    <img src={Images.Receipt} alt="" />
                    <span>Voucher</span>
                    <p>Crédito ou Débito</p>
                  </button>
                </S.Button>
              </S.Button__Forma_Pagamento>
              <S.Button__Texto>
                <span>
                  Após selecionar, siga as instruções no visor ao lado do totem.
                </span>
                <p>
                  <img
                    src={Images.ShieldCheck}
                    alt="Imagen de   shield-check"
                  />
                  Pagamento 100% seguro
                </p>
              </S.Button__Texto>
            </S.Escolha__Pagamento>
          </S.Tipo__Pagamento>
        </S.Conteudo__Pagamento>
        <CardPagamento />
      </S.Tipo__Confirmar_Pagamento>
    </S.Container__Tipo_Pagamento>
  );
};
