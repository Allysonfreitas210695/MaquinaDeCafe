namespace MaquinaDeCafe.src.Models.Enums.Extensions;


public static class StatusPedidoExtension {
    public static string ToDescricao(this StatusPedido statusPedido)
    {
        return statusPedido switch
        {
            StatusPedido.EmPreparo => "Em preparo",
            StatusPedido.Pronto => "Pronto",
            StatusPedido.Cancelado => "Cancelado",
            StatusPedido.Entregue => "Entregue",
            _ => throw new ArgumentOutOfRangeException(nameof(statusPedido), statusPedido, null)
        };
    }
}