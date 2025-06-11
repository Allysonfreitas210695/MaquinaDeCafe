using CommonTestUltilities.Test.Entities;
using FluentAssertions;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test;

public class PedidoItemTest
{
    [Fact]
    public void DeveCriarPedidoItem_ComSucesso()
    {
        var item = PedidoItemBuilder.Build();

        item.Should().NotBeNull();
        item.CafeId.Should().NotBe(Guid.Empty);
        item.Quantidade.Should().BeGreaterThan(0);
    }

    [Fact]
    public void DeveLancarErro_QuandoCafeIdForVazio()
    {
        Action act = () => PedidoItemBuilder.Build(cafeId: Guid.Empty);

        act.Should().Throw<ErrorOnValidationException>()
            .Which.Errors.Should().Contain(ErrorsMensagem.PedidoCafeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoQuantidadeForZero()
    {
        Action act = () => PedidoItemBuilder.Build(quantidade: 0);

        act.Should().Throw<ErrorOnValidationException>()
            .Which.Errors.Should().Contain(ErrorsMensagem.PedidoQuantidadeInvalida);
    }

    [Fact]
    public void DeveCalcularValorItem_Corretamente_SemIngredientes()
    {
        // Arrange
        var item = PedidoItemBuilder.Build(quantidade: 2);
        var precoCafe = 5.0m;
        var precoTamanhoXicara = 1.0m;

        // Act
        var valor = item.CalcularValorItem(precoCafe, precoTamanhoXicara);

        // Assert
        var esperado = (precoCafe * 2) + precoTamanhoXicara;
        valor.Should().Be(esperado);
    }



    [Fact]
    public void DeveCalcularValorItem_ComIngredienteAdicional()
    {
        // Arrange
        var item = PedidoItemBuilder.Build(quantidade: 2);
        var ingrediente = new PedidoItemIngredienteAdicional
        {
            IngredienteAdicional = new IngredienteAdicional(Guid.NewGuid(), "TESTE", 1.50m)
        };

        item.AdicionarIngrediente(ingrediente);

        var precoCafe = 5.0m;
        var precoTamanhoXicara = 1.0m;

        // Act
        var valor = item.CalcularValorItem(precoCafe, precoTamanhoXicara);

        // Assert
        var esperado = (5.0m * 2) + (1.50m * 2) + 1.0m;

        valor.Should().Be(esperado);
    }



    [Fact]
    public void NaoDeveAdicionarIngrediente_SeForNulo()
    {
        var item = PedidoItemBuilder.Build();

        item.AdicionarIngrediente(null!);

        item.PedidoItemIngredientes.Should().BeEmpty();
    }
}
