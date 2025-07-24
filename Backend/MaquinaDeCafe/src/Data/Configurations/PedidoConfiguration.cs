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

        builder.Property(p => p.Status)
            .HasConversion<int>()
            .IsRequired();

        builder.Property(p => p.ValorTotal)
            .IsRequired();

        builder.HasOne(p => p.Pagamento)
            .WithOne(pag => pag.Pedido)
            .HasForeignKey<Pagamento>(pag => pag.PedidoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
