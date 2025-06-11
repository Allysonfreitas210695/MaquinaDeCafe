using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class Cafe : Entity
{
    public string Nome { get; private set; } = string.Empty;
    public string Descricao { get; private set; } = string.Empty;
    public decimal Preco { get; private set; }
    public int TempoPreparoSegundos { get; private set; }
    public CategoriaCafe Categoria { get; private set; }

    public List<PedidoItem> PedidoItens { get; set; } = new();

    public Cafe() { }

    public Cafe(Guid? id, string nome, string descricao, decimal preco, int tempoPreparoSegundos, CategoriaCafe categoria)
    {   
        if (!Enum.IsDefined(typeof(CategoriaCafe), categoria))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.InvalidCoffeeCategory });

        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeNomeObrigatorio });

        if (string.IsNullOrWhiteSpace(descricao) || descricao.Length < 5)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeDescricaoMinima });

        if (preco <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafePrecoMaiorQueZero });

        if (tempoPreparoSegundos <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CoffeePreparationTimeInvalid });

        Id = id ?? Guid.NewGuid();
        Nome = nome;
        Descricao = descricao;
        Preco = preco;
        TempoPreparoSegundos = tempoPreparoSegundos;
        Categoria = categoria;
    }

    public void UpdateNome(string nome)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeNomeObrigatorio });

        Nome = nome;
        UpdateTimestamp();
    }

    public void UpdateDescricao(string descricao)
    {
        if (string.IsNullOrWhiteSpace(descricao) || descricao.Length < 5)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeDescricaoMinima });

        Descricao = descricao;
        UpdateTimestamp();
    }

    public void UpdatePreco(decimal preco)
    {
        if (preco <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafePrecoMaiorQueZero });

        Preco = preco;
        UpdateTimestamp();
    }

    public void UpdateTempoPreparo(int tempoSegundos)
    {
        if (tempoSegundos <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CoffeePreparationTimeInvalid });

        TempoPreparoSegundos = tempoSegundos;
        UpdateTimestamp();
    }

    public void UpdateCAtegoria(CategoriaCafe categoria)
    {
        if (!Enum.IsDefined(typeof(CategoriaCafe), categoria))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.InvalidCoffeeCategory });

        Categoria = categoria;
        UpdateTimestamp();
    }
}
