import * as S from "./style";
import {
  CafeCard
} from "../../components/CafeCard/cafecard";
import { useEffect, useState } from "react";
import { HeaderNavegacao } from "./HeaderNavegacao/navegacao";
import { getCafes } from "../../Service/apiService";
import { useNavigate } from "react-router-dom";
import { Images } from "../../assets/Images";
import { ApiTamanhoXicara, CoffeeCustomizationData } from "../../Service/interface";
import { Link } from "react-router-dom";


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
  //const [selectedCafeIds, setSelectedCafeIds] = useState<string[]>([]);
  const [newsPedidos, setNewsPedidos] = useState<TransformedCafe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [errorFetchingCafes, setErrorFetchingCafes] = useState<boolean>(false);
  const navigate = useNavigate();


  
  // Função chamada pelo CafeCard quando o botão "Personalizar" é clicado
  const handleCustomizeCafe = (cafeData: CoffeeCustomizationData) => {
    console.log("Dados do café para personalizar:", cafeData);
    // Navega para a página de Adicionais, passando os dados do café no 'state'
    navigate("/adicionais", { state: { customizedCafe: cafeData } });
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
      <Link className="button__voltar" to={"/"}>VOLTAR</Link>
      <S.Pedido__Escolha>
        <S.Container__Card>
          {filteredCafes.map(
            (
              {
                id,
                nome,
                descricao,
                categoria,
                tempoPreparoSegundos,
                imagemUrl,
                tamanhosXicara,
              },
              index
            ) => (
              <CafeCard
                key={index}
                id={id}
                title={nome}
                description={descricao}
                tag={categoria}
                preparation={tempoPreparoSegundos}
                imageSrc={imagemUrl || Images.CafeExpresso}
                onCustomize={handleCustomizeCafe}
                tamanhosXicara={tamanhosXicara}
              />
            )
          )}
        </S.Container__Card>
    
      </S.Pedido__Escolha>
      <S.Header__Titulo>Devine Café</S.Header__Titulo>
    </S.Container__Pedido_Header>
  );
};
