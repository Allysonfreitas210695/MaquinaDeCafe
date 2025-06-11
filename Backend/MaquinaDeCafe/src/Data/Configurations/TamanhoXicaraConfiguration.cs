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

        builder.Property(t => t.ValorExtra)
            .HasColumnType("decimal(10,2)")
            .IsRequired();

        builder.HasMany(t => t.PedidoItens)
            .WithOne(p => p.TamanhoXicara)
            .HasForeignKey(p => p.TamanhoXicaraId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}