import * as S from "./style";
import { CafeCard } from "../../components/CafeCard/cafecard";
import { useEffect, useState } from "react";
import { HeaderNavegacao } from "./HeaderNavegacao/navegacao";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import { ApiTamanhoXicara } from "../../service/interface";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { IoCartSharp } from "react-icons/io5";
import { getCafes } from "../../service/cafe_api";
import Swal from "sweetalert2";

interface TransformedCafe {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  tempoPreparoSegundos: number;
  imagemUrl?: string;
  tamanhosXicara: ApiTamanhoXicara[];
}

export const FacaPedido = () => {
  const [newsPedidos, setNewsPedidos] = useState<TransformedCafe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [errorFetchingCafes, setErrorFetchingCafes] = useState<boolean>(false);
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  async function fetchPedidos() {
    try {
      const data = await getCafes();
      const transformedData = data.map((item) => ({
        id: item.id,
        nome: item.nome,
        descricao: item.descricao,
        categoria: item.categoria,
        tempoPreparoSegundos: item.tempoPreparoSegundos,
        imagemUrl: Images.CafeExpresso,
        tamanhosXicara: item.tamanhosXicara,
      }));
      setNewsPedidos(transformedData);
      setErrorFetchingCafes(false);
    } catch (error) {
      console.error(
        `Erro ao buscar cafés: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      setErrorFetchingCafes(true);
    }
  }

  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCafes = newsPedidos.filter((cafe) => {
    if (selectedCategory === "Todos") {
      return true;
    }
    return cafe.categoria.toLowerCase() === selectedCategory.toLowerCase();
  });

  const handlePersonalizar = (
    cafeId: string,
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
  ) => {
    console.log(cafeId);
    if (!selectedSize) {
      return Swal.fire({
        icon: "warning",
        title: "Selecione um tamanho",
        text: "Por favor, selecione um tamanho de xícara para personalizar.",
      });
    }
    navigate("/adicionais", {
      state: {
        coffeesToCustomize: [{ ...cafeData, tamanhoSelecionado: selectedSize }],
        currentIndex: 0,
      },
    });
  };

  // Funçao para adicionar direto ao carrinho com validação de 10 itens no total
  const handleAddDirect = (
    cafe: TransformedCafe,
    selectedSizeFromCard: ApiTamanhoXicara | undefined 
  ) => {
    const totalNoCarrinho = cart.reduce(
      (total, item) => total + item.quantidadeNoCarrinho,
      0
    );

    if (totalNoCarrinho >= 10) {
      return Swal.fire({
        icon: "warning",
        title: "Limite atingido!",
        text: "Você só pode adicionar até 10 itens ao carrinho.",
      });
    }

    if (!selectedSizeFromCard) {
        return Swal.fire({
            icon: "warning",
            title: "Selecione um tamanho",
            text: "Por favor, selecione um tamanho de xícara para adicionar ao carrinho.",
        });
    }

    const novoItem = {
      id: cafe.id + "-" + Date.now(),
      title: cafe.nome,
      description: cafe.descricao,
      tag: cafe.categoria,
      preparation: cafe.tempoPreparoSegundos,
      imageSrc: cafe.imagemUrl ?? Images.CafeExpresso,
      tamanhoSelecionado: selectedSizeFromCard, 
      adicionaisSelecionados: [],
      quantidadeNoCarrinho: 1,
      valorTotalItem: selectedSizeFromCard.valor,
    };

    addToCart(novoItem);
    return Swal.fire({
      icon: "success",
      title: "Adicionado ao carrinho!",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  if (errorFetchingCafes) {
    return (
      <S.Container__Pedido_Header>
        Ocorreu um erro ao carregar os cafés. Tente novamente mais tarde.
      </S.Container__Pedido_Header>
    );
  }

  return (
    <S.Container__Pedido_Header>
      <HeaderNavegacao onCategoryChange={handleCategoryChange} />
      <S.Div__Acoes>
        <button
          onClick={() => {
            const total = cart.reduce(
              (total, item) => total + item.quantidadeNoCarrinho,
              0
            );
            if (total === 0) {
              Swal.fire({
                icon: "error",
                title: "Carrinho Vazio!",
                text: "Não encontramos nenhum item no seu carrinho.",
              });
              return;
            }
            navigate("/carrinho");
          }}
        >
          <IoCartSharp className="carrinho__pedido" />
          <div className="quantidade">
            {cart.reduce((total, item) => total + item.quantidadeNoCarrinho, 0)}
          </div>
        </button>
      </S.Div__Acoes>
      <S.Pedido__Escolha>
        <S.Container__Card>
          {filteredCafes.map(
            ({
              id,
              nome,
              descricao,
              categoria,
              tempoPreparoSegundos,
              imagemUrl,
              tamanhosXicara,
            }) => (
              <CafeCard
                key={id}
                id={id}
                title={nome}
                description={descricao}
                tag={categoria}
                preparation={tempoPreparoSegundos}
                imageSrc={imagemUrl ?? Images.CafeExpresso}
                tamanhosXicara={tamanhosXicara}
                onPersonalizar={handlePersonalizar}
                onAddToCart={(_, selectedSize, cafeData) =>
                  handleAddDirect(
                    {
                      id: cafeData.id,
                      nome: cafeData.title,
                      descricao: cafeData.description,
                      categoria: cafeData.tag,
                      tempoPreparoSegundos: cafeData.preparation,
                      imagemUrl: cafeData.imageSrc,
                      tamanhosXicara: cafeData.tamanhosXicara,
                    },
                    selectedSize
                  )
                }
              />
            )
          )}
        </S.Container__Card>
      </S.Pedido__Escolha>
      <S.Header__Titulo>Devine Café</S.Header__Titulo>
    </S.Container__Pedido_Header>
  );
};