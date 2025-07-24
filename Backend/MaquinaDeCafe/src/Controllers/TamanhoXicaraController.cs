using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MaquinaDeCafe.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TamanhoXicaraController : ControllerBase
{
    private readonly ITamanhoXicaraRepository _service;
    public TamanhoXicaraController(ITamanhoXicaraRepository service)
    {
        _service = service;
    }
    
    [HttpGet]
    [ProducesResponseType(typeof(List<ResponseTamanhoXicaraJson>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<ResponseTamanhoXicaraJson>>> GetList()
    {
        return Ok(await _service.GetListAsync());
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ResponseTamanhoXicaraJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<List<ResponseTamanhoXicaraJson>>> GetItemById(Guid id)
    {
        return Ok(await _service.GetItemByIdAsync(id));
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Post([FromBody] RequestTamanhoXicaraJson novoCafe)
    {
        await _service.AddAsync(novoCafe);
        return Created();
    }

    [HttpPut("{id}")]
    [ProducesResponseType(typeof(ResponseCafeJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Put(Guid id, [FromBody] RequestTamanhoXicaraJson cafeAtualizado)
    {
        await _service.UpdateAsync(id, cafeAtualizado);
        return NoContent();
    }
}