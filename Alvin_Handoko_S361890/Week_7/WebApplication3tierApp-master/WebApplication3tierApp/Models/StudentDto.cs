using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class StudentDto
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public string StudentEmail { get; set; }
        public string StudentGender { get; set; }
                        
    }

    public static class StudentDtoMapExtensions
    {
        public static StudentDto ToStudentDto(this StudentModel src)
        {
            var dst = new StudentDto();
            dst.StudentId = src.StudentId;
            dst.StudentName = src.StudentName;
            dst.StudentEmail = src.StudentEmail;
            dst.StudentGender = src.StudentGender;
            return dst;
        }

        public static StudentModel ToStudentModel(this StudentDto src)
        {
            var dst = new StudentModel();
            dst.StudentId = src.StudentId;
            dst.StudentName = src.StudentName;
            dst.StudentEmail = src.StudentEmail;
            dst.StudentGender = src.StudentGender;
            return dst;
        }
    }
}
