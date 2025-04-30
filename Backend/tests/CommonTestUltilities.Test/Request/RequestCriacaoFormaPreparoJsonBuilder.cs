using Bogus;
using MaquinaDeCafe.src.Communication.Request;

namespace CommonTestUltilities.Test.Request;

public class RequestCriacaoFormaPreparoJsonBuilder
{
    public static RequestCriacaoFormaPreparoJson Build()
    {
        return new Faker<RequestCriacaoFormaPreparoJson>("pt_BR")
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.TempoPreparoMinutos, f => f.Random.Int(1, 10))
            .Generate();
    }
}