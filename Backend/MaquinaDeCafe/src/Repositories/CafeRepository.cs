using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;

namespace MaquinaDeCafe.src.Repositories;

public interface ICafeRepository
{
    Task<List<ResponseCafeJson>> GetList();
    Task<ResponseCafeJson?> GetItemById(Guid id);
    Task Adicionar(RequestCriacaoCafeJson cafe);
    Task Atualizar(Guid id, RequestAtualizacaoCafeJson cafeAtualizado);
    Task Remover(Guid id);
}