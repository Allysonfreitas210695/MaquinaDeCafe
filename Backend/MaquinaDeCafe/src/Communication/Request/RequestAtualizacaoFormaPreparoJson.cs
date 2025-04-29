namespace MaquinaDeCafe.src.Communication.Request;

public class RequestAtualizacaoFormaPreparoJson
{   
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public int TempoPreparoMinutos { get; set; }
}