using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class PedidoItem
{
    public Guid Id { get; private set; }
    public Guid PedidoId { get; private set; }
    public Pedido Pedido { get; private set; } = default!;
    public Guid CafeId { get; private set; }
    public Cafe Cafe { get; private set; } = default!;
    public int Quantidade { get; private set; }

    public TipoLeite TipoLeite { get; private set; }
    public TipoAcucar TipoAcucar { get; private set; }
    public TamanhoXicara TamanhoXicara { get; private set; }

    public List<PedidoItemIngredienteAdicional> PedidoItemIngredientes { get; private set; } = new();

    public PedidoItem() {}

    public PedidoItem(Guid? id, Guid pedidoId, Guid cafeId, int quantidade, TipoLeite tipoLeite, TipoAcucar tipoAcucar, TamanhoXicara tamanhoXicara)
    {
        Id = id ?? Guid.NewGuid();
        PedidoId = pedidoId;
        CafeId = cafeId;
        Quantidade = quantidade;
        TipoLeite = tipoLeite;
        TipoAcucar = tipoAcucar;
        TamanhoXicara = tamanhoXicara;
        Validar();
    }

    private void Validar()
    {
        if (CafeId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string>{ ErrorsMensagem.PedidoCafeObrigatorio });

        if (Quantidade <= 0)
            throw new ErrorOnValidationException(new List<string>{ ErrorsMensagem.PedidoQuantidadeInvalida });
    }

    public void AdicionarIngrediente(PedidoItemIngredienteAdicional ingrediente)
    {
        if (ingrediente != null)
            PedidoItemIngredientes.Add(ingrediente);
    }

    public int GetQuantidadeItens() => Quantidade;

    public decimal CalcularValorItem(decimal precoCafe)
    {
        var valorCafe = precoCafe * Quantidade;
        var valorIngredientes = PedidoItemIngredientes.Sum(i => i.IngredienteAdicional.ValorExtra) * Quantidade;
        return valorCafe + valorIngredientes;
    }
}
