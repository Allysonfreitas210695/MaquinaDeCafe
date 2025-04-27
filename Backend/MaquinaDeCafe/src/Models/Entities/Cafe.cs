namespace MaquinaDeCafe.src.Models.Entities;
public class Cafe
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public decimal Preco { get; set; }

    public List<Pedido> Pedidos { get; set; } = new();
}