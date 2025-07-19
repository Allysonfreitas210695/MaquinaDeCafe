

using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Models.Entities;

public class Pagamento : Entity
{
    public FormaPagamento Forma { get; private set; }
    public string? HashPix { get; private set; }
    public DateTime DataPagamento { get; private set; }

    public Guid PedidoId { get; private set; }
    public Pedido Pedido { get; private set; }

    public Pagamento() { }
    public Pagamento(Guid pedidoId, FormaPagamento forma, string? hashPix = null)
    {
        Id = Guid.NewGuid();
        PedidoId = pedidoId;
        DataPagamento = DateTime.UtcNow;

        SetFormaPagamento(forma, hashPix);
    }

    public void AtualizarFormaPagamento(FormaPagamento novaForma, string? novoHashPix = null)
    {
        SetFormaPagamento(novaForma, novoHashPix);
        DataPagamento = DateTime.UtcNow;
    }

    private void SetFormaPagamento(FormaPagamento forma, string? hashPix)
    {
        if (forma == FormaPagamento.Pix)
        {
            if (string.IsNullOrWhiteSpace(hashPix))
                throw new ArgumentException("HashPix é obrigatório para pagamentos via PIX.");

            HashPix = hashPix;
        }
        else
        {
            HashPix = null;
        }

        Forma = forma;
    }

    public string GetHashPix()
    {
        return !string.IsNullOrWhiteSpace(HashPix) ? HashPix : string.Empty;
    }
}