using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Repositories;

public interface ICafeRepository
{
    Task<List<ResponseCafeJson>> GetListAsync(CategoriaCafe? categoria);
    Task<ResponseCafeJson?> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestCriacaoCafeJson cafe);
    Task UpdateAsync(Guid id, RequestCriacaoCafeJson cafeAtualizado);
    Task RemoverAsync(Guid id);
}