using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;

public class IngredienteAdicionalValidator
{
    
}

public class RequestCriacaoIngredienteAdicionalValidator : AbstractValidator<RequestCriacaoIngredienteAdicionalJson>
{
    public RequestCriacaoIngredienteAdicionalValidator()
    {
        RuleFor(x => x.Nome)
           .NotEmpty()
           .WithMessage(ErrorsMensagem.IngredienteNomeObrigatorio);

        RuleFor(x => x.ValorExtra)
            .GreaterThan(0)
            .WithMessage(ErrorsMensagem.IngredienteValorExtraInvalido);
    }
}

public class RequestAtualizacaoIngredienteAdicionalValidator : AbstractValidator<RequestAtualizacaoIngredienteAdicionalJson>
{
    public RequestAtualizacaoIngredienteAdicionalValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage(ErrorsMensagem.IngredienteNomeObrigatorio);
        RuleFor(x => x.ValorExtra).GreaterThan(0).WithMessage(ErrorsMensagem.IngredienteValorExtraInvalido);
    }
}