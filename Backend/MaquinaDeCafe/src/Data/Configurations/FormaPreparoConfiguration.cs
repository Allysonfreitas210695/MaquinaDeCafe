using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MaquinaDeCafe.src.Models.Entities;

namespace MaquinaDeCafe.src.Data.Configurations
{
    public class FormaPreparoConfiguration : IEntityTypeConfiguration<FormaPreparo>
    {
        public void Configure(EntityTypeBuilder<FormaPreparo> builder)
        {
            builder.ToTable("FormasPreparo");

            builder.HasKey(f => f.Id);

            builder.Property(f => f.Nome)
                .IsRequired()  
                .HasMaxLength(100); 

            builder.Property(f => f.TempoPreparoMinutos)
                .IsRequired();  

            builder.HasMany(f => f.Pedidos)  
                .WithOne(p => p.FormaPreparo)  
                .HasForeignKey(p => p.FormaPreparoId)  
                .OnDelete(DeleteBehavior.Restrict); 
        }
    }
}
