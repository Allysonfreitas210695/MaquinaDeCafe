using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations
{
    public class AvaliacaoCafeConfiguration : IEntityTypeConfiguration<AvaliacaoCafe>
    {
        public void Configure(EntityTypeBuilder<AvaliacaoCafe> builder)
        {
            builder.ToTable("Avaliacoes_cafe");

            builder.HasKey(a => a.Id);

            builder.Property(a => a.Atendimento)
                .HasConversion<int>() 
                .IsRequired();

            builder.Property(a => a.Estrelas)
                .IsRequired();

            builder.Property(a => a.Observacao)
                .HasMaxLength(500); 

            builder.Property(a => a.CafeId)
                .IsRequired();

            builder.HasOne(a => a.Cafe)
                .WithMany(x => x.AvaliacoesCafe)
                .HasForeignKey(a => a.CafeId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
