using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;

namespace MaquinaDeCafe.src.Validators;

public class IngredienteAdicionalValidator
{
    
}

public class RequestCriacaoIngredienteAdicionalValidator : AbstractValidator<RequestCriacaoIngredienteAdicionalJson>
{
    public RequestCriacaoIngredienteAdicionalValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage("Nome não pode ser vazio.");
        RuleFor(x => x.ValorExtra).GreaterThan(0).WithMessage("Valor extra deve ser maior que zero.");
    }
}

public class RequestAtualizacaoIngredienteAdicionalValidator : AbstractValidator<RequestAtualizacaoIngredienteAdicionalJson>
{
    public RequestAtualizacaoIngredienteAdicionalValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage("Nome não pode ser vazio.");
        RuleFor(x => x.ValorExtra).GreaterThan(0).WithMessage("Valor extra deve ser maior que zero.");
    }
}