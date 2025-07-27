import { Images } from "../../assets/Images";
import * as S from "./style";
import Swal from "sweetalert2";
import { CardAdicionais } from "../../components/CardAdicionais/cardadicionais";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartItem, useCart } from "../Carrinho/CardContext/cardcontext";
import { getIngredienteadicional } from "../../service/ingredienteadicional_api";
import { BsArrowLeftShort } from "react-icons/bs";

import {
  CoffeeCustomizationData,
  Ingredienteadicional,
  SelectedAdicional,
  ApiTamanhoXicara,
} from "../../service/interface";

export const Adicionais = () => {
  const [newsAdicionais, setNewsAdicionais] = useState<Ingredienteadicional[]>(
    []
  );
  const [selectedAdicionais, setSelectedAdicionais] = useState<
    SelectedAdicional[]
  >([]);
  const [selectedLeite, setSelectedLeite] = useState<string | null>(null);
  const [selectedAcucar, setSelectedAcucar] = useState<string | null>(null);
  const [selectedTamanho, setSelectedTamanho] =
    useState<ApiTamanhoXicara | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const coffeesToCustomize: CoffeeCustomizationData[] =
    location.state?.coffeesToCustomize ?? [];
  const currentIndex: number = location.state?.currentIndex || 0;

  const currentCafe: CoffeeCustomizationData | undefined =
    coffeesToCustomize[currentIndex];

  async function fetchPedidos() {
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
  }

  useEffect(() => {
    fetchPedidos();
    setSelectedAdicionais([]);
    setSelectedLeite(null);
    setSelectedAcucar(null);
    setSelectedTamanho(currentCafe?.tamanhosXicara?.[0] || null);
  }, [currentIndex, coffeesToCustomize, currentCafe]);

  const handleVoltar = () => {
    if (currentIndex > 0) {
      navigate("/adicionais", {
        state: {
          coffeesToCustomize,
          currentIndex: currentIndex - 1,
        },
      });
    } else {
      navigate("/pedido");
    }
  };

  const handleFinalizarPersonalizacao = async () => { 
    if (!currentCafe || !selectedTamanho) {
      await Swal.fire({ 
        icon: "error",
        title: "Erro",
        text: "Dados do café ou tamanho selecionado ausentes.",
      });
      navigate("/");
      return;
    }

    const valorBase = selectedTamanho.valor;
    const valorAdicionais = selectedAdicionais.reduce(
      (sum, adicional) => sum + adicional.valorExtra,
      0
    );
    const valorTotalItem = valorBase + valorAdicionais;

    const newItem: CartItem = {
      id: currentCafe.id + "-" + Date.now(),
      title: currentCafe.title,
      description: currentCafe.description,
      tag: currentCafe.description || "Padrão",
      preparation: currentCafe.preparation,
      imageSrc: currentCafe.imageSrc,
      tamanhoSelecionado: selectedTamanho,
      adicionaisSelecionados: [...selectedAdicionais],
      quantidadeNoCarrinho: 1,
      valorTotalItem,
      tipoLeite: selectedLeite || undefined,
      tipoAcucar: selectedAcucar || undefined,
    };

    addToCart(newItem);

    await Swal.fire({
      icon: "success",
      title: "Adicionado ao carrinho!",
      timer: 1500,
      showConfirmButton: false,
      timerProgressBar: true,
    });

    const nextIndex = currentIndex + 1;
    if (nextIndex < coffeesToCustomize.length) {
      navigate("/adicionais", {
        state: {
          coffeesToCustomize,
          currentIndex: nextIndex,
        },
      });
    } else {
      navigate("/carrinho");
    }
  };

  const isAdicionalSelected = (adicionalId: string) =>
    selectedAdicionais.some((item) => item.id === adicionalId);

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
        if (prevSelected.length >= 4) {
          Swal.fire({
            icon: "warning",
            title: "Limite atingido",
            text: "Você só pode adicionar até 4 itens adicionais.",
          });
          return prevSelected;
        }
        return [...prevSelected, { ...adicional, quantidade: 1 }];
      }
    });
  };

  const isLastCafe = currentIndex === coffeesToCustomize.length - 1;

  if (!currentCafe) {
    return (
      <S.Container__Detalhes style={{ textAlign: "center", padding: "50px" }}>
        <p>Nenhum café selecionado para personalização.</p>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#5C3D2E",
            fontWeight: "bold",
          }}
        >
          Voltar
        </Link>
      </S.Container__Detalhes>
    );
  }

  return (
    <S.Container__Detalhes>
      <S.AcoesTopo>
        <BsArrowLeftShort onClick={handleVoltar} className="short" />
        <span>Personalize o seu café</span>
      </S.AcoesTopo>

      <div className="detalhe__card_cafe">
        <div className="card__cafe">
          <CardAdicionais
            cafeData={currentCafe}
            selectedAdicionais={selectedAdicionais}
            selectedLeite={selectedLeite}
            selectedAcucar={selectedAcucar}
            selectedTamanho={selectedTamanho}
            onSelectTamanho={setSelectedTamanho}
            onSelectLeite={setSelectedLeite}
            onSelectAcucar={setSelectedAcucar}
            onFinalizar={handleFinalizarPersonalizacao}
            isLastCafe={isLastCafe}
          />
        </div>

        <S.Detalhes>
          <div className="adicionais">
            <img src={Images.addCircle} alt="Imagem de Adicionar" />
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