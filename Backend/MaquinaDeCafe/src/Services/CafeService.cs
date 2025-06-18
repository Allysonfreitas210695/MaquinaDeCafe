using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Models.Enums.Extensions;
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
        try
        {
            var _criacaoValidator = new RequestCriacaoCafeValidator();
            var validation = await _criacaoValidator.ValidateAsync(cafe);
            if (!validation.IsValid)
                throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

            await _dbContext.Cafes.AddAsync(new Models.Entities.Cafe(
                                                                        Guid.NewGuid(),
                                                                        cafe.Nome,
                                                                        cafe.Descricao,
                                                                        cafe.Preco,
                                                                        cafe.TempoPreparoSegundos,
                                                                        cafe.Categoria
                                                                    ));
        
            await _dbContext.SaveChangesAsync();
        }
        catch (ErrorOnValidationException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarCafe, ex);
        }
    }

    public async Task UpdateAsync(Guid id, RequestAtualizacaoCafeJson cafeAtualizado)
    {
        try
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
        catch (ErrorOnValidationException)
        {
            throw;
        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarCafe, ex);
        }
    }

    public async Task<ResponseCafeJson?> GetItemByIdAsync(Guid id)
    {
        try
        {
            var _cafe =  await _dbContext.Cafes
                                        .Where(c => c.Id == id)
                                        .Select(c => new ResponseCafeJson()
                                        {
                                            Id = c.Id,
                                            Nome = c.Nome,
                                            Descricao = c.Descricao,
                                            Preco = c.Preco,
                                            TempoPreparoSegundos = c.TempoPreparoSegundos,
                                            Categoria = c.Categoria.ToDescricao()
                                        })
                                        .AsNoTracking()
                                        .FirstOrDefaultAsync();

            if (_cafe is null)
                throw new NotFoundException(ErrorsMensagem.CafeNaoEncontrado);

            return _cafe;
        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarCafe, ex);
        }
    }

    public async Task<List<ResponseCafeJson>> GetListAsync(CategoriaCafe? categoria)
    {
        var query = _dbContext.Cafes.AsQueryable();

        if (categoria.HasValue)
            query = query.Where(c => c.Categoria == categoria.Value);

        return await query
            .Select(c => new ResponseCafeJson
            {
                Id = c.Id,
                Nome = c.Nome,
                Descricao = c.Descricao,
                Preco = c.Preco,
                TempoPreparoSegundos = c.TempoPreparoSegundos,
                Categoria = c.Categoria.ToDescricao()
            })
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task RemoverAsync(Guid id)
    {
        try
        {
           var _cafe =  await _dbContext.Cafes.Where(x => x.Id == id).FirstOrDefaultAsync();
           if (_cafe == null)
                throw new NotFoundException(ErrorsMensagem.CafeNaoEncontrado);

            _dbContext.Remove(_cafe);
           await _dbContext.SaveChangesAsync();
        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarCafe, ex);
        }
    }
}