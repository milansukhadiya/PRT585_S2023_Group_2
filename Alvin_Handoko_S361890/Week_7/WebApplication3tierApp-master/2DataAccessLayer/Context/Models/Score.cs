using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Context.Models
{
    public class Score
    {
        [Key]
        public int ScoreId { get; set; } // int
        public int UnitId { get; set; } // int
        public int StudentId { get; set; } // int
        public int ScoreValue { get; set; } // nvarchar(400)

    }

}
