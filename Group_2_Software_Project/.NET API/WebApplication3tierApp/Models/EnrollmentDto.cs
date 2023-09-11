using _1CommonInfrastructure.Models;
using System.ComponentModel.DataAnnotations;

namespace WebApplication3tierApp.Models
{
    public class EnrollmentDto
    {
        [Key]
        public int EnrollmentId { get; set; }

        public int StudentId { get; set; }

        public string UnitIds { get; set; }


    }

    public static class EnrollmentDtoMapExtensions
    {
        public static EnrollmentDto ToEnrollmentDto(this EnrollmentModel src)
        {
            var dst = new EnrollmentDto();
            dst.EnrollmentId = src.EnrollmentId;
            dst.StudentId = src.StudentId;
            dst.UnitIds = src.UnitIds;
            return dst;
        }

        public static EnrollmentModel ToEnrollmentModel(this EnrollmentDto src)
        {
            var dst = new EnrollmentModel();
            dst.EnrollmentId = src.EnrollmentId;
            dst.StudentId = src.StudentId;
            dst.UnitIds = src.UnitIds;
            return dst;
        }
    }
}
