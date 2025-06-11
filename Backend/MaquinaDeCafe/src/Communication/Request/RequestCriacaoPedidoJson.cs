using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.DTOs;

public class RequestCriacaoPedidoJson
{
    public List<RequestCafesPedidosJson> PedidosItens { get; set; } = default!;   
}
