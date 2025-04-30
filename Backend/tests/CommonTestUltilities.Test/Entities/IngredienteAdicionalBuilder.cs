using Bogus;
using MaquinaDeCafe.src.Models.Entities;

namespace CommonTestUltilities.Test.Entities;

public class IngredienteAdicionalBuilder
{
    public static IngredienteAdicional Build(
        Guid? id = null,
        string? nome = null,
        decimal? valorExtra = null
    )
    {
        var faker = new Faker("pt_BR");

        return new IngredienteAdicional(
            id: id ?? Guid.NewGuid(),
            nome: nome ?? faker.Commerce.ProductName(),
            valorExtra: valorExtra ?? faker.Random.Decimal(0.5m, 5.0m)
        );
    }
}
