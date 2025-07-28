using System.ComponentModel.DataAnnotations;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.DTOs;

public class RequestCriacaoPedidoJson
{
    [Required(ErrorMessage = "O campo 'FormaPagamento' é obrigatório.")]
    public required FormaPagamento FormaPagamento { get; set; }
    public decimal ValorTotal { get; set; } = 0.0m;
    public List<RequestCafesPedidosJson> PedidosItens { get; set; } = default!;
}
 