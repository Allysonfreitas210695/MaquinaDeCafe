import { Images } from "../../assets/Images";
import * as S from "./style";
// Importe ITamanhoXicaraProps, já que cafeData.tamanhoSelecionado é desse tipo
import { CoffeeCustomizationData, SelectedAdicional } from "../../Service/interface";


interface CardAdicionaisProps {
  cafeData: CoffeeCustomizationData;
  selectedAdicionais: SelectedAdicional[];
}

export const CardAdicionais: React.FC<CardAdicionaisProps> = ({
  cafeData,
  selectedAdicionais,
}) => {
  const selectedTamanho = cafeData.tamanhoSelecionado;

  const calculateTotal = () => {
    let total = selectedTamanho ? selectedTamanho.valor : 0;

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

      {/* NOVO: Exibir o tamanho da xícara que JÁ FOI SELECIONADO NA PÁGINA ANTERIOR */}
      <S.StyledWrapper__Adicionais>
        <div className="tamanho_da_xicra">
          {selectedTamanho ? (
            <S.Wrapper__Adicionais_Tx active={true}>
              <span>{selectedTamanho.descricao}</span>
            </S.Wrapper__Adicionais_Tx>
          ) : (
            <span>Tamanho não especificado.</span>
          )}
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
    </S.Container__Card_Adicionais>
  );
};