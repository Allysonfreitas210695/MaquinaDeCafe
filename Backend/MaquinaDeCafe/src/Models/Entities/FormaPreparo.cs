namespace MaquinaDeCafe.src.Models.Entities;

public class FormaPreparo
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public int TempoPreparoMinutos { get; set; }

     public List<Pedido> Pedidos { get; set; } = new();
}