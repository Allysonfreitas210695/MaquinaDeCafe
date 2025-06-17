using System.ComponentModel.DataAnnotations;

namespace MaquinaDeCafe.src.Communication.Request;

public class RequestAtualizacaoFormaPreparoJson
{   
    public string Nome { get; set; } = string.Empty;
    [Required(ErrorMessage = "O campo 'TempoPreparoMinutos' é obrigatório.")]
    public required int TempoPreparoMinutos { get; set; }
}