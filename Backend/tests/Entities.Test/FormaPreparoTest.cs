using CommonTestUltilities.Test.Entities;
using FluentAssertions;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test;

public class FormaPreparoTest
{
    [Fact]
    public void DeveCriarFormaPreparo_ComSucesso()
    {
        var formaPreparo = FormaPreparoBuilder.Build();
        formaPreparo.Should().NotBeNull();
    }

    [Fact]
    public void DeveLancarErro_QuandoNomeEstiverVazio()
    {
        Action act = () => FormaPreparoBuilder.Build(nome: string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.FormaPreparoNomeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoTempoPreparoForZeroOuNegativo()
    {
        Action act = () => FormaPreparoBuilder.Build(tempoPreparoMinutos: 0);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.FormaPreparoTempoInvalido);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarNomeComValorVazio()
    {
        var formaPreparo = FormaPreparoBuilder.Build();
        Action act = () => formaPreparo.UpdateNome(string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.FormaPreparoNomeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarTempoPreparoComValorZeroOuNegativo()
    {
        var formaPreparo = FormaPreparoBuilder.Build();
        Action act = () => formaPreparo.UpdateTempoPreparoMinutos(0);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.FormaPreparoTempoInvalido);
    }
}
