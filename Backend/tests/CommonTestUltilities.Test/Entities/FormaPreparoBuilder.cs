using Bogus;
using MaquinaDeCafe.src.Models.Entities;

namespace CommonTestUltilities.Test.Entities;

public class FormaPreparoBuilder
{
    public static FormaPreparo Build(
        Guid? id = null,
        string? nome = null,
        int? tempoPreparoMinutos = null
    )
    {
        var faker = new Faker("pt_BR");

        return new FormaPreparo(
            id: id ?? Guid.NewGuid(),
            nome: nome ?? faker.Commerce.ProductMaterial(),
            tempoPreparoMinutos: tempoPreparoMinutos ?? faker.Random.Int(1, 10)
        );
    }
}
