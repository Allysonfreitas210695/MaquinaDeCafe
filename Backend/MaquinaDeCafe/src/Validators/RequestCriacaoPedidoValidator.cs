using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;

public class RequestCriacaoPedidoValidator : AbstractValidator<RequestCriacaoPedidoJson>
{
    public RequestCriacaoPedidoValidator()
    {
        RuleFor(x => x.FormaPagamento)
            .IsInEnum()
            .WithMessage(ErrorsMensagem.FormaPagamentoInvalida);

        RuleFor(x => x.ValorTotal)
            .GreaterThan(0)
            .WithMessage(ErrorsMensagem.ValorTotalPedidoMaiorQueZero);

        RuleFor(x => x.PedidosItens)
            .NotNull()
            .WithMessage(ErrorsMensagem.ItensPedidoObrigatorios)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.DeveConterAoMenosUmItem)
            .Must(lista => lista.Count <= 10)
            .WithMessage(ErrorsMensagem.PedidoMaximoDeDezCafes);

        RuleForEach(x => x.PedidosItens)
            .SetValidator(new RequestCafesPedidosValidator());
    }
}
