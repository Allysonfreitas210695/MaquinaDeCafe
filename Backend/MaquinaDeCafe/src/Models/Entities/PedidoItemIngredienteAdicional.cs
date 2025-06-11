using MaquinaDeCafe.src.Models.Common;

namespace MaquinaDeCafe.src.Models.Entities;

public class PedidoItemIngredienteAdicional : Entity
{
    public PedidoItem PedidoItem { get; set; } = default!;
    public Guid PedidoItemId { get; set; }
    public IngredienteAdicional IngredienteAdicional { get; set; } = default!;
    public Guid IngredienteAdicionalId { get; set; }
} 