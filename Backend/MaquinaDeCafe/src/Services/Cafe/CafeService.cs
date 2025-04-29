using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Repositories;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class CafeService : ICafeRepository
{
    private readonly ApplicationDbContext _dbContext;
    public CafeService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task Adicionar(RequestCriacaoCafeJson cafe)
    {
        await _dbContext.Cafes.AddAsync(new Models.Entities.Cafe() {
            Nome = cafe.Nome,
            Descricao = cafe.Descricao,
            Preco = cafe.Preco
        });
        await _dbContext.SaveChangesAsync();
    }

    public async Task Atualizar(Guid id, RequestAtualizacaoCafeJson cafeAtualizado)
    {
        var _cafe = await _dbContext.Cafes.FirstOrDefaultAsync(x => x.Id == id);
        if( _cafe == null)
            throw new ArgumentException("Café não encontrado.");

        _cafe.Nome = cafeAtualizado.Nome;
        _cafe.Descricao = cafeAtualizado.Descricao;
        _cafe.Preco = cafeAtualizado.Preco;

        _dbContext.Cafes.Update(_cafe);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<ResponseCafeJson?> GetItemById(Guid id)
    {
        return await _dbContext.Cafes
                            .AsNoTracking()
                            .Where(c => c.Id == id)
                            .Select(c => new ResponseCafeJson()
                            {
                                Id = c.Id,
                                Nome = c.Nome,
                                Descricao = c.Descricao,
                                Preco = c.Preco
                            })
                            .FirstOrDefaultAsync();
    }

    public async Task<List<ResponseCafeJson>> GetList()
    {
        return await _dbContext.Cafes
                                .Select(c => new ResponseCafeJson()
                                {
                                    Id = c.Id,
                                    Nome = c.Nome,
                                    Descricao = c.Descricao,
                                    Preco = c.Preco
                                })
                                .AsNoTracking()
                                .ToListAsync();
    }

    public async Task Remover(Guid id)
    {
       var _cafe =  await _dbContext.Cafes.Where(x => x.Id == id).FirstOrDefaultAsync();
       if (_cafe == null)
            throw new ArgumentException("Café não encontrado.");

        _dbContext.Remove(_cafe);
        await _dbContext.SaveChangesAsync();
    }
}