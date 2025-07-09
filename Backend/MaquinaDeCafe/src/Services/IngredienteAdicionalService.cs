using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class IngredienteAdicionalService : IIngredienteAdicionalRepository
{
    private readonly ApplicationDbContext _dbContext;
    public IngredienteAdicionalService(
        ApplicationDbContext dbContext
    )
    {
        _dbContext = dbContext; 
    }

    public async Task AddAsync(RequestCriacaoIngredienteAdicionalJson ingredienteAdicional)
    {
        try
        {
            var _criacaoValidator = new IngredienteAdicionalValidator();
            var validation = await _criacaoValidator.ValidateAsync(ingredienteAdicional);

            if (!validation.IsValid)
                throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

            var _ingredienteAdicional =  new Models.Entities.IngredienteAdicional(Guid.NewGuid(), ingredienteAdicional.Nome, ingredienteAdicional.ValorExtra);
        
            await _dbContext.IngredientesAdicionais.AddAsync(_ingredienteAdicional);
            await _dbContext.SaveChangesAsync();
        }
        catch (ErrorOnValidationException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarIngrediente, ex);
        }

    }

    public async Task<ResponseIngredienteAdicionalJson?> GetItemByIdAsync(Guid id)
    {
        try
        {
            var ingredienteAdicional = await _dbContext.IngredientesAdicionais.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            if (ingredienteAdicional == null)  throw new NotFoundException(ErrorsMensagem.IngredienteAdicionalNaoEncontrado);

            return new ResponseIngredienteAdicionalJson() {
                Id = ingredienteAdicional.Id,
                Nome = ingredienteAdicional.Nome,
                ValorExtra = ingredienteAdicional.ValorExtra
            };
        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarIngrediente, ex);
        }
    }

    public async Task<List<ResponseIngredienteAdicionalJson>> GetListAsync()
    {
        return await _dbContext.IngredientesAdicionais
                                .Select(x => new ResponseIngredienteAdicionalJson() {
                                    Id = x.Id,
                                    Nome = x.Nome,
                                    ValorExtra = x.ValorExtra
                                }).AsNoTracking().ToListAsync();
    }

    public async Task RemoverAsync(Guid id)
    {
        try
        {
            var ingredienteAdicional = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync(x => x.Id == id);
            if (ingredienteAdicional == null) throw new NotFoundException(ErrorsMensagem.IngredienteAdicionalNaoEncontrado);

            _dbContext.IngredientesAdicionais.Remove(ingredienteAdicional);
            await _dbContext.SaveChangesAsync();

        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarIngrediente, ex);
        }
    }

    public async Task UpdateAsync(Guid id, RequestCriacaoIngredienteAdicionalJson ingredienteAdicionalAtualizado)
    {
        try
        {
            var _criacaoValidator = new IngredienteAdicionalValidator();
            var validation = await _criacaoValidator.ValidateAsync(ingredienteAdicionalAtualizado);

            if (!validation.IsValid)
                throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());


            var ingredienteAdicional = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync(x => x.Id == id);
            if (ingredienteAdicional == null) throw new NotFoundException(ErrorsMensagem.IngredienteAdicionalNaoEncontrado);

            ingredienteAdicional.UpdateNome(ingredienteAdicionalAtualizado.Nome);
            ingredienteAdicional.UpdateValorExtra(ingredienteAdicionalAtualizado.ValorExtra);

            _dbContext.IngredientesAdicionais.Update(ingredienteAdicional);
        
            await _dbContext.SaveChangesAsync();
        }
        catch (NotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            throw new ArgumentException(ErrorsMensagem.ErrorCriarIngrediente, ex);
        }
    }
}