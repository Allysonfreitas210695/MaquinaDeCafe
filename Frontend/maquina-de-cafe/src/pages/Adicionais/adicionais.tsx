import { Images } from "../../assets/Images";
import * as S from "./style";
import Swal from "sweetalert2";

import { CardAdicionais } from "../../components/CardAdicionais/cardadicionais";

import { useEffect, useState } from "react";
import {
  CoffeeCustomizationData,
  Ingredienteadicional,
  SelectedAdicional,
} from "../../service/interface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartItem, useCart } from "../Carrinho/CardContext/cardcontext";
import { getIngredienteadicional } from "../../service/ingredienteadicional_api";

export const Adicionais = () => {
  const [newsAdicionais, setNewsAdicionais] = useState<Ingredienteadicional[]>(
    []
  );
  const [selectedAdicionais, setSelectedAdicionais] = useState<
    SelectedAdicional[]
  >([]);
  const [selectedLeite, setSelectedLeite] = useState<string | null>(null);
  const [selectedAcucar, setSelectedAcucar] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const coffeesToCustomize: CoffeeCustomizationData[] =
    location.state?.coffeesToCustomize ?? [];
  const currentIndex: number = location.state?.currentIndex || 0;

  // Café atual
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
  }, [currentIndex, coffeesToCustomize]);

  const handleToggleAdicional = (adicional: Ingredienteadicional) => {
    setSelectedAdicionais((prevSelected) => {
      const existingAdicionalIndex = prevSelected.findIndex(
        (item) => item.id === adicional.id
      );

      // Se já está selecionado, remove normalmente
      if (existingAdicionalIndex > -1) {
        const updatedSelected = [...prevSelected];
        updatedSelected.splice(existingAdicionalIndex, 1);
        return updatedSelected;
      } else {
        // Se já tem 4 adicionais, não adiciona mais e mostra alerta
        if (prevSelected.length >= 4) {
          Swal.fire({
            icon: "error",
            title: "Você só pode selecionar 4 adicionais",
            text: "Verifique novamente o seu café",
          });
          return prevSelected;
        }
        return [...prevSelected, { ...adicional, quantidade: 1 }];
      }
    });
  };

  const handleSelectLeite = (tipo: string) => {
    setSelectedLeite(tipo === selectedLeite ? null : tipo);
  };

  const handleSelectAcucar = (tipo: string) => {
    setSelectedAcucar(tipo === selectedAcucar ? null : tipo);
  };

  const handleFinalizarPersonalizacao = () => {
    if (!currentCafe || !currentCafe.tamanhoSelecionado) {
      alert("Erro: Dados do café ou tamanho selecionado ausentes.");
      navigate("/");
      return;
    }

    const valorBase = currentCafe.tamanhoSelecionado.valor;
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
      tamanhoSelecionado: currentCafe.tamanhoSelecionado,
      adicionaisSelecionados: [
        ...selectedAdicionais,
        ...(selectedLeite
          ? [{ id: "leite", nome: selectedLeite, valorExtra: 0, quantidade: 1 }]
          : []),
        ...(selectedAcucar
          ? [
              {
                id: "acucar",
                nome: selectedAcucar,
                valorExtra: 0,
                quantidade: 1,
              },
            ]
          : []),
      ],
      quantidadeNoCarrinho: 1,
      valorTotalItem: valorTotalItem,
    };

    addToCart(newItem);

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

  const isLastCafe = currentIndex === coffeesToCustomize.length - 1;
  const buttonText = isLastCafe
    ? "Finalizar e Ir para o Carrinho"
    : "Próximo Café";

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
      <div className="header__container">
        <h1>Personalize o seu café</h1>
        <Link className="button__cancelar" to={"/carrinho"}>
          CANCELAR
        </Link>
      </div>
      <div className="detalhe__card_cafe">
        <div className="card__cafe">
          <CardAdicionais
            cafeData={currentCafe}
            selectedAdicionais={selectedAdicionais}
            selectedLeite={selectedLeite}
            selectedAcucar={selectedAcucar}
            onSelectLeite={handleSelectLeite}
            onSelectAcucar={handleSelectAcucar}
            onFinalizar={handleFinalizarPersonalizacao}
            buttonText={buttonText}
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
