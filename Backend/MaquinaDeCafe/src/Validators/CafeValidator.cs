using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.DTOs;

namespace MaquinaDeCafe.src.Validators;
 
public class RequestCriacaoCafeValidator : AbstractValidator<RequestCriacaoCafeJson>
{
    public RequestCriacaoCafeValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage("O nome é obrigatório.");
        RuleFor(x => x.Descricao).NotEmpty().WithMessage("A descrição é obrigatória.");
        RuleFor(x => x.Preco).GreaterThan(0).WithMessage("O preço deve ser maior que zero.");
    }
}

public class RequestAtualizacaoCafeValidator : AbstractValidator<RequestAtualizacaoCafeJson>
{
    public RequestAtualizacaoCafeValidator()
    {
        RuleFor(x => x.Nome).NotEmpty().WithMessage("O nome é obrigatório.");
        RuleFor(x => x.Descricao).NotEmpty().WithMessage("A descrição é obrigatória.");
        RuleFor(x => x.Preco).GreaterThan(0).WithMessage("O preço deve ser maior que zero.");
    }
} 