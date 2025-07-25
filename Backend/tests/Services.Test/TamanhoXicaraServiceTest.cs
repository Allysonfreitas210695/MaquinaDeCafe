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
    public async Task GetItemByIdAsync_ComIdExistente_DeveRetornarTamanhoXicara()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build();
        await _service.AddAsync(request);
        var tamanho = await _dbContext.TamanhosXicara.FirstOrDefaultAsync();

        // Act
        var resultado = await _service.GetItemByIdAsync(tamanho!.Id);

        // Assert
        resultado.Should().NotBeNull();
        resultado.Id.Should().Be(tamanho.Id);
        resultado.Descricao.Should().Be(tamanho.Descricao);
        resultado.Ml.Should().Be(tamanho.Ml);
        resultado.Valor.Should().Be(tamanho.Valor);
        resultado.CafeId.Should().Be(tamanho.CafeId);
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

    [Fact]
    public async Task UpdateAsync_ComDadosValidos_DeveAtualizarTamanhoXicara()
    {
        // Arrange
        var original = RequestTamanhoXicaraJsonBuilder.Build();
        await _service.AddAsync(original);
        var tamanho = await _dbContext.TamanhosXicara.FirstOrDefaultAsync();

        var atualizado = RequestTamanhoXicaraJsonBuilder.Build(
            descricao: "Nova descrição",
            ml: 350,
            valor: 9.99m
        );

        // Act
        await _service.UpdateAsync(tamanho!.Id, atualizado);

        // Assert
        var entidadeAtualizada = await _dbContext.TamanhosXicara.FindAsync(tamanho.Id);
        entidadeAtualizada!.Descricao.Should().Be("Nova descrição");
        entidadeAtualizada.Ml.Should().Be(350);
        entidadeAtualizada.Valor.Should().Be(9.99m);
    }

    [Fact]
    public async Task UpdateAsync_ComIdInexistente_DeveLancarNotFoundException()
    {
        // Arrange
        var request = RequestTamanhoXicaraJsonBuilder.Build();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundException>(
            () => _service.UpdateAsync(Guid.NewGuid(), request));
    }

    [Fact]
    public async Task UpdateAsync_ComDescricaoVazia_DeveLancarErroValidacao()
    {
        // Arrange
        var original = RequestTamanhoXicaraJsonBuilder.Build();
        await _service.AddAsync(original);
        var tamanho = await _dbContext.TamanhosXicara.FirstOrDefaultAsync();
        var invalido = RequestTamanhoXicaraJsonBuilder.Build(descricao: "");

        // Act & Assert
        var ex = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.UpdateAsync(tamanho!.Id, invalido));

        ex.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria);
    }

    [Fact]
    public async Task UpdateAsync_ComMlInvalido_DeveLancarErroValidacao()
    {
        // Arrange
        var original = RequestTamanhoXicaraJsonBuilder.Build();
        await _service.AddAsync(original);
        var tamanho = await _dbContext.TamanhosXicara.FirstOrDefaultAsync();
        var invalido = RequestTamanhoXicaraJsonBuilder.Build(ml: 0);

        // Act & Assert
        var ex = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.UpdateAsync(tamanho!.Id, invalido));

        ex.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraMlInvalido);
    }

    [Fact]
    public async Task UpdateAsync_ComValorNegativo_DeveLancarErroValidacao()
    {
        // Arrange
        var original = RequestTamanhoXicaraJsonBuilder.Build();
        await _service.AddAsync(original);
        var tamanho = await _dbContext.TamanhosXicara.FirstOrDefaultAsync();
        var invalido = RequestTamanhoXicaraJsonBuilder.Build(valor: -5.00m);

        // Act & Assert
        await Assert.ThrowsAsync<ErrorOnValidationException>(
             () => _service.UpdateAsync(tamanho!.Id, invalido));

    }

}