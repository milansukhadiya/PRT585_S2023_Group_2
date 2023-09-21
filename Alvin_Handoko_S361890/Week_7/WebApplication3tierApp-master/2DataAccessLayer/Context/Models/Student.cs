using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Context.Models
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; } // int
        public string StudentName { get; set; } // nvarchar(400)
        
        public string StudentEmail { get; set;}
        public string StudentGender { get; set;}
    }
}
