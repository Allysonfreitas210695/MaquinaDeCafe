using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestAtualizacaoCafeJsonTest
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestAtualizacaoCafeJsonBuilder.Build();

        var _validator = new RequestAtualizacaoCafeValidator();

        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

     [Fact]
    public void DeveRetornarErro_QuandoNomeForVazio()
    {
        var request = RequestAtualizacaoCafeJsonBuilder.Build();
        request.Nome = string.Empty;

        var _validator = new RequestAtualizacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "Nome" && e.ErrorMessage == ErrorsMensagem.CafeNomeObrigatorio);
    }

    [Fact]
    public void DeveRetornarErro_QuandoDescricaoForVazia()
    {
        var request = RequestAtualizacaoCafeJsonBuilder.Build();
        request.Descricao = string.Empty;

        var _validator = new RequestAtualizacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "Descricao" && e.ErrorMessage == ErrorsMensagem.cafeDescricaoObrigatorio);
    }

    [Fact]
    public void DeveRetornarErro_QuandoDescricaoForMuitoCurta()
    {
        var request = RequestAtualizacaoCafeJsonBuilder.Build();
        request.Descricao = "abc";

        var _validator = new RequestAtualizacaoCafeValidator();
        var result = _validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "Descricao" && e.ErrorMessage == ErrorsMensagem.cafeDescricaoTamanhoMinimo);
    }

}
