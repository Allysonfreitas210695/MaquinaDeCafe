using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Data.Persistence;

public static class SeedDatabaseInitial
{
    public static async Task Seeds(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();

        await using var transaction = await dbContext.Database.BeginTransactionAsync();

        try
        {
            if (!await dbContext.Cafes.AnyAsync())
            {
                var cafes = new List<(Models.Entities.Cafe cafe, List<(string volume, int ml, decimal preco)> tamanhos)>
                {
                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Espresso", "Café concentrado feito sob pressão, com sabor intenso e encorpado.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 1.50m),
                            ("100 ml", 100, 3.00m),
                            ("150 ml", 150, 4.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Americano", "Espresso diluído em água quente, resultando em um café mais suave", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 2.00m),
                            ("100 ml", 100, 4.00m),
                            ("150 ml", 150, 6.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Cappuccino", "Feito com partes iguais de espresso, leite vaporizado e espuma de leite. Cremoso e equilibrado.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 3.75m),
                            ("100 ml", 100, 7.50m),
                            ("150 ml", 150, 11.25m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Latte", "Café com muito leite (65%). É um espresso com bastante leite vaporizado e uma pequena quantidade de espuma.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 3.00m),
                            ("100 ml", 100, 6.00m),
                            ("150 ml", 150, 9.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Macchiato", "Café espresso com um toque de leite. É um espresso com uma pequena quantidade de espuma de leite.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 2.50m),
                            ("100 ml", 100, 5.00m),
                            ("150 ml", 150, 7.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Mocha", "Mistura de café e chocolate. É um café latte com adição de calda de chocolate, criando uma bebida deliciosa e adoçada.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 3.75m),
                            ("100 ml", 100, 7.50m),
                            ("150 ml", 150, 11.25m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Flat White", "Parecido com o latte, mas com menos espuma e mais café. É um café mais forte e com uma textura cremosa. Ideal para quem gosta de um café com mais intensidade.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 3.50m),
                            ("100 ml", 100, 7.00m),
                            ("150 ml", 150, 10.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Ristretto", "Versão ainda mais concentrada do espresso, com menos água. Sabor forte e encorpado, mas menos amargo.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 8.00m),
                            ("100 ml", 100, 15.00m),
                            ("150 ml", 150, 18.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Cortado", "O cortado é um espresso suavizado com um pouco de leite vaporizado.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 2.50m),
                            ("100 ml", 100, 5.00m),
                            ("150 ml", 150, 7.50m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Affogato", "Espresso servido com uma bola de sorvete, criando uma mistura deliciosa de quente e frio.", 50, Models.Enums.CategoriaCafe.Gelado),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 6.00m),
                            ("100 ml", 100, 10.00m),
                            ("150 ml", 150, 15.00m)
                        }),

                    (new Models.Entities.Cafe(Guid.NewGuid(), "Café Tradicional", "Café leve, suave e servido em maior quantidade.", 50, Models.Enums.CategoriaCafe.Quente),
                        new List<(string, int, decimal)>
                        {
                            ("50 ml", 50, 1.75m),
                            ("100 ml", 100, 3.50m),
                            ("150 ml", 150, 5.25m)
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
            }

            await dbContext.SaveChangesAsync();
            await transaction.CommitAsync();
        }
        catch (Exception)
        {
            await transaction.RollbackAsync();
            throw;
        }
    }
}
