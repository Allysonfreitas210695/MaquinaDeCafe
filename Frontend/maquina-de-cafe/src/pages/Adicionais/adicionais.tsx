import { Images } from "../../assets/Images";
import * as S from "./style";

import { CardAdicionais } from "../../components/CardAdicionais/cardadicionais";

import { useEffect, useState } from "react";
import { getIngredienteadicional } from "../../Service/apiService";
import {
  CoffeeCustomizationData,
  Ingredienteadicional,
  SelectedAdicional,
} from "../../Service/interface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartItem, useCart } from "../Carrinho/CardContext/cardcontext";

export const Adicionais = () => {
  const [newsAdicionais, setNewsAdicionais] = useState<Ingredienteadicional[]>(
    []
  );

  const [selectedAdicionais, setSelectedAdicionais] = useState<
    SelectedAdicional[]
  >([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const coffeesToCustomize: CoffeeCustomizationData[] =
    location.state?.coffeesToCustomize ?? [];
  const currentIndex: number = location.state?.currentIndex || 0;

  // O café que está sendo personalizado AGORA
  const currentCafe: CoffeeCustomizationData | undefined =
    coffeesToCustomize[currentIndex];

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const data = await getIngredienteadicional();
        const transformedData = data.map((item) => ({
          id: item.id,
          nome: item.nome,
          valorExtra: item.valorExtra,
        }));
        setNewsAdicionais(transformedData);
      } catch (error) {
        console.error("Falha ao buscar adicionais:", error);
      }
    };
    fetchPedidos();
    setSelectedAdicionais([]);
  }, [currentIndex, coffeesToCustomize]);

  // Função para lidar com a seleção/desseleção de um adicional
  const handleToggleAdicional = (adicional: Ingredienteadicional) => {
    setSelectedAdicionais((prevSelected) => {
      const existingAdicionalIndex = prevSelected.findIndex(
        (item) => item.id === adicional.id
      );
      if (existingAdicionalIndex > -1) {
        const updatedSelected = [...prevSelected];
        updatedSelected.splice(existingAdicionalIndex, 1);
        return updatedSelected;
      } else {
        return [...prevSelected, { ...adicional, quantidade: 1 }];
      }
    });
  };

  // Função para verificar se um adicional está selecionado (para aplicar estilos)
  const isAdicionalSelected = (adicionalId: string) => {
    return selectedAdicionais.some((item) => item.id === adicionalId);
  };

  if (!currentCafe) {
    return <p>Carregando personalização ou redirecionando...</p>;
  }

  // Função para finalizar a personalização e adicionar ao carrinho
  const handleFinalizarPersonalizacao = () => {
    if (!currentCafe || !currentCafe.tamanhoSelecionado) {
      alert(
        "Erro: Dados do café ou tamanho selecionado ausentes. Por favor, volte e tente novamente."
      );
      navigate("/");
      return;
    }

    const valorBase = currentCafe.tamanhoSelecionado.valor;
    const valorAdicionais = selectedAdicionais.reduce(
      (sum, adicional) => sum + adicional.valorExtra,
      0
    );
    const valorTotalItem = valorBase + valorAdicionais;

    // Criar o novo item para o carrinho
    const newItem: CartItem = {
      id: currentCafe.id + "-" + Date.now(), 
      title: currentCafe.title,
      description: currentCafe.description,
      tag: currentCafe.description || "Padrão",
      preparation: currentCafe.preparation,
      imageSrc: currentCafe.imageSrc,
      tamanhoSelecionado: currentCafe.tamanhoSelecionado,
      adicionaisSelecionados: selectedAdicionais,
      quantidadeNoCarrinho: 1,
      valorTotalItem: valorTotalItem,
    };

    addToCart(newItem);

    // Verifica se há mais cafés para personalizar na lista
    const nextIndex = currentIndex + 1;
    if (nextIndex < coffeesToCustomize.length) {
      navigate("/adicionais", {
        state: {
          coffeesToCustomize: coffeesToCustomize,
          currentIndex: nextIndex,
        },
      });
    } else {
      navigate("/carrinho");
    }
  };

  if (!currentCafe) {
    return (
      <S.Container__Detalhes style={{ textAlign: "center", padding: "50px" }}>
        <p>
          Nenhum café selecionado para personalização ou erro na navegação. Por
          favor, volte e selecione um café.
        </p>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#5C3D2E",
            fontWeight: "bold",
          }}
        >
          Voltar para a seleção de cafés
        </Link>
      </S.Container__Detalhes>
    );
  }

  const isLastCafe = currentIndex === coffeesToCustomize.length - 1;
  const buttonText = isLastCafe
    ? "Finalizar e Ir para o Carrinho"
    : "Próximo Café";

  return (
    <S.Container__Detalhes>
      <div className="header__container">
        <h1>Personalize o seu café</h1>
        <Link className="button__cancelar" to={"/carrinho"}>
          CALCELAR
        </Link>
      </div>
      <div className="detalhe__card_cafe">
        <div className="card__cafe">
          <CardAdicionais
            cafeData={currentCafe}
            selectedAdicionais={selectedAdicionais}
          />
          <S.Div__Botao>
            {" "}
            <button onClick={handleFinalizarPersonalizacao}>
              {buttonText}
            </button>
          </S.Div__Botao>
        </div>
        <S.Detalhes>
          <div className="adicionais">
            <img src={Images.addCircle} alt="Imagem de Adiciomar" />
            <h1>Adicionais</h1>
          </div>
          <S.Conteudo__Detalhes>
            {newsAdicionais.map((adicional) => (
              <div key={adicional.id} className="detalhe">
                <S.Arry__Detalhe
                  onClick={() => handleToggleAdicional(adicional)}
                  style={{
                    border: isAdicionalSelected(adicional.id)
                      ? "2px solid #5C3D2E"
                      : "1px solid #ddd",
                  }}
                >
                  <img src={Images.CafeExpresso} alt="" />
                  <div className="arry__detalhe">
                    <h3>{adicional.nome}</h3>
                  </div>
                </S.Arry__Detalhe>
                <div className="valor">
                  <span>
                    R$ {adicional.valorExtra.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
            ))}
          </S.Conteudo__Detalhes>
        </S.Detalhes>
      </div>
    </S.Container__Detalhes>
  );
};
