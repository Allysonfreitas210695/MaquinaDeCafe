namespace MaquinaDeCafe.src.Communication.Response;

public class ResponseIngredienteAdicionalJson
{
    public Guid Id { get;  set; }
    public string Nome { get;  set; } = string.Empty;
    public decimal ValorExtra { get;  set; }
}