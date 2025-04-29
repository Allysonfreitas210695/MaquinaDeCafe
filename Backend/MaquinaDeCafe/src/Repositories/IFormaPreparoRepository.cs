using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;

namespace MaquinaDeCafe.src.Repositories;

public interface IFormaPreparoRepository
{
    Task<List<ResponseFormaPreparo>> GetListAsync();
    Task<ResponseFormaPreparo> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestCriacaoFormaPreparoJson formaPreparo);
    Task UpdateAsync(Guid id, RequestAtualizacaoFormaPreparoJson formaPreparoAtualizado);
}