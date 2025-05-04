using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Models.Enums;

namespace MaquinaDeCafe.src.Repositories;

public interface IPedidoRepository
{
    Task<List<ResponsePedidoJson>> GetListAsync();
    Task<ResponsePedidoJson?> GetItemByIdAsync(Guid id);
    Task AddAsync(RequestCriacaoPedidoJson request);
    Task UpdateStatusAsync(Guid pedidoId, StatusPedido novoStatus);
}