using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Repositories;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class TamanhoXicaraService : TamanhoXicaraRepository
{
    private readonly ApplicationDbContext _dbContext;
    public TamanhoXicaraService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddAsync(RequestTamanhoXicaraJson request)
    {
        var _criacaoValidator = new RequestTamanhoXicaraValidator();
        var validation = await _criacaoValidator.ValidateAsync(request);
        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        await _dbContext.AddAsync(new TamanhoXicara(Guid.NewGuid(), request.Descricao, request.Ml, request.ValorExtra));
        await _dbContext.SaveChangesAsync();
    }

    public  async Task<ResponseTamanhoXicaraJson> GetItemByIdAsync(Guid id)
    {   
        var _tamanhoXicara = await _dbContext.TamanhosXicara
                                .Where(x => x.Id == id)
                                .Select(z => new ResponseTamanhoXicaraJson()
                                {
                                    Id = z.Id,
                                    Descricao = z.Descricao,
                                    Ml = z.Ml,
                                    ValorExtra = z.ValorExtra
                                })
                                .AsNoTracking()
                                .FirstOrDefaultAsync();

        if (_tamanhoXicara is null)
            throw new NotFoundException("Tamanho de xícara não encontrado!");

        return _tamanhoXicara;
    }

    public async Task<List<ResponseTamanhoXicaraJson>> GetListAsync()
    {
        return await _dbContext.TamanhosXicara
                                .Select(z => new ResponseTamanhoXicaraJson()
                                {
                                    Id = z.Id,
                                    Descricao = z.Descricao,
                                    Ml = z.Ml,
                                    ValorExtra = z.ValorExtra
                                })
                                .AsNoTracking()
                                .ToListAsync();
    }

    public async Task UpdateAsync(Guid id, RequestTamanhoXicaraJson request)
    {
        var _criacaoValidator = new RequestTamanhoXicaraValidator();
        var validation = await _criacaoValidator.ValidateAsync(request);
        if (!validation.IsValid)
            throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

        var _tamanhoXicara = await _dbContext.TamanhosXicara.FirstOrDefaultAsync(x => x.Id == id);
        if(_tamanhoXicara is null)
            throw new NotFoundException("Tamanho de xícara não encontrado!");

        _tamanhoXicara.Atualizar(request.Descricao, request.Ml, request.ValorExtra);
        
        await _dbContext.SaveChangesAsync();
    }
}