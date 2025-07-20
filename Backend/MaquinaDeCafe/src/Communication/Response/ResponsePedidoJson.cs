namespace MaquinaDeCafe.src.Communication.Response;

public class ResponsePedidoJson
{
    public Guid Id { get; set; }

    public List<ResponsePedidosItensJson> PedidosItens { get; set; } = new();

    public decimal ValorTotal { get; set; }

    public string Status { get; set; } = string.Empty;
    public string FormaPagamento { get; set; } = string.Empty;

    public string HashPix { get; set; } = string.Empty;
}