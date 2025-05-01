using FluentValidation;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class FormaPreparoService : IFormaPreparoRepository
{
    private readonly ApplicationDbContext _dbContext;
    public FormaPreparoService(
         ApplicationDbContext dbContext
    )
    {
        _dbContext = dbContext; 
    }

    public async Task<List<ResponseFormaPreparo>> GetListAsync()
    {
        return await _dbContext.FormasPreparo
                                    .Select(c => new ResponseFormaPreparo()
                                    {
                                        Id = c.Id,
                                        Nome = c.Nome,
                                        TempoPreparoMinutos = c.TempoPreparoMinutos
                                    })
                                    .AsNoTracking()
                                    .ToListAsync();
    }

    public async Task<ResponseFormaPreparo> GetItemByIdAsync(Guid id)
    {
        var _formaPreparo =  await _dbContext.FormasPreparo
                                    .Where(c => c.Id == id)
                                    .Select(c => new ResponseFormaPreparo()
                                    {
                                        Id = c.Id,
                                        Nome = c.Nome,
                                        TempoPreparoMinutos = c.TempoPreparoMinutos
                                    })
                                    .AsNoTracking()
                                    .FirstOrDefaultAsync();

        if (_formaPreparo is null)
            throw new NotFoundException(ErrorsMensagem.FormaPreparoNaoEncontrado);

        return _formaPreparo;
    }

    public async Task AddAsync(RequestCriacaoFormaPreparoJson formaPreparo)
    {
        var _criacaoValidator = new RequestCriacaoFormaPreparoValidator();
        var validation = await _criacaoValidator.ValidateAsync(formaPreparo);

        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        var novaFormaPreparo = new Models.Entities.FormaPreparo(Guid.NewGuid(), formaPreparo.Nome, formaPreparo.TempoPreparoMinutos);

        await _dbContext.FormasPreparo.AddAsync(novaFormaPreparo);
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, RequestAtualizacaoFormaPreparoJson formaPreparoAtualizado)
    {
        var _atualizacaoValidator = new RequestAtualizacaoFormaPreparoValidator();
        var validation = await _atualizacaoValidator.ValidateAsync(formaPreparoAtualizado);

        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        var formaPreparo = await _dbContext.FormasPreparo.FirstOrDefaultAsync(x => x.Id == id);
        if (formaPreparo == null)
            throw new NotFoundException(ErrorsMensagem.FormaPreparoNaoEncontrado);

        formaPreparo.UpdateNome(formaPreparoAtualizado.Nome);
        formaPreparo.UpdateTempoPreparoMinutos(formaPreparoAtualizado.TempoPreparoMinutos);

        _dbContext.FormasPreparo.Update(formaPreparo);
        await _dbContext.SaveChangesAsync();
    }
}