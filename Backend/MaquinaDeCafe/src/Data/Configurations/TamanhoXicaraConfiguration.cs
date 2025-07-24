using MaquinaDeCafe.src.Models.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MaquinaDeCafe.src.Data.Configurations;

public class TamanhoXicaraConfiguration : IEntityTypeConfiguration<TamanhoXicara>
{
    public void Configure(EntityTypeBuilder<TamanhoXicara> builder)
    {
         builder.ToTable("TamanhosXicara");

        builder.HasKey(t => t.Id);

        builder.Property(t => t.Descricao)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(t => t.Ml)
            .IsRequired();

        builder.Property(t => t.Valor)
            .HasColumnType("decimal(10,2)")
            .IsRequired();

        builder.Property(t => t.CafeId)
            .IsRequired();

        builder.HasOne(t => t.Cafe)
            .WithMany(c => c.TamanhosXicara)
            .HasForeignKey(t => t.CafeId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasMany(t => t.PedidoItens)
            .WithOne(p => p.TamanhoXicara)
            .HasForeignKey(p => p.TamanhoXicaraId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}