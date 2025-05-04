using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations;

public class IngredienteAdicionalConfiguration : IEntityTypeConfiguration<IngredienteAdicional>
{
    public void Configure(EntityTypeBuilder<IngredienteAdicional> builder)
    {
        builder.ToTable("IngredientesAdicionais");

        builder.HasKey(i => i.Id);

        builder.Property(i => i.Nome)
            .IsRequired()   
            .HasMaxLength(100);   

        builder.Property(i => i.ValorExtra)
            .IsRequired();  

        builder.HasMany(i => i.PedidoItemIngredientes)
                .WithOne(pii => pii.IngredienteAdicional)
                .HasForeignKey(pii => pii.IngredienteAdicionalId)
                .OnDelete(DeleteBehavior.Cascade);

    }
}
