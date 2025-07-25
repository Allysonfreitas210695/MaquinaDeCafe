import { apiUrl } from "./api";
import { ApiIngredienteadicional } from "./interface";

export const getIngredienteadicional = async (): Promise<
  ApiIngredienteadicional[]
> => {
  try {
    const { data } = await apiUrl.get("/ingredienteadicional");
    return data;
  } catch (error) {
    throw new Error(
      `Falha ao buscar ingredientes adicionais. ${
        error instanceof Error ? error.message : ""
      }`
    );
  }
};
