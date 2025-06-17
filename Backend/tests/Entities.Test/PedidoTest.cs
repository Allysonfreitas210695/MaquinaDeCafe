using CommonTestUltilities.Test.Entities;
using FluentAssertions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Models.Enums;

namespace Entities.Test;

public class PedidoTest
{
    [Fact]
    public void DeveCriarPedido_ComSucesso()
    {
        var pedido = PedidoBuilder.Build();
        pedido.Should().NotBeNull();
    }

    [Fact]
    public void DeveAdicionarItem_Valido()
    {
        // Arrange
        var pedido = PedidoBuilder.Build();
        var item = PedidoItemBuilder.Build(quantidade: 2);

        decimal precoCafe = 5.0m;
        decimal precoTamanhoXicara = 2.0m;

        // Act
        pedido.AdicionarItem(item, precoCafe, precoTamanhoXicara);

        // Assert
        pedido.PedidoItens.Should().ContainSingle();
        pedido.ValorTotal.Should().Be(item.CalcularValorItem(precoCafe, precoTamanhoXicara));
    }

    [Fact]
    public void DeveLancarErro_QuandoAdicionarItemNulo()
    {
        // Arrange
        var pedido = PedidoBuilder.Build();

        decimal precoCafe = 5.0m;
        decimal precoTamanhoXicara = 2.0m;

        // Act
        Action act = () => pedido.AdicionarItem(null!, precoCafe, precoTamanhoXicara);

        // Assert
        act.Should().Throw<ErrorOnValidationException>()
            .Which.Errors.Should().Contain(ErrorsMensagem.PedidoItemInvalido);
    }

    [Theory]
    [InlineData(StatusPedido.Pronto)]
    public void DeveAlterarStatus_Valido(StatusPedido novoStatus)
    {
        var pedido = PedidoBuilder.Build(statusPedido: StatusPedido.EmPreparo);

        pedido.AlterarStatus(novoStatus);

        pedido.Status.Should().Be(novoStatus);
    }


    [Fact]
    public void NaoDeveAlterarStatus_SePedidoCanceladoOuEntregue()
    {
        var pedido = PedidoBuilder.Build();
        pedido.AlterarStatus(StatusPedido.Cancelado);

        Action act = () => pedido.AlterarStatus(StatusPedido.EmPreparo);

        act.Should().Throw<ErrorOnValidationException>()
            .Which.Errors.Should().Contain(ErrorsMensagem.PedidoStatusAlteracaoNaoPermitida);
    }

    [Fact]
    public void NaoDeveAlterarStatus_ParaTransicaoInvalida()
    {
        var pedido = PedidoBuilder.Build();
        pedido.AlterarStatus(StatusPedido.Pronto);

        Action act = () => pedido.AlterarStatus(StatusPedido.EmPreparo);

        act.Should().Throw<ErrorOnValidationException>()
            .Which.Errors.Should().Contain("Transição de status de 'Pronto' para 'EmPreparo' não é permitida.");
    }
}
