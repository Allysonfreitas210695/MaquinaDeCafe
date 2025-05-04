using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations;

public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
{
    public void Configure(EntityTypeBuilder<Pedido> builder)
    {
        builder.ToTable("Pedidos");

        builder.HasKey(p => p.Id);

        builder.HasMany(p => p.PedidoItens)
            .WithOne(pi => pi.Pedido)
            .HasForeignKey(pi => pi.PedidoId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(p => p.FormaPreparo)
            .WithMany()  
            .HasForeignKey(p => p.FormaPreparoId)
            .OnDelete(DeleteBehavior.Restrict);
 
        builder.Property(p => p.Status)
            .HasConversion<string>()
            .IsRequired(); 
 
        builder.Property(p => p.ValorTotal)
            .IsRequired();   
    }
}
