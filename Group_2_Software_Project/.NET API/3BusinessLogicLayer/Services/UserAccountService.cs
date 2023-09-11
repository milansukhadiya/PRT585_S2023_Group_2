

using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Interfaces;
using _3BusinessLogicLayer.Interfaces;

namespace _3BusinessLogicLayer.Services
{
    public class UserAccountService :  IUserAccountService
    {
        private readonly IUserAccountDal _UserAccountDal;
        //private readonly IUserAccountBalService _UserAccountBalService;
        public UserAccountService(IUserAccountDal UserAccountDal
        //ILoggingService loggingService,
        //IUserAccountDal UserAccountDal,
        //IAuditDal auditDal
       // IUserAccountBalanceService balsvc
        ) 
        {
            _UserAccountDal = UserAccountDal;
            // _UserAccountBalService = balsvc;
        }

        public async Task<UserAccountModel?> GetById(int UserAccountId)
        {           
            return _UserAccountDal.GetById(UserAccountId);
        }

        public async Task<UserAccountModel?> Login(string UserName, string Password)
        {
            return _UserAccountDal.Login(UserName,Password);
        }

        public async Task<List<UserAccountModel>> GetAll()
        {            
            return _UserAccountDal.GetAll();
        }

        public async Task<int> CreateUserAccount(UserAccountModel UserAccount)
        {
            //write validations here
            var newUserAccountId = _UserAccountDal.CreateUserAccount(UserAccount);
            return newUserAccountId;
        }

        public async Task UpdateUserAccount(UserAccountModel UserAccount)
        {
            //write validations here 
            _UserAccountDal.UpdateUserAccount(UserAccount);
        }

        public async Task DeleteUserAccount(int UserAccountId)
        {            
            try
            {
                //if(balservice.getBal(UserAccountId) = 0)
                _UserAccountDal.DeleteUserAccount(UserAccountId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete UserAccount Id:{UserAccountId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
