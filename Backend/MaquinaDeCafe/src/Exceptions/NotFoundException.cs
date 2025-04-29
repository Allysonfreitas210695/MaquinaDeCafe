using System.Net;

namespace MaquinaDeCafe.src.Exceptions;

public class NotFoundException : MaquinaDeCafeException
{
    private string ErrorMessage { get; set; }
    public NotFoundException(string message) : base(string.Empty)
    {
        ErrorMessage = message;
    }

    public override List<string> GetErrors => [ErrorMessage];

    public override int GetStatusError() => (int)HttpStatusCode.NotFound;
}