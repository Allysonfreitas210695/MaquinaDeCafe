using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestAtualizacaoIngredienteAdicionalJsonTest
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestAtualizacaoIngredienteAdicionalJsonBuilder.Build();

        var _validator = new RequestAtualizacaoIngredienteAdicionalValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

    [Fact]
    public void DeveRetornarErro_QuandoNomeForVazio()
    {
        var request = RequestAtualizacaoIngredienteAdicionalJsonBuilder.Build();
        request.Nome = string.Empty;

        var _validator = new RequestAtualizacaoIngredienteAdicionalValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Nome" &&
            e.ErrorMessage == ErrorsMensagem.IngredienteNomeObrigatorio);
    }

    [Fact]
    public void DeveRetornarErro_QuandoValorExtraForZero()
    {
        var request = RequestAtualizacaoIngredienteAdicionalJsonBuilder.Build();
        request.ValorExtra = 0;

        var _validator = new RequestAtualizacaoIngredienteAdicionalValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "ValorExtra" &&
            e.ErrorMessage == ErrorsMensagem.IngredienteValorExtraInvalido);
    }

    [Fact]
    public void DeveRetornarErro_QuandoValorExtraForNegativo()
    {
        var request = RequestAtualizacaoIngredienteAdicionalJsonBuilder.Build();
        request.ValorExtra = -1.75m;

        var _validator = new RequestAtualizacaoIngredienteAdicionalValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "ValorExtra" &&
            e.ErrorMessage == ErrorsMensagem.IngredienteValorExtraInvalido);
    }
}
