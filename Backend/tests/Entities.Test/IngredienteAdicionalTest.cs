using CommonTestUltilities.Test.Entities;
using FluentAssertions;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test;

public class IngredienteAdicionalTest
{
    [Fact]
    public void DeveCriarIngredienteAdicional_ComSucesso()
    {
        var ingredienteAdicional = IngredienteAdicionalBuilder.Build();
        ingredienteAdicional.Should().NotBeNull();
    }

    [Fact]
    public void DeveLancarErro_QuandoNomeEstiverVazio()
    {
        Action act = () => IngredienteAdicionalBuilder.Build(nome: string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.IngredienteAdicionalNomeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoValorExtraForNegativo()
    {
        Action act = () => IngredienteAdicionalBuilder.Build(valorExtra: -1m);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.IngredienteAdicionalValorInvalido);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarNomeComValorVazio()
    {
        var ingredienteAdicional = IngredienteAdicionalBuilder.Build();
        Action act = () => ingredienteAdicional.UpdateNome(string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.IngredienteAdicionalNomeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarValorExtraComValorNegativo()
    {
        var ingredienteAdicional = IngredienteAdicionalBuilder.Build();
        Action act = () => ingredienteAdicional.UpdateValorExtra(-1m);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.IngredienteAdicionalValorInvalido);
    }
}
