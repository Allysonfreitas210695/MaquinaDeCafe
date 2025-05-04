using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Models.Enums.Extensions;
using MaquinaDeCafe.src.Repositories;
using Microsoft.EntityFrameworkCore;

namespace MaquinaDeCafe.src.Services;

public class PedidoService : IPedidoRepository
{
    private readonly ApplicationDbContext _dbContext;
    public PedidoService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddAsync(RequestCriacaoPedidoJson request)
    {
        await using var transaction = await _dbContext.Database.BeginTransactionAsync();

        var formaPreparo = await _dbContext.FormasPreparo
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == request.FormaPreparoId);

        if (formaPreparo == null)
            throw new Exception("Forma de preparo não encontrada.");

        var pedido = new Pedido(Guid.NewGuid(), formaPreparo.Id);
        await _dbContext.Pedidos.AddAsync(pedido);

        var cafesIds = request.PedidosCafes.Select(c => c.CafeId).ToList();

        var cafes = await _dbContext.Cafes
            .Where(c => cafesIds.Contains(c.Id))
            .AsNoTracking()
            .ToListAsync();

        if (cafes.Count != cafesIds.Count)
            throw new Exception("Um ou mais cafés não foram encontrados.");

        var todosIngredientesIds = request.PedidosCafes
            .Where(pc => pc.IngredientesAdicionaisIds != null)
            .SelectMany(pc => pc.IngredientesAdicionaisIds!)
            .Distinct()
            .ToList();

        var ingredientesAdicionais = new List<IngredienteAdicional>();

        if (todosIngredientesIds.Any())
        {
            ingredientesAdicionais = await _dbContext.IngredientesAdicionais
                .Where(i => todosIngredientesIds.Contains(i.Id))
                .ToListAsync();
        }

        foreach (var cafeReq in request.PedidosCafes)
        {
            var cafe = cafes.First(c => c.Id == cafeReq.CafeId);

            var ingredientesDoItem = ingredientesAdicionais
                .Where(i => cafeReq.IngredientesAdicionaisIds != null && cafeReq.IngredientesAdicionaisIds.Contains(i.Id))
                .ToList();

            var item = new PedidoItem(
                id: Guid.NewGuid(),
                pedidoId: pedido.Id,
                cafeId: cafe.Id,
                quantidade: cafeReq.Quantidade,
                tipoLeite: cafeReq.TipoLeite,
                tipoAcucar: cafeReq.TipoAcucar,
                tamanhoXicara: cafeReq.TamanhoXicara
            );

            foreach (var ingrediente in ingredientesDoItem)
            {
                var relacao = new PedidoItemIngredienteAdicional
                {
                    Id = Guid.NewGuid(),
                    PedidoItemId = item.Id,
                    IngredienteAdicionalId = ingrediente.Id,
                    IngredienteAdicional = ingrediente,
                    PedidoItem = item
                };

                item.AdicionarIngrediente(relacao);
            }

            pedido.AdicionarItem(item, cafe.Preco);
            await _dbContext.PedidoItens.AddAsync(item);
        }

        await _dbContext.SaveChangesAsync();
        await transaction.CommitAsync();
    }



    public async Task<ResponsePedidoJson?> GetItemByIdAsync(Guid id)
    {
        var pedido = await _dbContext.Pedidos
            .Include(p => p.PedidoItens)
                .ThenInclude(pi => pi.Cafe)
            .Include(p => p.PedidoItens)
                .ThenInclude(pi => pi.PedidoItemIngredientes)
                .ThenInclude(i => i.IngredienteAdicional)
            .Include(p => p.FormaPreparo)
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.Id == id);

        if (pedido == null)
            throw new NotFoundException("Pedido não encontrado!");

        return MapToResponse(pedido);
    }

    public async Task<List<ResponsePedidoJson>> GetListAsync()
    {
        var pedidos = await _dbContext.Pedidos
            .Include(p => p.PedidoItens)
                .ThenInclude(pi => pi.Cafe)
            .Include(p => p.PedidoItens)
                .ThenInclude(pi => pi.PedidoItemIngredientes)
                .ThenInclude(i => i.IngredienteAdicional)
            .Include(p => p.FormaPreparo)
            .AsNoTracking()
            .ToListAsync();

        return pedidos.Select(MapToResponse).ToList();
    }

    private ResponsePedidoJson MapToResponse(Pedido p)
    {
        return new ResponsePedidoJson
        {
            Id = p.Id,
            FormaPreparo = new ResponseFormaPreparo() {
                Id = p.FormaPreparo.Id,
                Nome = p.FormaPreparo.Nome,
                TempoPreparoMinutos = p.FormaPreparo.TempoPreparoMinutos
            },
            PedidosItens = p.PedidoItens.Select(pi => new ResponsePedidosItensJson
            {
                Id = pi.Id,
                CafeId = pi.CafeId,
                Cafe = new ResponseCafeJson() {
                    Id = pi.Cafe.Id,
                    Descricao = pi.Cafe.Descricao,
                    Preco = pi.Cafe.Preco,
                    Nome = pi.Cafe.Nome
                },
               
                PedidoId = pi.PedidoId,
                TipoLeite = pi.TipoLeite.ToString(),
                TipoAcucar = pi.TipoAcucar.ToString(),
                TamanhoXicara = pi.TamanhoXicara.ToString(),
                Quantidade = pi.Quantidade,
                IngredientesAdicionais = pi.PedidoItemIngredientes.Select(ia => new ResponseIngredienteAdicionalJson
                {
                    Id = ia.Id,
                    Nome = ia.IngredienteAdicional.Nome,
                    ValorExtra = ia.IngredienteAdicional.ValorExtra
                }).ToList()
            }).ToList(),
            ValorTotal = p.ValorTotal,
            Status = p.Status.ToDescricao()
        };
    }


    public async Task UpdateStatusAsync(Guid pedidoId, StatusPedido novoStatus)
    {
        var pedido = await _dbContext.Pedidos.FirstOrDefaultAsync(p => p.Id == pedidoId);

        if (pedido == null)
            throw new ErrorOnValidationException(new List<string> { "Pedido não encontrado." });

        if (pedido.Status == StatusPedido.Entregue)
            throw new ErrorOnValidationException(new List<string> { "Não é possível alterar o status de um pedido que já foi entregue." });

        pedido.AlterarStatus(novoStatus);

        _dbContext.Pedidos.Update(pedido);
        await _dbContext.SaveChangesAsync();
    }
}
