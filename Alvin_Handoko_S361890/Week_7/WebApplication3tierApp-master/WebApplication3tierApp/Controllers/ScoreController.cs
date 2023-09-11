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
    public class ScoreController : BaseController
    {

        private readonly IScoreService _ScoreService;
        private readonly ILogger<ScoreController> _logger;

        public ScoreController(IScoreService ScoreService, ILogger<ScoreController> logger)
        {
            _ScoreService = ScoreService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllScores")]
        public async Task<List<ScoreDto>> GetAll()
        {
            var result = await _ScoreService.GetAll();
            return result.Select(x => x.ToScoreDto()).ToList();
        }

        [HttpGet("{ScoreId}", Name = "GetScore")]
        public async Task<ScoreDto?> Get(int ScoreId)
        {
            var result = await _ScoreService.GetById(ScoreId);
            return result?.ToScoreDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] ScoreDto requestDto)
        {
            var ScoreModel = requestDto.ToScoreModel();
            return await _ScoreService.CreateScore(ScoreModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] ScoreDto requestDto)
        {
            await _ScoreService.UpdateScore(requestDto.ToScoreModel());
            return Ok();
        }

        [HttpDelete, Route("{ScoreId}")]
        public async Task<IActionResult> Delete(int ScoreId)
        {
            await _ScoreService.DeleteScore(ScoreId);
            return Ok();
        }
    }
}
