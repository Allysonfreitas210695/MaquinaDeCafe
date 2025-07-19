using System.Globalization;
using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;
 
public class CafeValidator : AbstractValidator<RequestCriacaoCafeJson>
{
    public CafeValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage(ErrorsMensagem.CafeNomeObrigatorio);
        RuleFor(x => x.Descricao)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.cafeDescricaoObrigatorio)
            .MinimumLength(5)
            .WithMessage(ErrorsMensagem.cafeDescricaoTamanhoMinimo);
    }
}
