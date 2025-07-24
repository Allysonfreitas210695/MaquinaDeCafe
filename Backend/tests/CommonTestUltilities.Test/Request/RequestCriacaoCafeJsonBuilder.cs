using Bogus;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Request;

public static class RequestCriacaoCafeJsonBuilder
{
    public static RequestCriacaoCafeJson Build(
        string? nome = null,
        string? descricao = null,
        int? tempoPreparoSegundos = null,
        CategoriaCafe? categoria = null
    )
    {
        var faker = new Faker<RequestCriacaoCafeJson>("pt_BR")
            .RuleFor(x => x.Nome, f => nome ?? f.Commerce.ProductName())
            .RuleFor(x => x.Descricao, f => descricao ?? f.Lorem.Sentence(5))
            .RuleFor(x => x.TempoPreparoSegundos, f => tempoPreparoSegundos ?? f.Random.Int(1, 10))
            .RuleFor(x => x.Categoria, f => categoria ?? f.PickRandom<CategoriaCafe>());

        return faker.Generate();
    }
}