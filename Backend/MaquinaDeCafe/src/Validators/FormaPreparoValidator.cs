using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;

public class RequestCriacaoFormaPreparoValidator : AbstractValidator<RequestCriacaoFormaPreparoJson>
{
    public RequestCriacaoFormaPreparoValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage(ErrorsMensagem.FormaPreparoNomeObrigatorio);
        RuleFor(x => x.TempoPreparoMinutos).GreaterThan(0).WithMessage(ErrorsMensagem.FormaPreparoTempoInvalido);
    }
}

public class RequestAtualizacaoFormaPreparoValidator : AbstractValidator<RequestAtualizacaoFormaPreparoJson>
{
    public RequestAtualizacaoFormaPreparoValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage(ErrorsMensagem.CafePrecoMaiorQueZero);
        RuleFor(x => x.TempoPreparoMinutos).GreaterThan(0).WithMessage(ErrorsMensagem.FormaPreparoTempoInvalido);
    }
}