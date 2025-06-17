using System.ComponentModel.DataAnnotations;

namespace MaquinaDeCafe.src.Communication.Request;

public class RequestTamanhoXicaraJson
{
    public string Descricao { get; set; } = string.Empty;
    public int Ml { get; set; }
    [Required(ErrorMessage = "O campo 'ValorExtra' é obrigatório.")]
    public decimal ValorExtra { get; set; }
}