using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3BusinessLogicLayer.Interfaces
{
    public interface IClassroomService
    {
        Task<ClassroomModel?> GetById(int ClassroomId);
        Task<List<ClassroomModel>> GetAll();

        Task<int> CreateClassroom(ClassroomModel Classroom);
        Task UpdateClassroom(ClassroomModel Classroom);
        Task DeleteClassroom(int ClassroomId);
    }
}
