using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class StudentModel
    {
        [Key]
        [Required]
        public int StudentId { get; set; } // int
        [Required]
        [StringLength(50)]
        public string StudentName { get; set; } // nvarchar(400)

        public int ClassroomId { get; set; }

    }

}
