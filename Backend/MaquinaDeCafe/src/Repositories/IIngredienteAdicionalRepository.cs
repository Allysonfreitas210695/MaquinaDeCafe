using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;

namespace MaquinaDeCafe.src.Repositories;

public interface IIngredienteAdicionalRepository
{
    Task<List<ResponseIngredienteAdicionalJson>> GetListAsync();
    Task<ResponseIngredienteAdicionalJson?> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestCriacaoIngredienteAdicionalJson ingredienteAdicional);
    Task UpdateAsync(Guid id, RequestCriacaoIngredienteAdicionalJson ingredienteAdicionalAtualizado);
    Task RemoverAsync(Guid id);
}