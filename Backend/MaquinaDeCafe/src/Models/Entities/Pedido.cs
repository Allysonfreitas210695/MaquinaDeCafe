
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class Pedido : Entity
{
    public StatusPedido Status { get; private set; }
    public decimal ValorTotal { get; private set; }

    public List<PedidoItem> PedidoItens { get; private set; } = new();

    public Pedido() {}

    public Pedido(Guid? id, StatusPedido statusPedido)
    {
        Id = id ?? Guid.NewGuid();
        Status = statusPedido;
        ValorTotal = 0;
    }

    public void AdicionarItem(PedidoItem item, decimal precoCafe, decimal precoTamanhoXicara)
    {
        if (item == null)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoItemInvalido });

        if (item.GetQuantidadeItens() <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoQuantidadeInvalida });

        PedidoItens.Add(item);
        ValorTotal += item.CalcularValorItem(precoCafe, precoTamanhoXicara);
    }

    public void AlterarStatus(StatusPedido novoStatus)
    {
        if (Status is StatusPedido.Entregue or StatusPedido.Cancelado)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoStatusAlteracaoNaoPermitida });

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
