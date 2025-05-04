using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MaquinaDeCafe.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IngredienteAdicionalController : ControllerBase
{
    private readonly IIngredienteAdicionalRepository _service;

    public IngredienteAdicionalController(IIngredienteAdicionalRepository service)
    {
        _service = service;
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Add([FromBody] RequestCriacaoIngredienteAdicionalJson request)
    {
        await _service.AddAsync(request);
        return Created();
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ResponseIngredienteAdicionalJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetItemById(Guid id)
    {
        return Ok(await _service.GetItemByIdAsync(id));
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ResponseIngredienteAdicionalJson>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetList()
    {
        return Ok(await _service.GetListAsync());
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Update(Guid id, [FromBody] RequestAtualizacaoIngredienteAdicionalJson request)
    {
        await _service.UpdateAsync(id, request);
        return NoContent();
    }
}