using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;
public class Cafe
{
    public Guid Id { get; private set; }
    public string Nome { get; private set; } = string.Empty;
    public string Descricao { get; private set; } = string.Empty;
    public decimal Preco { get; private set; }

    public List<PedidoItem> PedidoItens { get; set; } = new();

    public Cafe() { }

    public Cafe(Guid? id, string nome, string descricao, decimal preco)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeNomeObrigatorio });

        if (string.IsNullOrWhiteSpace(descricao) || descricao.Length < 5)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeDescricaoMinima });

        if (preco <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafePrecoMaiorQueZero });

        Id = id ?? Guid.NewGuid();
        Nome = nome;
        Descricao = descricao;
        Preco = preco;
    }

    public void UpdateNome(string nome)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeNomeObrigatorio });

        Nome = nome;
    }

    public void UpdateDescricao(string descricao)
    {
        if (string.IsNullOrWhiteSpace(descricao) || descricao.Length < 5)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeDescricaoMinima });

        Descricao = descricao;
    }

    public void UpdatePreco(decimal preco)
    {
        if (preco <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafePrecoMaiorQueZero });

        Preco = preco;
    }
}