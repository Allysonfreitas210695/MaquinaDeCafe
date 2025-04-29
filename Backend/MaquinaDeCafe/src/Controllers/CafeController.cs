using System.Threading.Tasks;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;
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
    public async Task<ActionResult<List<ResponseCafeJson>>> GetList()
    {
        return Ok(await _service.GetList());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ResponseCafeJson>> GetItemById(Guid id)
    {
        var cafe = await _service.GetItemById(id);
        if (cafe == null)
            return NotFound();

        return Ok(cafe);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] RequestCriacaoCafeJson novoCafe)
    {
        await _service.Adicionar(novoCafe);
        return Created();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, [FromBody] RequestAtualizacaoCafeJson cafeAtualizado)
    {
        await _service.Atualizar(id, cafeAtualizado);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await _service.Remover(id);
        return NoContent();
    }
}
