namespace MaquinaDeCafe.src.Communication.Response;

public class ResponseTamanhoXicaraJson
{
    public Guid Id { get; set; }
    public string Descricao { get; set; } = string.Empty;
    public int Ml { get; set; }
    public decimal Valor { get; set; }
    public Guid CafeId { get; set; }
}