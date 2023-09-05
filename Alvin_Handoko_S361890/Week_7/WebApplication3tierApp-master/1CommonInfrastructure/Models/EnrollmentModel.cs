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
        [Required]
        public int EnrollmentId { get; set; }

        [ForeignKey("Student")]
        public int StudentId { get; set; }
        public virtual StudentModel Student { get; set; }
        [ForeignKey("Unit")]
        public int UnitId { get; set; }
        public virtual UnitModel Unit { get; set; }
    }
}
