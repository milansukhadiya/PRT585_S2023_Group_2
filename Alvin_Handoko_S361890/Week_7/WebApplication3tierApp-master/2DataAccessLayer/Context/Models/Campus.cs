using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Context.Models
{
    public class Campus
    {
        [Key]
        public int CampusId { get; set; } // int
        public string CampusName { get; set; } // nvarchar(400) 
        public string CampusAddress { get; set; } // nvarchar(400)
    }
}
