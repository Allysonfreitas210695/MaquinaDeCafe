namespace MaquinaDeCafe.src.Communication.Request;

public class RequestAtualizacaoIngredienteAdicionalJson
{
    public string Nome { get;  set; } = string.Empty;
    public decimal ValorExtra { get; set; }
}