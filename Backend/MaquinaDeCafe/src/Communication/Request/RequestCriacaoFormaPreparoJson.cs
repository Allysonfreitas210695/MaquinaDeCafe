namespace MaquinaDeCafe.src.Communication.Request;

public class RequestCriacaoFormaPreparoJson
{
    public string Nome { get; set; } = string.Empty;
    public int TempoPreparoMinutos { get; set; }
}