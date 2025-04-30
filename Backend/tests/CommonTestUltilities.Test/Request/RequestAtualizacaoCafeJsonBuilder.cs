using Bogus;
using MaquinaDeCafe.src.Communication.Request;

namespace CommonTestUltilities.Test.Request;

public class RequestAtualizacaoCafeJsonBuilder
{
    public static RequestAtualizacaoCafeJson Build()
    {
       return new Faker<RequestAtualizacaoCafeJson>("pt_BR")
            .RuleFor(x => x.Id, f => Guid.NewGuid())
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.Descricao, f => f.Lorem.Sentence(5)) 
            .RuleFor(x => x.Preco, f => f.Random.Decimal(1.0m, 20.0m))
            .Generate();
    }
}