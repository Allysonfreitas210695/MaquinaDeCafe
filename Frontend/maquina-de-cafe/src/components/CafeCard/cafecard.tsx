import { useEffect, useState } from "react";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { FaRegStar } from "react-icons/fa";
import { LuClock2 } from "react-icons/lu";
import { IoCartSharp } from "react-icons/io5";
import { CoffeeCustomizationData } from "../../Service/interface";


export interface CoffeeCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  preparation: number;
  imageSrc: string;
  onCustomize: (data: CoffeeCustomizationData) => void;
  tamanhosXicara: ITamanhoXicaraProps[];
}

interface ITamanhoXicaraProps {
  id: string;
  descricao: string;
  ml: number;
  valor: number;
}

export const CafeCard: React.FC<CoffeeCardProps> = ({
  id,
  title,
  description,
  preparation,
  imageSrc,
  onCustomize,
  tamanhosXicara: initialTamanhosXicara,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tamanhoXicara, setTamanhoXicara] = useState<ITamanhoXicaraProps[]>(initialTamanhosXicara);

  // Calcula o preço final com base na seleção da xícara
  const selectedCup = activeIndex !== null ? tamanhoXicara[activeIndex] : null;

  const handlePersonalizarClick = () => {
    // Monta o objeto com os dados que serão enviados
    const customizationData: CoffeeCustomizationData = {
      id,
      title,
      description,
      imageSrc: imageSrc,
      selectedCupMl: selectedCup?.ml,
      selectedCupDescription: selectedCup?.descricao,
      preparation,
      selectedCupValue: selectedCup?.valor,
    };
    onCustomize(customizationData);
  };

  useEffect(() => {
   setTamanhoXicara(initialTamanhosXicara);
    if (initialTamanhosXicara.length > 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(null); 
    }
  }, [initialTamanhosXicara]);


  return (
    <S.CardContainer>
      <S.Image src={Images.CafeExpresso} alt={title} />
      <div className="title__description">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <div className="faRegStar">
          <FaRegStar className="star" />
          <span>4.6</span>
          <LuClock2 />
          <p>{preparation} min</p>
        </div>
      </div>
      <S.StyledWrapper>
        {tamanhoXicara.map((item , index) => (
          <div key={item.id} className="styledWrapper">
            <S.Wrapper
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <span className="spans">{item.descricao}</span>
            </S.Wrapper>
          </div>
        ))}
      </S.StyledWrapper>

      <S.PriceSection>
        <S.PriceCarrinho >
          <S.Price>
            <span> R$ {selectedCup ? selectedCup.valor.toFixed(2).replace('.', ',') : '0,00'}</span>
          </S.Price>
          <IoCartSharp />
        </S.PriceCarrinho>
        <S.CartButton onClick={handlePersonalizarClick}>
          Personalizar
        </S.CartButton>
      </S.PriceSection>
    </S.CardContainer>
  );
};
