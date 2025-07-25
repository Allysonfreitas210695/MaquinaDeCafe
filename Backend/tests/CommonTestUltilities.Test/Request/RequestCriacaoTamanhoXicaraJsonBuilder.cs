using Bogus;
using MaquinaDeCafe.src.Communication.Request;

namespace CommonTestUltilities.Test.Request;

public static class RequestTamanhoXicaraJsonBuilder
{
    public static RequestTamanhoXicaraJson Build(
    string? descricao = null,
    int? ml = null,
    decimal? valor = null,
    Guid? cafeId = null
)
    {
        var faker = new Faker<RequestTamanhoXicaraJson>("pt_BR")
            .RuleFor(x => x.Descricao, f => descricao ?? f.Lorem.Word())
            .RuleFor(x => x.Ml, f => ml ?? f.Random.Int(1, 500))
            .RuleFor(x => x.Valor, f => valor ?? f.Random.Decimal(0, 100))
            .RuleFor(x => x.CafeId, f => cafeId ?? f.Random.Guid());

        return faker.Generate();
    }


    public static RequestTamanhoXicaraJson WithDescricao(this RequestTamanhoXicaraJson request, string descricao)
    {
        request.Descricao = descricao;
        return request;
    }

    public static RequestTamanhoXicaraJson WithMl(this RequestTamanhoXicaraJson request, int ml)
    {
        request.Ml = ml;
        return request;
    }

    public static RequestTamanhoXicaraJson WithValor(this RequestTamanhoXicaraJson request, decimal valor)
    {
        request.Valor = valor;
        return request;
    }

    public static RequestTamanhoXicaraJson WithCafeId(this RequestTamanhoXicaraJson request, Guid cafeId)
    {
        request.CafeId = cafeId;
        return request;
    }

    public static RequestTamanhoXicaraJson WithEmptyDescricao(this RequestTamanhoXicaraJson request)
    {
        request.Descricao = string.Empty;
        return request;
    }

    public static RequestTamanhoXicaraJson WithNullDescricao(this RequestTamanhoXicaraJson request)
    {
        request.Descricao = null!;
        return request;
    }

    public static RequestTamanhoXicaraJson WithWhitespaceDescricao(this RequestTamanhoXicaraJson request)
    {
        request.Descricao = "   ";
        return request;
    }
}