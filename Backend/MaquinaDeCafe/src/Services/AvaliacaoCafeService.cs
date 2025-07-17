using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Enums.Extensions;
using MaquinaDeCafe.src.Repositories;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Validators;
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

        public async Task<ResponseAvaliacaoCafeJson?> GetItemByIdAsync(Guid id)
        {
            try
            {
                var _avaliacaoCafe = await _dbContext.AvaliacoesCafe
                                                        .AsNoTracking()
                                                        .Select(avaliacao => new ResponseAvaliacaoCafeJson
                                                        {
                                                            Id = avaliacao.Id,
                                                            Atendimento = avaliacao.Atendimento.ToDescricao(),
                                                            CafeId = avaliacao.CafeId,
                                                            Estrelas = avaliacao.Estrelas,
                                                            Observacao = avaliacao.Observacao,
                                                        })
                                                        .FirstOrDefaultAsync(avaliacao => avaliacao.Id == id);
                if (_avaliacaoCafe == null)
                    throw new NotFoundException(ErrorsMensagem.AvaliacaoCafeEncontrado);

                return _avaliacaoCafe;
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
   
        public async Task AddAsync(RequestAvaliacaoCafeJson avaliacao)
        {
            try
            {
                var _criacaoValidator = new AvaliacaoCafeValidator();
                var validation = await _criacaoValidator.ValidateAsync(avaliacao);
                if (!validation.IsValid)
                    throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

                await _dbContext.AvaliacoesCafe.AddAsync(new Models.Entities.AvaliacaoCafe(
                                                                            Guid.NewGuid(),
                                                                            avaliacao.CafeId,
                                                                            avaliacao.Atendimento,
                                                                            avaliacao.Estrelas,
                                                                            avaliacao.Observacao
                                                                        ));
            
                await _dbContext.SaveChangesAsync();
            }
            catch (ErrorOnValidationException ex)
            {
                throw;
            }
            catch (Exception ex)
            {
                throw new ArgumentException(ErrorsMensagem.ErrorCriarCafe, ex);
            }
        }

        public async Task UpdateAsync(Guid id, RequestAvaliacaoCafeJson avaliacaoAtualizada)
        {
            try
            {
                var _atualizacaoValidator = new AvaliacaoCafeValidator();
                var validation = await _atualizacaoValidator.ValidateAsync(avaliacaoAtualizada);
                if (!validation.IsValid)
                    throw new ErrorOnValidationException(validation.Errors.Select(x => x.ErrorMessage).ToList());

                var _avaliacaoCafe = await _dbContext.AvaliacoesCafe.FirstOrDefaultAsync(x => x.Id == id);
                if( _avaliacaoCafe == null)
                    throw new NotFoundException(ErrorsMensagem.AvaliacaoCafeEncontrado);

                _avaliacaoCafe.UpdateAtendimento(avaliacaoAtualizada.Atendimento);
                _avaliacaoCafe.UpdateEstrelas(avaliacaoAtualizada.Estrelas);
                _avaliacaoCafe.UpdateObservacao(avaliacaoAtualizada.Observacao);

                _dbContext.AvaliacoesCafe.Update(_avaliacaoCafe);
                await _dbContext.SaveChangesAsync();
            }
            catch (ErrorOnValidationException ex)
            {
                throw new ErrorOnValidationException(ex.Errors);
            }
            catch (NotFoundException ex)
            {
                throw new NotFoundException(ex.GetErrors.First().ToString());
            }
            catch (Exception ex)
            {
                throw new ArgumentException(ErrorsMensagem.ErrorCriarCafe, ex);
            }
        }

    }
}