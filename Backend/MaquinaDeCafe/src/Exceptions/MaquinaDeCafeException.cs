namespace MaquinaDeCafe.src.Exceptions;

public abstract class MaquinaDeCafeException : SystemException
{
    protected MaquinaDeCafeException(string message) : base(message)
    {

    }

    public abstract List<string> GetErrors { get; }
    public abstract int GetStatusError();
}