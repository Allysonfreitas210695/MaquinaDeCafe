import { Link } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { IoCartSharp } from "react-icons/io5";
import { useState } from "react";

interface CDetalhe {
  Titulo?: string;
  Text?: string;
  price?: number;
  imagem: string;
}

const detalhe: CDetalhe[] = [
  { Titulo: "Canela", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Canela", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Canela", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Açucar", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Açucar", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Açucar", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Chocolate", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Chocolate", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Chocolate", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
  { Titulo: "Chocolate", Text: "Sachê (5g)", imagem: Images.CafeAmericano },
];

export const Adicionais = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <S.Container__Detalhes>
        <div className="detalhe__card_cafe">
          <div className="card__cafe"></div>
          <S.Detalhes>
            <h1>Adicionais</h1>
            <S.Conteudo__Detalhes>
              {detalhe.map((adicional) => (
                <S.Arry__Detalhe>
                  <img src={adicional.imagem} alt="" />
                  <div className="arry__detalhe">
                    <h3>{adicional.Titulo}</h3>
                    <p>{adicional.Text}</p>
                  </div>
                  <div className="button">
                    <S.Button
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                    >
                      −
                    </S.Button>
                    <span>{quantity}</span>
                    <S.Button onClick={() => setQuantity((prev) => prev + 1)}>
                      +
                    </S.Button>
                  </div>
                </S.Arry__Detalhe>
              ))}
            </S.Conteudo__Detalhes>
          </S.Detalhes>
        </div>
        <S.Button__Detalhe>
          <Link className="item" to={"/carrinho"}>
            <IoCartSharp />
          </Link>
        </S.Button__Detalhe>
      </S.Container__Detalhes>
    </>
  );
};
