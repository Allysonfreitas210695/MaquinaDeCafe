using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public static class PedidoBuilder
{
    public static Pedido Build(
        Guid? id = null,
        StatusPedido? statusPedido = null
    )
    {        
        return new Pedido(
            id: id,
            statusPedido: statusPedido ?? StatusPedido.EmPreparo
        );
    }
}
