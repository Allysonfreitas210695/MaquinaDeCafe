using CommonTestUltilities.Test.Request;
using FluentAssertions;
using MaquinaDeCafe.src.Data;
using MaquinaDeCafe.src.Exceptions;
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

        [Fact]
        public async Task UpdateAsync_ComDadosValidos_AtualizaAvaliacao()
        {
            // Arrange: cria e adiciona uma avaliação no banco
            var request = RequestAvaliacaoCafeJsonBuilder.Build();
            await _service.AddAsync(request);
            var avaliacaoOriginal = await _dbContext.AvaliacoesCafe.FirstOrDefaultAsync();
            avaliacaoOriginal.Should().NotBeNull();

            // Arrange: cria novos dados de atualização
            var atualizado = RequestAvaliacaoCafeJsonBuilder.Build()
                .WithAtendimento(NivelAtendimento.Ruim)
                .WithEstrelas(1)
                .WithObservacao("Atualizado!");

            // Act: realiza o update
            await _service.UpdateAsync(avaliacaoOriginal!.Id, atualizado);

            // Assert: verifica se os dados foram atualizados corretamente
            var avaliacaoAtualizada = await _dbContext.AvaliacoesCafe.FirstAsync(x => x.Id == avaliacaoOriginal.Id);
            avaliacaoAtualizada.Atendimento.Should().Be(NivelAtendimento.Ruim);
            avaliacaoAtualizada.Estrelas.Should().Be(1);
            avaliacaoAtualizada.Observacao.Should().Be("Atualizado!");
        }

        [Fact]
        public async Task UpdateAsync_ComIdInexistente_LancaNotFoundException()
        {
            // Arrange
            var atualizado = RequestAvaliacaoCafeJsonBuilder.Build();

            // Act & Assert
            await Assert.ThrowsAsync<NotFoundException>(
                () => _service.UpdateAsync(Guid.NewGuid(), atualizado)); 
        }

        [Fact]
        public async Task UpdateAsync_ComDadosInvalidos_LancaErrorOnValidationException()
        {
            // Arrange
            var request = RequestAvaliacaoCafeJsonBuilder.Build();
            await _service.AddAsync(request);
            var avaliacaoOriginal = await _dbContext.AvaliacoesCafe.FirstOrDefaultAsync();
            avaliacaoOriginal.Should().NotBeNull();

            // Arrange
            var atualizado = RequestAvaliacaoCafeJsonBuilder.Build()
                .WithEstrelas(10);

            // Act & Assert
            var exception = await Assert.ThrowsAsync<ErrorOnValidationException>(
                () => _service.UpdateAsync(avaliacaoOriginal.Id, atualizado));

            exception.Errors.Should().Contain(ErrorsMensagem.QuantidadeEstrelasInvalida);
        }

    }
}