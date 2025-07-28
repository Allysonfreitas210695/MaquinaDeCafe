
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Services;
using MaquinaDeCafe.src.Validators;
using Microsoft.EntityFrameworkCore;

namespace Services.Test;

public class PedidoServiceTest : IDisposable
{
    private readonly PedidoService _service;
    private readonly CafeService _serviceCafe;
    private readonly TamanhoXicaraService _serviceTamanhoXicara;
    private readonly IngredienteAdicionalService _serviceIngredienteAdicional;
    private readonly ApplicationDbContext _dbContext;

    public PedidoServiceTest()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDatabase_{Guid.NewGuid()}")
            .Options;

        _dbContext = new ApplicationDbContext(options);
        _service = new PedidoService(_dbContext);
        _serviceCafe = new CafeService(_dbContext);
        _serviceTamanhoXicara = new TamanhoXicaraService(_dbContext);
        _serviceIngredienteAdicional = new IngredienteAdicionalService(_dbContext);
    }

    public void Dispose()
    {
        _dbContext.Database.EnsureDeleted();
        _dbContext.Dispose();
    }

    private async Task<Cafe> CriarCafeValidoAsync()
    {
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _serviceCafe.AddAsync(request);
        return await _dbContext.Cafes.OrderByDescending(c => c.Id).FirstAsync();
    }

    private async Task<TamanhoXicara> CriarTamanhoXicaraValidoAsync()
    {
        var request = RequestTamanhoXicaraJsonBuilder.Build();
        await _serviceTamanhoXicara.AddAsync(request);
        return await _dbContext.TamanhosXicara.OrderByDescending(t => t.Id).FirstAsync();
    }

    private async Task<IngredienteAdicional> CriarIngredienteAdicionalValidoAsync()
    {
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();
        await _serviceIngredienteAdicional.AddAsync(request);
        return await _dbContext.IngredientesAdicionais.OrderByDescending(i => i.Id).FirstAsync();
    }

    [Fact]
    public async Task GetItemByIdAsync_ComPedidoExistente_DeveRetornarPedido()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();
        var adicional = await CriarIngredienteAdicionalValidoAsync();

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>
    {
        RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id,
            ingredientesAdicionaisIds: new List<Guid> { adicional.Id }
        )
    });

        var responseCriado = await _service.AddAsync(request);

        // Act
        var response = await _service.GetItemByIdAsync(responseCriado!.Id);

        // Assert
        response.Should().NotBeNull();
        response!.Id.Should().Be(responseCriado.Id);
        response.ValorTotal.Should().Be(request.ValorTotal);
        response.PedidosItens.Should().HaveCount(1);

        var item = response.PedidosItens.First();
        item.Cafe.Id.Should().Be(cafe.Id);
    }

    [Fact]
    public async Task GetItemByIdAsync_ComPedidoInexistente_DeveLancarNotFoundException()
    {
        // Arrange
        var pedidoIdInvalido = Guid.NewGuid();

        // Act & Assert
        var act = async () => await _service.GetItemByIdAsync(pedidoIdInvalido);

        var exception = await Assert.ThrowsAsync<NotFoundException>(act);
        exception.GetErrors.Should().Contain(ErrorsMensagem.PedidoNaoEncontrado);
    }

    [Fact]
    public async Task GetListAsync_ComPedidosCadastrados_DeveRetornarListaDePedidos()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();
        var adicional = await CriarIngredienteAdicionalValidoAsync();

        var request1 = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>
    {
        RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id,
            ingredientesAdicionaisIds: new List<Guid> { adicional.Id }
        )
    });

        var request2 = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>
    {
        RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id
        )
    });

        await _service.AddAsync(request1);
        await _service.AddAsync(request2);

        // Act
        var response = await _service.GetListAsync();

        // Assert
        response.Should().NotBeNull();
        response.Should().HaveCount(2);

        var primeiro = response.First();
        primeiro.PedidosItens.Should().NotBeEmpty();
    }

    [Fact]
    public async Task GetListAsync_SemPedidosCadastrados_DeveRetornarListaVazia()
    {
        // Act
        var response = await _service.GetListAsync();

        // Assert
        response.Should().NotBeNull();
        response.Should().BeEmpty();
    }

    [Fact]
    public async Task AddAsync_ComDadosValidos_CriaPedidoComSucesso()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanhoXicara = await CriarTamanhoXicaraValidoAsync();
        var ingredienteAdicional = await CriarIngredienteAdicionalValidoAsync();

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>
        {
            RequestCafesPedidosJsonBuilder.Build(
                cafeId: cafe!.Id,
                tamanhoXicaraId: tamanhoXicara!.Id,
                ingredientesAdicionaisIds: new List<Guid> { ingredienteAdicional!.Id }
            )
        });

        // Act
        var response = await _service.AddAsync(request);

        // Assert
        response.Should().NotBeNull();
        var pedido = await _dbContext.Pedidos.FindAsync(response!.Id);
        pedido.Should().NotBeNull();
        pedido!.ValorTotal.Should().Be(request.ValorTotal);

        var itens = await _dbContext.PedidoItens
                                    .Where(i => i.PedidoId == pedido.Id)
                                    .Include(i => i.PedidoItemIngredientes)
                                    .ToListAsync();

        itens.Should().HaveCount(1);
        var item = itens[0];

        item.CafeId.Should().Be(cafe.Id);
        item.TamanhoXicaraId.Should().Be(tamanhoXicara.Id);
        item.Quantidade.Should().Be(request.PedidosItens[0].Quantidade);
        item.TipoLeite.Should().Be(request.PedidosItens[0].TipoLeite);
        item.TipoAcucar.Should().Be(request.PedidosItens[0].TipoAcucar);

        var pagamento = await _dbContext.Pagamentos.FirstOrDefaultAsync(p => p.PedidoId == pedido.Id);
        pagamento.Should().NotBeNull();
    }

    [Fact]
    public async Task AddAsync_ComMaisDe10Cafes_DeveLancarExcecao()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var itens = Enumerable.Range(0, 11).Select(_ =>
            RequestCafesPedidosJsonBuilder.Build(cafeId: cafe.Id, tamanhoXicaraId: tamanho.Id)).ToList();

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: itens);

        // Act & Assert 
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
           () => _service.AddAsync(request));

        exception.GetErrors.Should().HaveCount(1);
    }

    [Fact]
    public async Task AddAsync_ComMaisDe4AdicionaisPorCafe_DeveLancarExcecao()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var adicionais = new List<Guid>();
        for (int i = 0; i < 5; i++)
        {
            var adicional = await CriarIngredienteAdicionalValidoAsync();
            adicionais.Add(adicional.Id);
        }

        var item = RequestCafesPedidosJsonBuilder.Build(cafeId: cafe.Id, tamanhoXicaraId: tamanho.Id, ingredientesAdicionaisIds: adicionais);
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert 
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
           () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.MaximoAdicionaisPorCafe);

    }

    [Fact]
    public async Task AddAsync_ComCafeInexistente_DeveLancarExcecao()
    {
        // Arrange
        var tamanho = await CriarTamanhoXicaraValidoAsync();
        var item = RequestCafesPedidosJsonBuilder.Build(cafeId: Guid.NewGuid(), tamanhoXicaraId: tamanho.Id);
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert 
        var exception = await Assert.ThrowsAsync<NotFoundException>(
           () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.CafesNaoEncontrados);
    }

    [Fact]
    public async Task AddAsync_ComTamanhoXicaraInexistente_DeveLancarExcecao()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var item = RequestCafesPedidosJsonBuilder.Build(cafeId: cafe.Id, tamanhoXicaraId: Guid.NewGuid());
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert 
        var exception = await Assert.ThrowsAsync<NotFoundException>(
           () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.TamanhosXicaraNaoEncontrados);
    }

    [Fact]
    public async Task AddAsync_ComIngredienteAdicionaL_DeveRetornaSucesso()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var ingredienteInvalidoId = Guid.NewGuid();

        var item = RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id,
            ingredientesAdicionaisIds: new List<Guid> { ingredienteInvalidoId }
        );

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        request.Should().NotBeNull();
    }

    [Fact]
    public async Task AddAsync_ComFormaPagamentoInvalida_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(cafeId: cafe.Id, tamanhoXicaraId: tamanho.Id);
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });
        request.FormaPagamento = (FormaPagamento)999;

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.FormaPagamentoInvalida);
    }

    [Fact]
    public async Task AddAsync_ComValorTotalZero_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(cafeId: cafe.Id, tamanhoXicaraId: tamanho.Id);
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });
        request.ValorTotal = 0;

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.ValorTotalPedidoMaiorQueZero);
    }

    [Fact]
    public async Task AddAsync_ComPedidosItensNulo_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: null!);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<NotFoundException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.CafesNaoEncontrados);
    }

    [Fact]
    public async Task AddAsync_ComPedidosItensVazio_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>());

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.DeveConterAoMenosUmItem);
    }

    [Fact]
    public async Task AddAsync_ComCafeIdVazio_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(
            cafeId: Guid.Empty,
            tamanhoXicaraId: tamanho.Id);

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.CafeObrigatorio);
    }

    [Fact]
    public async Task AddAsync_ComTamanhoXicaraIdVazio_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: Guid.Empty);

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.TamanhoXicaraObrigatorio);
    }

    [Fact]
    public async Task AddAsync_ComTipoLeiteInvalido_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id,
            tipoLeite: (TipoLeite)999);

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.TipoLeiteInvalido);
    }

    [Fact]
    public async Task AddAsync_ComTipoAcucarInvalido_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id,
            tipoAcucar: (TipoAcucar)999);

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.TipoAcucarInvalido);
    }

    [Fact]
    public async Task AddAsync_ComQuantidadeMenorOuIgualAZero_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var item = RequestCafesPedidosJsonBuilder.Build(
            cafeId: cafe.Id,
            tamanhoXicaraId: tamanho.Id,
            quantidade: 0);

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson> { item });

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.GetErrors.Should().Contain(ErrorsMensagem.QuantidadeMaiorQueZero);
    }

    [Fact]
    public async Task UpdateStatusAsync_ComPedidoExistente_DeveAtualizarStatus()
    {
        // Arrange
        var cafe = await CriarCafeValidoAsync();
        var tamanho = await CriarTamanhoXicaraValidoAsync();

        var request = RequestCriacaoPedidoJsonBuilder.Build(pedidosItens: new List<RequestCafesPedidosJson>
        {
            RequestCafesPedidosJsonBuilder.Build(cafeId: cafe.Id, tamanhoXicaraId: tamanho.Id)
        });

        var response = await _service.AddAsync(request);

        // ACT
        await _service.UpdateStatusAsync(response!.Id, StatusPedido.Pronto);

        await _service.UpdateStatusAsync(response.Id, StatusPedido.Entregue);

        // Assert
        var pedidoAtualizado = await _dbContext.Pedidos.FindAsync(response.Id);
        pedidoAtualizado!.Status.Should().Be(StatusPedido.Entregue);
    }


    [Fact]
    public async Task UpdateStatusAsync_ComPedidoInexistente_DeveLancarExcecao()
    {
        // Arrange
        var pedidoIdInvalido = Guid.NewGuid();

        // Act
        Func<Task> act = async () => await _service.UpdateStatusAsync(pedidoIdInvalido, StatusPedido.Entregue);

        // Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(act);
        exception.GetErrors.Should().Contain(ErrorsMensagem.PedidoNaoEncontrado);
    }

}