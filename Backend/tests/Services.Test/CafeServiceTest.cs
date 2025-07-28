
using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;

namespace Services.Test;

public class CafeServiceTest : IDisposable
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
    public async Task GetItemByIdAsync_ComIdExistente_RetornaCafeComDetalhes()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _service.AddAsync(request);
        var cafe = await _dbContext.Cafes.Include(c => c.TamanhosXicara).FirstOrDefaultAsync();


        await _dbContext.SaveChangesAsync();

        // Act
        var resultado = await _service.GetItemByIdAsync(cafe!.Id);

        // Assert
        resultado.Should().NotBeNull();
        resultado!.Id.Should().Be(cafe.Id);
        resultado.Nome.Should().Be(cafe.Nome);
        resultado.Descricao.Should().Be(cafe.Descricao);
        resultado.TamanhosXicara.Should().HaveCount(cafe.TamanhosXicara.Count);
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
    public async Task GetListAsync_SemCategoria_DeveRetornarTodosOsCafes()
    {
        // Arrange
        var cafe1 = RequestCriacaoCafeJsonBuilder.Build(categoria: MaquinaDeCafe.src.Models.Enums.CategoriaCafe.Quente);
        var cafe2 = RequestCriacaoCafeJsonBuilder.Build(categoria: MaquinaDeCafe.src.Models.Enums.CategoriaCafe.Gelado);
        await _service.AddAsync(cafe1);
        await _service.AddAsync(cafe2);

        // Act
        var lista = await _service.GetListAsync(null);

        // Assert
        lista.Should().HaveCount(2);
    }

    [Fact]
    public async Task GetListAsync_ComCategoriaValida_DeveRetornarApenasCafesDaCategoria()
    {
        // Arrange
        var quente = RequestCriacaoCafeJsonBuilder.Build(categoria: MaquinaDeCafe.src.Models.Enums.CategoriaCafe.Quente);
        var gelado = RequestCriacaoCafeJsonBuilder.Build(categoria: MaquinaDeCafe.src.Models.Enums.CategoriaCafe.Gelado);
        await _service.AddAsync(quente);
        await _service.AddAsync(gelado);

        // Act
        var lista = await _service.GetListAsync(MaquinaDeCafe.src.Models.Enums.CategoriaCafe.Quente);

        // Assert
        lista.Should().HaveCount(1);
    }

    [Fact]
    public async Task GetListAsync_SemCafes_DeveRetornarListaVazia()
    {
        // Act
        var lista = await _service.GetListAsync(null);

        // Assert
        lista.Should().NotBeNull();
        lista.Should().BeEmpty();
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

    [Fact]
    public async Task UpdateAsync_ComDadosValidos_AtualizaCafe()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _service.AddAsync(request);
        var cafe = await _dbContext.Cafes.FirstOrDefaultAsync();

        var atualizado = RequestCriacaoCafeJsonBuilder.Build(
            nome: "Novo Nome",
            descricao: "Nova descrição válida"
        );

        // Act
        await _service.UpdateAsync(cafe!.Id, atualizado);

        // Assert
        var cafeAtualizado = await _dbContext.Cafes.FirstOrDefaultAsync(x => x.Id == cafe.Id);
        cafeAtualizado!.Nome.Should().Be("Novo Nome");
        cafeAtualizado.Descricao.Should().Be("Nova descrição válida");
    }

    [Fact]
    public async Task UpdateAsync_ComIdInexistente_DeveLancarNotFoundException()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundException>(
        () => _service.UpdateAsync(Guid.NewGuid(), request));
    }

    [Fact]
    public async Task UpdateAsync_ComNomeInvalido_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _service.AddAsync(request);
        var cafe = await _dbContext.Cafes.FirstOrDefaultAsync();

        var atualizado = RequestCriacaoCafeJsonBuilder.Build(nome: "");

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.UpdateAsync(cafe!.Id, atualizado));

        exception.Errors.Should().Contain(ErrorsMensagem.CafeNomeObrigatorio);
    }

    [Fact]
    public async Task UpdateAsync_ComDescricaoVazia_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _service.AddAsync(request);
        var cafe = await _dbContext.Cafes.FirstOrDefaultAsync();

        var atualizado = RequestCriacaoCafeJsonBuilder.Build(descricao: "");

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.UpdateAsync(cafe!.Id, atualizado));

        exception.Errors.Should().Contain(ErrorsMensagem.cafeDescricaoObrigatorio);
    }

    [Fact]
    public async Task UpdateAsync_ComDescricaoMenorQueCincoCaracteres_DeveLancarErroValidacao()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _service.AddAsync(request);
        var cafe = await _dbContext.Cafes.FirstOrDefaultAsync();

        var atualizado = RequestCriacaoCafeJsonBuilder.Build(descricao: "abc");

        // Act & Assert
        var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
            () => _service.UpdateAsync(cafe!.Id, atualizado));

        exception.Errors.Should().Contain(ErrorsMensagem.cafeDescricaoTamanhoMinimo);
    }

    [Fact]
    public async Task RemoverAsync_ComIdValido_DeveRemoverCafe()
    {
        // Arrange
        var request = RequestCriacaoCafeJsonBuilder.Build();
        await _service.AddAsync(request);
        var cafe = await _dbContext.Cafes.FirstOrDefaultAsync();

        // Act
        await _service.RemoverAsync(cafe!.Id);

        // Assert
        var removido = await _dbContext.Cafes.FindAsync(cafe.Id);
        removido.Should().BeNull();
    }

    [Fact]
    public async Task RemoverAsync_ComIdInexistente_DeveLancarNotFoundException()
    {
        // Arrange
        var idInexistente = Guid.NewGuid();

        // Act & Assert
        var ex = await Assert.ThrowsAsync<NotFoundException>(
            () => _service.RemoverAsync(idInexistente));
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
