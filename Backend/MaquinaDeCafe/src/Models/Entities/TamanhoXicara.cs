using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class TamanhoXicara : Entity
{
    public string Descricao { get; private set; } = string.Empty;
    public int Ml { get; private set; }
    public decimal ValorExtra { get; private set; }

    public List<PedidoItem> PedidoItens { get; private set; } = new();

    public TamanhoXicara() {}

    public TamanhoXicara(Guid? id, string descricao, int ml, decimal valorExtra)
    {
        Id = id ?? Guid.NewGuid();
        Descricao = descricao;
        Ml = ml;
        ValorExtra = valorExtra;

        Validar();
    }

    private void Validar()
    {
        if (string.IsNullOrWhiteSpace(Descricao))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria });

        if (Ml <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.TamanhoXicaraMlInvalido });

        if (ValorExtra < 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.TamanhoXicaraValorExtraNegativo });
    }

    public void Atualizar(string descricao, int ml, decimal valorExtra)
    {
        Descricao = descricao;
        Ml = ml;
        ValorExtra = valorExtra;
        Validar();
    }
}