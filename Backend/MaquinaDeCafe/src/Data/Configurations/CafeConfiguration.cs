using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations
{
    public class CafeConfiguration : IEntityTypeConfiguration<Cafe>
    {
        public void Configure(EntityTypeBuilder<Cafe> builder)
        {
            builder.ToTable("Cafes");

             builder.HasKey(c => c.Id);

            builder.Property(c => c.Nome)
                .IsRequired() 
                .HasMaxLength(100); 

            builder.Property(c => c.Preco)
                .HasColumnType("decimal(10, 2)")  
                .IsRequired(); 

            builder.HasMany(c => c.PedidoItens)
            .WithOne(pi => pi.Cafe)
            .HasForeignKey(pi => pi.CafeId)
            .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
