using Bogus;
using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Resources;
using MaquinaDeCafe.src.Services;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace Services.Test
{
    public class AvaliacaoCafeServiceTest : IDisposable
    {
        private readonly AvaliacaoCafeService _service;
        private readonly ApplicationDbContext _dbContext;

        public AvaliacaoCafeServiceTest()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(databaseName: $"TestDatabase_{Guid.NewGuid()}")
                .Options;

            _dbContext = new ApplicationDbContext(options);
            _service = new AvaliacaoCafeService(_dbContext);
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
            var request = RequestAvaliacaoCafeJsonBuilder.Build();

            // Act
            await _service.AddAsync(request);

            // Assert
            var avaliacaoNoBanco = await _dbContext.AvaliacoesCafe.FirstOrDefaultAsync();
            avaliacaoNoBanco.Should().NotBeNull();
            avaliacaoNoBanco!.CafeId.Should().Be(request.CafeId);
            avaliacaoNoBanco.Atendimento.Should().Be(request.Atendimento);
            avaliacaoNoBanco.Estrelas.Should().Be(request.Estrelas);
            avaliacaoNoBanco.Observacao.Should().Be(request.Observacao);
        }

        [Fact]
        public async Task AddAsync_ComCafeIdVazio_LancaExcecaoComMensagemCorreta()
        {
            // Arrange
            var request = RequestAvaliacaoCafeJsonBuilder.Build()
                .WithCafeId(Guid.Empty);

            // Act & Assert
            var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
                () => _service.AddAsync(request));

            exception.Errors.Should().Contain(ErrorsMensagem.CafeObrigatorio);
            (await _dbContext.AvaliacoesCafe.AnyAsync()).Should().BeFalse();
        }

        [Fact]
        public async Task AddAsync_ComAtendimentoInvalido_LancaExcecaoComMensagemCorreta()
        {
            // Arrange
            var request = RequestAvaliacaoCafeJsonBuilder.Build()
                .WithAtendimento((NivelAtendimento)999);

            // Act & Assert
            var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
                () => _service.AddAsync(request));

            exception.Errors.Should().Contain(ErrorsMensagem.NivelAtendimentoInvalido);
            (await _dbContext.AvaliacoesCafe.AnyAsync()).Should().BeFalse();
        }

        [Theory]
        [InlineData(0)]
        [InlineData(6)]
        [InlineData(-1)]
        public async Task AddAsync_ComEstrelasInvalidas_LancaExcecaoComMensagemCorreta(int estrelasInvalidas)
        {
            // Arrange
            var request = RequestAvaliacaoCafeJsonBuilder.Build()
                .WithEstrelas(estrelasInvalidas);

            // Act & Assert
            var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
                () => _service.AddAsync(request));

            exception.Errors.Should().Contain(ErrorsMensagem.QuantidadeEstrelasInvalida);
            (await _dbContext.AvaliacoesCafe.AnyAsync()).Should().BeFalse();
        }
    }
}