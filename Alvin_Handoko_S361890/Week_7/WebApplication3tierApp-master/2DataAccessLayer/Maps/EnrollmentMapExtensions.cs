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
    public static class EnrollmentMapExtensions
    {
        public static EnrollmentModel ToEnrollmentModel(this Enrollment src)
        {
            var dst = new EnrollmentModel();

            dst.EnrollmentId = src.EnrollmentId;
            dst.UnitId = src.UnitId;
            dst.StudentId = src.StudentId;

            return dst;
        }

        public static Enrollment ToEnrollment(this EnrollmentModel src, Enrollment dst = null)
        {
            if (dst == null)
            {
                dst = new Enrollment();
            }

            dst.EnrollmentId = src.EnrollmentId;
            dst.UnitId = src.UnitId;
            dst.StudentId = src.StudentId;

            return dst;
        }
    }
}
