using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class CampusModel
    {
        [Key]
        public int CampusId { get; set; } // int
        public string CampusName { get; set; } // nvarchar(400) 
        public string CampusAddress { get; set; } // nvarchar(400)

    }

}
