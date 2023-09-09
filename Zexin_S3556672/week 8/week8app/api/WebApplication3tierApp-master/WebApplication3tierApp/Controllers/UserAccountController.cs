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
    public class UserAccountController : BaseController
    {

        private readonly IUserAccountService _UserAccountService;
        private readonly ILogger<UserAccountController> _logger;

        public UserAccountController(IUserAccountService UserAccountService, ILogger<UserAccountController> logger)
        {
            _UserAccountService = UserAccountService;
            _logger = logger;
        }

        [HttpGet("", Name = "GetAllUserAccounts")]
        public async Task<List<UserAccountDto>> GetAll()
        {
            var result = await _UserAccountService.GetAll();
            return result.Select(x => x.ToUserAccountDto()).ToList();
        }

        [HttpGet("{UserAccountId}", Name = "GetUserAccount")]
        public async Task<UserAccountDto?> Get(int UserAccountId)
        {
            var result = await _UserAccountService.GetById(UserAccountId);
            return result?.ToUserAccountDto();
        }

        [HttpGet("{UserName}/{Password}", Name = "Login")]
        public async Task<IActionResult?> Login(string UserName,string Password)
        {
            var result = await _UserAccountService.Login(UserName, Password);
            if(result == null)
            {
                return Ok("fail");
            }
            else
            {
                return Ok("success");
            }
            
        }

        [HttpPost, Route("")]
        public async Task<int> Create([FromBody] UserAccountDto requestDto)
        {
            var UserAccountModel = requestDto.ToUserAccountModel();
            return await _UserAccountService.CreateUserAccount(UserAccountModel);
        }

        [HttpPut, Route("update")]
        public async Task<IActionResult> Update([FromBody] UserAccountDto requestDto)
        {
            await _UserAccountService.UpdateUserAccount(requestDto.ToUserAccountModel());
            return Ok();
        }

        [HttpDelete, Route("{UserAccountId}")]
        public async Task<IActionResult> Delete(int UserAccountId)
        {
            await _UserAccountService.DeleteUserAccount(UserAccountId);
            return Ok();
        }
    }
}
