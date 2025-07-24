import { apiUrl } from "./api";
import { ApiIngredienteadicional } from "./interface";

export const getIngredienteadicional = async (): Promise<
  ApiIngredienteadicional[]
> => {
  try {
    const { data } = await apiUrl.get("/ingredienteadicional");
    return data;
  } catch (error: unknown) {
    return [];
  }
};
