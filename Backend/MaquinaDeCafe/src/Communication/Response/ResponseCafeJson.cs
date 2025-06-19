namespace MaquinaDeCafe.src.Communication.Response;

public class ResponseCafeJson
{
    public Guid Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public int TempoPreparoSegundos { get; set; }
    public string Categoria { get; set; } = string.Empty;
    public List<ResponseTamanhoXicaraJson> TamanhosXicara { get; set; }
}