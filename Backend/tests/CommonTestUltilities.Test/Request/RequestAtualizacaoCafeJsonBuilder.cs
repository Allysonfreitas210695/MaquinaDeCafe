using Bogus;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Request;

public static class RequestAtualizacaoCafeJsonBuilder
{
    public static RequestAtualizacaoCafeJson Build()
    {
       return new Faker<RequestAtualizacaoCafeJson>("pt_BR")
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.Descricao, f => f.Lorem.Sentence(5))
            .RuleFor(x => x.TempoPreparoSegundos, f => f.Random.Int(1, 10))
            .RuleFor(x => x.Categoria, f => f.PickRandom<CategoriaCafe>())
            .Generate();
    }
}