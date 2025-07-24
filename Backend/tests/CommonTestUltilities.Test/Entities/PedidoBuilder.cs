using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public static class PedidoBuilder
{
    public static Pedido Build(
        Guid? id = null,
        StatusPedido? statusPedido = null,
        decimal? valorTotal = null
    )
    {
        var faker = new Faker();

        return new Pedido(
            id: id,
            statusPedido: statusPedido ?? StatusPedido.EmPreparo,
            valorTotal: valorTotal ?? faker.Random.Decimal(5.00m, 50.00m)
        );
    }
}
