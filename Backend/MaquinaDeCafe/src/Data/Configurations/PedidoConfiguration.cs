using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Data.Configurations
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.ToTable("Pedidos");

            builder.HasKey(p => p.Id);

            builder.HasOne(p => p.Cafe)
                    .WithMany(c => c.Pedidos)  
                    .HasForeignKey(p => p.CafeId)
                    .OnDelete(DeleteBehavior.Cascade);
  
            builder.HasOne(p => p.FormaPreparo)
                .WithMany()  
                .HasForeignKey(p => p.FormaPreparoId)
                .OnDelete(DeleteBehavior.Restrict);   

            builder.Property(p => p.TipoLeite)
                .HasConversion<string>()
                .IsRequired(); 

            builder.Property(p => p.TipoAcucar)
                .HasConversion<string>()
                .IsRequired(); 

            builder.Property(p => p.TamanhoXicara)
                .HasConversion<string>()
                .IsRequired();  

            builder.Property(p => p.Status)
                .HasConversion<string>()
                .IsRequired(); 

            builder.Property(p => p.Quantidade)
                .IsRequired();  

            builder.Property(p => p.ValorTotal)
                .IsRequired();  

            builder.Property(p => p.ProdutoDisponivel)
                .IsRequired();  
                
            builder.HasMany(p => p.IngredientesAdicionais)
                .WithMany(i => i.Pedidos)
                .UsingEntity(j => j.ToTable("PedidoIngredienteAdicional"));
        }
    }
}
