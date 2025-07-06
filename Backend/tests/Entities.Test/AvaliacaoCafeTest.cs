using Bogus;
using FluentAssertions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Exceptions;
using Xunit;
using CommonTestUltilities.Test.Entities;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test
{
    public class AvaliacaoCafeTest
    {
        private readonly Faker _faker = new Faker("pt_BR");

        [Fact]
        public void Construtor_ComParametrosValidos_CriaInstanciaCorretamente()
        {
            // Arrange
            var id = Guid.NewGuid();
            var cafeId = Guid.NewGuid();
            var atendimento = NivelAtendimento.MuitoBom;
            var estrelas = 4;
            var observacao = "Café muito saboroso";

            // Act
            var avaliacao = AvaliacaoCafeBuilder.Build(
                id: id,
                cafeId: cafeId,
                atendimento: atendimento,
                estrelas: estrelas,
                observacao: observacao);

            // Assert
            avaliacao.Id.Should().Be(id);
            avaliacao.CafeId.Should().Be(cafeId);
            avaliacao.Atendimento.Should().Be(atendimento);
            avaliacao.Estrelas.Should().Be(estrelas);
            avaliacao.Observacao.Should().Be(observacao);
        }

        [Fact]
        public void Construtor_ComBuilder_CriaInstanciaCorretamente()
        {
            // Act
            var avaliacao = AvaliacaoCafeBuilder.Build();

            // Assert
            avaliacao.Should().NotBeNull();
            avaliacao.Id.Should().NotBeEmpty();
            avaliacao.CafeId.Should().NotBeEmpty();
            avaliacao.Atendimento.Should().BeDefined();
            avaliacao.Estrelas.Should().BeInRange(1, 5);
            avaliacao.Observacao.Should().NotBeNullOrWhiteSpace();
        }

        [Fact]
        public void Construtor_ComCafeIdVazio_LancaExcecao()
        {
            // Arrange
            var builder = () => AvaliacaoCafeBuilder.Build(cafeId: Guid.Empty);

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
                   .Which.Errors.Should().Contain(ErrorsMensagem.CafeObrigatorio);
        }

        [Fact]
        public void Construtor_ComAtendimentoInvalido_LancaExcecao()
        {
            // Arrange
            var builder = () => AvaliacaoCafeBuilder.Build(
                atendimento: (NivelAtendimento)999); // Valor inválido

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.NivelAtendimentoInvalido);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(6)]
        [InlineData(-1)]
        public void Construtor_ComEstrelasForaDoIntervalo_LancaExcecao(int estrelasInvalidas)
        {
            // Arrange
            var builder = () => AvaliacaoCafeBuilder.Build(estrelas: estrelasInvalidas);

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.QuantidadeEstrelasInvalida);
           
        }

        [Fact]
        public void UpdateAtendimento_ComValorValido_AtualizaCorretamente()
        {
            // Arrange
            var avaliacao = AvaliacaoCafeBuilder.Build();
            var novoAtendimento = NivelAtendimento.Regular;
            var timestampOriginal = avaliacao.UpdatedAt;

            // Act
            avaliacao.UpdateAtendimento(novoAtendimento);

            // Assert
            avaliacao.Atendimento.Should().Be(novoAtendimento);
            avaliacao.UpdatedAt.Should().BeAfter(timestampOriginal);
        }

        [Fact]
        public void UpdateAtendimento_ComValorInvalido_LancaExcecao()
        {
            // Arrange
            var avaliacao = AvaliacaoCafeBuilder.Build();
            var atualizar = () => avaliacao.UpdateAtendimento((NivelAtendimento)999);

            // Act & Assert
            atualizar.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.NivelAtendimentoInvalido);

            
        }

        [Theory]
        [InlineData(1)]
        [InlineData(3)]
        [InlineData(5)]
        public void UpdateEstrelas_ComValorValido_AtualizaCorretamente(int estrelasValidas)
        {
            // Arrange
            var avaliacao = AvaliacaoCafeBuilder.Build();
            var timestampOriginal = avaliacao.UpdatedAt;

            // Act
            avaliacao.UpdateEstrelas(estrelasValidas);

            // Assert
            avaliacao.Estrelas.Should().Be(estrelasValidas);
            avaliacao.UpdatedAt.Should().BeAfter(timestampOriginal);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(6)]
        [InlineData(-5)]
        public void UpdateEstrelas_ComValorInvalido_LancaExcecao(int estrelasInvalidas)
        {
            // Arrange
            var avaliacao = AvaliacaoCafeBuilder.Build();
            var atualizar = () => avaliacao.UpdateEstrelas(estrelasInvalidas);

            // Act & Assert
            atualizar.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.QuantidadeEstrelasInvalida);
        }

        [Fact]
        public void UpdateObservacao_ComValorValido_AtualizaCorretamente()
        {
            // Arrange
            var avaliacao = AvaliacaoCafeBuilder.Build();
            var novaObservacao = "Nova observação sobre o café";
            var timestampOriginal = avaliacao.UpdatedAt;

            // Act
            avaliacao.UpdateObservacao(novaObservacao);

            // Assert
            avaliacao.Observacao.Should().Be(novaObservacao);
            avaliacao.UpdatedAt.Should().BeAfter(timestampOriginal);
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        [InlineData("   ")]
        public void UpdateObservacao_ComValorVazioOuNulo_AtualizaComStringVazia(string observacaoVazia)
        {
            // Arrange
            var avaliacao = AvaliacaoCafeBuilder.Build();

            // Act
            avaliacao.UpdateObservacao(observacaoVazia);

            // Assert
            avaliacao.Observacao.Should().BeEmpty();
        }

        [Fact]
        public void Construtor_ComObservacaoNula_DefineComoStringVazia()
        {
            // Act
            var avaliacao = AvaliacaoCafeBuilder.Build(observacao: "");

            // Assert
            avaliacao.Observacao.Should().BeEmpty();
        }

        [Fact]
        public void Construtor_ComObservacaoComEspacos_TrimCorretamente()
        {
            // Arrange
            var observacaoComEspacos = "   café ótimo   ";

            // Act
            var avaliacao = AvaliacaoCafeBuilder.Build(observacao: observacaoComEspacos);

            // Assert
            avaliacao.Observacao.Should().Be("café ótimo");
        }
    }
}