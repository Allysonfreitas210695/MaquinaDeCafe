using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class TipoAcucarExtension
{
    public static string ToDescricao(this TipoAcucar tipoAcucar)
    {
        return tipoAcucar switch
        {
            TipoAcucar.Acucar => "açúcar",
            TipoAcucar.Mascavo => "Mascavo",
            TipoAcucar.Adocante => "Adoçante",
            TipoAcucar.SemAcucar => "Sem açúcar",
            _ => throw new ArgumentOutOfRangeException(nameof(tipoAcucar), tipoAcucar, null)
        };
    }
}
