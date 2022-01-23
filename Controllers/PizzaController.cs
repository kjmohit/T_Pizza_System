using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PizzaOrderingSystem.Data;
using PizzaOrderingSystem.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaOrderingSystem.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]//This annotation tells what controllers are API controllers 
    [Produces("application/json")]
    public class PizzaController : ControllerBase
    {
        private readonly IPizzaRepository _repository;
        private readonly ILogger<PizzaController> _logger;

        public PizzaController(IPizzaRepository repository, ILogger<PizzaController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Product>> Get()
        {
            try
            {
                return Ok(_repository.GetAllProducts());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get pizza meanu: {ex}");
                return BadRequest("failed to get pizza menu");
            }
        }
    }
}
