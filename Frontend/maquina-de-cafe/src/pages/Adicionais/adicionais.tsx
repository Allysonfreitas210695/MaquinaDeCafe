import { Images } from "../../assets/Images";
import * as S from "./style";

import { CardAdicionais } from "../../components/CardAdicionais/cardadicionais";

import { useEffect, useState } from "react";
import { getIngredienteadicional } from "../../Service/apiService";
import { CoffeeCustomizationData } from "../../Service/interface";
import { Link, useLocation} from "react-router-dom";

interface Ingredienteadicional {
  id: string;
  nome: string;
  valorExtra: number;
}

// Interface para um adicional que foi selecionado pelo usuário, com quantidade
interface SelectedAdicional extends Ingredienteadicional {
  quantidade: number;
}

export const Adicionais = () => {
  const [newsAdicionais, setNewsAdicionais] = useState<Ingredienteadicional[]>(
    []
  );

  // Estado para armazenar os adicionais que o usuário selecionou
  const [selectedAdicionais, setSelectedAdicionais] = useState<
    SelectedAdicional[]
  >([]);

  //----------------------------------------------------------------

  useEffect(() => {
    const fetchPedidos = async () => {
      const data = await getIngredienteadicional();
      const transformedData = data.map((item) => ({
        id: item.id,
        nome: item.nome,
        valorExtra: item.valorExtra,
      }));
      setNewsAdicionais(transformedData);
    };
    fetchPedidos();
  }, []);

  const location = useLocation();
  const customizedCafe = location.state?.customizedCafe as
    | CoffeeCustomizationData
    | undefined;

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

  if (!customizedCafe) {
    return <p>Carregando personalização ou redirecionando...</p>;
  }

  return (
    <S.Container__Detalhes>
      <div className="header__container">
        <h1>Personalize o seu café</h1>
        <Link className="button__cancelar" to={"/carrinho"}>CALCELAR</Link>
      </div>
      <div className="detalhe__card_cafe">
        <div className="card__cafe">
          <CardAdicionais
            cafeData={customizedCafe}
            selectedAdicionais={selectedAdicionais}
          />
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
