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

    public async Task<ResponsePedidoJson?> AddAsync(RequestCriacaoPedidoJson request)
    {
        await using var transaction = await _dbContext.Database.BeginTransactionAsync();

        var pedido = new Pedido(Guid.NewGuid(), StatusPedido.EmPreparo);
        await _dbContext.Pedidos.AddAsync(pedido);

        var cafeIds = request.PedidosItens.Select(i => i.CafeId).Distinct().ToList();
        var tamanhoXicaraIds = request.PedidosItens.Select(i => i.TamanhoXicaraId).Distinct().ToList();
        var ingredientesIds = request.PedidosItens
            .Where(i => i.IngredientesAdicionaisIds != null)
            .SelectMany(i => i.IngredientesAdicionaisIds!)
            .Distinct()
            .ToList();

        var cafes = await _dbContext.Cafes
            .Where(c => cafeIds.Contains(c.Id))
            .AsNoTracking()
            .ToListAsync();

        if (cafes.Count != cafeIds.Count)
            throw new Exception("Um ou mais cafés não foram encontrados.");

        var tamanhosXicara = await _dbContext.TamanhosXicara
            .Where(t => tamanhoXicaraIds.Contains(t.Id))
            .ToDictionaryAsync(t => t.Id);

        if (tamanhosXicara.Count != tamanhoXicaraIds.Count)
            throw new NotFoundException("Um ou mais tamanhos de xícara não foram encontrados.");

        var ingredientesAdicionais = ingredientesIds.Count > 0
            ? await _dbContext.IngredientesAdicionais
                .Where(i => ingredientesIds.Contains(i.Id))
                .ToListAsync()
            : new List<IngredienteAdicional>();

        foreach (var itemReq in request.PedidosItens)
        {
            var cafe = cafes.First(c => c.Id == itemReq.CafeId);
            if (!tamanhosXicara.TryGetValue(itemReq.TamanhoXicaraId, out var tamanhoXicara))
                throw new NotFoundException("Tamanho da xícara não encontrado.");

            var ingredientesDoItem = ingredientesAdicionais
                .Where(i => itemReq.IngredientesAdicionaisIds?.Contains(i.Id) == true)
                .ToList();

            var item = new PedidoItem(
                id: Guid.NewGuid(),
                pedidoId: pedido.Id,
                cafeId: cafe.Id,
                quantidade: itemReq.Quantidade,
                tipoLeite: itemReq.TipoLeite,
                tipoAcucar: itemReq.TipoAcucar,
                tempoPreparoSegundos: cafe.TempoPreparoSegundos,
                tamanhoXicaraId: tamanhoXicara.Id
            );

            foreach (var ingrediente in ingredientesDoItem)
            {
                item.AdicionarIngrediente(new PedidoItemIngredienteAdicional
                {
                    PedidoItemId = item.Id,
                    PedidoItem = item,
                    IngredienteAdicionalId = ingrediente.Id,
                    IngredienteAdicional = ingrediente
                });
            }

            pedido.AdicionarItem(item, cafe.Preco, tamanhoXicara.ValorExtra);
            await _dbContext.PedidoItens.AddAsync(item);
        }

        await _dbContext.SaveChangesAsync();
        await transaction.CommitAsync();

        return await GetItemByIdAsync(pedido.Id);
    }



    public async Task<ResponsePedidoJson?> GetItemByIdAsync(Guid id)
    {
        var pedido = await _dbContext.Pedidos
                                    .Include(p => p.PedidoItens)
                                        .ThenInclude(pi => pi.Cafe)
                                    .Include(p => p.PedidoItens)
                                        .ThenInclude(pi => pi.PedidoItemIngredientes)
                                        .ThenInclude(i => i.IngredienteAdicional)
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
            .Include(p => p.PedidoItens)
                .ThenInclude(y => y.TamanhoXicara)
            .AsNoTracking()
            .ToListAsync();

        return pedidos.Select(MapToResponse).ToList();
    }

    private ResponsePedidoJson MapToResponse(Pedido p)
    {
        return new ResponsePedidoJson
        {
            Id = p.Id,
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
                TamanhoXicara = pi.TamanhoXicara.Descricao,
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
