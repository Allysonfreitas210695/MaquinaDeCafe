using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public class PedidoBuilder
{
    public static Pedido Build(
        Guid? id = null, 
        FormaPreparo? formaPreparo = null
    )
    {
        var faker = new Faker("pt_BR");
 
        var formaPreparoFinal = formaPreparo ?? FormaPreparoBuilder.Build(); 

        return new Pedido(
            id: id,
            formaPreparoId: formaPreparoFinal.Id
        );
    }
}
