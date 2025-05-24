import { Link } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { Svg } from "../../assets/Svg";
import { IoCartSharp } from "react-icons/io5";
import { CafeCard } from "../../components/CafeCard/cafecard";

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
  { Titulo: "Chocolate", Text: "Café e Canela Natural" },
];

export const Adicionais = () => {
  return (
    <>
      <S.Container__Detalhes>
        <S.Detalhe__Header>
          <S.Img__Detalhe src={Svg.Image2} />
        </S.Detalhe__Header>
         <S.Titulo1>Adicionais</S.Titulo1>
         <div className="detalhe__card_cafe">
          <div className="card__cafe">
           <CafeCard
              title="Café Espresso"
              description="O café clássico é o mais concentrado de todos."
              price={6.9}
              tag="TRADICIONAL"
            />
            </div>
        <S.Detalhes>
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
        </div>
        <S.Button__Detalhe>
          <Link className="item" to={""}>
            <IoCartSharp />
          </Link>
        </S.Button__Detalhe>
      </S.Container__Detalhes>
    </>
  );
};
