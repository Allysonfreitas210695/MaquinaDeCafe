import { Link, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";

import { Images } from "../../assets/Images";

import Rating from "@mui/material/Rating";

import Stack from "@mui/material/Stack";
import { CartItem } from "../Carrinho/CardContext/cardcontext";

import { useState } from "react";
import { postAvaliacaoCafe } from "../../service/avaliacao_api";
import Swal from "sweetalert2";

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
      return Swal.fire({
        icon: "warning",
        title: "Aviso",
        text: "Por favor, selecione uma opção para o atendimento.",
      });
    }

    if (itemsParaFeedback.length === 0) {
      return Swal.fire({
        icon: "warning",
        title: "Aviso",
        text: "Nenhum produto para avaliar.",
      });
    }

    const allProductsRated = itemsParaFeedback.every(
      (item) => productRatings[item.id]
    );
    if (!allProductsRated) {
      return Swal.fire({
        icon: "warning",
        title: "Aviso",
        text: "Por favor, avalie todos os produtos com pelo menos 1 estrela.",
      });
    }

     for (const item of itemsParaFeedback) {

      if (!item.id) {
        console.warn(
          "Item sem ID encontrado no Feedback, pulando avaliação para este item:",
          item
        );
        continue; 
      }

       const pureCafeIdMatch = item.id.match(
          /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
        );

       const cafeId = pureCafeIdMatch ? pureCafeIdMatch[0] : item.id;

      const feedbackData = {
        cafeId: cafeId,
        atendimento: atendimentoRating,
        estrelas: productRatings[item.id] ?? 0,
        observacao: observation,
      };
      await postAvaliacaoCafe(feedbackData);
    }
    Swal.fire({
      icon: "success",
      title: "Sucesso",
      text: "Seu feedback foi enviado com sucesso! Obrigado.",
    });
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
            <button
              className={`reacoes__conteudo ${
                atendimentoRating === "MuitoBom" ? "selected" : ""
              }`}
              onClick={() => setAtendimentoRating("MuitoBom")}
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
                  <img src={item.imageSrc || Images.caffee} alt={"item.nome"} />
                  <div className="cafes">
                    <span>{item.nome}</span>
                    <p>
                      {item.ml ? `${item.ml}ml` : "N/A"}{" "}
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
