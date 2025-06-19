using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;

namespace MaquinaDeCafe.src.Repositories;

public interface IAvaliacaoCafeRepository
{
    Task<List<ResponseAvaliacaoCafeJson>> GetListAsync();
    Task<ResponseAvaliacaoCafeJson?> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestAvaliacaoCafeJson avaliacao);
    Task UpdateAsync(Guid id, RequestAtualizacaoAvaliacaoCafeJson avaliacaoAtualizada);
}