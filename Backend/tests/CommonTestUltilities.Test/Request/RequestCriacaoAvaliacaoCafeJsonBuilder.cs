using Bogus;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Request;

public static class RequestAvaliacaoCafeJsonBuilder
{
    public static RequestAvaliacaoCafeJson Build()
    {
        var faker = new Faker<RequestAvaliacaoCafeJson>("pt_BR")
            .RuleFor(x => x.CafeId, f => f.Random.Guid())
            .RuleFor(x => x.Atendimento, f => f.PickRandom<NivelAtendimento>())
            .RuleFor(x => x.Estrelas, f => f.Random.Int(1, 5))
            .RuleFor(x => x.Observacao, f => f.Lorem.Sentence(10));

        return faker.Generate();
    }

    public static RequestAvaliacaoCafeJson WithCafeId(this RequestAvaliacaoCafeJson request, Guid cafeId)
    {
        request.CafeId = cafeId;
        return request;
    }

    public static RequestAvaliacaoCafeJson WithAtendimento(this RequestAvaliacaoCafeJson request, NivelAtendimento atendimento)
    {
        request.Atendimento = atendimento;
        return request;
    }

    public static RequestAvaliacaoCafeJson WithEstrelas(this RequestAvaliacaoCafeJson request, int estrelas)
    {
        request.Estrelas = estrelas;
        return request;
    }

    public static RequestAvaliacaoCafeJson WithObservacao(this RequestAvaliacaoCafeJson request, string observacao)
    {
        request.Observacao = observacao;
        return request;
    }

    public static RequestAvaliacaoCafeJson WithEmptyObservacao(this RequestAvaliacaoCafeJson request)
    {
        request.Observacao = string.Empty;
        return request;
    }

    public static RequestAvaliacaoCafeJson WithNullObservacao(this RequestAvaliacaoCafeJson request)
    {
        request.Observacao = null!;
        return request;
    }
}