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
    public class EnrollmentController : BaseController
    {

        private readonly IEnrollmentService _EnrollmentService;
        private readonly ILogger<EnrollmentController> _logger;

        public EnrollmentController(IEnrollmentService EnrollmentService, ILogger<EnrollmentController> logger)
        {
            _EnrollmentService = EnrollmentService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllEnrollments")]
        public async Task<List<EnrollmentDto>> GetAll()
        {
            var result = await _EnrollmentService.GetAll();
            return result.Select(x => x.ToEnrollmentDto()).ToList();
        }

        [HttpGet("{EnrollmentId}", Name = "GetEnrollment")]
        public async Task<EnrollmentDto?> Get(int EnrollmentId)
        {
            var result = await _EnrollmentService.GetById(EnrollmentId);
            return result?.ToEnrollmentDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] EnrollmentDto requestDto)
        {
            var EnrollmentModel = requestDto.ToEnrollmentModel();
            return await _EnrollmentService.CreateEnrollment(EnrollmentModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] EnrollmentDto requestDto)
        {
            await _EnrollmentService.UpdateEnrollment(requestDto.ToEnrollmentModel());
            return Ok();
        }

        [HttpDelete, Route("{EnrollmentId}")]
        public async Task<IActionResult> Delete(int EnrollmentId)
        {
            await _EnrollmentService.DeleteEnrollment(EnrollmentId);
            return Ok();
        }
    }
}
