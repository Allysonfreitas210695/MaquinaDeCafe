namespace MaquinaDeCafe.src.Communication.Request;

public class RequestCriacaoIngredienteAdicionalJson
{
    public string Nome { get; private set; } = string.Empty;
    public decimal ValorExtra { get; private set; }
}