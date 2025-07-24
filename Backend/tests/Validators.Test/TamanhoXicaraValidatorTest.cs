using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
using Xunit;

namespace Validators.Test;

public class TamanhoXicaraValidatorTests
{
    private readonly TamanhoXicaraValidator _validator = new TamanhoXicaraValidator();

    [Fact]
    public void Validate_ValidRequest_ShouldNotHaveValidationErrors()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build();

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeTrue();
        result.Errors.Should().BeEmpty();
    }

    [Theory]
    [InlineData("")]
    [InlineData(null)]
    [InlineData("   ")]
    public void Validate_InvalidDescricao_ShouldHaveValidationError(string descricao)
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build()
            .WithDescricao(descricao);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Descricao" &&
            e.ErrorMessage == ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(-1)]
    [InlineData(-100)]
    public void Validate_InvalidMl_ShouldHaveValidationError(int ml)
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build()
            .WithMl(ml);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Ml" &&
            e.ErrorMessage == ErrorsMensagem.TamanhoXicaraMlInvalido);
    }

    [Fact]
    public void Validate_NegativeValor_ShouldHaveValidationError()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build()
            .WithValor(-0.1m);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "Valor" &&
            e.ErrorMessage == ErrorsMensagem.TamanhoXicaraValorExtraNegativo);
    }

    [Fact]
    public void Validate_ZeroValor_ShouldNotHaveValidationError()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build()
            .WithValor(0);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeTrue();
        result.Errors.Should().NotContain(e => e.PropertyName == "Valor");
    }

    [Fact]
    public void Validate_EmptyCafeId_ShouldHaveValidationError()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build()
            .WithCafeId(Guid.Empty);

        // Act
        var result = _validator.Validate(request);

        // Assert
        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e =>
            e.PropertyName == "CafeId" &&
            e.ErrorMessage == ErrorsMensagem.TamanhoXicaraCafeIdObrigatorio);
    }
}