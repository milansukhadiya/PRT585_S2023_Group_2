using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Interfaces
{
    public interface IEnrollmentDal
    {
        // Getters
        EnrollmentModel? GetById(int EnrollmentId);
        List<EnrollmentModel> GetAll();

        // Actions
        int CreateEnrollment(EnrollmentModel Enrollment);
        void UpdateEnrollment(EnrollmentModel Enrollment);
        void DeleteEnrollment(int EnrollmentId);
    }
}
