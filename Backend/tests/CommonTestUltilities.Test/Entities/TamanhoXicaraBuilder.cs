using Bogus;
using MaquinaDeCafe.src.Models.Entities;

namespace CommonTestUltilities.Test.Entities;
public static class TamanhoXicaraBuilder
{
    public static TamanhoXicara Build(
        Guid? id = null, 
        string? descricao = null, 
        int? ml = null, 
        decimal? valor = null, 
        Guid? cafeId = null
    )
    {
        var faker = new Faker("pt_BR");

        return new TamanhoXicara(
            id: id ?? Guid.NewGuid(),
            cafeId: cafeId ?? Guid.NewGuid(),
            ml: ml ?? faker.Random.Int(100, 250),
            valor: valor ?? faker.Random.Decimal(1, 4),
            descricao: descricao ?? faker.Lorem.Sentence()
        );
    }
}
