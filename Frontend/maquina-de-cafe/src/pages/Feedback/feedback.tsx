import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";

import { Images } from "../../assets/Images";

import Rating from "@mui/material/Rating";

import Stack from "@mui/material/Stack";
import { CartItem } from "../Carrinho/CardContext/cardcontext";

import { useState } from "react";
import { postAvaliacaoCafe } from "../../service/avaliacao_api";

export const Feedback = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const itemsParaFeedback: CartItem[] = location.state?.itemsParaFeedback || [];

  const [atendimentoRating, setAtendimentoRating] = useState<string | null>(
    null
  );

  const [productRatings, setProductRatings] = useState<{
    [key: string]: number | null;
  }>(() => {
    const initialRatings: { [key: string]: number | null } = {};
    itemsParaFeedback.forEach((item) => {
      initialRatings[item.id] = 0;
    });
    return initialRatings;
  });

  const [observation, setObservation] = useState<string>("");

  const handleProductRatingChange = (
    itemId: string,
    newValue: number | null
  ) => {
    setProductRatings((prevRatings) => ({
      ...prevRatings,
      [itemId]: newValue,
    }));
  };

  const handleSendFeedback = async () => {
    if (!atendimentoRating) {
      alert("Por favor, selecione uma opção para o atendimento.");
      return;
    }

    if (itemsParaFeedback.length === 0) {
      alert("Nenhum produto para avaliar.");
      return;
    }

    const allProductsRated = itemsParaFeedback.every(
      (item) => productRatings[item.id]
    );
    if (!allProductsRated) {
      alert("Por favor, avalie todos os produtos com pelo menos 1 estrela.");
      return;
    }

    for (const item of itemsParaFeedback) {
      const feedbackData = {
        cafeId: item.id.split("-").slice(0, 5).join("-"),
        atendimento: atendimentoRating,
        estrelas: productRatings[item.id] ?? 0,
        observacao: observation,
      };

      try {
        await postAvaliacaoCafe(feedbackData);
      } catch (error) {
        alert(
          `Ocorreu um erro ao enviar o feedback para ${item.title}. Por favor, tente novamente.`
        );
        return;
      }
    }
    alert("Seu feedback foi enviado com sucesso! Obrigado.");
    navigate("/");
  };

  return (
    <S.Container__Feedback>
      <S.Img src={Images.punhadodegraodecafe} />
      <S.Conteudo__Feedback>
        <S.Titulo>
          <span>Sua opinião faz toda a diferença!</span>
          <p>Nos ajude a continuar melhorando seu café.</p>
        </S.Titulo>
        <S.Atendimento>
          <h2>Atendimento</h2>
          <span>Como foi sua experiência com nosso atendimento?</span>
          <div className="reacoes">
            {/* Usando botões para elementos interativos */}
            <button
              className={`reacoes__conteudo ${
                atendimentoRating === "MuitoBom" ? "selected" : ""
              }`}
              onClick={() => setAtendimentoRating("MuitoBom")}
              // Adicionado para acessibilidade: role e aria-pressed (opcional, mas bom para botões de alternância)
              role="radio"
              aria-checked={atendimentoRating === "MuitoBom"}
            >
              <img src={Images.laugh} alt="Muito bom" />
              <span>Muito bom</span>
            </button>
            <button
              className={`reacoes__conteudo ${
                atendimentoRating === "Regular" ? "selected" : ""
              }`}
              onClick={() => setAtendimentoRating("Regular")}
              role="radio"
              aria-checked={atendimentoRating === "Regular"}
            >
              <img src={Images.meh} alt="Regular" />
              <span>Regular</span>
            </button>
            <button
              className={`reacoes__conteudo ${
                atendimentoRating === "Ruim" ? "selected" : ""
              }`}
              onClick={() => setAtendimentoRating("Ruim")}
              role="radio"
              aria-checked={atendimentoRating === "Ruim"}
            >
              <img src={Images.frown} alt="Ruim" />
              <span>Ruim</span>
            </button>
          </div>
        </S.Atendimento>

        <S.Produto>
          <div className="avaliacao">
            <h1>Produto</h1>
            <span>E o seu café? Estava do jeitinho que você queria?</span>
          </div>

          {itemsParaFeedback.length === 0 ? (
            <p>Nenhum produto encontrado para avaliação.</p>
          ) : (
            itemsParaFeedback.map((item) => (
              <div key={item.id}>
                <div className="produto__conteudo">
                  <img src={item.imageSrc || Images.caffee} alt={item.title} />
                  <div className="cafes">
                    <span>{item.title}</span>
                    <p>
                      {item.tamanhoSelecionado
                        ? `${item.tamanhoSelecionado.ml}ml`
                        : "N/A"}{" "}
                      Quantidade: {item.quantidadeNoCarrinho || 1}
                    </p>
                  </div>
                </div>
                <Stack spacing={1}>
                  <Rating
                    name={`rating-${item.id}`}
                    value={productRatings[item.id] ?? 0}
                    precision={1.0}
                    onChange={(_, newValue) =>
                      handleProductRatingChange(item.id, newValue)
                    }
                    style={{
                      color: "#B6895B",
                      fontSize: "30px",
                      marginTop: "5px",
                    }}
                    max={5}
                  />
                </Stack>
              </div>
            ))
          )}
        </S.Produto>

        <S.Observacao>
          <span>Quer deixar alguma observação?</span>
          <input
            type="text"
            name="observation"
            id="observation"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Seu comentário nos ajuda a entender melhor a sua experiência."
            style={{ fontSize: "16px" }}
          />
          <p>Seu comentário nos ajuda a entender melhor a sua experiência.</p>
        </S.Observacao>

        <S.Button__Feedback>
          <Link className="pular__valiacao" to={"/pedido"}>
            Pular Avaliação
          </Link>
          <button className="enviar__avalicao" onClick={handleSendFeedback}>
            Enviar Avaliação
          </button>
        </S.Button__Feedback>
      </S.Conteudo__Feedback>
    </S.Container__Feedback>
  );
};
