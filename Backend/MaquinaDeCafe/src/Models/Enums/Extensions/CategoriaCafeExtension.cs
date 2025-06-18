namespace MaquinaDeCafe.src.Models.Enums.Extensions;

public static class CategoriaCafeExtension
{
    public static string ToDescricao(this CategoriaCafe categoria)
    {
        return categoria switch
        {
            CategoriaCafe.Gelado => "Gelados",
            CategoriaCafe.Quente => "Quentes",
            _ => throw new ArgumentOutOfRangeException(nameof(categoria), categoria, null)
        };
    }
}
