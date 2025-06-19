import { Link } from "react-router-dom";
import * as S from "./style";
import { Images } from "../../assets/Images";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const Feedback = () => {
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
            <div className="reacoes__conteudo">
              <img src={Images.laugh} alt="" />
              <span>Muito bom</span>
            </div>
            <div className="reacoes__conteudo">
              <img src={Images.meh} alt="" />
              <span>Regular</span>
            </div>
            <div className="reacoes__conteudo">
              <img src={Images.frown} alt="" />
              <span>Ruim</span>
            </div>
          </div>
        </S.Atendimento>
        <S.Produto>
          <h1>Produto</h1>
          <div className="produto__conteudo">
            <img src={Images.caffee} alt="" />
            <div className="cafes">
              <span>Café Tradicional</span>
              <p>50ml Quantidade: 2</p>
            </div>
          </div>
          <div className="avaliacao">
            <span>E o seu café? Estava do jeitinho que você queria?</span>
          </div>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={1.5}
              precision={0.5}
              style={{ color: "#B6895B", fontSize: "30px" }}
            />
          </Stack>
        </S.Produto>
        <S.Observacao>
          <span>Quer deixar alguma observação?</span>
          <input type="text" name="" id="" />
          <p>Seu comentário nos ajuda a entender melhor a sua experiência.</p>
        </S.Observacao>
        <S.Button__Feedback>
          <Link className="pular__valiacao" to={""}>Pular Avaliação</Link>
          <Link className="enviar__avalicao" to={""}>Enviar Avaliação</Link>
        </S.Button__Feedback>
      </S.Conteudo__Feedback>
    </S.Container__Feedback>
  );
};
