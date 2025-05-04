using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Communication.Request;

public class RequestCafesPedidosJson
{
    public Guid CafeId { get; set; }
    public TipoLeite TipoLeite { get; set; }
    public TipoAcucar TipoAcucar { get; set; }
    public TamanhoXicara TamanhoXicara { get; set; }
    public List<Guid>? IngredientesAdicionaisIds { get; set; } 
    public int Quantidade { get; set; } = default!;
}