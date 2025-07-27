// PagamentoPix.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "./pix.css";
import { atualizarStatusPedido } from "../../service/pedido_api";


export const PagamentoPix = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { 
    hashPix, 
    pedidoId,
    formaPagamento,     
    valorTotal,         
    pedidosItens,      
    statusPedido: statusInicialPedido, 
    tempoPreparoEstimado, 
  } = location.state || {}; 

  const [pago, setPago] = useState(false);

  useEffect(() => {
    if (!pedidoId) {
      console.error("PedidoId não recebido na tela de Pagamento Pix.");
      navigate("/cancelado"); 
      return;
    }

    const timer = setTimeout(async () => {
      setPago(true);
      try {
        await atualizarStatusPedido(pedidoId, "Pronto"); 
        navigate("/pedidofinalizado", { 
          state: { 
            pedidoId: pedidoId,
            formaPagamento: formaPagamento, 
            valorTotal: valorTotal,      
            pedidosItens: pedidosItens,   
            statusPedido: "Pronto",       
            tempoPreparoEstimado: tempoPreparoEstimado, 
          } 
        });
      } catch (error) {
        console.error("Erro ao atualizar status do pedido após pagamento PIX:", error);
        alert("Ocorreu um erro ao confirmar o pagamento do pedido.");
        navigate("/cancelado");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [
    pedidoId, 
    navigate, 
    formaPagamento, 
    valorTotal, 
    pedidosItens, 
    statusInicialPedido, 
    tempoPreparoEstimado
  ]); 

  return (
    <div className="pix-container">
      <h1>Pagamento via PIX</h1>
      {hashPix && (
        <>
          <QRCode value={hashPix} size={200} />
          <p>{hashPix}</p>
          <button onClick={() => navigator.clipboard.writeText(hashPix)}>
            Copiar Código
          </button>
        </>
      )}
      {!hashPix && <p>Erro ao gerar QRCode. Tente novamente.</p>}
      {pago && <p>Pagamento confirmado (simulado)! Redirecionando...</p>}
    </div>
  );
};