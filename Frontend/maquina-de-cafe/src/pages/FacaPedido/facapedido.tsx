import * as S from "./style";
import { CafeCard } from "../../components/CafeCard/cafecard";
import { useEffect, useState } from "react";
import { HeaderNavegacao } from "./HeaderNavegacao/navegacao";
import { getCafes } from "../../Service/apiService";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import {
  ApiTamanhoXicara,
  CoffeeCustomizationData,
} from "../../Service/interface";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { IoCartSharp } from "react-icons/io5";

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
  const { cart } = useCart();

  const [coffeesToCustomize, setCoffeesToCustomize] = useState<
    CoffeeCustomizationData[]
  >([]);

  // NOVA FUNÇÃO: Lidar com a seleção/desseleção de um café no CafeCard
  const handleToggleCoffeeSelection = (
    cafeId: string,
    isSelected: boolean,
    selectedSize: ApiTamanhoXicara | undefined,
    cafeOriginalData: {
      // Dados completos do café vindos do CafeCard
      id: string;
      title: string;
      description: string;
      tag: string;
      preparation: number;
      imageSrc: string;
      tamanhosXicara: ApiTamanhoXicara[];
    }
  ) => {
    setCoffeesToCustomize((prevSelected) => {
      if (!isSelected) {
        return prevSelected.filter((c) => c.id !== cafeId);
      } else {
        if (!selectedSize) {
          alert(
            "Por favor, selecione um tamanho de xícara antes de adicionar o café para personalização."
          );
          return prevSelected;
        }
        if (prevSelected.some((c) => c.id === cafeId)) {
          return prevSelected;
        }

        // Cria o objeto CoffeeCustomizationData completo para adicionar à lista
        const newCustomizationData: CoffeeCustomizationData = {
          id: cafeId,
          title: cafeOriginalData.title,
          description: cafeOriginalData.description,
          tag: cafeOriginalData.tag,
          preparation: cafeOriginalData.preparation,
          imageSrc: cafeOriginalData.imageSrc,
          tamanhoSelecionado: selectedSize,
        };
        return [...prevSelected, newCustomizationData];
      }
    });
  };

  // NOVA FUNÇÃO: Iniciar o processo de personalização dos selecionados
  const startCustomizationProcess = () => {
    if (coffeesToCustomize.length === 0) {
      alert("Por favor, selecione pelo menos um café para personalizar.");
      return;
    }
    navigate("/adicionais", {
      state: { coffeesToCustomize: coffeesToCustomize, currentIndex: 0 },
    });
  };

  useEffect(() => {
    const fetchPedidos = async () => {
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
        console.error("Falha ao buscar cafés:", error);
        setErrorFetchingCafes(true);
      }
    };
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
        <button onClick={() => navigate("/carrinho")}>
          <IoCartSharp className="carrinho__pedido" />
          <div className="quantidade">{cart.length}</div>
        </button>

        <S.PersonalizarSelecionadosButton
          onClick={startCustomizationProcess}
          disabled={coffeesToCustomize.length === 0}
        >
          Personalizar Selecionados ({coffeesToCustomize.length})
        </S.PersonalizarSelecionadosButton>
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
                isSelected={coffeesToCustomize.some((c) => c.id === id)}
                onToggleSelect={handleToggleCoffeeSelection}
              />
            )
          )}
        </S.Container__Card>
      </S.Pedido__Escolha>
      <S.Header__Titulo>Devine Café</S.Header__Titulo>
    </S.Container__Pedido_Header>
  );
};
