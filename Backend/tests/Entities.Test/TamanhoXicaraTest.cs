using Bogus;
using FluentAssertions;
using MaquinaDeCafe.src.Models.Entities;
using MaquinaDeCafe.src.Exceptions;
using Xunit;
using CommonTestUltilities.Test.Entities;
using MaquinaDeCafe.src.Resources;

namespace Entities.Test
{
    public class TamanhoXicaraTest
    {
        private readonly Faker _faker = new Faker("pt_BR");

        [Fact]
        public void Construtor_ComParametrosValidos_CriaInstanciaCorretamente()
        {
            // Arrange
            var id = Guid.NewGuid();
            var descricao = "Xícara média";
            var ml = 200;
            var valor = 2.50m;
            var cafeId = Guid.NewGuid();

            // Act
            var tamanho = TamanhoXicaraBuilder.Build(
                id: id,
                descricao: descricao,
                ml: ml,
                valor: valor,
                cafeId: cafeId);

            // Assert
            tamanho.Id.Should().Be(id);
            tamanho.Descricao.Should().Be(descricao);
            tamanho.Ml.Should().Be(ml);
            tamanho.Valor.Should().Be(valor);
            tamanho.CafeId.Should().Be(cafeId);
        }

        [Fact]
        public void Construtor_ComBuilder_CriaInstanciaCorretamente()
        {
            // Act
            var tamanho = TamanhoXicaraBuilder.Build();

            // Assert
            tamanho.Should().NotBeNull();
            tamanho.Id.Should().NotBeEmpty();
            tamanho.Descricao.Should().NotBeNullOrWhiteSpace();
            tamanho.Ml.Should().BeInRange(100, 250);
            tamanho.Valor.Should().BeInRange(1, 4);
            tamanho.CafeId.Should().NotBeEmpty();
        }

        [Theory]
        [InlineData("")]
        [InlineData("   ")]
        public void Construtor_ComDescricaoInvalida_LancaExcecao(string descricaoInvalida)
        {
            // Arrange
            var builder = () => TamanhoXicaraBuilder.Build(descricao: descricaoInvalida);

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-1)]
        [InlineData(-100)]
        public void Construtor_ComMlInvalido_LancaExcecao(int mlInvalido)
        {
            // Arrange
            var builder = () => TamanhoXicaraBuilder.Build(ml: mlInvalido);

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
                 .Which.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraMlInvalido);
        }

        [Fact]
        public void Construtor_ComValorNegativo_LancaExcecao()
        {
            // Arrange
            var builder = () => TamanhoXicaraBuilder.Build(valor: -0.01m);

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
               .Which.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraValorExtraNegativo);
        }

        [Fact]
        public void Construtor_ComCafeIdVazio_LancaExcecao()
        {
            // Arrange
            var builder = () => TamanhoXicaraBuilder.Build(cafeId: Guid.Empty);

            // Act & Assert
            builder.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.CafeIdObrigatorioTamanhoXicara);
        }

        [Fact]
        public void Atualizar_ComParametrosValidos_AtualizaCorretamente()
        {
            // Arrange
            var tamanho = TamanhoXicaraBuilder.Build();
            var novaDescricao = "Nova descrição";
            var novoMl = 150;
            var novoValor = 3.00m;
            var novoCafeId = Guid.NewGuid();

            // Act
            tamanho.Atualizar(novaDescricao, novoMl, novoValor, novoCafeId);

            // Assert
            tamanho.Descricao.Should().Be(novaDescricao);
            tamanho.Ml.Should().Be(novoMl);
            tamanho.Valor.Should().Be(novoValor);
            tamanho.CafeId.Should().Be(novoCafeId);
        }

        [Theory]
        [InlineData(null)]
        [InlineData("")]
        [InlineData("   ")]
        public void Atualizar_ComDescricaoInvalida_LancaExcecao(string descricaoInvalida)
        {
            // Arrange
            var tamanho = TamanhoXicaraBuilder.Build();
            var atualizar = () => tamanho.Atualizar(descricaoInvalida, 200, 2.50m, Guid.NewGuid());

            // Act & Assert
            atualizar.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraDescricaoObrigatoria);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(-1)]
        [InlineData(-100)]
        public void Atualizar_ComMlInvalido_LancaExcecao(int mlInvalido)
        {
            // Arrange
            var tamanho = TamanhoXicaraBuilder.Build();
            var atualizar = () => tamanho.Atualizar("Xícara válida", mlInvalido, 2.50m, Guid.NewGuid());

            // Act & Assert
            atualizar.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraMlInvalido);
        }

        [Fact]
        public void Atualizar_ComValorNegativo_LancaExcecao()
        {
            // Arrange
            var tamanho = TamanhoXicaraBuilder.Build();
            var atualizar = () => tamanho.Atualizar("Xícara válida", 200, -0.01m, Guid.NewGuid());

            // Act & Assert
            atualizar.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.TamanhoXicaraValorExtraNegativo);
        }

        [Fact]
        public void Atualizar_ComCafeIdVazio_LancaExcecao()
        {
            // Arrange
            var tamanho = TamanhoXicaraBuilder.Build();
            var atualizar = () => tamanho.Atualizar("Xícara válida", 200, 2.50m, Guid.Empty);

            // Act & Assert
            atualizar.Should()
                .Throw<ErrorOnValidationException>()
                .Which.Errors.Should().Contain(ErrorsMensagem.CafeIdObrigatorioTamanhoXicara);
        }

        [Fact]
        public void Construtor_ComDescricaoComEspacos_TrimCorretamente()
        {
            // Arrange
            var descricaoComEspacos = "   Xícara média   ";

            // Act
            var tamanho = TamanhoXicaraBuilder.Build(descricao: descricaoComEspacos);

            // Assert
            tamanho.Descricao.Should().Be("Xícara média");
        }
    }
}