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
        public void DeveLancarErro_QuandoCafeForNulo()
        {
            Action act = () => new Pedido(
                id: Guid.NewGuid(),
                cafe: null,
                tipoLeite: TipoLeite.SemAcucar,
                tipoAcucar: TipoAcucar.Com,
                tamanhoXicara: TamanhoXicara.Grande,
                quantidade: 2,
                formaPreparo: FormaPreparoBuilder.Build(),
                ingredientesAdicionais: new List<IngredienteAdicional> { IngredienteAdicionalBuilder.Build() },
                produtoDisponivel: true
            );

            act.Should().Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.PedidoCafeObrigatorio);
        }

        [Fact]
        public void DeveLancarErro_QuandoFormaPreparoForNula()
        {
            Action act = () => new Pedido(
                id: Guid.NewGuid(),
                cafe: CafeBuilder.Build(),
                tipoLeite: TipoLeite.SemAcucar,
                tipoAcucar: TipoAcucar.Com,
                tamanhoXicara: TamanhoXicara.Grande,
                quantidade: 2,
                formaPreparo: null,
                ingredientesAdicionais: new List<IngredienteAdicional> { IngredienteAdicionalBuilder.Build() },
                produtoDisponivel: true
            );

            act.Should().Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.PedidoFormaPreparoObrigatoria);
        }

        [Fact]
        public void DeveLancarErro_QuandoQuantidadeForZeroOuNegativa()
        {
            Action act = () => PedidoBuilder.Build(quantidade: 0);
            act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.PedidoQuantidadeInvalida);
        }

        [Fact]
        public void DeveLancarErro_QuandoProdutoNaoEstiverDisponivel()
        {
            Action act = () => PedidoBuilder.Build(produtoDisponivel: false);
            act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.PedidoProdutoIndisponivel);
        }

        [Fact]
        public void DeveLancarErro_QuandoAtualizarFormaPreparoParaNulo()
        {
            var pedido = PedidoBuilder.Build();
            Action act = () => pedido.UpdateFormaPreparos(null!);
            act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.PedidoFormaPreparoObrigatoria);
        }

        [Fact]
        public void DeveLancarErro_QuandoAtualizarCafeParaNulo()
        {
            var pedido = PedidoBuilder.Build();
            Action act = () => pedido.UpdateCafe(null!);
            act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.PedidoCafeObrigatorio);
        }

        [Fact]
        public void DeveLancarErro_QuandoAtualizarQuantidadeParaZeroOuNegativa()
        {
            var pedido = PedidoBuilder.Build();
            Action act = () => pedido.UpdateQuantidade(0);
            act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.PedidoQuantidadeInvalida);
        }

        [Fact]
        public void DeveLancarErro_QuandoAtualizarProdutoParaIndisponivel()
        {
            var pedido = PedidoBuilder.Build();
            Action act = () => pedido.UpdateProdutoDisponivel(false);
            act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.PedidoProdutoIndisponivel);
        }
    }
}
