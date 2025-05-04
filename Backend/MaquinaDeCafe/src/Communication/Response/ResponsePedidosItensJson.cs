namespace MaquinaDeCafe.src.Communication.Response;

public class ResponsePedidosItensJson
{
    public Guid Id { get;  set; }
    public Guid PedidoId { get;  set; }
    public ResponsePedidoJson Pedido { get;  set; } = default!;
    public Guid CafeId { get;  set; }
    public ResponseCafeJson Cafe { get;  set; } = default!;
    public int Quantidade { get;  set; }
    public string TipoLeite { get;  set; } = string.Empty;
    public string TipoAcucar { get;  set; } = string.Empty;
    public string TamanhoXicara { get;  set; } = string.Empty;

    public List<ResponseIngredienteAdicionalJson> IngredientesAdicionais { get;  set; } = new();

}