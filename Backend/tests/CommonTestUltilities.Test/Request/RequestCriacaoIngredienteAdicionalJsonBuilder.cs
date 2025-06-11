using Bogus;
using MaquinaDeCafe.src.Communication.Request;

namespace CommonTestUltilities.Test.Request;

public class RequestCriacaoIngredienteAdicionalJsonBuilder
{
    public static RequestCriacaoIngredienteAdicionalJson Build()
    {
        return new Faker<RequestCriacaoIngredienteAdicionalJson>("pt_BR")
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.ValorExtra, f => f.Random.Int(1, 10))
            .Generate();
    }
}
