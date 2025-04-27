using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MaquinaDeCafe.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pedidos_Cafes_CafeId1",
                table: "Pedidos");

            migrationBuilder.DropIndex(
                name: "IX_Pedidos_CafeId1",
                table: "Pedidos");

            migrationBuilder.DropColumn(
                name: "CafeId1",
                table: "Pedidos");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CafeId1",
                table: "Pedidos",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_CafeId1",
                table: "Pedidos",
                column: "CafeId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Pedidos_Cafes_CafeId1",
                table: "Pedidos",
                column: "CafeId1",
                principalTable: "Cafes",
                principalColumn: "Id");
        }
    }
}
