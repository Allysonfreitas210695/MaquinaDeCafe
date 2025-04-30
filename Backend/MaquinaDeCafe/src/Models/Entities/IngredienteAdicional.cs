using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class IngredienteAdicional
{
    public Guid Id { get; private set; }
    public string Nome { get; private set; } = string.Empty;
    public decimal ValorExtra { get; private set; }

    public List<Pedido> Pedidos { get; private set; } = new();

    public IngredienteAdicional() { }

    public IngredienteAdicional(Guid? id, string nome, decimal valorExtra)
    {

        if (string.IsNullOrWhiteSpace(nome))
           throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.IngredienteAdicionalNomeObrigatorio });

        if (valorExtra < 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.IngredienteAdicionalValorInvalido });


        Id = id ?? Guid.NewGuid();
        Nome = nome;
        ValorExtra = valorExtra;
    }

    public void UpdateNome(string nome)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.IngredienteAdicionalNomeObrigatorio });

        Nome = nome;
    }
    public void UpdateValorExtra(decimal valor)
    {
        if (valor < 0)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.IngredienteAdicionalValorInvalido });

        ValorExtra = valor;
    }
}