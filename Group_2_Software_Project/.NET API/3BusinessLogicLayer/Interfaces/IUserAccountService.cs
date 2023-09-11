using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3BusinessLogicLayer.Interfaces
{
    public interface IUserAccountService
    {
        Task<UserAccountModel?> GetById(int UserAccountId);
        Task<UserAccountModel?> Login(string UserName, string Password);
        Task<List<UserAccountModel>> GetAll();

        Task<int> CreateUserAccount(UserAccountModel UserAccount);
        Task UpdateUserAccount(UserAccountModel UserAccount);
        Task DeleteUserAccount(int UserAccountId);
    }
}
