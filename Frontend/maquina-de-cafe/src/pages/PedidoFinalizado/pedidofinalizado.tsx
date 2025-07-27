import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { BsCheck2 } from "react-icons/bs";
import { useCart } from "../Carrinho/CardContext/cardcontext";
import { atualizarStatusPedido } from "../../service/pedido_api";
import axios from "axios";
import { FaCoffee } from 'react-icons/fa';

import WalletIcon from "../../assets/Images/Wallet.png";
import PixIcon from "../../assets/Images/Vector1.png";

interface PedidoItemFormatado {
  id: string;
  nome: string;
  quantidade: number;
  valorUnitario: number;
  ml?: number;
  tipoLeite?: string;
  tipoAcucar?: string;
  observacao?: string;
  imageSrc?: string;
  preparation?: number;
}

const formatTimeOutput = (totalMinutes: number): string => {
  if (totalMinutes === 0) {
    return "Não há itens para calcular o tempo.";
  }

  const hours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  let timeParts: string[] = [];

  if (hours > 0) {
    timeParts.push(`${hours} hora${hours > 1 ? 's' : ''}`);
  }

  if (remainingMinutes > 0 || (hours === 0 && totalMinutes > 0)) {
    if (totalMinutes === 0) { 
        return "Não há itens para calcular o tempo.";
    } else if (totalMinutes < 1) { 
        return "Menos de 1 minuto";
    }
    timeParts.push(`${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''}`);
  }

  if (timeParts.length === 2) {
    return `${timeParts[0]} e ${timeParts[1]}`;
  } else if (timeParts.length === 1) {
    return timeParts[0];
  } else {
    return "Calculando..."; 
  }
};


const calculateAndFormatEstimatedTime = (pedidos: PedidoItemFormatado[]): string => {
  if (pedidos.length === 0) {
    return "Não há itens para calcular o tempo.";
  }

  let totalPreparationSeconds = 0;
  pedidos.forEach(item => {
    const itemPreparationTime = item.preparation || 0;
    totalPreparationSeconds += Number(item.quantidade) * itemPreparationTime;
  });

  const totalPreparationMinutes = Math.ceil(totalPreparationSeconds / 60);
  
  return formatTimeOutput(totalPreparationMinutes);
};


export const PedidoFinalizado = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const inactivityTimeoutRef = useRef<number | null>(null);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      clearCart();
      navigate("/");
    }, 60 * 1000); // 1 MINUTO DE INATIVIDADE VOLTA PARA A HOME
  }, [navigate, clearCart]);

  useEffect(() => {
    resetInactivityTimer();

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
    window.addEventListener("click", resetInactivityTimer);
    window.addEventListener("touchstart", resetInactivityTimer);

    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      window.removeEventListener("click", resetInactivityTimer);
      window.removeEventListener("touchstart", resetInactivityTimer);
    };
  }, [resetInactivityTimer]);

  const {
    pedidoId,
    formaPagamento,
    valorTotal,
    pedidosItens,
    statusPedido,
  } = (location.state || {}) as {
    pedidoId?: string;
    formaPagamento?: string;
    valorTotal?: number;
    pedidosItens?: PedidoItemFormatado[];
    statusPedido?: string;
    tempoPreparoEstimado?: string;
  };

  const pedidosFormatadosParaExibicao = pedidosItens || [];

  const totalRealDoPedido = valorTotal || 0;

  const [tempoDeEsperaCalculado, setTempoDeEsperaCalculado] = useState<string>("Calculando...");

  const displayPedidoId = pedidoId
    ? pedidoId.substring(0, 6).toUpperCase()
    : Math.floor(100000 + Math.random() * 900000).toString();

  useEffect(() => {
    setTempoDeEsperaCalculado(calculateAndFormatEstimatedTime(pedidosFormatadosParaExibicao));
  }, [pedidosFormatadosParaExibicao]);


  const handleFinalizarPedido = async () => {
    resetInactivityTimer();

    if (!pedidoId) {
      alert("ID do pedido não encontrado para finalizar.");
      navigate("/");
      return;
    }

    if (statusPedido === "Pronto") {
      clearCart();
      navigate("/feedback", {
        state: { itemsParaFeedback: pedidosFormatadosParaExibicao, pedidoId },
      });
      return;
    }

    try {
      await atualizarStatusPedido(pedidoId, "Pronto");
      clearCart();
      navigate("/feedback", {
        state: { itemsParaFeedback: pedidosFormatadosParaExibicao, pedidoId },
      });
    } catch (error) {
      let errorMessage = "Ocorreu um erro inesperado. Tente novamente.";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.errorMessage || error.message;
      }

      alert(`Erro: ${errorMessage}`);
    }
  };

  const handleNovoPedido = async () => {
    resetInactivityTimer();

    if (!pedidoId) {
      navigate("/");
      return;
    }

    clearCart();
    navigate("/");
  };

  return (
    <S.Container__Pedido_Finalizado>
      <S.Pedido__Confirmardo>
        <BsCheck2 className="check" />
        <span>Pedido Realizado!</span>
        <p>Seu pedido foi processado com sucesso.</p>
      </S.Pedido__Confirmardo>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Detalhes do Pedido</h1>
          <span>#{displayPedidoId}</span>
        </S.Detalhes>

        <S.Pedidos>
          {pedidosFormatadosParaExibicao.length > 0 ? (
            pedidosFormatadosParaExibicao.map((item, id) => (
              <S.Item key={item.id || id}>
                <div className="tipos__pedidos">
                  <div className="icon-wrapper">
                    <FaCoffee />
                  </div>
                  <div className="pedido">
                    <span>{item.nome}</span>
                    <p>
                      {item.ml ? `${item.ml} ml` : ""} . Quantidade:{" "}
                      {item.quantidade}
                    </p>

                    {item.tipoLeite && item.tipoLeite !== "Integral" && (
                      <p>Leite: {item.tipoLeite}</p>
                    )}
                    {item.tipoAcucar && item.tipoAcucar !== "SemAcucar" && (
                      <p>Açúcar: {item.tipoAcucar}</p>
                    )}
                    {item.observacao && <p>Observação: {item.observacao}</p>}
                  </div>
                </div>

                <span className="valor">
                  R$ {(item.valorUnitario ?? 0).toFixed(2).replace(".", ",")}
                </span>
              </S.Item>
            ))
          ) : (
            <p>Nenhum item no pedido.</p>
          )}
        </S.Pedidos>

        <S.Total__Pedido>
          <span>Total</span>
          <p>R$ {totalRealDoPedido.toFixed(2).replace(".", ",")}</p>
        </S.Total__Pedido>
      </S.Detalhe__Pedido>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Método de Pagamento</h1>
        </S.Detalhes>
        <S.Pedidos>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="icon-wrapper">
                {formaPagamento === "Pix" ? (
                  <img src={PixIcon} alt="Pix Icon" />
                ) : (
                  <img src={WalletIcon} alt="Dinheiro Icon" />
                )}
              </div>
              <div className="pedido">
                <span>{formaPagamento === "Pix" ? "Pix" : "Dinheiro"}</span>
                <p>
                  {formaPagamento === "Pix"
                    ? "Pagamento via PIX"
                    : "Pagamento no local"}
                </p>
              </div>
            </div>
            <span
              className="valor"
              style={{ color: "#14a767", fontWeight: "bold" }}
            >
              APROVADO
            </span>
          </S.Item>
        </S.Pedidos>
      </S.Detalhe__Pedido>

      <S.Detalhe__Pedido>
        <S.Detalhes>
          <h1>Tempo de Espera</h1>
        </S.Detalhes>
        <S.Pedidos>
          <S.Item>
            <div className="tipos__pedidos">
              <div className="icon-wrapper">
                   <FaCoffee />
              </div>
              <div className="pedido">
                <span>{tempoDeEsperaCalculado}</span>
                <p>Você será notificado quando estiver pronto.</p>
              </div>
            </div>
          </S.Item>
        </S.Pedidos>
      </S.Detalhe__Pedido>

      <S.Button__Pedido>
        <button className="finalizar__pedido" onClick={handleFinalizarPedido}>
          Avaliar Pedido
        </button>

        <button className="novo__pedido" onClick={handleNovoPedido}>
          Novo Pedido
        </button>
      </S.Button__Pedido>

      <S.Preferencia>Obrigado pela preferência!</S.Preferencia>
    </S.Container__Pedido_Finalizado>
  );
};