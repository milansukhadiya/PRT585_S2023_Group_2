

using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Interfaces;
using _3BusinessLogicLayer.Interfaces;

namespace _3BusinessLogicLayer.Services
{
    public class ClassroomService :  IClassroomService
    {
        private readonly IClassroomDal _ClassroomDal;
        //private readonly IClassroomBalService _ClassroomBalService;
        public ClassroomService(IClassroomDal ClassroomDal
        //ILoggingService loggingService,
        //IClassroomDal ClassroomDal,
        //IAuditDal auditDal
       // IClassroomBalanceService balsvc
        ) 
        {
            _ClassroomDal = ClassroomDal;
            // _ClassroomBalService = balsvc;
        }

        public async Task<ClassroomModel?> GetById(int ClassroomId)
        {           
            return _ClassroomDal.GetById(ClassroomId);
        }

        public async Task<List<ClassroomModel>> GetAll()
        {            
            return _ClassroomDal.GetAll();
        }

        public async Task<int> CreateClassroom(ClassroomModel Classroom)
        {
            //write validations here
            var newClassroomId = _ClassroomDal.CreateClassroom(Classroom);
            return newClassroomId;
        }

        public async Task UpdateClassroom(ClassroomModel Classroom)
        {
            //write validations here 
            _ClassroomDal.UpdateClassroom(Classroom);
        }

        public async Task DeleteClassroom(int ClassroomId)
        {            
            try
            {
                //if(balservice.getBal(ClassroomId) = 0)
                _ClassroomDal.DeleteClassroom(ClassroomId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete Classroom Id:{ClassroomId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
