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
    public class ClassroomController : BaseController
    {

        private readonly IClassroomService _ClassroomService;
        private readonly ILogger<ClassroomController> _logger;

        public ClassroomController(IClassroomService ClassroomService, ILogger<ClassroomController> logger)
        {
            _ClassroomService = ClassroomService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllClassrooms")]
        public async Task<List<ClassroomDto>> GetAll()
        {
            var result = await _ClassroomService.GetAll();
            return result.Select(x => x.ToClassroomDto()).ToList();
        }

        [HttpGet("{ClassroomId}", Name = "GetClassroom")]
        public async Task<ClassroomDto?> Get(int ClassroomId)
        {
            var result = await _ClassroomService.GetById(ClassroomId);
            return result?.ToClassroomDto();
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] ClassroomDto requestDto)
        {
            var ClassroomModel = requestDto.ToClassroomModel();
            return await _ClassroomService.CreateClassroom(ClassroomModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] ClassroomDto requestDto)
        {
            await _ClassroomService.UpdateClassroom(requestDto.ToClassroomModel());
            return Ok();
        }

        [HttpDelete, Route("{ClassroomId}")]
        public async Task<IActionResult> Delete(int ClassroomId)
        {
            await _ClassroomService.DeleteClassroom(ClassroomId);
            return Ok();
        }
    }
}
