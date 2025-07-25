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

        var regularObservacoes = new List<string>
        {
            "Bom, mas poderia estar mais quente.",
            "Nada demais.",
            "Aceitável, mas faltou algo.",
            "Mais ou menos."
        };

        var ruimObservacoes = new List<string>
        {
            "Café estava frio.",
            "Demorou muito para sair.",
            "Sabor desagradável.",
            "Péssimo atendimento."
        };

        var cafes = await dbContext.Cafes.AsNoTracking().ToListAsync();

        foreach (var cafe in cafes)
        {
            var quantidadeAvaliacoes = faker.Random.Int(3, 10);
            var avaliacoes = new List<AvaliacaoCafe>();

            for (int i = 0; i < quantidadeAvaliacoes; i++)
            {
                var atendimento = faker.PickRandom<NivelAtendimento>();

                var estrelas = atendimento switch
                {
                    NivelAtendimento.MuitoBom => faker.Random.Int(4, 5),
                    NivelAtendimento.Regular => faker.Random.Int(2, 3),
                    NivelAtendimento.Ruim => faker.Random.Int(1, 2),
                    _ => 3
                };

                var observacao = atendimento switch
                {
                    NivelAtendimento.MuitoBom => faker.PickRandom(muitoBomObservacoes),
                    NivelAtendimento.Regular => faker.PickRandom(regularObservacoes),
                    NivelAtendimento.Ruim => faker.PickRandom(ruimObservacoes),
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
                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Espresso", "Café concentrado feito sob pressão, com sabor intenso e encorpado.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 1.50m),
                            (descricao100ML, 100, 3.00m),
                            (descricao150ML, 150, 4.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Americano", "Espresso diluído em água quente, resultando em um café mais suave", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 2.00m),
                            (descricao100ML, 100, 4.00m),
                            (descricao150ML, 150, 6.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Cappuccino", "Feito com partes iguais de espresso, leite vaporizado e espuma de leite. Cremoso e equilibrado.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.75m),
                            (descricao100ML, 100, 7.50m),
                            (descricao150ML, 150, 11.25m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Latte", "Café com muito leite (65%). É um espresso com bastante leite vaporizado e uma pequena quantidade de espuma.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.00m),
                            (descricao100ML, 100, 6.00m),
                            (descricao150ML, 150, 9.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Macchiato", "Café espresso com um toque de leite. É um espresso com uma pequena quantidade de espuma de leite.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 2.50m),
                            (descricao100ML, 100, 5.00m),
                            (descricao150ML, 150, 7.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Mocha", "Mistura de café e chocolate. É um café latte com adição de calda de chocolate, criando uma bebida deliciosa e adoçada.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.75m),
                            (descricao100ML, 100, 7.50m),
                            (descricao150ML, 150, 11.25m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Flat White", "Parecido com o latte, mas com menos espuma e mais café. É um café mais forte e com uma textura cremosa. Ideal para quem gosta de um café com mais intensidade.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 3.50m),
                            (descricao100ML, 100, 7.00m),
                            (descricao150ML, 150, 10.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Ristretto", "Versão ainda mais concentrada do espresso, com menos água. Sabor forte e encorpado, mas menos amargo.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 8.00m),
                            (descricao100ML, 100, 15.00m),
                            (descricao150ML, 150, 18.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Cortado", "O cortado é um espresso suavizado com um pouco de leite vaporizado.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 2.50m),
                            (descricao100ML, 100, 5.00m),
                            (descricao150ML, 150, 7.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Affogato", "Espresso servido com uma bola de sorvete, criando uma mistura deliciosa de quente e frio.", 50, Models.Enums.CategoriaCafe.Gelado),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 6.00m),
                            (descricao100ML, 100, 10.00m),
                            (descricao150ML, 150, 15.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Tradicional", "Café leve, suave e servido em maior quantidade.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            (descricao50ML, 50, 1.75m),
                            (descricao100ML, 100, 3.50m),
                            (descricao150ML, 150, 5.25m)
                        }),
                    (new Models.Entities.Cafe(Guid.NewGuid(), "Cold brew", "Café ideal para quem busca uma experiência intensa e diferenciada de café gelado", 50, Models.Enums.CategoriaCafe.Gelado),
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
