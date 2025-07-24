import * as S from "./style";
import React from "react";
import { Images } from "../../assets/Images";

interface ISecaoPrincipalProps {
  Titulo: string;
  Button: string;
  Span: string;
}

const secaoPrincipal: ISecaoPrincipalProps[] = [
  {
    Titulo: "Pronto para um Devine Café?",
    Span: "Já bebeu seu café hoje?",
    Button: "Montar meu devine café",
  },
];

export const SecaoPrincipal = () => {
  return (
    <S.Contaner__Secao_Principal>
      {secaoPrincipal.map(({ Titulo, Button, Span }) => (
        <React.Fragment key={Titulo}>
          <S.Conteudo__Secao>
            <span>{Span}</span>
            <S.Titulo>{Titulo}</S.Titulo>
            <S.Descricao>
              <span>
                Descubra o sabor que é a sua cara. Seu café devine, feito sob
                medida.
              </span>
            </S.Descricao>
            <S.Button_Secao to="/pedido">
              <span>{Button}</span>
              <img src={Images.tabler} alt="copo" />
            </S.Button_Secao>
          </S.Conteudo__Secao>
          <S.Img__Secao src={Images.imagehome} alt="xicara de cafe" />
        </React.Fragment>
      ))}
    </S.Contaner__Secao_Principal>
  );
};
