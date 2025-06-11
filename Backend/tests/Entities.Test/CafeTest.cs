using FluentAssertions;
using MaquinaDeCafe.src.Exceptions;
using CommonTestUltilities.Test.Entities;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test;

public class CafeTest
{
    [Fact]
    public void DeveCriarCafe_ComSucesso()
    {
        var cafe = CafeBuilder.Build();
        cafe.Should().NotBeNull();
    }

    [Fact]
    public void DeveLancarErro_QuandoNomeEstiverVazio()
    {
        Action act = () => CafeBuilder.Build(nome: string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafeNomeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoDescricaoEstiverVazia()
    {
        Action act = () => CafeBuilder.Build(descricao: string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafeDescricaoMinima);
    }

    [Fact]
    public void DeveLancarErro_QuandoDescricaoTiverMenosDe5Caracteres()
    {
        Action act = () => CafeBuilder.Build(descricao: "Desc");
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafeDescricaoMinima);
    }

    [Fact]
    public void DeveLancarErro_QuandoPrecoForZeroOuNegativo()
    {
        Action act = () => CafeBuilder.Build(preco: 0m);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafePrecoMaiorQueZero);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarNomeComValorVazio()
    {
        var cafe = CafeBuilder.Build();
        Action act = () => cafe.UpdateNome(string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafeNomeObrigatorio);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarDescricaoComValorVazio()
    {
        var cafe = CafeBuilder.Build();
        Action act = () => cafe.UpdateDescricao(string.Empty);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafeDescricaoMinima);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarDescricaoComMenosDe5Caracteres()
    {
        var cafe = CafeBuilder.Build();
        Action act = () => cafe.UpdateDescricao("Desc");
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafeDescricaoMinima);
    }

    [Fact]
    public void DeveLancarErro_QuandoAtualizarPrecoComValorZeroOuNegativo()
    {
        var cafe = CafeBuilder.Build();
        Action act = () => cafe.UpdatePreco(0m);
        act.Should().Throw<ErrorOnValidationException>().Which.Errors.Should().Contain(ErrorsMensagem.CafePrecoMaiorQueZero);
    }
}
