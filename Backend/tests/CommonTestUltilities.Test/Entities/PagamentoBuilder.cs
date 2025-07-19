using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;
public static class PagamentoBuilder
{
    public static Pagamento Build(
        Guid? id = null, 
        Guid? pedidoId = null, 
        FormaPagamento? forma = null
    )
    {
        var faker = new Faker();

        return new Pagamento(
            id: id ?? Guid.NewGuid(),
            pedidoId: pedidoId ?? Guid.NewGuid(),
            forma: forma ?? faker.PickRandom<FormaPagamento>()
        );
    }
}
