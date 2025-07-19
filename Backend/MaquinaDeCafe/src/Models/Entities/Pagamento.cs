

using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class Pagamento : Entity
{
    public FormaPagamento Forma { get; private set; }
    public string? HashPix { get; private set; }
    public DateTime DataPagamento { get; private set; }

    public Guid PedidoId { get; private set; }
    public Pedido Pedido { get; private set; }

    public Pagamento() { }

    public Pagamento(Guid? id, Guid pedidoId, FormaPagamento forma)
    {
        if (!Enum.IsDefined(typeof(FormaPagamento), forma))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.InvalidFormaPagamento });

        Id = id ?? Guid.NewGuid();
        PedidoId = pedidoId;
        DataPagamento = DateTime.UtcNow;

        SetFormaPagamento(forma);
    }

    public void AtualizarFormaPagamento(FormaPagamento novaForma)
    {
        SetFormaPagamento(novaForma);
        DataPagamento = DateTime.UtcNow;
    }

    private void SetFormaPagamento(FormaPagamento forma)
    {
        if (forma == FormaPagamento.Pix)
            HashPix = Guid.NewGuid().ToString();
        else
            HashPix = null;
        

        Forma = forma;
    }

    public string GetHashPix()
    {
        return !string.IsNullOrWhiteSpace(HashPix) ? HashPix : string.Empty;
    }
}