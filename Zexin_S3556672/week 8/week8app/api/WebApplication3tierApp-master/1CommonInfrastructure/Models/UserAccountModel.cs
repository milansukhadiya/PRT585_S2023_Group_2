using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class UserAccountModel
    {
        [Key]
        public int UserAccountID { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }

        public string Password { get; set; }

    }

}
