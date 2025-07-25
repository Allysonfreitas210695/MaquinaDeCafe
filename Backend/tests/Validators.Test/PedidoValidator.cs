using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;

public class PedidoValidator
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestCriacaoPedidoJsonBuilder.Build();

        var _validator = new RequestCriacaoPedidoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }
    [Fact]
    public void DeveSerInvalido_QuandoPedidosItensForVazio()
    {
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>());

        var _validator = new RequestCriacaoPedidoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "PedidosItens");
    }

    [Fact]
    public void DeveSerInvalido_QuandoValorTotalForNegativo()
    {
        var request = RequestCriacaoPedidoJsonBuilder.Build(valorTotal: -10);

        var _validator = new RequestCriacaoPedidoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "ValorTotal");
    }

}