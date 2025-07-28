using Bogus;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Data.Persistence;

public static class SeedDatabaseInitial
{
    private static async Task GerarAvaliacoesParaCafes(ApplicationDbContext dbContext)
    {
        var faker = new Faker("pt_BR");

        var muitoBomObservacoes = new List<string>
        {
            "Excelente café!",
            "Muito saboroso e equilibrado.",
            "Perfeito para o dia a dia.",
            "Gostei bastante!"
        };
        var cafes = await dbContext.Cafes.AsNoTracking().ToListAsync();

        foreach (var cafe in cafes)
        {
            var quantidadeAvaliacoes = faker.Random.Int(1, 5);
            var avaliacoes = new List<AvaliacaoCafe>();

            for (int i = 0; i < quantidadeAvaliacoes; i++)
            {
                var atendimento =  NivelAtendimento.MuitoBom;

                var estrelas = atendimento switch
                {
                    NivelAtendimento.MuitoBom => faker.Random.Int(4, 5),
                    _ => 3
                };

                var observacao = atendimento switch
                {
                    NivelAtendimento.MuitoBom => faker.PickRandom(muitoBomObservacoes),
                    _ => "Avaliação neutra."
                };

                avaliacoes.Add(new AvaliacaoCafe(Guid.NewGuid(), cafe.Id, atendimento, estrelas, observacao));
            }

            await dbContext.AvaliacoesCafe.AddRangeAsync(avaliacoes);
        }

        await dbContext.SaveChangesAsync();
    }

    public static async Task Seeds(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        await using var transaction = await dbContext.Database.BeginTransactionAsync();

        try
        {
            if (!await dbContext.Cafes.AnyAsync())
            {
                string descricao50ML = "50 ml";
                string descricao100ML = "100 ml";
                string descricao150ML = "150 ml";

                var cafes = new List<(Models.Entities.Cafe cafe, List<(string volume, int ml, decimal preco)> tamanhos)>
                {
                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Espresso",
                        "Café concentrado feito sob pressão, com sabor intenso e encorpado.",
                        120,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 1.50m),
                            (descricao100ML, 100, 3.00m),
                            (descricao150ML, 150, 4.50m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Americano",
                        "Espresso diluído em água quente, resultando em um café mais suave.",
                        120,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 2.00m),
                            (descricao100ML, 100, 4.00m),
                            (descricao150ML, 150, 6.00m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Cappuccino",
                        "Espresso com leite vaporizado e espuma de leite. Cremoso e equilibrado.",
                        180,
                        Models.Enums.CategoriaCafe.Quente
                        ),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.75m),
                            (descricao100ML, 100, 7.50m),
                            (descricao150ML, 150, 11.25m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Latte",
                        "Espresso com bastante leite vaporizado (65%) e uma pequena quantidade de espuma.",
                        180,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.00m),
                            (descricao100ML, 100, 6.00m),
                            (descricao150ML, 150, 9.00m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Macchiato",
                        "Espresso com uma pequena quantidade de espuma de leite.",
                        120,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 2.50m),
                            (descricao100ML, 100, 5.00m),
                            (descricao150ML, 150, 7.50m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Mocha",
                        "Café latte com adição de calda de chocolate. Bebida deliciosa e adoçada.",
                        240,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.75m),
                            (descricao100ML, 100, 7.50m),
                            (descricao150ML, 150, 11.25m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Flat White",
                        "Semelhante ao latte, mas com menos espuma e mais café. Café mais forte e com textura cremosa.",
                        180,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.50m),
                            (descricao100ML, 100, 7.00m),
                            (descricao150ML, 150, 10.50m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Ristretto",
                        "Versão mais concentrada do espresso, sabor forte, menos amargo e com menos água.",
                        60,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 8.00m),
                            (descricao100ML, 100, 15.00m),
                            (descricao150ML, 150, 18.00m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Cortado",
                        "É um espresso suavizado com um pouco de leite vaporizado.",
                        120,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 2.50m),
                            (descricao100ML, 100, 5.00m),
                            (descricao150ML, 150, 7.50m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Affogato",
                        "Espresso servido com uma bola de sorvete. Uma mistura deliciosa de quente e frio.",
                        60,
                        Models.Enums.CategoriaCafe.Gelado),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 6.00m),
                            (descricao100ML, 100, 10.00m),
                            (descricao150ML, 150, 15.00m)
                        }),

                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Café Tradicional",
                        "Café leve, suave e servido em maior quantidade.",
                        300,
                        Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 1.75m),
                            (descricao100ML, 100, 3.50m),
                            (descricao150ML, 150, 5.25m)
                        }),
                    (new Models.Entities.Cafe(
                        Guid.NewGuid(),
                        "Cold brew",
                        "Café ideal para quem busca uma experiência intensa e diferenciada de café gelado.",
                        720,
                        Models.Enums.CategoriaCafe.Gelado
                        ),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 6.00m),
                            (descricao100ML, 100, 9.00m),
                            (descricao150ML, 150, 12.00m)
                        }),
                };

                foreach (var (cafe, tamanhos) in cafes)
                {
                    await dbContext.Cafes.AddAsync(cafe);
                    await dbContext.SaveChangesAsync();

                    foreach (var (volume, ml, preco) in tamanhos)
                    {
                        var tamanho = new Models.Entities.TamanhoXicara(Guid.NewGuid(), volume, ml, preco, cafe.Id);
                        await dbContext.TamanhosXicara.AddAsync(tamanho);
                        await dbContext.SaveChangesAsync();
                    }
                }
            }

            if (!await dbContext.IngredientesAdicionais.AnyAsync())
            {
                var ingredientes = new List<Models.Entities.IngredienteAdicional>
                {
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Leite em pó", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Açúcar", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Leite Condensado", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Canela em pó", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Calda de Caramelo", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Calda de Chocolate", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Extrato de Baunilha", 1.00m),
                    new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Chantilly", 1.00m),
                };

                await dbContext.IngredientesAdicionais.AddRangeAsync(ingredientes);
                await dbContext.SaveChangesAsync();
            }

            await GerarAvaliacoesParaCafes(dbContext);

            await transaction.CommitAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackAsync();
            throw;
        }
    }
}
