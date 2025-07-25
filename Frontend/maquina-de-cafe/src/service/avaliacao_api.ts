import { apiUrl } from "./api";
import { AvaliacaoCafePayload } from "./interface";

export const postAvaliacaoCafe = async (
  feedbackData: AvaliacaoCafePayload
): Promise<AvaliacaoCafePayload> => {
  try {
    const { data } = await apiUrl.post("/avaliacoescafe", feedbackData);
    return data;
  } catch (error) {
    throw new Error(
      `Falha ao enviar avaliação do café. ${
        error instanceof Error ? error.message : ""
      }`
    );
  }
};

export const getAvaliacaoCafe = async (): Promise<AvaliacaoCafePayload[]> => {
  try {
    const response = await apiUrl.get("/avaliacoescafe");
    return response.data;
  } catch (error) {
    throw new Error(
      `Falha ao buscar avaliações do café. ${
        error instanceof Error ? error.message : ""
      }`
    );
  }
};
