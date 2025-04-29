using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace MaquinaDeCafe.src.Filters;

public class ExceptionFilter : IExceptionFilter
{
     public void OnException(ExceptionContext context)
    {
        if (context.Exception is MaquinaDeCafeException)
            HandleProjectException(context);
        else
            ThrowUnkowError(context);
    }

    private void HandleProjectException(ExceptionContext context)
    {
        if (context.Exception is MaquinaDeCafeException ex)
        {
            context.HttpContext.Response.StatusCode = ex.GetStatusError();
            context.Result = new ObjectResult(new ResponseErrorJson(ex.GetErrors));
        }else
        {
            context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
            context.Result = new ObjectResult(new ResponseErrorJson("ResourcesErrorsMessages.UNKNOWN_ERROR"));
        }
    }
    
    private void ThrowUnkowError(ExceptionContext context)
    {
        context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;
        context.Result = new ObjectResult(new ResponseErrorJson("ResourcesErrorsMessages.UNKNOWN_ERROR"));
    }
}