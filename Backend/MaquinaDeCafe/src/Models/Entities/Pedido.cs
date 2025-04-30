
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class Pedido
{
    public Guid Id { get; private set; }
    public Guid CafeId { get; private set; }
    public Cafe Cafe { get; private set; } = default!;
    public TipoLeite TipoLeite { get; private set; }
    public TipoAcucar TipoAcucar { get; private set; }
    public TamanhoXicara TamanhoXicara { get; private set; }
    public int Quantidade { get; private set; }
    public decimal ValorTotal { get; private set; }
    public Guid FormaPreparoId { get; private set; }
    public FormaPreparo FormaPreparo { get; private set; } = default!;
    public StatusPedido Status { get; private set; }
    public bool ProdutoDisponivel { get; private set; }
    public List<IngredienteAdicional> IngredientesAdicionais { get; private set; } = new();

    public Pedido(
            Guid? id,
            Cafe cafe,
            TipoLeite tipoLeite,
            TipoAcucar tipoAcucar,
            TamanhoXicara tamanhoXicara,
            int quantidade,
            FormaPreparo formaPreparo,
            List<IngredienteAdicional>? ingredientesAdicionais,
            bool produtoDisponivel)
    { 

        if (cafe == null)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoCafeObrigatorio });

        if (formaPreparo == null)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoFormaPreparoObrigatoria });

        if (quantidade <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoQuantidadeInvalida });

        if (!produtoDisponivel)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoProdutoIndisponivel });

        Id = id ?? Guid.NewGuid();
        Cafe = cafe;
        CafeId = cafe.Id;
        TipoLeite = tipoLeite;
        TipoAcucar = tipoAcucar;
        TamanhoXicara = tamanhoXicara;
        Quantidade = quantidade;
        FormaPreparo = formaPreparo;
        FormaPreparoId = formaPreparo.Id;
        ProdutoDisponivel = produtoDisponivel;
        IngredientesAdicionais = ingredientesAdicionais ?? new List<IngredienteAdicional>();

        ValorTotal = CalcularValorTotal();
        Status = StatusPedido.EmPreparo; 
    }

    public void UpdateFormaPreparos(FormaPreparo formaPreparo)
    {
        if (formaPreparo == null)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoFormaPreparoObrigatoria });

        FormaPreparo = formaPreparo;
    }
    
    public void UpdateCafe(Cafe cafe)
    {
        if (cafe == null)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoCafeObrigatorio });

        Cafe = cafe;
    }
    
    public void UpdateQuantidade(int quantidade)
    {
        if (quantidade <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoQuantidadeInvalida });

        Quantidade = quantidade;
    }
    
    public void UpdateProdutoDisponivel(bool produtoDisponivel)
    {
        if (!produtoDisponivel)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoProdutoIndisponivel });
       
        ProdutoDisponivel = produtoDisponivel;
    }

    private decimal CalcularValorTotal()
    {
        decimal valorCafe = Cafe.Preco;
        decimal valorIngredientes = IngredientesAdicionais.Sum(i => i.ValorExtra);
        return (valorCafe + valorIngredientes) * Quantidade;
    }
}