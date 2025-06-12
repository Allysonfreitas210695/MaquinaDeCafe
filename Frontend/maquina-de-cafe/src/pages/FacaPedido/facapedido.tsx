import * as S from "./style";
import { CafeCard } from "../../components/CafeCard/cafecard";
import { useEffect, useState } from "react";
import { HeaderNavegacao } from "./HeaderNavegacao/navegacao";
import { getCafes } from "../../Service/apiService";
import { useNavigate } from "react-router-dom";

interface TransformedCafe {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  tempoPreparoSegundos: number;
}

export const FacaPedido = () => {
  const [selectedCafeIds, setSelectedCafeIds] = useState<string[]>([]);
  const [newsPedidos, setNewsPedidos] = useState<TransformedCafe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const navigate = useNavigate();

  const handleSelectToggle = (cafeId: string) => {
    setSelectedCafeIds((prevSelected) => {
      if (prevSelected.includes(cafeId)) {
        // Se já está selecionado, remove
        return prevSelected.filter((id) => id !== cafeId);
      } else {
        // Se não está selecionado, adiciona
        return [...prevSelected, cafeId];
      }
    });
  };

  const handleSendSelectedToAdicionais = () => {
    if (selectedCafeIds.length === 0) {
      alert("Selecione pelo menos um café para ver os adicionais!");
      return;
    }
    const selectedCafesToSend = newsPedidos.filter((cafe) =>
      selectedCafeIds.includes(cafe.id)
    );

    console.log("IDs selecionados:", selectedCafeIds);
    console.log("Todos os cafés (newsPedidos):", newsPedidos);
    console.log("Cafés a serem enviados:", selectedCafesToSend);

    // 4. Navegue para a página de Adicionais, passando os cafés selecionados no 'state'
    navigate("/adicionais", { state: { selectedCafes: selectedCafesToSend } });
  };

  useEffect(() => {
    const fetchPedidos = async () => {
      const data = await getCafes();
      const transformedData = data.map((item) => ({
        id: item.id,
        nome: item.nome,
        descricao: item.descricao,
        preco: item.preco,
        categoria: item.categoria,
        tempoPreparoSegundos: item.tempoPreparoSegundos,
      }));
      setNewsPedidos(transformedData);
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

  return (
    <S.Container__Pedido_Header>
      <HeaderNavegacao onCategoryChange={handleCategoryChange} />
      <S.Pedido__Escolha>
        <S.Container__Card>
          {filteredCafes.map(
            ({
              id,
              nome,
              descricao,
              preco,
              categoria,
              tempoPreparoSegundos,
            }) => (
              <CafeCard
                id={id}
                title={nome}
                description={descricao}
                price={preco}
                tag={categoria}
                preparation={tempoPreparoSegundos}
                isSelected={selectedCafeIds.includes(id)}
                onSelectToggle={handleSelectToggle}
              />
            )
          )}
        </S.Container__Card>
      </S.Pedido__Escolha>
      <S.Header__Titulo onClick={handleSendSelectedToAdicionais}>
        Devine Café
      </S.Header__Titulo>
    </S.Container__Pedido_Header>
  );
};
