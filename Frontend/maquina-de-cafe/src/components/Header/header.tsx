
import { Images } from "../../assets/Images";
import * as S from "./style"
import { IoCartSharp } from "react-icons/io5";



export const Header = () => {
    return (
        <S.Container__Header>
            <S.Logo__Header src={Images.Logo}/>
            <S.Conteudo__Header>
                <S.Localizacao>
                    <S.Span>Pau dos Ferros, RN</S.Span>
                </S.Localizacao>
                <S.Carrinho><IoCartSharp /></S.Carrinho>
            </S.Conteudo__Header>
        </S.Container__Header>
    )
}