import axios from "axios";
import { ApiCafeItem, ApiTamanhoXicara } from "./interface";
const apiUrl = import.meta.env.LINKBACK ?? "http://localhost:5035";

export const getCafes = async (): Promise<ApiCafeItem[]> => {
  try {
    const response = await axios.get(apiUrl + "/api/cafe");
    console.log(response);
    console.log("Dados recebidos da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cafes:", error);
    return [];
  }
};

export const getTamanhoXicara = async (): Promise<ApiTamanhoXicara[]> => {
  try {
    const response = await axios.get(apiUrl + "/api/tamanhoxicara");
    console.log(response);
    console.log("Dados recebidos da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os tamos das xicaras:", error);
    return [];
  }
};
