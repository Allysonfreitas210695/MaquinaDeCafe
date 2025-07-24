using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class TipoLeiteExtension
{
    public static string ToDescricao(this TipoLeite tipoLeite)
    {
        return tipoLeite switch
        {
            TipoLeite.Integral => "Integral",
            TipoLeite.Desnatado => "Desnatado",
            TipoLeite.SemLeite => "Sem leite",
            TipoLeite.ZeroLactose => "Zero lactose",
            _ => throw new ArgumentOutOfRangeException(nameof(tipoLeite), tipoLeite, null)
        };
    }
}
