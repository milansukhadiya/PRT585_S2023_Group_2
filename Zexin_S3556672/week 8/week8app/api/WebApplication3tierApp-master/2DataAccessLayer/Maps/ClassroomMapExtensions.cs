using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Context.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Maps
{
    public static class ClassroomMapExtensions
    {
        public static ClassroomModel ToClassroomModel(this Classroom src)
        {
            var dst = new ClassroomModel();

            dst.ClassroomId = src.ClassroomId;
            dst.ClassroomName = src.ClassroomName;

            return dst;
        }

        public static Classroom ToClassroom(this ClassroomModel src, Classroom dst = null)
        {
            if (dst == null)
            {
                dst = new Classroom();
            }

            dst.ClassroomId = src.ClassroomId;
            dst.ClassroomName = src.ClassroomName;

            return dst;
        }
    }
}
