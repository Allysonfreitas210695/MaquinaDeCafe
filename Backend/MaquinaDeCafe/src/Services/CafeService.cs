using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class CafeService : ICafeRepository
{
    private readonly ApplicationDbContext _dbContext; 
    public CafeService(
        ApplicationDbContext dbContext
    )
    {
        _dbContext = dbContext; 
    }
    public async Task AddAsync(RequestCriacaoCafeJson cafe)
    {
        var _criacaoValidator = new RequestCriacaoCafeValidator();
        var validation = await _criacaoValidator.ValidateAsync(cafe);
        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        await _dbContext.Cafes.AddAsync(new Models.Entities.Cafe(Guid.NewGuid(), cafe.Nome, cafe.Descricao, cafe.Preco));
        
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, RequestAtualizacaoCafeJson cafeAtualizado)
    {
        var _atualizacaoValidator = new RequestAtualizacaoCafeValidator();
        var validation = await _atualizacaoValidator.ValidateAsync(cafeAtualizado);
        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        var _cafe = await _dbContext.Cafes.FirstOrDefaultAsync(x => x.Id == id);
        if( _cafe == null)
            throw new NotFoundException(ErrorsMensagem.CafeNaoEncontrado);

        _cafe.UpdateNome(cafeAtualizado.Nome);
        _cafe.UpdateDescricao(cafeAtualizado.Descricao);
        _cafe.UpdatePreco(cafeAtualizado.Preco);

        _dbContext.Cafes.Update(_cafe);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<ResponseCafeJson?> GetItemByIdAsync(Guid id)
    {
        var _cafe =  await _dbContext.Cafes
                                    .Where(c => c.Id == id)
                                    .Select(c => new ResponseCafeJson()
                                    {
                                        Id = c.Id,
                                        Nome = c.Nome,
                                        Descricao = c.Descricao,
                                        Preco = c.Preco
                                    })
                                    .AsNoTracking()
                                    .FirstOrDefaultAsync();

        if (_cafe is null)
            throw new NotFoundException(ErrorsMensagem.CafeNaoEncontrado);

        return _cafe;
    }

    public async Task<List<ResponseCafeJson>> GetListAsync()
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

    public async Task RemoverAsync(Guid id)
    {
       var _cafe =  await _dbContext.Cafes.Where(x => x.Id == id).FirstOrDefaultAsync();
       if (_cafe == null)
            throw new NotFoundException(ErrorsMensagem.CafeNaoEncontrado);

        _dbContext.Remove(_cafe);
       await _dbContext.SaveChangesAsync();
    }
}