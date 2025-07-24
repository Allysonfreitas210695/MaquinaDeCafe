using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations;

public class PedidoItemConfiguration : IEntityTypeConfiguration<PedidoItem>
{
    public void Configure(EntityTypeBuilder<PedidoItem> builder)
    {
        builder.ToTable("PedidoItens");

        builder.HasKey(pi => pi.Id);

        builder.HasOne(pi => pi.Pedido)
            .WithMany(p => p.PedidoItens)
            .HasForeignKey(pi => pi.PedidoId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(pi => pi.Cafe)
            .WithMany(c => c.PedidoItens)
            .HasForeignKey(pi => pi.CafeId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.Property(pi => pi.Quantidade)
            .IsRequired();

        builder.Property(pi => pi.TipoLeite)
            .HasConversion<int>()
            .IsRequired();

        builder.Property(pi => pi.TipoAcucar)
            .HasConversion<int>()
            .IsRequired();

        builder.Property(c => c.TempoPreparoSegundos)
                .IsRequired(); 

        builder.HasOne(pi => pi.TamanhoXicara)
            .WithMany(t => t.PedidoItens)
            .HasForeignKey(pi => pi.TamanhoXicaraId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasMany(pi => pi.PedidoItemIngredientes)
                .WithOne(pii => pii.PedidoItem)
                .HasForeignKey(pii => pii.PedidoItemId)
                .OnDelete(DeleteBehavior.Cascade);
    }
}

