using Bogus;
using MaquinaDeCafe.src.Communication.Request;

namespace CommonTestUltilities.Test.Request;

public class RequestAtualizacaoFormaPreparoJsonBuilder
{
    public static RequestAtualizacaoFormaPreparoJson Build()
    {
       return new Faker<RequestAtualizacaoFormaPreparoJson>("pt_BR")
            .RuleFor(x => x.Id, f => Guid.NewGuid())
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.TempoPreparoMinutos, f => f.Random.Int(1, 10))
            .Generate();
    }
}