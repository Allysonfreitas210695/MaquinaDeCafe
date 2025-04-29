namespace MaquinaDeCafe.src.Communication.Response;

public class ResponseFormaPreparo
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public int TempoPreparoMinutos { get; set; }
}