using System.ComponentModel.DataAnnotations;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Communication.Request;

public class RequestAtualizacaoCafeJson
{
    public string Nome { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    [Required(ErrorMessage = "O campo 'Preco' é obrigatório.")]
    public decimal Preco { get; set; }
    public int TempoPreparoSegundos { get; set; }
    public CategoriaCafe Categoria { get; set; }
}