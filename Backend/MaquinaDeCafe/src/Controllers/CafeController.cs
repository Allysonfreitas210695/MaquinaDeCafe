using System.Threading.Tasks;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MaquinaDeCafe.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CafeController : ControllerBase
{
    private readonly ICafeRepository _service;

    public CafeController(ICafeRepository service)
    {
        _service = service;
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ResponseCafeJson>), StatusCodes.Status200OK)]
    public async Task<ActionResult<List<ResponseCafeJson>>> GetList([FromQuery] CategoriaCafe? categoria)
    {
        return Ok(await _service.GetListAsync(categoria));
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ResponseCafeJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]

    public async Task<ActionResult<ResponseCafeJson>> GetItemById(Guid id)
    {
        return Ok(await _service.GetItemByIdAsync(id));
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Post([FromBody] RequestCriacaoCafeJson novoCafe)
    {
        await _service.AddAsync(novoCafe);
        return Created();
    }

    [HttpPut("{id}")]
    [ProducesResponseType(typeof(ResponseCafeJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Put(Guid id, [FromBody] RequestAtualizacaoCafeJson cafeAtualizado)
    {
        await _service.UpdateAsync(id, cafeAtualizado);
        return NoContent();
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _service.RemoverAsync(id);
        return NoContent();
    }
}
