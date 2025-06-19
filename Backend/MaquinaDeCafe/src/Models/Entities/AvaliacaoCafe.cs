using MaquinaDeCafe.src.Models.Common;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;

namespace MaquinaDeCafe.src.Models.Entities;

public class AvaliacaoCafe : Entity
{
    public Guid CafeId { get; private set; }
    public Cafe Cafe { get; private set; } = default!;

    public NivelAtendimento Atendimento { get; private set; }
    public int Estrelas { get; private set; }
    public string Observacao { get; private set; } = string.Empty;

    public AvaliacaoCafe() { }

    public AvaliacaoCafe(Guid? id, Guid cafeId, NivelAtendimento atendimento, int estrelas, string observacao)
    {
        if (cafeId == Guid.Empty)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.CafeObrigatorio });

        if (!Enum.IsDefined(typeof(NivelAtendimento), atendimento))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.NivelAtendimentoInvalido });

        if (estrelas < 1 || estrelas > 5)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.QuantidadeEstrelasInvalida });

        Id = id ?? Guid.NewGuid();
        CafeId = cafeId;
        Atendimento = atendimento;
        Estrelas = estrelas;
        Observacao = observacao?.Trim() ?? string.Empty;
    }

    public void UpdateAtendimento(NivelAtendimento atendimento)
    {
        if (!Enum.IsDefined(typeof(NivelAtendimento), atendimento))
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.NivelAtendimentoInvalido });

        Atendimento = atendimento;
        UpdateTimestamp();
    }

    public void UpdateEstrelas(int estrelas)
    {
        if (estrelas < 1 || estrelas > 5)
            throw new ErrorOnValidationException(new List<string> { ErrorsMensagem.QuantidadeEstrelasInvalida });

        Estrelas = estrelas;
        UpdateTimestamp();
    }

    public void UpdateObservacao(string observacao)
    {
        Observacao = observacao?.Trim() ?? string.Empty;
        UpdateTimestamp();
    }
}
