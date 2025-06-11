using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MaquinaDeCafe.Migrations
{
    /// <inheritdoc />
    public partial class AddCategoriaCafe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Categoria",
                table: "Cafes",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Categoria",
                table: "Cafes");
        }
    }
}
