using CommonTestUltilities.Test.Entities;
using FluentAssertions;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test;

public class PagamentoTest
{
    [Fact]
    public void DeveCriarPagamento_ComSucesso()
    {
        var pagamento = PagamentoBuilder.Build();
        pagamento.Should().NotBeNull();
        pagamento.DataPagamento.Should().NotBe(default);
    }

    [Fact]
    public void DeveGerarHashPix_QuandoFormaPagamentoForPix()
    {
        var pagamento = PagamentoBuilder.Build(forma: FormaPagamento.Pix);
        pagamento.Forma.Should().Be(FormaPagamento.Pix);
        pagamento.GetHashPix().Should().NotBeNullOrWhiteSpace();
    }

    [Fact]
    public void NaoDeveGerarHashPix_QuandoFormaPagamentoNaoForPix()
    {
        var pagamento = PagamentoBuilder.Build(forma: FormaPagamento.Dinheiro);
        pagamento.Forma.Should().Be(FormaPagamento.Dinheiro);
        pagamento.GetHashPix().Should().BeEmpty();
    }

    [Fact]
    public void DeveAtualizarFormaPagamento_ComSucesso()
    {
        var pagamento = PagamentoBuilder.Build(forma: FormaPagamento.Dinheiro);
        pagamento.AtualizarFormaPagamento(FormaPagamento.Pix);

        pagamento.Forma.Should().Be(FormaPagamento.Pix);
        pagamento.GetHashPix().Should().NotBeNullOrEmpty();
    }

    [Fact]
    public void DeveLancarExcecao_ParaFormaPagamentoInvalida()
    {
        var formaInvalida = (FormaPagamento)999;

        var act = () => new Pagamento(Guid.NewGuid(), Guid.NewGuid(), formaInvalida);

        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Contains(ErrorsMensagem.InvalidFormaPagamento);
    }
}
