using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.DTOs;
using MaquinaDeCafe.src.Models.Enums;
using MaquinaDeCafe.src.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MaquinaDeCafe.src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PedidoController : ControllerBase
{
    private readonly IPedidoRepository _service;
    public PedidoController(IPedidoRepository service)
    {
        _service = service;
    }
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Add([FromBody] RequestCriacaoPedidoJson request)
    {
        await _service.AddAsync(request);
        return Created();
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ResponsePedidoJson), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetItemById(Guid id)
    {
        return Ok(await _service.GetItemByIdAsync(id));
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ResponsePedidoJson>), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetList()
    {
        return Ok(await _service.GetListAsync());
    }

    [HttpPut]
    [Route("{id}/{status}")]
    [ProducesResponseType( StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> UpdateStatus(Guid id, StatusPedido status)
    {
        await _service.UpdateStatusAsync(id, status);
        return NoContent();
    }
}