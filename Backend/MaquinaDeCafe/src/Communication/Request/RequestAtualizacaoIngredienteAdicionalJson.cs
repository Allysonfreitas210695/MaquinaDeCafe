namespace MaquinaDeCafe.src.Communication.Request;

public class RequestAtualizacaoIngredienteAdicionalJson
{
    public Guid Id { get; private set; }
    public string Nome { get; private set; } = string.Empty;
    public decimal ValorExtra { get; private set; }
}