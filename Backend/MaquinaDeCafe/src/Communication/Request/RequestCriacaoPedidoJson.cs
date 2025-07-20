using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.DTOs;

public class RequestCriacaoPedidoJson
{
    public FormaPagamento FormaPagamento { get; set; }
    public decimal ValorTotal { get; set; } = 0.0m;
    public List<RequestCafesPedidosJson> PedidosItens { get; set; } = default!;
}
