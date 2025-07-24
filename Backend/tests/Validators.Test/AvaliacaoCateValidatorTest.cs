using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
using Xunit;

namespace Validators.Test;

public class AvaliacaoCafeValidatorTest
{
    private readonly AvaliacaoCafeValidator _validator = new AvaliacaoCafeValidator();

    [Fact]
    public void Validate_ValidRequest_ShouldNotHaveValidationErrors()
    {
        // Arrange
        var request = RequestAvaliacaoCafeJsonBuilder.Build();

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeTrue();
        result.Errors.Should().BeEmpty();
    }

    [Fact]
    public void Validate_EmptyCafeId_ShouldHaveValidationError()
    {
        // Arrange
        var request = RequestAvaliacaoCafeJsonBuilder.Build()
            .WithCafeId(Guid.Empty);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "CafeId" &&
            e.ErrorMessage == ErrorsMensagem.CafeObrigatorio);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(6)]
    [InlineData(-1)]
    public void Validate_EstrelasForaDoRange_ShouldHaveValidationError(int estrelas)
    {
        // Arrange
        var request = RequestAvaliacaoCafeJsonBuilder.Build()
            .WithEstrelas(estrelas);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Estrelas" &&
            e.ErrorMessage == ErrorsMensagem.QuantidadeEstrelasInvalida);
    }

    [Fact]
    public void Validate_AtendimentoInvalido_ShouldHaveValidationError()
    {
        // Arrange
        var request = RequestAvaliacaoCafeJsonBuilder.Build();
        request.Atendimento = (NivelAtendimento)999;

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Atendimento" &&
            e.ErrorMessage == ErrorsMensagem.NivelAtendimentoInvalido);
    }

    [Fact]
    public void Validate_ObservacaoNaoValidada_ShouldNotHaveValidationError()
    {
        // Arrange
        var request = RequestAvaliacaoCafeJsonBuilder.Build()
            .WithObservacao("Observação qualquer");

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeTrue();
        result.Errors.Should().NotContain(e => e.PropertyName == "Observacao");
    }

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("   ")]
    public void Validate_ObservacaoVaziaOuNula_ShouldNotHaveValidationError(string observacao)
    {
        // Arrange
        var request = RequestAvaliacaoCafeJsonBuilder.Build()
            .WithObservacao(observacao);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeTrue();
        result.Errors.Should().NotContain(e => e.PropertyName == "Observacao");
    }
}