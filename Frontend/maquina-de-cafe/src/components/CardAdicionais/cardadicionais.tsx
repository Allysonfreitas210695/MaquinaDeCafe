import { useEffect, useState } from "react";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { CoffeeCustomizationData, SelectedAdicional } from "../../Service/interface";



interface CardAdicionaisProps {
  cafeData: CoffeeCustomizationData;
  selectedAdicionais: SelectedAdicional[];
}

export const CardAdicionais: React.FC<CardAdicionaisProps> = ({
  cafeData,
  selectedAdicionais,
}) => {
  const [activeIndexTa, setActiveIndexTa] = useState<number | null>(null);
  const [activeIndexLit, setActiveIndexLit] = useState<number | null>(null);

  const [selectedCupMl, setSelectedCupMl] = useState<number | undefined>(
    cafeData.selectedCupMl
  );

  // Funções para atualizar a seleção
  const handleCupSelect = (ml: number) => setSelectedCupMl(ml);

  const cupOptions = [50, 100, 150];

  useEffect(() => {
    if (cafeData.selectedCupMl) {
      const initialIndex = cupOptions.findIndex(
        (ml) => ml === cafeData.selectedCupMl
      );
      if (initialIndex !== -1) {
        //setActiveIndexTx(initialIndex);
      }
    }
  }, [cafeData.selectedCupMl]);

  const calculateTotal = () => {
    let total = cafeData.selectedCupValue || 0;

    selectedAdicionais.forEach((adicional) => {
      total += adicional.valorExtra * adicional.quantidade;
    });

    return total;
  };

  return (
    <S.Container__Card_Adicionais>
      <S.Titulo_Adicionais>
        <span>{cafeData.title}</span>
        <p>Personalizado</p>
      </S.Titulo_Adicionais>
      <S.Imag src={cafeData.imageSrc} />
      <S.StyledWrapper__Adicionais>
        <div className="tamanho_da_xicra">
          <S.Wrapper__Adicionais_Tx
            active={selectedCupMl === 50}
            onClick={() => handleCupSelect(50)}
          >
            <span>50 ml</span>
          </S.Wrapper__Adicionais_Tx>
          <S.Wrapper__Adicionais_Tx
            active={selectedCupMl === 100}
            onClick={() => handleCupSelect(100)}
          >
            <span>100 ml</span>
          </S.Wrapper__Adicionais_Tx>
          <S.Wrapper__Adicionais_Tx
            active={selectedCupMl === 150}
            onClick={() => handleCupSelect(150)}
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
            <span>Mascavo</span>
          </S.Wrapper__Adicionais_Ta>
          <S.Wrapper__Adicionais_Ta
            active={activeIndexTa === 2}
            onClick={() => setActiveIndexTa(2)}
          >
            <span>Adoçante</span>
          </S.Wrapper__Adicionais_Ta>
          <S.Wrapper__Adicionais_Ta
            active={activeIndexTa === 3}
            onClick={() => setActiveIndexTa(3)}
          >
            <span>S/ Açucar</span>
          </S.Wrapper__Adicionais_Ta>
        </div>

        <div className="tipos_de_leite">
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 0}
            onClick={() => setActiveIndexLit(0)}
          >
            <span>Integral</span>
          </S.Wrapper__Adicionais_Leite>
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 1}
            onClick={() => setActiveIndexLit(1)}
          >
            <span>Desnatado</span>
          </S.Wrapper__Adicionais_Leite>
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 2}
            onClick={() => setActiveIndexLit(2)}
          >
            <span>0 Lactose</span>
          </S.Wrapper__Adicionais_Leite>
          <S.Wrapper__Adicionais_Leite
            active={activeIndexLit === 3}
            onClick={() => setActiveIndexLit(3)}
          >
            <span>S/ Leite</span>
          </S.Wrapper__Adicionais_Leite>
        </div>
      </S.StyledWrapper__Adicionais>
      <S.Mais__Adicionais>
        {selectedAdicionais.length > 0 ? (
          <>
            <div className="tipos__adicionais">
              {selectedAdicionais.map((adicional) => (
                <span key={adicional.id}>
                  {" "}
                  <img src={Images.Plus} alt="imagem de mais" />
                  {adicional.nome}{" "}
                  {adicional.quantidade > 1 ? `(${adicional.quantidade}x)` : ""}
                </span>
              ))}
            </div>
            <div className="valores">
              {selectedAdicionais.map((adicional) => (
                <p key={`valor-${adicional.id}`}>
                  R${" "}
                  {(adicional.valorExtra * adicional.quantidade)
                    .toFixed(2)
                    .replace(".", ",")}
                </p>
              ))}
            </div>
          </>
        ) : (
          <p style={{ textAlign: "center", width: "100%", color: "#666" }}>
            Nenhum adicional selecionado.
          </p>
        )}
      </S.Mais__Adicionais>
      <S.Total>
        <h1>Total</h1>
        <span>R$ {calculateTotal().toFixed(2).replace(".", ",")}</span>
      </S.Total>
      <S.Button__Finalizar>Finalizar Personalização</S.Button__Finalizar>
    </S.Container__Card_Adicionais>
  );
};
