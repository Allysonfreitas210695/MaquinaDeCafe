import { apiUrl } from "./api";
import { ApiTamanhoXicara } from "./interface";

export const getTamanhoXicara = async (): Promise<ApiTamanhoXicara[]> => {
  try {
    const { data } = await apiUrl.get("/tamanhoxicara");
    return data;
  } catch (error: unknown) {
    return [];
  }
};
