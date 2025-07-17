
using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;

namespace Services.Test;
public  class CafeServiceTest
{
    private readonly CafeService _service;
    private readonly ApplicationDbContext _dbContext;

    public CafeServiceTest()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDatabase_{Guid.NewGuid()}")
            .Options;

        _dbContext = new ApplicationDbContext(options);
        _service = new CafeService(_dbContext);
    }

    public void Dispose()
    {
        _dbContext.Database.EnsureDeleted();
        _dbContext.Dispose();
    }

    [Fact]
    public async Task AddAsync_ComDadosValidos_AdicionaAvaliacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();

        // Act
        await _service.AddAsync(request);

        // Assert
        var cafe = await _dbContext.Cafes.FirstOrDefaultAsync();
        cafe.Should().NotBeNull(); 
        cafe.Nome.Should().Be(request.Nome);
        cafe.TempoPreparoSegundos.Should().Be(request.TempoPreparoSegundos); 
    }

    [Fact]
    public async Task AddAsync_ComNomeVazio_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build(nome: string.Empty);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.Errors.Should().Contain(ErrorsMensagem.CafeNomeObrigatorio);
        (await _dbContext.Cafes.AnyAsync()).Should().BeFalse();
    }

    [Fact]
    public async Task AddAsync_ComDescricaoVazia_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build(descricao: string.Empty);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.Errors.Should().Contain(ErrorsMensagem.cafeDescricaoObrigatorio);
        (await _dbContext.Cafes.AnyAsync()).Should().BeFalse();
    }


    [Fact]
    public async Task AddAsync_ComDescricaoMenorQueCincoCaracteres_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build(descricao: "abc");

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.AddAsync(request));

        exception.Errors.Should().Contain(ErrorsMensagem.cafeDescricaoTamanhoMinimo);
        (await _dbContext.Cafes.AnyAsync()).Should().BeFalse();
    }

    [Fact]
    public async Task AddAsync_QuandoOcorreErroInterno_LancaArgumentException()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        var contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestError_{Guid.NewGuid()}")
            .Options;

        await using var brokenContext = new BrokenDbContext(contextOptions);
        var brokenService = new CafeService(brokenContext);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(
            () => brokenService.AddAsync(request));

        exception.Message.Should().Be(ErrorsMensagem.ErrorCriarCafe);
    }

    private class BrokenDbContext : ApplicationDbContext
    {
        public BrokenDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            throw new Exception("Erro simulado");
        }
    }
}
