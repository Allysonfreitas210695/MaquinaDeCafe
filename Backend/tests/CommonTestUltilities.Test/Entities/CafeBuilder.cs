using Bogus;
using MaquinaDeCafe.src.Models.Entities;

namespace CommonTestUltilities.Test.Entities;

public class CafeBuilder
{
    public static Cafe Build(
        Guid? id = null,
        string? nome = null,
        string? descricao = null,
        decimal? preco = null
    )
    {
        var faker = new Faker("pt_BR");

        return new Cafe(
            id: id ?? Guid.NewGuid(),
            nome: nome ?? faker.Commerce.ProductName(),
            descricao: descricao ?? faker.Lorem.Sentence(5, 3),  
            preco: preco ?? faker.Random.Decimal(1.5m, 15.0m)
        );
    }
}
