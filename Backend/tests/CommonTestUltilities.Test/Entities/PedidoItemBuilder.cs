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

        var _pedidoItem = new PedidoItem();
        _pedidoItem.UpdateId(id ?? Guid.NewGuid());
        _pedidoItem.UpdatePedidoId(pedidoId ?? Guid.NewGuid());
        _pedidoItem.UpdateCafeId(cafeId ?? Guid.NewGuid());
        _pedidoItem.UpdateQuantidade(quantidade ?? faker.Random.Int(1, 5));
        _pedidoItem.UpdateTipoLeite(tipoLeite ?? faker.PickRandom<TipoLeite>());
        _pedidoItem.UpdateTipoAcucar(tipoAcucar ?? faker.PickRandom<TipoAcucar>());
        _pedidoItem.UpdateTempoPreparo(faker.Random.Int(1, 5));
        _pedidoItem.UpdateTamanhoXicaraId(tamanhoXicaraId ?? Guid.NewGuid());

        return new PedidoItem(_pedidoItem);
    }
}
