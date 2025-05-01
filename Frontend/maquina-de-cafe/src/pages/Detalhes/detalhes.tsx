import { Link } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";

interface CDetalhe {
  Titulo?: string;
  Text?: string;
}

const detalhe: CDetalhe[] = [
  { Titulo: "Canela", Text: "Café e Canela Natural" },
  { Titulo: "Canela", Text: "Café e Canela Natural" },
  { Titulo: "Canela", Text: "Café e Canela Natural" },
];

export const Detalhes = () => {
  return (
    <>
      <S.Container__Detalhes>
        <S.Detalhe__Header>
          <S.Img__Detalhe src={Images.CafeExpresso} />
        </S.Detalhe__Header>

        <S.Detalhes>
          <S.Titulo1>Detalhes</S.Titulo1>
          <S.Titulo2>Veja os itens do seu café:</S.Titulo2>
          <S.Conteudo__Detalhes>
            {detalhe.map(({ Titulo, Text }) => (
              <S.Arry__Detalhe>
                <h3>{Titulo}</h3>
                <p>{Text}</p>
              </S.Arry__Detalhe>
            ))}
          </S.Conteudo__Detalhes>
        </S.Detalhes>
        <S.Button__Detalhe>
            <S.Button__Item>
                <span>R$ 29,90</span>
                <span>4 ITENS</span>
            </S.Button__Item>
            <Link className="item" to={""}>
             <img src={Images.Seguir} alt="Seta de Seguir" />
            </Link>
        </S.Button__Detalhe>
      </S.Container__Detalhes>
    </>
  );
};
