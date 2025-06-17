using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public static class PedidoItemBuilder
{
    public static PedidoItem Build(
        Guid? id = null,
        Guid? pedidoId = null,
        Guid? cafeId = null,
        int? quantidade = null,
        TipoLeite? tipoLeite = null,
        TipoAcucar? tipoAcucar = null,
        Guid? tamanhoXicaraId = null,
        int? tempoPreparoSegundos = null
    )
    {
        var faker = new Faker("pt_BR");

        return new PedidoItem(
            id: id ?? Guid.NewGuid(),
            pedidoId: pedidoId ?? Guid.NewGuid(),
            cafeId: cafeId ?? Guid.NewGuid(),
            quantidade: quantidade ?? faker.Random.Int(1, 5),
            tipoLeite: tipoLeite ?? faker.PickRandom<TipoLeite>(),
            tipoAcucar: tipoAcucar ?? faker.PickRandom<TipoAcucar>(),
            tamanhoXicaraId: tamanhoXicaraId ?? Guid.NewGuid(),
            tempoPreparoSegundos: faker.Random.Int(1, 5)
        );
    }
}
