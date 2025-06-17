using System.ComponentModel.DataAnnotations;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.DTOs;

public class RequestCriacaoCafeJson
{
    public string Nome { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    [Required(ErrorMessage = "O campo 'Preco' é obrigatório.")]
    public required decimal Preco { get; set; }
    [Required(ErrorMessage = "O campo 'TempoPreparoSegundos' é obrigatório.")]
    public required int TempoPreparoSegundos { get; set; }
    [Required(ErrorMessage = "O campo 'Categoria' é obrigatório.")]
    public required CategoriaCafe Categoria { get; set; }
}