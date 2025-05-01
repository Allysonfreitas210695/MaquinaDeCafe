using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Repositories;
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
        var _criacaoValidator = new RequestCriacaoIngredienteAdicionalValidator();
        var validation = await _criacaoValidator.ValidateAsync(ingredienteAdicional);

        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        var _ingredienteAdicional =  new Models.Entities.IngredienteAdicional(Guid.NewGuid(), ingredienteAdicional.Nome, ingredienteAdicional.ValorExtra);
        
        await _dbContext.IngredientesAdicionais.AddAsync(_ingredienteAdicional);
        await _dbContext.SaveChangesAsync();
    }

    public async Task<ResponseIngredienteAdicionalJson?> GetItemByIdAsync(Guid id)
    {
        var ingredienteAdicional = await _dbContext.IngredientesAdicionais.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        if (ingredienteAdicional == null)  throw new NotFoundException("Ingrediente adicional não encontrado.");

        return new ResponseIngredienteAdicionalJson() {
            Id = ingredienteAdicional.Id,
            Nome = ingredienteAdicional.Nome,
            ValorExtra = ingredienteAdicional.ValorExtra
        };
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
        var ingredienteAdicional = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync(x => x.Id == id);
        if (ingredienteAdicional == null) throw new NotFoundException("Ingrediente adicional não encontrado.");

        _dbContext.IngredientesAdicionais.Remove(ingredienteAdicional);
        await _dbContext.SaveChangesAsync();
    }

    public async Task UpdateAsync(Guid id, RequestAtualizacaoIngredienteAdicionalJson ingredienteAdicionalAtualizado)
    {
        var _criacaoValidator = new RequestAtualizacaoIngredienteAdicionalValidator();
        var validation = await _criacaoValidator.ValidateAsync(ingredienteAdicionalAtualizado);

        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());


        var ingredienteAdicional = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync(x => x.Id == id);
        if (ingredienteAdicional == null) throw new NotFoundException("Ingrediente adicional não encontrado.");

        ingredienteAdicional.UpdateNome(ingredienteAdicionalAtualizado.Nome);
        ingredienteAdicional.UpdateValorExtra(ingredienteAdicionalAtualizado.ValorExtra);

        _dbContext.IngredientesAdicionais.Update(ingredienteAdicional);
        
        await _dbContext.SaveChangesAsync();
    }
}