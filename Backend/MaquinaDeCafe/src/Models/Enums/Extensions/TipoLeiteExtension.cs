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
            TipoLeite.Vegetal => "Vegetal",
            TipoLeite.Nenhum => "Sem leite",
            _ => throw new ArgumentOutOfRangeException(nameof(tipoLeite), tipoLeite, null)
        };
    }
}
