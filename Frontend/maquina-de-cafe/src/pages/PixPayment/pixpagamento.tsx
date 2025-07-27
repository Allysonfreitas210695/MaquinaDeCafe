import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import QRCode from "react-qr-code";
import { atualizarStatusPedido } from "../../service/pedido_api";
import "./pix.css";
import { FaCopy, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { BsArrowLeftShort } from "react-icons/bs";
import Swal from 'sweetalert2';
import { useCart } from "../Carrinho/CardContext/cardcontext";

export const PagamentoPix = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart(); 

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
  const [copied, setCopied] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);

  const handleCancelar = useCallback(() => {
    clearCart(); 

    Swal.fire({
      icon: "error",
      title: "Pedido Cancelado!",
      text: "Explore nosso devine café e comece um novo pedido!",
      timer: 3000,
      showConfirmButton: false,
    }).then(() => {
      navigate("/pedido"); 
    });
  }, [navigate, clearCart]); 

  useEffect(() => {
    if (!pedidoId) {
      console.error("PedidoId não recebido na tela de Pagamento Pix.");
      handleCancelar();
      return;
    }

    setLoadingPayment(true);

    const paymentConfirmationTimer = setTimeout(async () => {
      setPago(true);
      setLoadingPayment(false);

      try {
        await atualizarStatusPedido(pedidoId, "Pronto");

        const redirectTimer = setTimeout(() => {
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
        }, 1000);

        return () => clearTimeout(redirectTimer);
      } catch (error) {
        console.error("Erro ao atualizar status do pedido após pagamento PIX:", error);
        alert("Ocorreu um erro ao confirmar o pagamento do pedido.");
        setLoadingPayment(false);
        handleCancelar();
      }
    }, 7000);

    return () => clearTimeout(paymentConfirmationTimer);
  }, [
    pedidoId,
    navigate,
    formaPagamento,
    valorTotal,
    pedidosItens,
    statusInicialPedido,
    tempoPreparoEstimado,
    handleCancelar 
  ]);

  const handleCopy = () => {
    if (hashPix) {
      navigator.clipboard.writeText(hashPix);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleVoltar = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/carrinho");
    }
  };

  return (
    <div className="pix-container">
      <div className="acoes-topo">
        <BsArrowLeftShort onClick={handleVoltar} className="short" />
        <span>Pagamento via PIX</span>
      </div>

      <div className="content-area">
        <div className="header">
          <h1>Escaneie o QR Code ou Copie e Cole o Código Pix</h1>
          <p>Para finalizar seu pedido, realize o pagamento via Pix.</p>
        </div>

        {hashPix ? (
          <>
            <div className="qr-code-wrapper">
              <QRCode value={hashPix} size={150} level="H" />
            </div>

            <p className="value-display">
              <strong>Valor Total:</strong> R$ {valorTotal ? valorTotal.toFixed(2).replace(".", ",") : "0,00"}
            </p>

            <div className="pix-code-section">
              <p>
                Código PIX: <span className="pix-code-text">{hashPix}</span>
              </p>
              <button onClick={handleCopy} className="copy-button">
                {copied ? <><FaCheckCircle /> Copiado!</> : <><FaCopy /> Copiar Código</>}
              </button>
            </div>

            {!pago && loadingPayment && (
              <p className="loading-message">
                <FaSpinner className="spinner" /> Aguardando confirmação do pagamento...
              </p>
            )}
            {pago && (
              <p className="payment-confirmed">
                <FaCheckCircle /> Pagamento confirmado!
              </p>
            )}
          </>
        ) : (
          <p className="error-message">
            Erro ao gerar o QR Code Pix. Por favor, tente novamente ou contate o suporte.
          </p>
        )}
      </div>
    </div>
  );
};