using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class TamanhoXicaraService : ITamanhoXicaraRepository
{
    private readonly ApplicationDbContext _dbContext;
    public TamanhoXicaraService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddAsync(RequestTamanhoXicaraJson request)
    {
        try
        {
            var _criacaoValidator = new TamanhoXicaraValidator();
            var validation = await _criacaoValidator.ValidateAsync(request);
            if (!validation.IsValid)
                throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

            await _dbContext.AddAsync(new TamanhoXicara(Guid.NewGuid(), request.Descricao, request.Ml, request.Valor, request.CafeId));
            await _dbContext.SaveChangesAsync();
        }
        catch (ErrorOnValidationException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarTamanhoXicara, ex);
        }
    }

    public  async Task<ResponseTamanhoXicaraJson> GetItemByIdAsync(Guid id)
    {   
        try
        {
            var _tamanhoXicara = await _dbContext.TamanhosXicara
                                    .Where(x => x.Id == id)
                                    .Select(z => new ResponseTamanhoXicaraJson()
                                    {
                                        Id = z.Id,
                                        Descricao = z.Descricao,
                                        Ml = z.Ml,
                                        Valor = z.Valor
                                    })
                                    .AsNoTracking()
                                    .FirstOrDefaultAsync();

            if (_tamanhoXicara is null)
                throw new NotFoundException(ErrorsMensagem.TamanhoXicaraNaoEncontradoExclamacao);

            return _tamanhoXicara;
        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarTamanhoXicara, ex);
        }
    }

    public async Task<List<ResponseTamanhoXicaraJson>> GetListAsync()
    {
        return await _dbContext.TamanhosXicara
                                .Select(z => new ResponseTamanhoXicaraJson()
                                {
                                    Id = z.Id,
                                    Descricao = z.Descricao,
                                    Ml = z.Ml,
                                    Valor = z.Valor
                                })
                                .AsNoTracking()
                                .ToListAsync();
    }

    public async Task UpdateAsync(Guid id, RequestTamanhoXicaraJson request)
    {
        try
        {
            var _criacaoValidator = new TamanhoXicaraValidator();
            var validation = await _criacaoValidator.ValidateAsync(request);
            if (!validation.IsValid)
                throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

            var _tamanhoXicara = await _dbContext.TamanhosXicara.FirstOrDefaultAsync(x => x.Id == id);
            if(_tamanhoXicara is null)
                throw new NotFoundException(ErrorsMensagem.TamanhoXicaraNaoEncontradoExclamacao);

            _tamanhoXicara.Atualizar(request.Descricao, request.Ml, request.Valor, request.CafeId);
        
            await _dbContext.SaveChangesAsync();
        }
        catch (NotFoundException)
        {
            throw;
        } 
        catch (ErrorOnValidationException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarTamanhoXicara, ex);
        }
    }
}