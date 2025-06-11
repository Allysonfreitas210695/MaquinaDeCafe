using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;

public class RequestTamanhoXicaraValidator : AbstractValidator<RequestTamanhoXicaraJson>
{
    public RequestTamanhoXicaraValidator()
    {
        RuleFor(x => x.Descricao)
            .NotEmpty().WithMessage(ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria)
            .Must(descricao => !string.IsNullOrWhiteSpace(descricao)).WithMessage(ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria);

        RuleFor(x => x.Ml)
            .GreaterThan(0).WithMessage(ErrorsMensagem.TamanhoXicaraMlInvalido);

        RuleFor(x => x.ValorExtra)
            .GreaterThanOrEqualTo(0).WithMessage(ErrorsMensagem.TamanhoXicaraValorExtraNegativo);
    }
}
