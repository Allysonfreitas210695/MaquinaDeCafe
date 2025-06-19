using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public async Task<ActionResult<List<ResponseCafeJson>>> GetList()
        {
            return Ok(await _service.GetListAsync());
        }
    }
}