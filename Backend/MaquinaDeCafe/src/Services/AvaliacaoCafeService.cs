using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Models.Enums.Extensions;
using MaquinaDeCafe.src.Repositories;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services
{
    public class AvaliacaoCafeService : IAvaliacaoCafeRepository
    {
        private readonly ApplicationDbContext _dbContext; 
        public AvaliacaoCafeService(
            ApplicationDbContext dbContext
        )
        {
            _dbContext = dbContext; 
        }
        public async Task<List<ResponseAvaliacaoCafeJson>> GetListAsync()
        {
           return await _dbContext.AvaliacoesCafe
                                    .Select(avaliacao => new ResponseAvaliacaoCafeJson
                                    {
                                        Id = avaliacao.Id,
                                        Atendimento = avaliacao.Atendimento.ToDescricao(),
                                        CafeId = avaliacao.CafeId,
                                        Estrelas = avaliacao.Estrelas,
                                        Observacao = avaliacao.Observacao,
                                    })
                                    .AsNoTracking()
                                    .ToListAsync();
        }
    }
}