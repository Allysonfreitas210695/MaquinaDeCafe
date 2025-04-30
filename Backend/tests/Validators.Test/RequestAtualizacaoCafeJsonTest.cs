using CommonTestUltilities.Test.Request;
using FluentAssertions;
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
}
