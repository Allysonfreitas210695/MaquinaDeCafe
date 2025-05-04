using CommonTestUltilities.Test.Entities;
using FluentAssertions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;
using Xunit;
using MaquinaDeCafe.src.Models.Enums;
using Bogus;

namespace Entities.Test
{
    public class PedidoTest
    {
        [Fact]
        public void DeveCriarPedido_ComSucesso()
        {
            var pedido = PedidoBuilder.Build();
            pedido.Should().NotBeNull();
        }

        [Fact]
        public void DeveLancarErro_QuandoFormaPreparoIdForVazio()
        {
            Action act = () => new Pedido(id: Guid.NewGuid(), formaPreparoId: Guid.Empty);

            act.Should().Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.PedidoFormaPreparoObrigatoria);
        }

        [Fact]
        public void DeveAdicionarItem_Valido()
        {
            var pedido = PedidoBuilder.Build();
            var item = PedidoItemBuilder.Build(quantidade: 2);

            pedido.AdicionarItem(item, precoCafe: 5.0m);

            pedido.PedidoItens.Should().ContainSingle();
            pedido.ValorTotal.Should().Be(item.CalcularValorItem(5.0m));
        }

        [Fact]
        public void DeveLancarErro_QuandoAdicionarItemNulo()
        {
            var pedido = PedidoBuilder.Build();

            Action act = () => pedido.AdicionarItem(null!, precoCafe: 5.0m);

            act.Should().Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.PedidoItemInvalido);
        }

        [Theory]
        [InlineData(StatusPedido.Pronto)]
        [InlineData(StatusPedido.Cancelado)]
        public void DeveAlterarStatus_Valido(StatusPedido novoStatus)
        {
            var pedido = PedidoBuilder.Build();

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
}
