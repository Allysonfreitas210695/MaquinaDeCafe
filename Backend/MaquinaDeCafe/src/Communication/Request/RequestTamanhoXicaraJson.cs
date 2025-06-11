namespace MaquinaDeCafe.src.Communication.Request;

public class RequestTamanhoXicaraJson
{
    public string Descricao { get; set; } = string.Empty;
    public int Ml { get; set; }
    public decimal ValorExtra { get; set; }
}