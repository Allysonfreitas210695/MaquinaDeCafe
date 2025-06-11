using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestCriacaoCafeJsonTest
{

    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();

        var _validator = new RequestCriacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

    [Fact]
    public void DeveRetornarErro_QuandoNomeForVazio()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();
        request.Nome = string.Empty;

        var _validator = new RequestCriacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Nome" &&
            e.ErrorMessage == ErrorsMensagem.CafeNomeObrigatorio);
    }

    [Fact]
    public void DeveRetornarErro_QuandoDescricaoForVazia()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();
        request.Descricao = string.Empty;

        var _validator = new RequestCriacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Descricao" &&
            e.ErrorMessage == ErrorsMensagem.cafeDescricaoObrigatorio);
    }

    [Fact]
    public void DeveRetornarErro_QuandoDescricaoForMuitoCurta()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();
        request.Descricao = "abc";

        var _validator = new RequestCriacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Descricao" &&
            e.ErrorMessage == ErrorsMensagem.cafeDescricaoTamanhoMinimo);
    }

    [Fact]
    public void DeveRetornarErro_QuandoPrecoForZero()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();
        request.Preco = 0.0m;

        var _validator = new RequestCriacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Preco" &&
            e.ErrorMessage == ErrorsMensagem.CafePrecoMaiorQueZero);
    }

    [Fact]
    public void DeveRetornarErro_QuandoPrecoForNegativo()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();
        request.Preco = -5.0m;

        var _validator = new RequestCriacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Preco" &&
            e.ErrorMessage == ErrorsMensagem.CafePrecoMaiorQueZero);
    }
}
