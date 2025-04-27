
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Models.Entities;

public class Pedido
{
     public Guid Id { get; set; }
    public Guid CafeId { get; set; }
    public Cafe Cafe { get; set; } = default!;
    public TipoLeite TipoLeite { get; set; }
    public TipoAcucar TipoAcucar { get; set; }
    public TamanhoXicara TamanhoXicara { get; set; }
    public int Quantidade { get; set; }
    public decimal ValorTotal { get; set; }
    public Guid FormaPreparoId { get; set; }
    public FormaPreparo FormaPreparo { get; set; } = default!;
    public StatusPedido Status { get; set; }
    public bool ProdutoDisponivel { get; set; }
    public List<IngredienteAdicional> IngredientesAdicionais { get; set; } = new();
}