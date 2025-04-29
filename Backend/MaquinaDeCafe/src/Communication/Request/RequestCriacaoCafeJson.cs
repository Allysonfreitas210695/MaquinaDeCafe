namespace MaquinaDeCafe.src.DTOs;

public class RequestCriacaoCafeJson
{
    public string Nome { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public decimal Preco { get; set; }
}