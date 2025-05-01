import { useState } from "react";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { IoCartSharp } from "react-icons/io5";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: number;
  tag: string;
}

export const CafeCard: React.FC<CoffeeCardProps> = ({
  title,
  description,
  price,
  tag,
}) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <S.CardContainer>
      <S.Image src={Images.CafeExpresso} alt={title} />
      <S.Tag>{tag}</S.Tag>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
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
