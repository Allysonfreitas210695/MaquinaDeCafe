
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Data.Persistence;

 public static class DataBaseMigration
{
    public static async Task MigrateDatabase(IServiceProvider serviceProvider)
    {
        var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext>();
        await dbContext.Database.MigrateAsync();
    }
}