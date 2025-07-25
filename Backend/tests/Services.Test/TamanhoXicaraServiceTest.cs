using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;

namespace Services.Test;

public class TamanhoXicaraServiceTest
{
    private readonly TamanhoXicaraService _service;
    private readonly ApplicationDbContext _dbContext;

    public TamanhoXicaraServiceTest()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDatabase_{Guid.NewGuid()}")
            .Options;

        _dbContext = new ApplicationDbContext(options);
        _service = new TamanhoXicaraService(_dbContext);
    }

    public void Dispose()
    {
        _dbContext.Database.EnsureDeleted();
        _dbContext.Dispose();
    }

    [Fact]
    public async Task AddAsync_ComDadosValidos_AdicionaTamanhoXicara()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build();

        // Act
        await _service.AddAsync(request);

        // Assert
        var tamanhoXicara = await _dbContext.TamanhosXicara.FirstOrDefaultAsync();
        tamanhoXicara.Should().NotBeNull();
        tamanhoXicara.CafeId.Should().Be(request.CafeId);
        tamanhoXicara.Descricao.Should().Be(request.Descricao);
    }

    [Fact]
    public async Task AddAsync_ComDescricaoVazia_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build(descricao: "");

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(() => _service.AddAsync(request));
        exception.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria);
        (await _dbContext.TamanhosXicara.AnyAsync()).Should().BeFalse();
    }

    [Fact]
    public async Task AddAsync_ComMlZeroOuNegativo_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build(ml: 0);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(() => _service.AddAsync(request));
        exception.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraMlInvalido);
        (await _dbContext.TamanhosXicara.AnyAsync()).Should().BeFalse();
    }

    [Fact]
    public async Task AddAsync_ComValorNegativo_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build(valor: -1.0m);

        // Act & Assert
        await Assert.ThrowsAsync<ErrorOnValidationException>(() => _service.AddAsync(request));
    }

    [Fact]
    public async Task AddAsync_QuandoOcorreErroInterno_DeveLancarArgumentException()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build();

        var contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestError_{Guid.NewGuid()}")
            .Options;

        await using var brokenContext = new BrokenDbContext(contextOptions);
        var brokenService = new TamanhoXicaraService(brokenContext);

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ArgumentException>(() => brokenService.AddAsync(request));
        exception.Message.Should().Be(ErrorsMensagem.ErrorCriarTamanhoXicara);
    }

    private class BrokenDbContext : ApplicationDbContext
    {
        public BrokenDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            throw new Exception("Erro simulado");
        }
    }

}