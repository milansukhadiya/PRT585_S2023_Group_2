using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Interfaces
{
    public interface IUserAccountDal
    {
        // Getters
        UserAccountModel? GetById(int UserAccountId);

        UserAccountModel? Login(string UserName, string Password);
        List<UserAccountModel> GetAll();

        // Actions
        int CreateUserAccount(UserAccountModel UserAccount);
        void UpdateUserAccount(UserAccountModel UserAccount);
        void DeleteUserAccount(int UserAccountId);
    }
}
