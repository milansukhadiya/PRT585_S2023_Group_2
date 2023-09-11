

using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Interfaces;
using _3BusinessLogicLayer.Interfaces;

namespace _3BusinessLogicLayer.Services
{
    public class CampusService :  ICampusService
    {
        private readonly ICampusDal _CampusDal;
        //private readonly ICampusBalService _CampusBalService;
        public CampusService(ICampusDal CampusDal
        //ILoggingService loggingService,
        //ICampusDal CampusDal,
        //IAuditDal auditDal
       // ICampusBalanceService balsvc
        ) 
        {
            _CampusDal = CampusDal;
            // _CampusBalService = balsvc;
        }

        public async Task<CampusModel?> GetById(int CampusId)
        {           
            return _CampusDal.GetById(CampusId);
        }

        public async Task<List<CampusModel>> GetAll()
        {            
            return _CampusDal.GetAll();
        }

        public async Task<int> CreateCampus(CampusModel Campus)
        {
            //write validations here
            var newCampusId = _CampusDal.CreateCampus(Campus);
            return newCampusId;
        }

        public async Task UpdateCampus(CampusModel Campus)
        {
            //write validations here 
            _CampusDal.UpdateCampus(Campus);
        }

        public async Task DeleteCampus(int CampusId)
        {            
            try
            {
                //if(balservice.getBal(CampusId) = 0)
                _CampusDal.DeleteCampus(CampusId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete Campus Id:{CampusId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
