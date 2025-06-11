namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class CategoriaCafeExtension
{
    public static string ToDescricao(this CategoriaCafe categoria)
    {
        return categoria switch
        {
            CategoriaCafe.Combo => "Combos",
            CategoriaCafe.Especial => "Especiais",
            CategoriaCafe.Gelado => "Gelados",
            CategoriaCafe.Quente => "Quentes",
            CategoriaCafe.Tradicional => "Tradicionais",
            _ => throw new ArgumentOutOfRangeException(nameof(categoria), categoria, null)
        };
    }
}
