namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class NivelAtendimentoExtension
{
    public static string ToDescricao(this NivelAtendimento nivelAtendimento)
    {
        return nivelAtendimento switch
        {
            NivelAtendimento.MuitoBom => "Muito Bom",
            NivelAtendimento.Regular => "Regular",
            NivelAtendimento.Ruim => "Ruim",
            _ => throw new ArgumentOutOfRangeException(nameof(nivelAtendimento), nivelAtendimento, null)
        };
    }
}
