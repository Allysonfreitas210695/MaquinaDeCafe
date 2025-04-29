using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MaquinaDeCafe.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FormaPreparoController : ControllerBase
{
    private readonly IFormaPreparoRepository _service;

    public FormaPreparoController(IFormaPreparoRepository service)
    {
        _service = service;
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ResponseFormaPreparo>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<ResponseFormaPreparo>>> GetList()
    {
        return Ok(await _service.GetListAsync());
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ResponseFormaPreparo), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ResponseFormaPreparo>> GetItemById(Guid id)
    {
        var cafe = await _service.GetItemByIdAsync(id);
        if (cafe == null)
            return NotFound();

        return Ok(cafe);
    }

    [HttpPost]
    [ProducesResponseType(typeof(ResponseFormaPreparo), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> CriarFormaPreparo([FromBody] RequestCriacaoFormaPreparoJson request)
    { 
        await _service.AddAsync(request);
        return CreatedAtAction(nameof(CriarFormaPreparo), new { nome = request.Nome }, request);
    }

    [HttpPut("{id}")]
    [ProducesResponseType(typeof(ResponseFormaPreparo), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> AtualizarFormaPreparo(Guid id, [FromBody] RequestAtualizacaoFormaPreparoJson request)
    { 
        await _service.UpdateAsync(id, request);
        return NoContent(); 
    }
}