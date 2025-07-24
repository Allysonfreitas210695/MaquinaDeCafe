using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;

public class IngredienteAdicionalValidator : AbstractValidator<RequestCriacaoIngredienteAdicionalJson>
{
    public IngredienteAdicionalValidator()
    {
        RuleFor(x => x.Nome)
           .NotEmpty()
           .WithMessage(ErrorsMensagem.IngredienteNomeObrigatorio);

        RuleFor(x => x.ValorExtra)
            .GreaterThan(0)
            .WithMessage(ErrorsMensagem.IngredienteValorExtraInvalido);
    }
}
 