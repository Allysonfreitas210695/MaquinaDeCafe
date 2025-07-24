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
