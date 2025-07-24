import { Images } from "../../assets/Images";
import * as S from "./style";
import {
  CoffeeCustomizationData,
  SelectedAdicional,
} from "../../Service/interface";

const TIPOS_ACUCAR = ["Acucar", "Mascavo", "Adocante", "SemAcucar"];
const TIPOS_LEITE = ["Integral", "Desnatado", "ZeroLactose", "SemLeite"];

interface CardAdicionaisProps {
  cafeData: CoffeeCustomizationData;
  selectedAdicionais: SelectedAdicional[];
  selectedLeite: string | null;
  selectedAcucar: string | null;
  onSelectLeite: (tipo: string) => void;
  onSelectAcucar: (tipo: string) => void;
  onFinalizar: () => void;
  buttonText: string;
}

export const CardAdicionais: React.FC<CardAdicionaisProps> = ({
  cafeData,
  selectedAdicionais,
  selectedLeite,
  selectedAcucar,
  onSelectLeite,
  onSelectAcucar,
  onFinalizar,
  buttonText
}) => {
  const selectedTamanho = cafeData.tamanhoSelecionado;

  const calculateTotal = () => {
    let total = selectedTamanho ? selectedTamanho.valor : 0;

    selectedAdicionais.forEach((adicional) => {
      total += adicional.valorExtra * adicional.quantidade;
    });

    return total;
  };
  const total = calculateTotal();

  return (
    <S.Container__Card_Adicionais>
      <S.Titulo_Adicionais>
        <span>{cafeData.title}</span>
        <p>Personalizado</p>
      </S.Titulo_Adicionais>
      <S.Imag src={cafeData.imageSrc} />

      <S.StyledWrapper__Adicionais>
        <div className="tamanho_da_xicra">
          {cafeData.tamanhosXicara?.length ? (
            cafeData.tamanhosXicara.map((tamanho) => (
              <S.Wrapper__Adicionais_Tx
                key={tamanho.id}
                $active={selectedTamanho?.id === tamanho.id}
              >
                <span>{tamanho.descricao}</span>
              </S.Wrapper__Adicionais_Tx>
            ))
          ) : selectedTamanho ? (
            <S.Wrapper__Adicionais_Tx $active={true}>
              <span>{selectedTamanho.descricao}</span>
            </S.Wrapper__Adicionais_Tx>
          ) : (
            <span>Tamanho não especificado.</span>
          )}
        </div>
      </S.StyledWrapper__Adicionais>

      {/* Tipo de Açúcar */}
      <S.StyledWrapper__Adicionais>
        <div className="tipo_de_acucar">
          {TIPOS_ACUCAR.map((tipo) => (
            <S.Wrapper__Adicionais_Tx
              key={tipo}
              $active={selectedAcucar === tipo}
              onClick={() => onSelectAcucar(tipo)}
            >
              <span>{tipo === "SemAcucar" ? "S/ Açúcar" : tipo}</span>
            </S.Wrapper__Adicionais_Tx>
          ))}
        </div>
      </S.StyledWrapper__Adicionais>

      {/* Tipo de Leite */}
      <S.StyledWrapper__Adicionais>
        <div className="tipo_de_leite">
          {TIPOS_LEITE.map((tipo) => (
            <S.Wrapper__Adicionais_Tx
              key={tipo}
              $active={selectedLeite === tipo}
              onClick={() => onSelectLeite(tipo)}
            >
              <span>{tipo === "SemLeite" ? "S/ Leite" : tipo}</span>
            </S.Wrapper__Adicionais_Tx>
          ))}
        </div>
      </S.StyledWrapper__Adicionais>

      {/* Adicionais selecionados */}
      <S.Mais__Adicionais>
        {selectedAdicionais.length > 0 ? (
          <>
            <div className="tipos__adicionais">
              {selectedAdicionais.map((adicional) => (
                <span key={adicional.id}>
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
        <span>R$ {total.toFixed(2).replace(".", ",")}</span>
      </S.Total>

      <S.Div__Botao>
        <button onClick={onFinalizar}>{buttonText}</button>
      </S.Div__Botao>
    </S.Container__Card_Adicionais>
  );
};