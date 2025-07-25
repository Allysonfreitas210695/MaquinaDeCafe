using Bogus;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Request;

public static class RequestCriacaoPedidoJsonBuilder
{
    public static RequestCriacaoPedidoJson Build(
        FormaPagamento? formaPagamento = null,
        decimal? valorTotal = null,
        List<RequestCafesPedidosJson>? pedidosItens = null
    )
    {
        var faker = new Faker("pt_BR");

        return new RequestCriacaoPedidoJson
        {
            FormaPagamento = formaPagamento ?? faker.PickRandom<FormaPagamento>(),
            ValorTotal = valorTotal ?? faker.Random.Decimal(5, 100),
            PedidosItens = pedidosItens ?? new List<RequestCafesPedidosJson>
            {
                RequestCafesPedidosJsonBuilder.Build()
            }
        };
    }
}
