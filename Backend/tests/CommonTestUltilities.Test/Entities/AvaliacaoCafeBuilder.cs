using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace CommonTestUltilities.Test.Entities;
public static class AvaliacaoCafeBuilder
{
    public static AvaliacaoCafe Build(
        Guid? id = null, 
        Guid? cafeId = null, 
        NivelAtendimento? atendimento = null, 
        int? estrelas = null, 
        string? observacao = null
    )
    {
        var faker = new Faker("pt_BR");

        return new AvaliacaoCafe(
            id: id ?? Guid.NewGuid(),
            cafeId: cafeId ?? Guid.NewGuid(),
            atendimento: atendimento ?? faker.PickRandom<NivelAtendimento>(),
            estrelas: estrelas ?? faker.Random.Int(1, 5),
            observacao: observacao ?? faker.Lorem.Sentence()
        );
    }
}
