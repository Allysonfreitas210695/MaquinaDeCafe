namespace MaquinaDeCafe.src.Communication.Response;

public class ResponseAvaliacaoCafeJson
{
    public Guid Id  { get; set; }
    public Guid CafeId { get; set; }
    public string Atendimento { get; set; } = string.Empty; 
    public int Estrelas { get; set; }
    public string Observacao { get; set; } = string.Empty;
}
