
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class Pedido
{
    public Guid Id { get; private set; }
    public Guid FormaPreparoId { get; private set; }
    public FormaPreparo FormaPreparo { get; private set; } = default!;
    public StatusPedido Status { get; private set; }
    public decimal ValorTotal { get; private set; }

    public List<PedidoItem> PedidoItens { get; private set; } = new();

    public Pedido() {}

    public Pedido(Guid? id, Guid formaPreparoId)
    {
        Id = id ?? Guid.NewGuid();
        FormaPreparoId = formaPreparoId;
        Status = StatusPedido.EmPreparo;
        ValorTotal = 0;

        Validar();
    }

    private void Validar()
    {
        if (FormaPreparoId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoFormaPreparoObrigatoria });
    }

    public void AdicionarItem(PedidoItem item, decimal precoCafe)
    {
        if (item == null)
            throw new ErrorOnValidationException(new List<string> { "Item do pedido inválido." });

        if (item.GetQuantidadeItens() <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoQuantidadeInvalida });

        PedidoItens.Add(item);
        ValorTotal += item.CalcularValorItem(precoCafe);
    }

    public void AlterarStatus(StatusPedido novoStatus)
    {
        if (Status is StatusPedido.Entregue or StatusPedido.Cancelado)
            throw new ErrorOnValidationException(new List<string> { "Não é possível alterar o status de um pedido que já foi entregue ou cancelado." });

        if (!PodeAlterarPara(novoStatus))
            throw new ErrorOnValidationException(new List<string> { $"Transição de status de '{Status}' para '{novoStatus}' não é permitida." });

        Status = novoStatus;
    }

    private bool PodeAlterarPara(StatusPedido novoStatus) => Status switch
    {
        StatusPedido.EmPreparo => novoStatus is StatusPedido.Pronto or StatusPedido.Cancelado,
        StatusPedido.Pronto => novoStatus is StatusPedido.Entregue or StatusPedido.Cancelado,
        _ => false
    };
}
