using System.ComponentModel.DataAnnotations;

namespace MaquinaDeCafe.src.Communication.Request;

public class RequestTamanhoXicaraJson
{
    public string Descricao { get; set; } = string.Empty;
    [Required(ErrorMessage = "O campo 'ML' é obrigatório.")]
    public required int Ml { get; set; }
    [Required(ErrorMessage = "O campo 'ValorExtra' é obrigatório.")]
    public required decimal ValorExtra { get; set; }
}