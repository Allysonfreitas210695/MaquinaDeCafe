using System.Globalization;
using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;
 
public class RequestCriacaoCafeValidator : AbstractValidator<RequestCriacaoCafeJson>
{
    public RequestCriacaoCafeValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage(ErrorsMensagem.CafeNomeObrigatorio);
        RuleFor(x => x.Descricao)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.cafeDescricaoObrigatorio)
            .MinimumLength(5)
            .WithMessage(ErrorsMensagem.cafeDescricaoTamanhoMinimo);
        RuleFor(x => x.Preco).GreaterThan(0).WithMessage(ErrorsMensagem.CafePrecoMaiorQueZero);
    }
}

public class RequestAtualizacaoCafeValidator : AbstractValidator<RequestAtualizacaoCafeJson>
{
    public RequestAtualizacaoCafeValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage(ErrorsMensagem.CafeNomeObrigatorio);
        RuleFor(x => x.Descricao)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.cafeDescricaoObrigatorio)
            .MinimumLength(5)
            .WithMessage(ErrorsMensagem.cafeDescricaoTamanhoMinimo);
        RuleFor(x => x.Preco).GreaterThan(0).WithMessage(ErrorsMensagem.CafePrecoMaiorQueZero);
    }
} 