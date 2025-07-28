using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;

namespace Services.Test;

public class IngredienteAdicionalServiceTest : IDisposable
{
    private readonly IngredienteAdicionalService _service;
    private readonly ApplicationDbContext _dbContext;

    public IngredienteAdicionalServiceTest()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDatabase_{Guid.NewGuid()}")
            .Options;

        _dbContext = new ApplicationDbContext(options);
        _service = new IngredienteAdicionalService(_dbContext);
    }

    public void Dispose()
    {
        _dbContext.Database.EnsureDeleted();
        _dbContext.Dispose();
        GC.SuppressFinalize(this);
    }

    [Fact]
    public async Task GetItemByIdAsync_ComIdExistente_DeveRetornarIngrediente()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();
        await _service.AddAsync(request);
        var ingrediente = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync();

        // Act
        var resultado = await _service.GetItemByIdAsync(ingrediente!.Id);

        // Assert
        resultado.Should().NotBeNull();
        resultado!.Id.Should().Be(ingrediente.Id);
        resultado.Nome.Should().Be(ingrediente.Nome);
        resultado.ValorExtra.Should().Be(ingrediente.ValorExtra);
    }

    [Fact]
    public async Task GetItemByIdAsync_ComIdInexistente_DeveLancarNotFoundException()
    {
        // Arrange
        var idInexistente = Guid.NewGuid();

        // Act & Assert
        var act = async () => await _service.GetItemByIdAsync(idInexistente);
        await Assert.ThrowsAsync<NotFoundException>(act);
    }

    [Fact]
    public async Task GetListAsync_QuandoExistemIngredientes_DeveRetornarTodos()
    {
        // Arrange
        var ingrediente1 = RequestCriacaoIngredienteAdicionalJsonBuilder.Build(nome: "Canela", valorExtra: 1.5m);
        var ingrediente2 = RequestCriacaoIngredienteAdicionalJsonBuilder.Build(nome: "Leite", valorExtra: 2.0m);
        await _service.AddAsync(ingrediente1);
        await _service.AddAsync(ingrediente2);

        // Act
        var lista = await _service.GetListAsync();

        // Assert
        lista.Should().HaveCount(2);
        lista.Should().Contain(i => i.Nome == "Canela" && i.ValorExtra == 1.5m);
        lista.Should().Contain(i => i.Nome == "Leite" && i.ValorExtra == 2.0m);
    }

    [Fact]
    public async Task GetListAsync_QuandoNaoExistemIngredientes_DeveRetornarListaVazia()
    {
        // Act
        var lista = await _service.GetListAsync();

        // Assert
        lista.Should().NotBeNull();
        lista.Should().BeEmpty();
    }

    [Fact]
    public async Task AddAsync_ComDadosValidos_AdicionaIngredienteAdicional()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();

        // Act
        await _service.AddAsync(request);

        // Assert
        var ingredienteAdicional = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync();
        ingredienteAdicional.Should().NotBeNull();
        ingredienteAdicional.Nome.Should().Be(request.Nome);
        ingredienteAdicional.ValorExtra.Should().Be(request.ValorExtra);
    }

    [Fact]
    public async Task AddAsync_ComNomeVazio_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build(nome: string.Empty);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.Errors.Should().Contain(ErrorsMensagem.IngredienteNomeObrigatorio);
        (await _dbContext.IngredientesAdicionais.AnyAsync()).Should().BeFalse();
    }

    [Fact]
    public async Task AddAsync_ComValorExtraNegativo_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build(valorExtra: -1.0m);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.Errors.Should().Contain(ErrorsMensagem.IngredienteValorExtraInvalido);
        (await _dbContext.IngredientesAdicionais.AnyAsync()).Should().BeFalse();
    }

    [Fact]
    public async Task AddAsync_QuandoOcorreErroInterno_DeveLancarArgumentException()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();

        var contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestError_{Guid.NewGuid()}")
            .Options;

        await using var brokenContext = new BrokenDbContext(contextOptions);
        var brokenService = new IngredienteAdicionalService(brokenContext);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => brokenService.AddAsync(request));

        exception.Message.Should().Be(ErrorsMensagem.ErrorCriarIngrediente);
    }

    [Fact]
    public async Task UpdateAsync_ComDadosValidos_AtualizaIngredienteAdicional()
    {
        // Arrange
        var ingredienteOriginal = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();
        await _service.AddAsync(ingredienteOriginal);

        var ingrediente = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync();
        var novoRequest = RequestCriacaoIngredienteAdicionalJsonBuilder.Build(
            nome: "Açúcar Mascavo",
            valorExtra: 2.50m
        );

        // Act
        await _service.UpdateAsync(ingrediente!.Id, novoRequest);

        // Assert
        var atualizado = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync(x => x.Id == ingrediente.Id);
        atualizado!.Nome.Should().Be(novoRequest.Nome);
        atualizado.ValorExtra.Should().Be(novoRequest.ValorExtra);
    }

    [Fact]
    public async Task UpdateAsync_ComIdInvalido_DeveLancarNotFoundException()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();

        // Act & Assert
        var ex = await Assert.ThrowsAsync<NotFoundException>(
            () => _service.UpdateAsync(Guid.NewGuid(), request));
    }

    [Fact]
    public async Task UpdateAsync_ComDadosInvalidos_DeveLancarErrorOnValidationException()
    {
        // Arrange
        var ingredienteOriginal = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();
        await _service.AddAsync(ingredienteOriginal);

        var ingrediente = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync();
        var requestInvalido = RequestCriacaoIngredienteAdicionalJsonBuilder.Build(
            nome: string.Empty,
            valorExtra: -1m
        );

        // Act & Assert
        await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.UpdateAsync(ingrediente!.Id, requestInvalido));
    }

    [Fact]
    public async Task RemoverAsync_ComIdInexistente_DeveLancarNotFoundException()
    {
        // Arrange
        var idInvalido = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundException>(
            () => _service.RemoverAsync(idInvalido));
    }

    [Fact]
    public async Task RemoverAsync_ComIdValido_DeveRemoverIngredienteAdicional()
    {
        // Arrange
        var request = RequestCriacaoIngredienteAdicionalJsonBuilder.Build();
        await _service.AddAsync(request);
        var ingrediente = await _dbContext.IngredientesAdicionais.FirstOrDefaultAsync();

        // Act
        await _service.RemoverAsync(ingrediente!.Id);

        // Assert
        var removido = await _dbContext.IngredientesAdicionais.FindAsync(ingrediente.Id);
        removido.Should().BeNull();
    }




    // Simula erro no SaveChangesAsync
    private class BrokenDbContext : ApplicationDbContext
    {
        public BrokenDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            throw new Exception("Erro simulado");
        }
    }

}
