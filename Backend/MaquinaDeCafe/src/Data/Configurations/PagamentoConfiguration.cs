using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations;

public class PagamentoConfiguration : IEntityTypeConfiguration<Pagamento>
{
    public void Configure(EntityTypeBuilder<Pagamento> builder)
    {
        builder.ToTable("Pagamentos");

        builder.HasKey(p => p.Id);

        builder.Property(p => p.Forma)
            .HasConversion<int>()
            .IsRequired();

        builder.Property(p => p.HashPix)
            .HasMaxLength(255);

        builder.Property(p => p.DataPagamento)
            .IsRequired();

        builder.HasOne(p => p.Pedido)
               .WithOne(ped => ped.Pagamento)
               .HasForeignKey<Pagamento>(p => p.PedidoId)
               .OnDelete(DeleteBehavior.Cascade);
    }
}
