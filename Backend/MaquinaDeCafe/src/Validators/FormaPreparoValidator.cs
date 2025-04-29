using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;

namespace MaquinaDeCafe.src.Validators;

public class RequestCriacaoFormaPreparoValidator : AbstractValidator<RequestCriacaoFormaPreparoJson>
{
    public RequestCriacaoFormaPreparoValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage("O nome é obrigatório.");
        RuleFor(x => x.TempoPreparoMinutos).GreaterThan(0).WithMessage("O tempo de preparo deve ser maior que zero.");
    }
}

public class RequestAtualizacaoFormaPreparoValidator : AbstractValidator<RequestAtualizacaoFormaPreparoJson>
{
    public RequestAtualizacaoFormaPreparoValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage("O nome é obrigatório.");
        RuleFor(x => x.TempoPreparoMinutos).GreaterThan(0).WithMessage("O tempo de preparo deve ser maior que zero.");
    }
}