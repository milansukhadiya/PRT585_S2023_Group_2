using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class UserAccountDto
    {
        public int UserAccountID { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }

        public string Password { get; set; }

    }

    public static class UserAccountDtoMapExtensions
    {
        public static UserAccountDto ToUserAccountDto(this UserAccountModel src)
        {
            var dst = new UserAccountDto();
            dst.UserAccountID = src.UserAccountID;
            dst.UserId = src.UserId;
            dst.UserName = src.UserName;
            dst.Password = src.Password;
            return dst;
        }

        public static UserAccountModel ToUserAccountModel(this UserAccountDto src)
        {
            var dst = new UserAccountModel();
            dst.UserAccountID = src.UserAccountID;
            dst.UserId = src.UserId;
            dst.UserName = src.UserName;
            dst.Password = src.Password;
            return dst;
        }
    }
}
