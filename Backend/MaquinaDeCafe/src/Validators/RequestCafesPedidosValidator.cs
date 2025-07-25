using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Validators;

public class RequestCafesPedidosValidator : AbstractValidator<RequestCafesPedidosJson>
{
    public RequestCafesPedidosValidator()
    {
        RuleFor(x => x.CafeId)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.CafeObrigatorio);

        RuleFor(x => x.TamanhoXicaraId)
            .NotEmpty()
            .WithMessage(ErrorsMensagem.TamanhoXicaraObrigatorio);

        RuleFor(x => x.TipoLeite)
            .IsInEnum()
            .WithMessage(ErrorsMensagem.TipoLeiteInvalido);

        RuleFor(x => x.TipoAcucar)
            .IsInEnum()
            .WithMessage(ErrorsMensagem.TipoAcucarInvalido);

        RuleFor(x => x.Quantidade)
            .GreaterThan(0)
            .WithMessage(ErrorsMensagem.QuantidadeMaiorQueZero);

        RuleFor(x => x.IngredientesAdicionaisIds)
            .Must(lista => lista == null || lista.Count <= 4)
            .WithMessage(ErrorsMensagem.MaximoIngredientesAdicionaisPorCafe);
    }
}
