using System.ComponentModel.DataAnnotations;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Communication.Request;

public class RequestAvaliacaoCafeJson
{
    [Required(ErrorMessage = "O campo 'CafeId' é obrigatório.")]
    public required Guid CafeId { get; set; }
    [Required(ErrorMessage = "O campo 'Atendimento' é obrigatório.")]
    public required NivelAtendimento Atendimento { get; set; }
    [Required(ErrorMessage = "O campo 'Estrelas' é obrigatório.")]
    public required int Estrelas { get; set; }
    public string Observacao { get; set; } = string.Empty;
}