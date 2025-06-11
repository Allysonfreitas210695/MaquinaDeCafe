using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public class PedidoBuilder
{
    public static Pedido Build(
        Guid? id = null,
        StatusPedido? statusPedido = null
    )
    {
        var faker = new Faker("pt_BR");
        
        return new Pedido(
            id: id,
            statusPedido: statusPedido ?? faker.PickRandom<StatusPedido>()
        );
    }
}
