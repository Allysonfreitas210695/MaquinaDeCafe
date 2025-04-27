namespace MaquinaDeCafe.src.Models.Entities;

public class IngredienteAdicional
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public decimal ValorExtra { get; set; }

    public List<Pedido> Pedidos { get; set; } = new();
}