using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestCriacaoFormaPreparoTest
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestCriacaoFormaPreparoJsonBuilder.Build();
        
        var _validator = new RequestCriacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

    [Fact]
    public void DeveRetornarErro_QuandoNomeForVazio()
    {
        var request = RequestCriacaoFormaPreparoJsonBuilder.Build();
        request.Nome = string.Empty;

        var _validator = new RequestCriacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Nome" &&
            e.ErrorMessage == ErrorsMensagem.FormaPreparoNomeObrigatorio);
    }

    [Fact]
    public void DeveRetornarErro_QuandoTempoPreparoForZero()
    {
        var request = RequestCriacaoFormaPreparoJsonBuilder.Build();
        request.TempoPreparoMinutos = 0;

        var _validator = new RequestCriacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "TempoPreparoMinutos" &&
            e.ErrorMessage == ErrorsMensagem.FormaPreparoTempoInvalido);
    }

    [Fact]
    public void DeveRetornarErro_QuandoTempoPreparoForNegativo()
    {
        var request = RequestCriacaoFormaPreparoJsonBuilder.Build();
        request.TempoPreparoMinutos = -5;

        var _validator = new RequestCriacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "TempoPreparoMinutos" &&
            e.ErrorMessage == ErrorsMensagem.FormaPreparoTempoInvalido);
    }
}
