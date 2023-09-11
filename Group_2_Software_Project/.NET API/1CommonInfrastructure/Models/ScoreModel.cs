using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class ScoreModel
    {

        [Key]
        public int ScoreId { get; set; } // int
        public int UnitId { get; set; } // int
        public int StudentId { get; set; } // int
       // public string Unit { get; set; } 
        //public string Student { get; set; } 
        public int ScoreValue { get; set; } // nvarchar(400)

    }

}
