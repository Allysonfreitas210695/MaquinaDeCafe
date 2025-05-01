using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;

namespace MaquinaDeCafe.src.Repositories;

public interface ICafeRepository
{
    Task<List<ResponseCafeJson>> GetListAsync();
    Task<ResponseCafeJson?> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestCriacaoCafeJson cafe);
    Task UpdateAsync(Guid id, RequestAtualizacaoCafeJson cafeAtualizado);
    Task RemoverAsync(Guid id);
}