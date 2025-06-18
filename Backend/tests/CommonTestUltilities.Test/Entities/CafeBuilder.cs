using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;

public static class CafeBuilder
{
    public static Cafe Build(
        Guid? id = null,
        string? nome = null,
        string? descricao = null,
        int? tempoPreparoSegundos = null,
        CategoriaCafe? categoria = null
    )
    {
        var faker = new Faker("pt_BR");

        return new Cafe(
            id: id ?? Guid.NewGuid(),
            nome: nome ?? faker.Commerce.ProductName(),
            descricao: descricao ?? faker.Lorem.Sentence(5, 3),  
            tempoPreparoSegundos: tempoPreparoSegundos ?? faker.Random.Int(1, 5),
            categoria: categoria ?? faker.PickRandom<CategoriaCafe>()
        );
    }
}
