namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class FormaPagamentoExtension
{
    public static string ToDescricao(this FormaPagamento formaPagamento)
    {
        return formaPagamento switch
        {
            FormaPagamento.Pix => "Pix",
            FormaPagamento.Dinheiro => "Dinheiro",
            _ => throw new ArgumentOutOfRangeException(nameof(formaPagamento), formaPagamento, null)
        };
    }
}