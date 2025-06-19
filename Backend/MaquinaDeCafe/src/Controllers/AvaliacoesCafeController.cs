using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MaquinaDeCafe.src.Communication.Request;
using MaquinaDeCafe.src.Communication.Response;
using MaquinaDeCafe.src.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MaquinaDeCafe.src.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AvaliacoesCafeController : ControllerBase
    {
        private readonly IAvaliacaoCafeRepository _service;
        public AvaliacoesCafeController(IAvaliacaoCafeRepository service)
        {
            _service = service;
        }
        [HttpGet]
        [ProducesResponseType(typeof(List<ResponseAvaliacaoCafeJson>), StatusCodes.Status200OK)]
        public async Task<ActionResult<List<ResponseAvaliacaoCafeJson>>> GetList()
        {
            return Ok(await _service.GetListAsync());
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ResponseCafeJson), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]

        public async Task<ActionResult<ResponseAvaliacaoCafeJson>> GetItemById(Guid id)
        {
            return Ok(await _service.GetItemByIdAsync(id));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Post([FromBody] RequestAvaliacaoCafeJson avaliacao)
        {
            await _service.AddAsync(avaliacao);
            return Created();
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(ResponseCafeJson), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ResponseErrorJson), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Put(Guid id, [FromBody] RequestAtualizacaoAvaliacaoCafeJson cafeAtualizado)
        {
            await _service.UpdateAsync(id, cafeAtualizado);
            return NoContent();
        }
    }
}