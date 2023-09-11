using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class ClassroomModel
    {
        [Key]
        public int ClassroomId { get; set; } // int
        public string ClassroomName { get; set; } // nvarchar(400)

    }

}
