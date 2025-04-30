using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class FormaPreparo
{
    public Guid Id { get; private set; }
    public string Nome { get; private set; } = string.Empty;
    public int TempoPreparoMinutos { get; private set; }

    public List<Pedido> Pedidos { get; private set; } = new();

    public FormaPreparo() { }

    public FormaPreparo(Guid? id, string nome, int tempoPreparoMinutos)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.FormaPreparoNomeObrigatorio });

        if (tempoPreparoMinutos <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.FormaPreparoTempoInvalido });

        Id = id ?? Guid.NewGuid();
        Nome = nome;
        TempoPreparoMinutos = tempoPreparoMinutos;
    }

    public void UpdateNome(string nome)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.FormaPreparoNomeObrigatorio });

        Nome = nome;
    }

    public void UpdateTempoPreparoMinutos(int tempoPreparoMinutos)
    {
        if (tempoPreparoMinutos <= 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.FormaPreparoTempoInvalido });

        TempoPreparoMinutos = tempoPreparoMinutos;
    }
}