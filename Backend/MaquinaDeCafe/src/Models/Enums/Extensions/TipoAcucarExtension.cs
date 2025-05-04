using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class TipoAcucarExtension
{
    public static string ToDescricao(this TipoAcucar tipoAcucar)
    {
        return tipoAcucar switch
        {
            TipoAcucar.Refinado => "Refinado",
            TipoAcucar.Mascavo => "Mascavo",
            TipoAcucar.Americano => "Americano",
            TipoAcucar.Nenhum => "Sem açúcar",
            _ => throw new ArgumentOutOfRangeException(nameof(tipoAcucar), tipoAcucar, null)
        };
    }
}
