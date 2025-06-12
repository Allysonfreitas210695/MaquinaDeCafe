import { useEffect, useState } from "react";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { FaRegStar } from "react-icons/fa";
import { LuClock2 } from "react-icons/lu";
import { getTamanhoXicara } from "../../Service/apiService";
import { IoCartSharp } from "react-icons/io5";

export interface CoffeeCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  tag: string;
  preparation: number;
  isSelected: boolean;
  onSelectToggle: (id: string) => void;
}

interface ITamanhoXicaraProps {
  id: string;
  descricao: string;
  ml: number;
  valorExtra: number;
}

export const CafeCard: React.FC<CoffeeCardProps> = ({
  id,
  title,
  description,
  price,
  preparation,
  //isSelected,
  onSelectToggle,
}) => {
  const handleAddToCart = () => {
    onSelectToggle(id);
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tamanhoXicara, setTamanhoXicara] = useState<ITamanhoXicaraProps[]>([]);

  useEffect(() => {
    const effectTamanhoXicara = async () => {
      const data = await getTamanhoXicara();
      const transformedData = data.map((item) => ({
        id: item.id,
        descricao: item.descricao,
        ml: item.ml,
        valorExtra: item.valorExtra,
      })).slice(0, 3);
      setTamanhoXicara(transformedData);
    };
    effectTamanhoXicara();
  }, []);

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
        {tamanhoXicara.map(({ descricao }, index) => (
          <div className="styledWrapper">
            <S.Wrapper
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <span className="spans">{descricao}</span>
            </S.Wrapper>
           
          </div>
        ))}
      </S.StyledWrapper>

      <S.PriceSection>
        <S.PriceCarrinho>  
        <S.Price>
          <span> R$ </span>
          {price.toFixed(2).replace(".", ",")}
        </S.Price>
        <IoCartSharp /> 
        </S.PriceCarrinho> 
        <S.CartButton
          onClick={handleAddToCart}
          //style={{ border: `3px solid ${isSelected ? "#36C07E" : "#ccc"}` }}
        >
          Personalizar
        </S.CartButton>
      </S.PriceSection>
    </S.CardContainer>
  );
};
