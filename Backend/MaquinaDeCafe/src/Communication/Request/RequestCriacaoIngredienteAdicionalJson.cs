using System.ComponentModel.DataAnnotations;
namespace MaquinaDeCafe.src.Communication.Request;

public class RequestCriacaoIngredienteAdicionalJson
{
    public string Nome { get; set; } = string.Empty;
    [Required(ErrorMessage = "O campo 'ValorExtra' é obrigatório.")]
    public required decimal ValorExtra { get; set; }
}