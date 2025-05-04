namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class TamanhoXicaraExtension
{
    public static string ToDescricao(this TamanhoXicara tamanhoXicara)
    {
        return tamanhoXicara switch
        {
            TamanhoXicara.Pequeno => "Pequeno",
            TamanhoXicara.Medio => "Médio",
            TamanhoXicara.Grande => "Grande",
            _ => throw new ArgumentOutOfRangeException(nameof(tamanhoXicara), tamanhoXicara, null)
        };
    }
}
