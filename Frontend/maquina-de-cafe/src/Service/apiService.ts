import axios from "axios";
import { ApiCafeItem, ApiIngredienteadicional, ApiTamanhoXicara, AvaliacaoCafePayload, Pedidos } from "./interface";
const apiUrl = import.meta.env.LINKBACK ?? "https://maquina-web-f3drdyfff8hdewam.brazilsouth-01.azurewebsites.net/";

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

export const getIngredienteadicional = async (): Promise<ApiIngredienteadicional[]> => {
  try {
    const response = await axios.get(apiUrl + "/api/ingredienteadicional");
    console.log(response);
    console.log("Dados recebidos da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os tamos das xicaras:", error);
    return [];
  }
};

export const postAvaliacaoCafe = async (feedbackData: AvaliacaoCafePayload): Promise<AvaliacaoCafePayload> => { 
  try {
    const response = await axios.post(`${apiUrl}/api/avaliacoescafe`, feedbackData);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar avaliação do café:", error);
    throw error;
  }
};

export const getAvaliacaoCafe = async (): Promise<AvaliacaoCafePayload[]> => {
  try {
    const response = await axios.get(apiUrl + "/api/avaliacoescafe");
    console.log(response);
    console.log("Dados recebidos da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os tamos de avaliações:", error);
    return [];
  }
};

export const getPedidos = async (): Promise<Pedidos[]> => {
  try {
    const response = await axios.get(apiUrl + "/api/pedido");
    console.log(response);
    console.log("Dados recebidos da API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os tipos de pedidos:", error);
    return [];
  }
};