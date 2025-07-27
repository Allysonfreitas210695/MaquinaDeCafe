import { useEffect, useState } from "react";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { FaRegStar } from "react-icons/fa";
import { LuClock2 } from "react-icons/lu";
import { IoCartSharp } from "react-icons/io5";
import {
  AvaliacaoCafePayload,
  ITamanhoXicaraProps,
} from "../../service/interface";
import { getAvaliacaoCafe } from "../../service/avaliacao_api";

export interface CoffeeCardProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  preparation: number;
  imageSrc: string;
  tamanhosXicara: ITamanhoXicaraProps[]; 
  isSelected?: boolean;
  onPersonalizar: (
    cafeId: string,
    selectedSize: ITamanhoXicaraProps | undefined,
    cafeData: {
      id: string;
      title: string;
      description: string;
      tag: string;
      preparation: number;
      imageSrc: string;
      tamanhosXicara: ITamanhoXicaraProps[]; 
    }
  ) => void;
  onAddToCart: (
    cafeId: string,
    selectedSize: ITamanhoXicaraProps | undefined,
    cafeData: {
      id: string;
      title: string;
      description: string;
      tag: string;
      preparation: number;
      imageSrc: string;
      tamanhosXicara: ITamanhoXicaraProps[];
    }
  ) => void;
}

export const CafeCard: React.FC<CoffeeCardProps> = ({
  id,
  title,
  description,
  tag,
  preparation,
  imageSrc,
  tamanhosXicara: initialTamanhosXicara,
  onPersonalizar,
  onAddToCart,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tamanhosOrdenados, setTamanhosOrdenados] = useState<ITamanhoXicaraProps[]>([]);
  const [newsAvaliacoes, setNewsAvaliacoes] = useState<AvaliacaoCafePayload[]>([]);

  const selectedCup = activeIndex !== null ? tamanhosOrdenados[activeIndex] : undefined;


  useEffect(() => {
    const ordenado = [...initialTamanhosXicara].sort((a, b) => {
      // Extrai apenas os números da descrição
      const volumeA = parseInt(a.descricao.replace(/\D/g, ""), 10);
      const volumeB = parseInt(b.descricao.replace(/\D/g, ""), 10);
      return volumeA - volumeB;
    });
    setTamanhosOrdenados(ordenado);
    
    if (ordenado.length > 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(null);
    }
  }, [initialTamanhosXicara]);


  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const data = await getAvaliacaoCafe();
        const transformedData = data.map((item) => ({
          cafeId: item.cafeId,
          atendimento: item.atendimento,
          estrelas: item.estrelas,
          observacao: item.observacao,
        }));
        setNewsAvaliacoes(transformedData);
      } catch (error) {
        console.error("Falha ao buscar as Avaliações:", error);
      }
    };
    fetchAvaliacoes();
  }, []);

  const avaliacoesParaEsteCafe = newsAvaliacoes.filter(
    (avaliacao) => avaliacao.cafeId === id
  );

  const mediaEstrelas =
    avaliacoesParaEsteCafe.length > 0
      ? (
          avaliacoesParaEsteCafe.reduce((sum, item) => sum + item.estrelas, 0) /
          avaliacoesParaEsteCafe.length
        ).toFixed(1)
      : "0.0";

  const handlePersonalizarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPersonalizar(id, selectedCup, { 
      id,
      title,
      description,
      tag,
      preparation,
      imageSrc,
      tamanhosXicara: initialTamanhosXicara,
    });
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(id, selectedCup, { 
      id,
      title,
      description,
      tag,
      preparation,
      imageSrc,
      tamanhosXicara: initialTamanhosXicara,
    });
  };

  return (
    <S.CardContainer>
      <S.Image src={imageSrc ?? Images.CafeExpresso} alt={title} />
      <div className="title__description">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <div className="faRegStar">
          <FaRegStar className="star" />
          <span>{mediaEstrelas}</span>
          <LuClock2 />
          <p>{preparation/60} min</p>
        </div>
      </div>
      <S.StyledWrapper>
        {tamanhosOrdenados.map((item, index) => (
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
        <S.PriceCarrinho
          onClick={handleAddToCartClick}
          style={{ cursor: "pointer" }}
        >
          <S.Price>
            <span>
              R${" "}
              {selectedCup
                ? selectedCup.valor.toFixed(2).replace(".", ",")
                : "0,00"}
            </span>
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