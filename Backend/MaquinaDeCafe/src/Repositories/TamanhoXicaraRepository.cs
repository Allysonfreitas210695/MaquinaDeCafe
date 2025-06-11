using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;

namespace MaquinaDeCafe.src.Repositories;

public interface TamanhoXicaraRepository
{
    Task<List<ResponseTamanhoXicaraJson>> GetListAsync();
    Task<ResponseTamanhoXicaraJson> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestTamanhoXicaraJson request);
    Task UpdateAsync(Guid id, RequestTamanhoXicaraJson request);
}