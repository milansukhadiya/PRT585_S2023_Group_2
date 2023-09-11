using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Interfaces
{
    public interface IClassroomDal
    {
        // Getters
        ClassroomModel? GetById(int ClassroomId);
        List<ClassroomModel> GetAll();

        // Actions
        int CreateClassroom(ClassroomModel Classroom);
        void UpdateClassroom(ClassroomModel Classroom);
        void DeleteClassroom(int ClassroomId);
    }
}
