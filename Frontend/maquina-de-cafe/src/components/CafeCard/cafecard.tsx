import { useState } from "react";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { IoCartSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LuClock2 } from "react-icons/lu";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: number;
  tag?: string;
}

const styledWrapper = [{ ml50: "50 ml", ml100: "100 ml", ml150: "150 ml" }];

export const CafeCard: React.FC<CoffeeCardProps> = ({
  title,
  description,
  price,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 1));

  const [activeIndex, setActiveIndex] = useState(0);

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
          <span>5 min</span>
        </div>
      </div>
      <S.StyledWrapper>
        {styledWrapper.map((item) => (
          <div className="styledWrapper">
            <S.Wrapper
              active={activeIndex === 0}
              onClick={() => setActiveIndex(0)}
            >
              <span className="spans">{item.ml50}</span>
            </S.Wrapper>
            <S.Wrapper
              active={activeIndex === 1}
              onClick={() => setActiveIndex(1)}
            >
              <span className="spans">{item.ml100}</span>
            </S.Wrapper>
            <S.Wrapper
              active={activeIndex === 2}
              onClick={() => setActiveIndex(2)}
            >
              <span className="spans">{item.ml150}</span>
            </S.Wrapper>
          </div>
        ))}
      </S.StyledWrapper>

      <S.PriceSection>
        <S.Price>
          <span> R$ </span>
          {price.toFixed(2).replace(".", ",")}
        </S.Price>
        <S.QuantityControl>
          <S.Button onClick={decrement}>−</S.Button>
          <S.QuantityDisplay>{quantity}</S.QuantityDisplay>
          <S.Button onClick={increment}>+</S.Button>
        </S.QuantityControl>
        <S.CartButton>
          <IoCartSharp />
        </S.CartButton>
      </S.PriceSection>
    </S.CardContainer>
  );
};
