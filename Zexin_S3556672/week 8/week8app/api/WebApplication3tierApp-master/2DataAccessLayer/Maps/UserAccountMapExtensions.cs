using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Context.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Maps
{
    public static class UserAccountMapExtensions
    {
        public static UserAccountModel ToUserAccountModel(this UserAccount src)
        {
            var dst = new UserAccountModel();

            dst.UserAccountID = src.UserAccountID;
            dst.UserId = src.UserId;
            dst.UserName = src.UserName;
            dst.Password = src.Password;

            return dst;
        }

        public static UserAccount ToUserAccount(this UserAccountModel src, UserAccount dst = null)
        {
            if (dst == null)
            {
                dst = new UserAccount();
            }

            dst.UserAccountID = src.UserAccountID;
            dst.UserId = src.UserId;
            dst.UserName = src.UserName;
            dst.Password = src.Password;

            return dst;
        }
    }
}
