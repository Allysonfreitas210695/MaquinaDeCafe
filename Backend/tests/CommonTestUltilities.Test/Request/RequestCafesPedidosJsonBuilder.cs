using Bogus;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Request;

public static class RequestCafesPedidosJsonBuilder
{
    public static RequestCafesPedidosJson Build(
        Guid? cafeId = null,
        Guid? tamanhoXicaraId = null,
        TipoLeite? tipoLeite = null,
        TipoAcucar? tipoAcucar = null,
        int? quantidade = null,
        List<Guid>? ingredientesAdicionaisIds = null
    )
    {
        var faker = new Faker("pt_BR");

        return new RequestCafesPedidosJson
        {
            CafeId = cafeId ?? Guid.NewGuid(),
            TamanhoXicaraId = tamanhoXicaraId ?? Guid.NewGuid(),
            TipoLeite = tipoLeite ?? faker.PickRandom<TipoLeite>(),
            TipoAcucar = tipoAcucar ?? faker.PickRandom<TipoAcucar>(),
            Quantidade = quantidade ?? faker.Random.Int(1, 5),
            IngredientesAdicionaisIds = ingredientesAdicionaisIds ?? new List<Guid>()
        };
    }
}