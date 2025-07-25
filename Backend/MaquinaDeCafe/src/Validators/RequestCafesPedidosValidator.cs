using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;

namespace MaquinaDeCafe.src.Validators;

public class RequestCafesPedidosValidator : AbstractValidator<RequestCafesPedidosJson>
{
    public RequestCafesPedidosValidator()
    {
        RuleFor(x => x.CafeId)
            .NotEmpty()
            .WithMessage("O café é obrigatório.");

        RuleFor(x => x.TamanhoXicaraId)
            .NotEmpty()
            .WithMessage("O tamanho da xícara é obrigatório.");

        RuleFor(x => x.TipoLeite)
            .IsInEnum()
            .WithMessage("Tipo de leite inválido.");

        RuleFor(x => x.TipoAcucar)
            .IsInEnum()
            .WithMessage("Tipo de açúcar inválido.");

        RuleFor(x => x.Quantidade)
            .GreaterThan(0)
            .WithMessage("Quantidade deve ser maior que zero.");

        RuleFor(x => x.IngredientesAdicionaisIds)
            .Must(lista => lista == null || lista.Count <= 4)
            .WithMessage("Cada café pode ter no máximo 4 ingredientes adicionais.");
    }
}
