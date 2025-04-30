using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Validators;

namespace Validators.Test;
public class RequestCriacaoFormaPreparoTest
{
    [Fact]
    public void DeveSerValido_QuandoDadosForemValidos()
    {
        var request = RequestCriacaoFormaPreparoJsonBuilder.Build();
        
        var _validator = new RequestCriacaoFormaPreparoValidator();

        var result = _validator.Validate(request);

        result.IsValid.Should().BeTrue();
    }

}
