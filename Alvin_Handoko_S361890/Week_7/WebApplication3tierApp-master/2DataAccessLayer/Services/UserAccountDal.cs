using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Context;
using _2DataAccessLayer.Context.Models;
using _2DataAccessLayer.Interfaces;
using _2DataAccessLayer.Maps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Services
{
    public class UserAccountDal : IUserAccountDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public UserAccountDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<UserAccountModel> GetAll()
        {
            var result = _db.UserAccounts.ToList();

            var returnObject = new List<UserAccountModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToUserAccountModel());
            }

            return returnObject;
        }

        public UserAccountModel? GetById(int UserAccountId)
        {
            var result = _db.UserAccounts.SingleOrDefault(x => x.UserAccountID == UserAccountId);
            return result?.ToUserAccountModel();
        }

        public UserAccountModel? Login(string UserName, string Password)
        {
            var result = _db.UserAccounts.SingleOrDefault(x => x.UserName == UserName && x.Password==Password);
            return result?.ToUserAccountModel();
        }
        public int CreateUserAccount(UserAccountModel UserAccount)
        {
            var newUserAccount = UserAccount.ToUserAccount();
            _db.UserAccounts.Add(newUserAccount);
            _db.SaveChanges();
            return newUserAccount.UserAccountID;
        }


        public void UpdateUserAccount(UserAccountModel UserAccount)
        {
            var existingUserAccount = _db.UserAccounts
                .SingleOrDefault(x => x.UserAccountID == UserAccount.UserAccountID);

            if (existingUserAccount == null)
            {
                throw new ApplicationException($"UserAccount {UserAccount.UserAccountID} does not exist.");
            }
            UserAccount.ToUserAccount(existingUserAccount);

            _db.Update(existingUserAccount);
            _db.SaveChanges();
        }

        public void DeleteUserAccount(int UserAccountId)
        {
            var efModel = _db.UserAccounts.Find(UserAccountId);
            _db.UserAccounts.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
