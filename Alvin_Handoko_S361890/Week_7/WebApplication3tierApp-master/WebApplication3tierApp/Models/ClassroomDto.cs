using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class ClassroomDto
    {
        public int ClassroomId { get; set; }
        public string ClassroomName { get; set; }
                        
    }

    public static class ClassroomDtoMapExtensions
    {
        public static ClassroomDto ToClassroomDto(this ClassroomModel src)
        {
            var dst = new ClassroomDto();
            dst.ClassroomId = src.ClassroomId;
            dst.ClassroomName = src.ClassroomName;            
            return dst;
        }

        public static ClassroomModel ToClassroomModel(this ClassroomDto src)
        {
            var dst = new ClassroomModel();
            dst.ClassroomId = src.ClassroomId;
            dst.ClassroomName = src.ClassroomName;            
            return dst;
        }
    }
}
