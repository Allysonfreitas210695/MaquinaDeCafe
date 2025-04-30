import { IconType } from "react-icons";
import { Images } from "../../assets/Images";
import * as S from "./style";
import { IoCartSharp } from "react-icons/io5";
import React from "react";

interface IHeaderProps {
  Localizacao: string;
  Icon: IconType;
}

const headerProps: IHeaderProps[] = [
  { Localizacao: "Pau dos Ferros, RN", Icon: IoCartSharp },
];

export const Header = () => {
  return (
    <S.Container__Header>
      {headerProps.map(({ Localizacao, Icon }) => (
        <React.Fragment>
          <S.Logo__Header src={Images.Logo} />
          <S.Conteudo__Header>
            <S.Localizacao>
              <S.Span>{Localizacao}</S.Span>
            </S.Localizacao>
            <S.Carrinho>{<Icon />}</S.Carrinho>
          </S.Conteudo__Header>
        </React.Fragment>
      ))}
    </S.Container__Header>
  );
};
