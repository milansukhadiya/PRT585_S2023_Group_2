

using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Interfaces;
using _3BusinessLogicLayer.Interfaces;

namespace _3BusinessLogicLayer.Services
{
    public class EnrollmentService :  IEnrollmentService
    {
        private readonly IEnrollmentDal _EnrollmentDal;
        //private readonly IEnrollmentBalService _EnrollmentBalService;
        public EnrollmentService(IEnrollmentDal EnrollmentDal
        //ILoggingService loggingService,
        //IEnrollmentDal EnrollmentDal,
        //IAuditDal auditDal
       // IEnrollmentBalanceService balsvc
        ) 
        {
            _EnrollmentDal = EnrollmentDal;
            // _EnrollmentBalService = balsvc;
        }

        public async Task<EnrollmentModel?> GetById(int EnrollmentId)
        {           
            return _EnrollmentDal.GetById(EnrollmentId);
        }

        public async Task<List<EnrollmentModel>> GetAll()
        {            
            return _EnrollmentDal.GetAll();
        }

        public async Task<int> CreateEnrollment(EnrollmentModel Enrollment)
        {
            //write validations here
            var newEnrollmentId = _EnrollmentDal.CreateEnrollment(Enrollment);
            return newEnrollmentId;
        }

        public async Task UpdateEnrollment(EnrollmentModel Enrollment)
        {
            //write validations here 
            _EnrollmentDal.UpdateEnrollment(Enrollment);
        }

        public async Task DeleteEnrollment(int EnrollmentId)
        {            
            try
            {
                //if(balservice.getBal(EnrollmentId) = 0)
                _EnrollmentDal.DeleteEnrollment(EnrollmentId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete Enrollment Id:{EnrollmentId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
