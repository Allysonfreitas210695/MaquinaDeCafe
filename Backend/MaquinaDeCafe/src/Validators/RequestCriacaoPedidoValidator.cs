using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.DTOs;

namespace MaquinaDeCafe.src.Validators;

public class RequestCriacaoPedidoValidator : AbstractValidator<RequestCriacaoPedidoJson>
{
    public RequestCriacaoPedidoValidator()
    {
        RuleFor(x => x.FormaPagamento)
            .IsInEnum()
            .WithMessage("Forma de pagamento inválida.");

        RuleFor(x => x.ValorTotal)
            .GreaterThan(0)
            .WithMessage("Valor total do pedido deve ser maior que zero.");

        RuleFor(x => x.PedidosItens)
            .NotNull()
            .WithMessage("Itens do pedido são obrigatórios.")
            .NotEmpty()
            .WithMessage("Deve haver ao menos um item no pedido.")
            .Must(lista => lista.Count <= 10)
            .WithMessage("O pedido não pode conter mais de 10 cafés.");

        RuleForEach(x => x.PedidosItens)
            .SetValidator(new RequestCafesPedidosValidator());
    }
}
