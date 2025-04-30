using CommonTestUltilities.Test.Request;
using FluentAssertions;
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
}
