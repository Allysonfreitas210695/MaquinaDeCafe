import { apiUrl } from "./api";
import { ApiTamanhoXicara } from "./interface";

export const getTamanhoXicara = async (): Promise<ApiTamanhoXicara[]> => {
  try {
    const { data } = await apiUrl.get("/tamanhoxicara");
    return data;
  } catch (error) {
    throw new Error(
      `Falha ao buscar tamanhos de xícara. ${
        error instanceof Error ? error.message : ""
      }`
    );
  }
};
