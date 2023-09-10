using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Context.Models
{
    public class Classroom
    {
        [Key]
        public int ClassroomId { get; set; } // int
        public string ClassroomName { get; set; } // nvarchar(400)
        
    }
}
