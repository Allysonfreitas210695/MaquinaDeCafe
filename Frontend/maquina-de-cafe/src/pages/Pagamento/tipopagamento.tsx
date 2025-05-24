import { useState } from "react";
import * as S from "./style";
import { BsCalendar4 } from "react-icons/bs";
import { CardPagamento } from "./CardPagamento/card";

export const TipoPagamento = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <S.Container__Tipo_Pagamento>
      <S.Titulo__Detalhe>
        Confirme os Detalhes e Revise o Pagamento
      </S.Titulo__Detalhe>
      <S.Tipo__Confirmar_Pagamento>
        <S.Conteudo__Pagamento>
          <S.Tipo__Pagamento>
            <S.Titulo__Pagamento>Tipo de Pagamento</S.Titulo__Pagamento>
            <S.Escolha__Pagamento>
              <S.Button
                active={activeIndex === 0}
                onClick={() => setActiveIndex(0)}
              >
                <button>
                  <BsCalendar4 /> Débito
                </button>
              </S.Button>
              <S.Button
                active={activeIndex === 1}
                onClick={() => setActiveIndex(1)}
              >
                <button>
                  <BsCalendar4 /> Crédito
                </button>
              </S.Button>
              <S.Button
                active={activeIndex === 2}
                onClick={() => setActiveIndex(2)}
              >
                <button>
                  <BsCalendar4 /> Especie
                </button>
              </S.Button>
            </S.Escolha__Pagamento>

            <S.Pagamento__Propaganda>
              <div className="propaganda">
                <span>Propaganda</span>
                <button>Ver</button>
              </div>
              <div className="propaganda">
                <span>Propaganda</span>
                <button>Ver</button>
              </div>
            </S.Pagamento__Propaganda>
          </S.Tipo__Pagamento>
        </S.Conteudo__Pagamento>
        <CardPagamento />
      </S.Tipo__Confirmar_Pagamento>
    </S.Container__Tipo_Pagamento>
  );
};
