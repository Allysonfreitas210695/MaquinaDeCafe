using Bogus;
using Bogus.DataSets;
using MaquinaDeCafe.src.Communication.Request;

namespace CommonTestUltilities.Test.Request;

public static class RequestCriacaoIngredienteAdicionalJsonBuilder
{
    public static RequestCriacaoIngredienteAdicionalJson Build(
        string? nome = null,
        decimal? valorExtra = null
    )
    {
            var faker = new Faker<RequestCriacaoIngredienteAdicionalJson>("pt_BR")
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.ValorExtra, f => f.Random.Decimal(0.5m, 10m));

        var result = faker.Generate();

        if (nome != null) result.Nome = nome;
        if (valorExtra != null) result.ValorExtra = valorExtra.Value;

        return result;
    }
}
