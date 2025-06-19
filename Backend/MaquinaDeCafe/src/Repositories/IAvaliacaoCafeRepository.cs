using MaquinaDeCafe.src.Communication.Response;

namespace MaquinaDeCafe.src.Repositories;

public interface IAvaliacaoCafeRepository
{
    Task<List<ResponseAvaliacaoCafeJson>> GetListAsync();
}