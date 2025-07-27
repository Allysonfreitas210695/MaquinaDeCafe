import { apiUrl } from "./api";
import { CriarPedidoRequest, Pedidos } from "./interface";

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

export const criarPedido = async (dados: CriarPedidoRequest) => {
  console.log("Dados que serão enviados para criarPedido:", dados);
  // MUDE ESTA LINHA: Passe apenas o endpoint relativo.
  const response = await apiUrl.post("/pedido", dados);
  return response.data;
};

export const atualizarStatusPedido = async (pedidoId: string, status: string) => {
  // MUDE ESTA LINHA: Passe apenas o endpoint relativo.
  console.log(`PUT para: /api/pedido/${pedidoId}/${status}`); // Para confirmar a URL
  try {
    const response = await apiUrl.put(`/pedido/${pedidoId}/${status}`);
    return response.data;
  } catch (error) {
    console.error("Erro na atualização de status da API:", error);
    throw error;
  }
};