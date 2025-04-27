using Microsoft.EntityFrameworkCore;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Cafe> Cafes { get; set; }
        public DbSet<IngredienteAdicional> IngredientesAdicionais { get; set; }
        public DbSet<FormaPreparo> FormasPreparo { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }
    }
}
