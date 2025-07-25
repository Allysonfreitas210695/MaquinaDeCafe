import { apiUrl } from "./api";
import { Pedidos } from "./interface";

export const getPedidos = async (): Promise<Pedidos[]> => {
  try {
    const { data } = await apiUrl.get("/pedido");
    return data;
  } catch (error) {
    throw new Error(
      `Falha ao buscar pedidos. ${error instanceof Error ? error.message : ""}`
    );
  }
};
