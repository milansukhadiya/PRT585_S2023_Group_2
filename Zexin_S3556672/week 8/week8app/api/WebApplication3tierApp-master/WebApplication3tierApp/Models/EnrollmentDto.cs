using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class EnrollmentDto
    {
        public int EnrollmentId { get; set; }
        public int StudentId { get; set; }
        public int UnitId { get; set; }

    }

    public static class EnrollmentDtoMapExtensions
    {
        public static EnrollmentDto ToEnrollmentDto(this EnrollmentModel src)
        {
            var dst = new EnrollmentDto();
            dst.EnrollmentId = src.EnrollmentId;
            dst.StudentId = src.StudentId;
            dst.UnitId = src.UnitId;
            return dst;
        }

        public static EnrollmentModel ToEnrollmentModel(this EnrollmentDto src)
        {
            var dst = new EnrollmentModel();
            dst.EnrollmentId = src.EnrollmentId;
            dst.StudentId = src.StudentId;
            dst.UnitId = src.UnitId;
            return dst;
        }
    }
}
