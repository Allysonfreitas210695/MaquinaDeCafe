using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MaquinaDeCafe.Migrations
{
    /// <inheritdoc />
    public partial class intialCatalog : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cafes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    Descricao = table.Column<string>(type: "text", nullable: false),
                    Preco = table.Column<decimal>(type: "numeric(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cafes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FormasPreparo",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    TempoPreparoMinutos = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormasPreparo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "IngredientesAdicionais",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Nome = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    ValorExtra = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IngredientesAdicionais", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pedidos",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FormaPreparoId = table.Column<Guid>(type: "uuid", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: false),
                    ValorTotal = table.Column<decimal>(type: "numeric", nullable: false),
                    FormaPreparoId1 = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pedidos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pedidos_FormasPreparo_FormaPreparoId",
                        column: x => x.FormaPreparoId,
                        principalTable: "FormasPreparo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Pedidos_FormasPreparo_FormaPreparoId1",
                        column: x => x.FormaPreparoId1,
                        principalTable: "FormasPreparo",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PedidoItens",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PedidoId = table.Column<Guid>(type: "uuid", nullable: false),
                    CafeId = table.Column<Guid>(type: "uuid", nullable: false),
                    Quantidade = table.Column<int>(type: "integer", nullable: false),
                    TipoLeite = table.Column<string>(type: "text", nullable: false),
                    TipoAcucar = table.Column<string>(type: "text", nullable: false),
                    TamanhoXicara = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PedidoItens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PedidoItens_Cafes_CafeId",
                        column: x => x.CafeId,
                        principalTable: "Cafes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PedidoItens_Pedidos_PedidoId",
                        column: x => x.PedidoId,
                        principalTable: "Pedidos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PedidoItemIngredienteAdicional",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PedidoItemId = table.Column<Guid>(type: "uuid", nullable: false),
                    IngredienteAdicionalId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PedidoItemIngredienteAdicional", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PedidoItemIngredienteAdicional_IngredientesAdicionais_Ingre~",
                        column: x => x.IngredienteAdicionalId,
                        principalTable: "IngredientesAdicionais",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PedidoItemIngredienteAdicional_PedidoItens_PedidoItemId",
                        column: x => x.PedidoItemId,
                        principalTable: "PedidoItens",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PedidoItemIngredienteAdicional_IngredienteAdicionalId",
                table: "PedidoItemIngredienteAdicional",
                column: "IngredienteAdicionalId");

            migrationBuilder.CreateIndex(
                name: "IX_PedidoItemIngredienteAdicional_PedidoItemId",
                table: "PedidoItemIngredienteAdicional",
                column: "PedidoItemId");

            migrationBuilder.CreateIndex(
                name: "IX_PedidoItens_CafeId",
                table: "PedidoItens",
                column: "CafeId");

            migrationBuilder.CreateIndex(
                name: "IX_PedidoItens_PedidoId",
                table: "PedidoItens",
                column: "PedidoId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_FormaPreparoId",
                table: "Pedidos",
                column: "FormaPreparoId");

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_FormaPreparoId1",
                table: "Pedidos",
                column: "FormaPreparoId1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PedidoItemIngredienteAdicional");

            migrationBuilder.DropTable(
                name: "IngredientesAdicionais");

            migrationBuilder.DropTable(
                name: "PedidoItens");

            migrationBuilder.DropTable(
                name: "Cafes");

            migrationBuilder.DropTable(
                name: "Pedidos");

            migrationBuilder.DropTable(
                name: "FormasPreparo");
        }
    }
}
