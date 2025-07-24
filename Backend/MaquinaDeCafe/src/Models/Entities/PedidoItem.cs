using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class PedidoItem  : Entity
{
    public Guid PedidoId { get; private set; }
    public Pedido Pedido { get; private set; } = default!;
    public Guid CafeId { get; private set; }
    public Cafe Cafe { get; private set; } = default!;
    public int Quantidade { get; private set; }

    public TipoLeite TipoLeite { get; private set; }
    public TipoAcucar TipoAcucar { get; private set; }
    public Guid TamanhoXicaraId { get; private set; }
    public TamanhoXicara TamanhoXicara { get; private set; } = default!;

    public int TempoPreparoSegundos { get; private set; }

    public List<PedidoItemIngredienteAdicional> PedidoItemIngredientes { get; private set; } = new();

    public PedidoItem() {}

    public PedidoItem(PedidoItem pedidoItem)
    {
        Id = pedidoItem.Id;
        PedidoId = pedidoItem.PedidoId;
        CafeId = pedidoItem.CafeId;
        Quantidade = pedidoItem.Quantidade;
        TipoLeite = pedidoItem.TipoLeite;
        TipoAcucar = pedidoItem.TipoAcucar;
        TamanhoXicaraId = pedidoItem.TamanhoXicaraId;
        TempoPreparoSegundos = pedidoItem.TempoPreparoSegundos;

        Validar();
    }

    private void Validar()
    {
        if (CafeId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoCafeObrigatorio });

        if (Quantidade <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoQuantidadeInvalida });

        if (TempoPreparoSegundos <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoTempoPreparoInvalido });

        if (TamanhoXicaraId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoTamanhoXicaraObrigatorio });
    }

    public void UpdateId(Guid? id)
    {

        Id = id ?? Guid.NewGuid();
    }

    public void UpdatePedidoId(Guid pedidoId)
    {
        if (pedidoId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoIdObrigatorio });

        PedidoId = pedidoId;
    }

    public void UpdateCafeId(Guid cafeId)
    {
        if (cafeId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoCafeObrigatorio });

        CafeId = cafeId;
    }

    public void UpdateQuantidade(int quantidade)
    {
        if (quantidade <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoQuantidadeInvalida });

        Quantidade = quantidade;
    }

    public void UpdateTipoLeite(TipoLeite tipoLeite)
    {
        TipoLeite = tipoLeite;
    }

    public void UpdateTipoAcucar(TipoAcucar tipoAcucar)
    {
        TipoAcucar = tipoAcucar;
    }

    public void UpdateTamanhoXicaraId(Guid tamanhoXicaraId)
    {
        if (tamanhoXicaraId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoTamanhoXicaraObrigatorio });

        TamanhoXicaraId = tamanhoXicaraId;
    }

    public void UpdateTempoPreparo(int tempoPreparoSegundos)
    {
        if (tempoPreparoSegundos <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.PedidoTempoPreparoInvalido });

        TempoPreparoSegundos = tempoPreparoSegundos;
    }


    public void AdicionarIngrediente(PedidoItemIngredienteAdicional ingrediente)
    {
        if (ingrediente != null)
            PedidoItemIngredientes.Add(ingrediente);
    }

    public int GetQuantidadeItens() => Quantidade;

    public decimal CalcularValorItem(decimal precoCafe, decimal precoTamanhoXicara)
    {
        var valorCafe = precoCafe * Quantidade;
        var valorIngredientes = PedidoItemIngredientes.Sum(i => i.IngredienteAdicional.ValorExtra) * Quantidade;
        return valorCafe + valorIngredientes + precoTamanhoXicara;
    }
}
