using Bogus;
using MaquinaDeCafe.src.DTOs;

namespace CommonTestUltilities.Test.Request;

public class RequestCriacaoCafeJsonBuilder
{
    public static RequestCriacaoCafeJson Build()
    {
        return new Faker<RequestCriacaoCafeJson>("pt_BR")
            .RuleFor(x => x.Nome, f => f.Commerce.ProductName())
            .RuleFor(x => x.Descricao, f => f.Lorem.Sentence(5)) 
            .RuleFor(x => x.Preco, f => f.Random.Decimal(1.0m, 20.0m))
            .Generate();
    }
}