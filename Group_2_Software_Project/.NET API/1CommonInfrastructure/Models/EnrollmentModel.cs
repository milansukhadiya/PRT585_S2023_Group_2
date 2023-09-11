using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class EnrollmentModel
    {
        [Key]
        public int EnrollmentId { get; set; }

        public int StudentId { get; set; }


        // Collection of UnitIds as foreign keys from UnitModel
        public string UnitIds { get; set; }

    }
}
