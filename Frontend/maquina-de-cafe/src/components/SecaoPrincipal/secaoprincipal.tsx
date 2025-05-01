import { Link } from "react-router-dom";
import { Images } from "../../assets/Images";
import * as S from "./style";
import React from "react";

interface ISecaoPrincipalProps {
  Titulo: string;
  Discricao: string;
  Button: string;
  Span: string;
}

const secaoPrincipal: ISecaoPrincipalProps[] = [
  {
    Titulo: "NÃO É APENAS UM CAFÉ, É O ",
    Span: " DEVINE CAFÉ!",
    Discricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto velit obcaecati nobis ipsam assumenda quo saepe sed iure repellendus nisi natus, atque totam suscipit, vel vitae asperiores, aspernatur repudiandae. Doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores laudantium ad quis ullam voluptatem, in dolore tempora iusto sint debitis odio aliquid commodi dolorum rerum vel impedit praesentium. Autem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolorem, incidunt, odit optio illo ut maxime aspernatur expedita quae sed asperiores eveniet rerum! Omnis praesentium error mollitia distinctio porro. Porro?",
    Button: "FAÇA SEU PEDIDO",
  },
];

export const SecaoPrincipal = () => {
  return (
    <S.Contaner__Secao_Principal>
      {secaoPrincipal.map(({ Titulo, Discricao, Button, Span }) => (
        <React.Fragment>
          <S.Conteudo__Secao>
            <S.Titulo>
              {Titulo}
              <span>{Span}</span>
            </S.Titulo>
            <S.Descricao>{Discricao}</S.Descricao>
            <S.Button_Secao>
              <Link className="button" to={"/pedido"}>
                {Button}
              </Link>
            </S.Button_Secao>
          </S.Conteudo__Secao>
          <S.Img__Ellipe src={Images.Ellipse} alt="Ellipse" />
          <S.Img__Secao src={Images.XicaraDeCafe} alt="xicara de cafe" />
        </React.Fragment>
      ))}
    </S.Contaner__Secao_Principal>
  );
};
