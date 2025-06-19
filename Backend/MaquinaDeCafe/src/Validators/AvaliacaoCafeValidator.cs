using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;

public class AvaliacaoCafeValidator : AbstractValidator<RequestAvaliacaoCafeJson>
{
    public AvaliacaoCafeValidator()
    {
        RuleFor(x => x.CafeId)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.CafeObrigatorio);

        RuleFor(x => x.Atendimento)
            .IsInEnum()
            .WithMessage(ErrorsMensagem.NivelAtendimentoInvalido);

        RuleFor(x => x.Estrelas)
            .InclusiveBetween(1, 5)
            .WithMessage(ErrorsMensagem.QuantidadeEstrelasInvalida);
    }
}

public class RequestAtualizacaoAvaliacaoCafeValidator : AbstractValidator<RequestAtualizacaoAvaliacaoCafeJson>
{
    public RequestAtualizacaoAvaliacaoCafeValidator()
    {
        RuleFor(x => x.CafeId)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.CafeObrigatorio);

        RuleFor(x => x.Atendimento)
            .IsInEnum()
            .WithMessage(ErrorsMensagem.NivelAtendimentoInvalido);

        RuleFor(x => x.Estrelas)
            .InclusiveBetween(1, 5)
            .WithMessage(ErrorsMensagem.QuantidadeEstrelasInvalida);
    }
}
