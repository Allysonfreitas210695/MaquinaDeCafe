import { Link } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { BsColumnsGap } from "react-icons/bs";

interface CDetalhe {
  Titulo?: string;
  Text?: string;
}

const detalhe: CDetalhe[] = [
  { Titulo: "Canela", Text: "Café e Canela Natural" },
  { Titulo: "Canela", Text: "Café e Canela Natural" },
  { Titulo: "Canela", Text: "Café e Canela Natural" },
  { Titulo: "Açucar", Text: "Café e Canela Natural" },
  { Titulo: "Açucar", Text: "Café e Canela Natural" },
  { Titulo: "Açucar", Text: "Café e Canela Natural" },
  { Titulo: "Chocolate", Text: "Café e Canela Natural" },
  { Titulo: "Chocolate", Text: "Café e Canela Natural" },
  { Titulo: "Chocolate", Text: "Café e Canela Natural" },
];

export const Detalhes = () => {
  return (
    <>
      <S.Container__Detalhes>
        <S.Detalhe__Header>
          <S.Img__Detalhe src={Images.Subtract} />
          <S.Detalhe__Titulo0>Devine Café</S.Detalhe__Titulo0>
          <S.Detalhe__Titulo>
            <BsColumnsGap />
            <span>Detalhes</span>
          </S.Detalhe__Titulo>
          <Link className="detalhe" to={"/pedido"}>
            <BsColumnsGap /> Voltar
          </Link>
        </S.Detalhe__Header>

        <S.Detalhes>
          <S.Titulo1>Café Tradicional</S.Titulo1>
          <S.Titulo2>
            O café clássico é o mais concentrado de todos. Contém café feito na
            água.
          </S.Titulo2>
          <h1>Adicionais</h1>
          <S.Conteudo__Detalhes>
            {detalhe.map(({ Titulo, Text }) => (
              <S.Arry__Detalhe>
                <div className="arry__detalhe">
                  <h3>{Titulo}</h3>
                  <p>{Text}</p>
                </div>
                <img src={Images.Mais} alt="" />
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
