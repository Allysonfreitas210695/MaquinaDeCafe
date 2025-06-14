import { Images } from "../../assets/Images";
import * as S from "./style";
import { useEffect, useState } from "react";
import { HeaderNavegacao } from "../FacaPedido/HeaderNavegacao/navegacao";
import { CardAdicionais } from "../../components/CardAdicionais/cardadicionais";
import { useLocation, useNavigate } from "react-router-dom";
import { CoffeeCustomizationData } from "../../components/CafeCard/cafecard";

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

  const location = useLocation();
  const customizedCafe = location.state?.customizedCafe as CoffeeCustomizationData | undefined;
 

  if (!customizedCafe) {
    return <p>Carregando personalização ou redirecionando...</p>;
  }

  return (
    <>
      <S.Container__Detalhes>
        <HeaderNavegacao />
        <div className="detalhe__card_cafe">
          <div className="card__cafe">
            <CardAdicionais
              cafeData={customizedCafe}
            />
          </div>
          <S.Detalhes>
            <div className="adicionais">
              <img src={Images.addCircle} alt="Imagem de Adiciomar" />
              <h1>Adicionais</h1>
            </div>
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
      </S.Container__Detalhes>
    </>
  );
};
