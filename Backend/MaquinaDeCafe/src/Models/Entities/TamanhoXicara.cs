using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class TamanhoXicara : Entity
{
    public string Descricao { get; private set; } = string.Empty;
    public int Ml { get; private set; }
    public decimal Valor { get; private set; }

    public Guid CafeId { get; private set; }
    public Cafe Cafe { get; private set; } = default!;

    public List<PedidoItem> PedidoItens { get; private set; } = new();

    public TamanhoXicara() {}

    public TamanhoXicara(Guid? id, string descricao, int ml, decimal valor, Guid cafeId)
    {

        Id = id ?? Guid.NewGuid();
        Descricao = descricao.Trim();
        Ml = ml;
        Valor = valor;
        CafeId = cafeId;

        Validar();
    }

    private void Validar()
    {
        if (string.IsNullOrWhiteSpace(Descricao))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria });

        if (Ml <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.TamanhoXicaraMlInvalido });

        if (Valor < 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.TamanhoXicaraValorExtraNegativo });

        if (CafeId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeIdObrigatorioTamanhoXicara });
    }

    public void Atualizar(string descricao, int ml, decimal valorExtra, Guid cafeId)
    {
        Descricao = descricao;
        Ml = ml;
        Valor = valorExtra;
        CafeId = cafeId;

        Validar();
    }
}