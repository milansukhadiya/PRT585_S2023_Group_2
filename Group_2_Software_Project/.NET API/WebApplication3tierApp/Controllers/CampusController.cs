using _2DataAccessLayer.Services;
using _3BusinessLogicLayer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication3tierApp.Models;

namespace WebApplication3tierApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class CampusController : BaseController
    {

        private readonly ICampusService _CampusService;
        private readonly ILogger<CampusController> _logger;

        public CampusController(ICampusService CampusService, ILogger<CampusController> logger)
        {
            _CampusService = CampusService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllCampuss")]
        public async Task<List<CampusDto>> GetAll()
        {
            var result = await _CampusService.GetAll();
            return result.Select(x => x.ToCampusDto()).ToList();
        }

        [HttpGet("{CampusId}", Name = "GetCampus")]
        public async Task<CampusDto?> Get(int CampusId)
        {
            var result = await _CampusService.GetById(CampusId);
            return result?.ToCampusDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] CampusDto requestDto)
        {
            var CampusModel = requestDto.ToCampusModel();
            return await _CampusService.CreateCampus(CampusModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] CampusDto requestDto)
        {
            await _CampusService.UpdateCampus(requestDto.ToCampusModel());
            return Ok();
        }

        [HttpDelete, Route("{CampusId}")]
        public async Task<IActionResult> Delete(int CampusId)
        {
            await _CampusService.DeleteCampus(CampusId);
            return Ok();
        }
    }
}
