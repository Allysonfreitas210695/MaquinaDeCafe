using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.DTOs;

public class RequestCriacaoPedidoJson
{
    public Guid FormaPreparoId { get; set; }
    public List<RequestCafesPedidosJson> PedidosCafes { get; set; }    
}
