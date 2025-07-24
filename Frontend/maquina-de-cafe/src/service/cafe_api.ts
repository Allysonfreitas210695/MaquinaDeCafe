import { ApiCafeItem } from "./interface";
import { apiUrl } from "./api";

export const getCafes = async (): Promise<ApiCafeItem[]> => {
  try {
    const { data } = await apiUrl.get("/cafe");
    return data;
  } catch (error: unknown) {
    return [];
  }
};
