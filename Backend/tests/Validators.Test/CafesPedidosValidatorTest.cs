using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Validators;
namespace Validators.Test;

public class CafesPedidosValidatorTest
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestCafesPedidosJsonBuilder.Build();

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

    [Fact]
    public void DeveSerInvalido_QuandoCafeIdForVazio()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(cafeId: Guid.Empty);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "CafeId");
    }

    [Fact]
    public void DeveSerInvalido_QuandoTamanhoXicaraIdForVazio()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(tamanhoXicaraId: Guid.Empty);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "TamanhoXicaraId");
    }

    [Fact]
    public void DeveSerInvalido_QuandoTipoLeiteForInvalido()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(tipoLeite: (TipoLeite)999);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "TipoLeite");
    }

    [Fact]
    public void DeveSerInvalido_QuandoTipoAcucarForInvalido()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(tipoAcucar: (TipoAcucar)999);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "TipoAcucar");
    }

    [Fact]
    public void DeveSerInvalido_QuandoQuantidadeForZero()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(quantidade: 0);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "Quantidade");
    }

    [Fact]
    public void DeveSerInvalido_QuandoQuantidadeForNegativa()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(quantidade: -1);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "Quantidade");
    }

    [Fact]
    public void DeveSerInvalido_QuandoFornecidoMaisDe4Ingredientes()
    {
        var ingredientes = new List<Guid>
        {
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid()
        };

        var request = RequestCafesPedidosJsonBuilder.Build(ingredientesAdicionaisIds: ingredientes);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeFalse();
        result.Errors.Should().Contain(e => e.PropertyName == "IngredientesAdicionaisIds");
    }

    [Fact]
    public void DeveSerValido_QuandoIngredientesForNulo()
    {
        var request = RequestCafesPedidosJsonBuilder.Build(ingredientesAdicionaisIds: null);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

    [Fact]
    public void DeveSerValido_QuandoIngredientesTiverAte4Itens()
    {
        var ingredientes = new List<Guid>
        {
            Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid()
        };

        var request = RequestCafesPedidosJsonBuilder.Build(ingredientesAdicionaisIds: ingredientes);

        var validator = new RequestCafesPedidosValidator();
        var result = validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }
}
