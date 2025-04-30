using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestAtualizacaoFormaPreparoTest
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestAtualizacaoFormaPreparoJsonBuilder.Build();

        var _validator = new RequestAtualizacaoFormaPreparoValidator();

        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }
}
