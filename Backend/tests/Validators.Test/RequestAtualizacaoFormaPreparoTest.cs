using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestAtualizacaoFormaPreparoTest
{

    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestAtualizacaoFormaPreparoJsonBuilder.Build();

        var _validator = new RequestAtualizacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

    [Fact]
    public void DeveRetornarErro_QuandoNomeForVazio()
    {
        var request = RequestAtualizacaoFormaPreparoJsonBuilder.Build();
        request.Nome = string.Empty;

        var _validator = new RequestAtualizacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => 
            e.PropertyName == "Nome" && 
            e.ErrorMessage == ErrorsMensagem.CafePrecoMaiorQueZero);
    }

    [Fact]
    public void DeveRetornarErro_QuandoTempoPreparoForZero()
    {
        var request = RequestAtualizacaoFormaPreparoJsonBuilder.Build();
        request.TempoPreparoMinutos = 0;

        var _validator = new RequestAtualizacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => 
            e.PropertyName == "TempoPreparoMinutos" && 
            e.ErrorMessage == ErrorsMensagem.FormaPreparoTempoInvalido);
    }

    [Fact]
    public void DeveRetornarErro_QuandoTempoPreparoForNegativo()
    {
        var request = RequestAtualizacaoFormaPreparoJsonBuilder.Build();
        request.TempoPreparoMinutos = -5;

        var _validator = new RequestAtualizacaoFormaPreparoValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => 
            e.PropertyName == "TempoPreparoMinutos" && 
            e.ErrorMessage == ErrorsMensagem.FormaPreparoTempoInvalido);
    }
}
