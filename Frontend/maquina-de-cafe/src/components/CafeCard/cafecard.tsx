import { useEffect, useState } from "react";
import * as S from "./style";
import { Images } from "../../assets/Images";
import { FaRegStar } from "react-icons/fa";
import { LuClock2 } from "react-icons/lu";
import { IoCartSharp } from "react-icons/io5";
import {
  ApiTamanhoXicara,
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
  isSelected: boolean;
  onToggleSelect: (
    cafeId: string,
    isSelected: boolean,
    selectedSize: ApiTamanhoXicara | undefined,
    cafeData: {
      id: string;
      title: string;
      description: string;
      tag: string;
      preparation: number;
      imageSrc: string;
      tamanhosXicara: ApiTamanhoXicara[];
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
  isSelected,
  onToggleSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [tamanhoXicara, setTamanhoXicara] = useState<ITamanhoXicaraProps[]>(
    initialTamanhosXicara
  );
  const [newsAvaliacoes, setNewsAvaliacoes] = useState<AvaliacaoCafePayload[]>(
    []
  );

  // Calcula o preço final com base na seleção da xícara
  const selectedCup = activeIndex !== null ? tamanhoXicara[activeIndex] : null;

  // Função para lidar com a seleção/desseleção do card
  const handleSelectToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSelect(id, !isSelected, selectedCup || undefined, {
      id: id,
      title: title,
      description: description,
      tag: tag,
      preparation: preparation,
      imageSrc: imageSrc,
      tamanhosXicara: initialTamanhosXicara,
    });
  };

  // Função de ordenar o volume do café em ordem crescente
  useEffect(() => {
    const ordenado = [...initialTamanhosXicara].sort((a, b) => {
      // Pega só os digitos da descrição
      const volumeA = parseInt(a.descricao.replace(/\D/g, ""), 10);
      const volumeB = parseInt(b.descricao.replace(/\D/g, ""), 10);
      return volumeA - volumeB;
    });

    setTamanhoXicara(ordenado);

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

  return (
    <S.CardContainer>
      <S.Image src={Images.CafeExpresso} alt={title} />
      <div className="title__description">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <div className="faRegStar">
          <FaRegStar className="star" />
          <span>{mediaEstrelas}</span>
          <LuClock2 />
          <p>{preparation} min</p>
        </div>
      </div>
      <S.StyledWrapper>
        {tamanhoXicara.map((item, index) => (
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
        <S.PriceCarrinho>
          <S.Price>
            <span>
              {" "}
              R${" "}
              {selectedCup
                ? selectedCup.valor.toFixed(2).replace(".", ",")
                : "0,00"}
            </span>
          </S.Price>
          <IoCartSharp />
        </S.PriceCarrinho>
        <S.CartButton onClick={handleSelectToggle}>Personalizar</S.CartButton>
      </S.PriceSection>
    </S.CardContainer>
  );
};
