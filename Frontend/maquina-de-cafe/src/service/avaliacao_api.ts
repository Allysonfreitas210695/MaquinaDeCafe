import { apiUrl } from "./api";
import { AvaliacaoCafePayload } from "./interface";

export const postAvaliacaoCafe = async (
  feedbackData: AvaliacaoCafePayload
): Promise<AvaliacaoCafePayload> => {
  try {
    const { data } = await apiUrl.post("/avaliacoescafe", feedbackData);
    return data;
  } catch (error: unknown) {
    throw error;
  }
};

export const getAvaliacaoCafe = async (): Promise<AvaliacaoCafePayload[]> => {
  try {
    const response = await apiUrl.get("/avaliacoescafe");
    return response.data;
  } catch (error: unknown) {
    console.error("Erro ao buscar avaliações:", error);
    return [];
  }
};
