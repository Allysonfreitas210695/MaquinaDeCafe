import { Images } from "../../assets/Images";
import * as S from "./style";
import {
  CoffeeCustomizationData,
  SelectedAdicional,
  ApiTamanhoXicara,
} from "../../service/interface";

const TIPOS_ACUCAR = ["Açucar", "Mascavo", "Adoçante", "S/Açucar"];
const TIPOS_LEITE = ["Integral", "Desnatado", "0 Lactose", "S/Leite"];

interface CardAdicionaisProps {
  cafeData: CoffeeCustomizationData;
  selectedAdicionais: SelectedAdicional[];
  selectedLeite: string | null;
  selectedAcucar: string | null;
  selectedTamanho: ApiTamanhoXicara | null;
  onSelectLeite: (tipo: string) => void;
  onSelectAcucar: (tipo: string) => void;
  onSelectTamanho: (tamanho: ApiTamanhoXicara) => void;
  onFinalizar: () => void;
  isLastCafe: boolean;
}

export const CardAdicionais: React.FC<CardAdicionaisProps> = ({
  cafeData,
  selectedAdicionais,
  selectedLeite,
  selectedAcucar,
  selectedTamanho,
  onSelectLeite,
  onSelectAcucar,
  onSelectTamanho,
  onFinalizar,
  isLastCafe,
}) => {
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
          {cafeData.tamanhosXicara
            ?.slice()
            .sort((a, b) => a.valor - b.valor)
            .map((tamanho) => (
              <S.Wrapper__Adicionais_Tx
                key={tamanho.id}
                $active={selectedTamanho?.id === tamanho.id}
                onClick={() => onSelectTamanho(tamanho)}
                style={{ cursor: "pointer" }}
              >
                <span>{tamanho.descricao}</span>
              </S.Wrapper__Adicionais_Tx>
            ))}
        </div>
      </S.StyledWrapper__Adicionais>

      <S.StyledWrapper__Adicionais>
        <div className="tipo_de_acucar">
          {TIPOS_ACUCAR.map((tipo) => (
            <S.Wrapper__Adicionais_Tx
              key={tipo}
              $active={selectedAcucar === tipo}
              onClick={() => onSelectAcucar(tipo)}
            >
              <span>{tipo}</span>
            </S.Wrapper__Adicionais_Tx>
          ))}
        </div>
      </S.StyledWrapper__Adicionais>

      <S.StyledWrapper__Adicionais>
        <div className="tipo_de_leite">
          {TIPOS_LEITE.map((tipo) => (
            <S.Wrapper__Adicionais_Tx
              key={tipo}
              $active={selectedLeite === tipo}
              onClick={() => onSelectLeite(tipo)}
            >
              <span>{tipo}</span>
            </S.Wrapper__Adicionais_Tx>
          ))}
        </div>
      </S.StyledWrapper__Adicionais>

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

      <S.Div__Botao style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={onFinalizar}>
          {isLastCafe ? "Finalizar" : "Próximo Café"}
        </button>
      </S.Div__Botao>
    </S.Container__Card_Adicionais>
  );
};
