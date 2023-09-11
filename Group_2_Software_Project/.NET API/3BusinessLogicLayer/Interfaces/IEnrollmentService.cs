using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3BusinessLogicLayer.Interfaces
{
    public interface IEnrollmentService
    {
        Task<EnrollmentModel?> GetById(int EnrollmentId);
        Task<List<EnrollmentModel>> GetAll();

        Task<int> CreateEnrollment(EnrollmentModel Enrollment);
        Task UpdateEnrollment(EnrollmentModel Enrollment);
        Task DeleteEnrollment(int EnrollmentId);
    }
}
