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
                var cafes = new List<Models.Entities.Cafe>
                {
                        new Models.Entities.Cafe(Guid.NewGuid(), "Expresso", "Café Expresso tradicional", 5.00m, 60, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Cappuccino", "Café Cappuccino especial", 7.50m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Latte", "Café Latte especial", 8.00m, 60, Models.Enums.CategoriaCafe.Especial),
                        // new Models.Entities.Cafe(Guid.NewGuid(), "Mocha Gelado", "Café Mocha gelado", 9.00m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Americano Gelado", "Café Americano gelado", 6.00m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Chocolate Quente", "Bebida quente de chocolate", 7.00m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Chai Latte Quente", "Bebida quente com especiarias", 7.50m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Café + Bolo", "Combo com café expresso e fatia de bolo", 12.00m, 60, Models.Enums.CategoriaCafe.Combo),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Cappuccino + Cookie", "Combo especial com cappuccino e cookie", 14.00m, 60, Models.Enums.CategoriaCafe.Combo),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Expresso Duplo", "Café expresso duplo tradicional", 6.50m, 90, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café com Leite", "Café tradicional com leite", 6.00m, 70, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Macchiato", "Café tradicional macchiato", 7.00m, 60, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Flat White", "Café especial com leite", 8.50m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Frappuccino", "Bebida gelada cremosa", 10.00m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Matcha Latte Quente", "Bebida quente de chá verde", 8.00m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Latte + Brownie", "Combo especial com latte e brownie", 15.00m, 60, Models.Enums.CategoriaCafe.Combo),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Affogato", "Café expresso com sorvete", 11.00m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café com Chantilly", "Café quente com chantilly", 9.00m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Cold Brew", "Café gelado extraído a frio", 9.50m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Espresso + Muffin", "Combo com espresso e muffin", 13.50m, 60, Models.Enums.CategoriaCafe.Combo),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Irish Coffee", "Café quente com whisky", 12.00m, 70, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Cafe Mocha", "Café especial com chocolate", 8.50m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Ristretto", "Café expresso curto e forte", 5.50m, 45, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café Vienense", "Café quente com chantilly", 9.00m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café Gelado com Leite", "Café gelado com leite", 7.00m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café Marroquino", "Bebida quente com especiarias", 8.00m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café Turco", "Café forte tradicional", 6.50m, 60, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café Cortado", "Expresso com um pouco de leite", 6.00m, 60, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Gelado + Brownie", "Combo de café gelado com brownie", 14.00m, 60, Models.Enums.CategoriaCafe.Combo),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Quente + Cookie", "Combo de café quente com cookie", 13.00m, 60, Models.Enums.CategoriaCafe.Combo),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Caramel Macchiato", "Café especial caramelizado", 8.50m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café com Canela", "Café tradicional com toque de canela", 6.50m, 60, Models.Enums.CategoriaCafe.Tradicional),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café Branco", "Café especial com leite condensado", 9.00m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café com Baunilha", "Café quente com aroma de baunilha", 8.00m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Iced Latte", "Café gelado com leite", 9.00m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Iced Mocha", "Café gelado com chocolate", 9.50m, 60, Models.Enums.CategoriaCafe.Gelado),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Chocolatte Quente", "Bebida quente de chocolate com café", 8.50m, 60, Models.Enums.CategoriaCafe.Quente),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Café com Pimenta", "Café especial com toque picante", 8.00m, 60, Models.Enums.CategoriaCafe.Especial),
                        new Models.Entities.Cafe(Guid.NewGuid(), "Combo Especial + Donuts", "Combo especial com donuts", 16.00m, 60, Models.Enums.CategoriaCafe.Combo),
                };


                await dbContext.Cafes.AddRangeAsync(cafes);
            }


            if (!await dbContext.IngredientesAdicionais.AnyAsync())
            {
                var ingredientes = new List<Models.Entities.IngredienteAdicional>
                {
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Canela", 1.00m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Chantilly", 2.00m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Chocolate", 1.50m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Leite Condensado", 2.00m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Calda de Caramelo", 1.80m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Calda de Baunilha", 1.80m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Pó de Cacau", 1.20m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Açúcar Mascavo", 0.80m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Mel", 1.50m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Gengibre", 1.20m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Leite de Amêndoas", 2.50m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Leite de Coco", 2.50m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Noz Moscada", 1.00m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Essência de Amêndoas", 1.70m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Creme de Leite", 1.80m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Açúcar de Baunilha", 1.00m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Marshmallow", 2.00m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Essência de Hortelã", 1.50m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Pimenta Caiena", 1.20m),
                        new Models.Entities.IngredienteAdicional(Guid.NewGuid(), "Chá Verde em Pó", 1.80m),
                };

                await dbContext.IngredientesAdicionais.AddRangeAsync(ingredientes);
            }


            if (!await dbContext.TamanhosXicara.AnyAsync())
            {
                    var tamanho1 = new Models.Entities.TamanhoXicara(Guid.NewGuid(), "50 ml", 50, 0m);
                    var tamanho2 = new Models.Entities.TamanhoXicara(Guid.NewGuid(), "100 ml", 100, 1.00m);
                    var tamanho3 = new Models.Entities.TamanhoXicara(Guid.NewGuid(), "150 ml", 150, 1.50m);
                    var tamanho4 = new Models.Entities.TamanhoXicara(Guid.NewGuid(), "200 ml", 150, 2.00m);
                    
                    await dbContext.TamanhosXicara.AddRangeAsync(tamanho1, tamanho2, tamanho3, tamanho4);
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