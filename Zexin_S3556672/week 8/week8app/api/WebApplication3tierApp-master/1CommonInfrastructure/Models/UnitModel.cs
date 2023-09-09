using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class UnitModel
    {
        [Key]
        public int UnitId { get; set; } // int
        public string UnitCode { get; set; } // nvarchar(400) 
        public string UnitName { get; set; } // nvarchar(400)

    }

}
