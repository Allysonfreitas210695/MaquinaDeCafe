import { useState } from "react";
import { Images } from "../../assets/Images";
import * as S from "./style";

export const CardAdicionais = () => {
  const [activeIndexTx, setActiveIndexTx] = useState<number | null>(null);
  const [activeIndexTa, setActiveIndexTa] = useState<number | null>(null);
  const [activeIndexLit, setActiveIndexLit] = useState<number | null>(null);
  return (
    <S.Container__Card_Adicionais>
      <S.Titulo_Adicionais>
        <span>Café Expresso</span>
        <p>Personalizado</p>
      </S.Titulo_Adicionais>
      <S.Imag src={Images.CafeExpresso} />
      <S.StyledWrapper__Adicionais>
        <div className="tamanho_da_xicra">
          <S.Wrapper__Adicionais_Tx
            active={activeIndexTx === 0}
            onClick={() => setActiveIndexTx(0)}
          >
            <span>50 ml</span>
          </S.Wrapper__Adicionais_Tx>
          <S.Wrapper__Adicionais_Tx
            active={activeIndexTx === 1}
            onClick={() => setActiveIndexTx(1)}
          >
            <span>100 ml</span>
          </S.Wrapper__Adicionais_Tx>
          <S.Wrapper__Adicionais_Tx
            active={activeIndexTx === 2}
            onClick={() => setActiveIndexTx(2)}
          >
            <span>150 ml</span>
          </S.Wrapper__Adicionais_Tx>
        </div>
        <div className="tipos_de_acucar">
          <S.Wrapper__Adicionais_Ta
            active={activeIndexTa === 0}
            onClick={() => setActiveIndexTa(0)}
          >
            <span>Açucar</span>
          </S.Wrapper__Adicionais_Ta>
          <S.Wrapper__Adicionais_Ta
            active={activeIndexTa === 1}
            onClick={() => setActiveIndexTa(1)}
          >
            <span>S/ Açucar</span>
          </S.Wrapper__Adicionais_Ta>
          <S.Wrapper__Adicionais_Ta
            active={activeIndexTa === 2}
            onClick={() => setActiveIndexTa(2)}
          >
            <span>Adoçante</span>
          </S.Wrapper__Adicionais_Ta>
        </div>

        <div className="tipos_de_leite">
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 0}
            onClick={() => setActiveIndexLit(0)}
          >
            <span>Leite</span>
          </S.Wrapper__Adicionais_Leite>
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 1}
            onClick={() => setActiveIndexLit(1)}
          >
            <span>Integral</span>
          </S.Wrapper__Adicionais_Leite>
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 2}
            onClick={() => setActiveIndexLit(2)}
          >
            <span>S/ Leite</span>
          </S.Wrapper__Adicionais_Leite>
        </div>
      </S.StyledWrapper__Adicionais>
      <S.Mais__Adicionais>
        <div className="tipos__adicionais">
          <span>
            {" "}
            <img src={Images.Plus} alt="imagem de mais" />
            Canela
          </span>
          <span>
            <img src={Images.Plus} alt="imagem de mais" />
            Leite
          </span>
          <span>
            <img src={Images.Plus} alt="imagem de mais" />
            Canela
          </span>
        </div>
        <div className="valores">
          <p>R$ 0.75</p>
          <p>R$ 0.50</p>
          <p>R$ 0.50</p>
        </div>
      </S.Mais__Adicionais>
      <S.Total>
        <h1>Total</h1>
        <span>R$ 12.75</span>
      </S.Total>
      <S.Button__Finalizar>Finalizar Personalização</S.Button__Finalizar>
    </S.Container__Card_Adicionais>
  );
};
