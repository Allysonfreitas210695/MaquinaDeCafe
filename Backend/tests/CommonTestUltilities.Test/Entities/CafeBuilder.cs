using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public class CafeBuilder
{
    public static Cafe Build(
        Guid? id = null,
        string? nome = null,
        string? descricao = null,
        decimal? preco = null,
        int? tempoPreparoSegundos = null,
        CategoriaCafe? categoria = null
    )
    {
        var faker = new Faker("pt_BR");

        return new Cafe(
            id: id ?? Guid.NewGuid(),
            nome: nome ?? faker.Commerce.ProductName(),
            descricao: descricao ?? faker.Lorem.Sentence(5, 3),  
            preco: preco ?? faker.Random.Decimal(1.5m, 15.0m),
            tempoPreparoSegundos: tempoPreparoSegundos ?? faker.Random.Int(1, 5),
            categoria: categoria ?? faker.PickRandom<CategoriaCafe>()
        );
    }
}
