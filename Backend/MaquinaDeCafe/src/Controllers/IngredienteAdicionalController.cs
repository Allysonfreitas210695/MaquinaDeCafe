using MaquinaDeCafe.src.Communication.Request;
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
    public async Task<IActionResult> Criar([FromBody] RequestCriacaoIngredienteAdicionalJson request)
    {
        await _service.AddAsync(request);
        return Created();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> ObterPorId(Guid id)
    {
        return Ok(await _service.GetItemByIdAsync(id));
    }

    [HttpGet]
    public async Task<IActionResult> ListarTodos()
    {
        return Ok(await _service.GetListAsync());
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Atualizar(Guid id, [FromBody] RequestAtualizacaoIngredienteAdicionalJson request)
    {
        await _service.UpdateAsync(id, request);
        return NoContent();
    }
}