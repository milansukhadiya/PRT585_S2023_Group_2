

using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Interfaces;
using _3BusinessLogicLayer.Interfaces;

namespace _3BusinessLogicLayer.Services
{
    public class ScoreService :  IScoreService
    {
        private readonly IScoreDal _ScoreDal;
        //private readonly IScoreBalService _ScoreBalService;
        public ScoreService(IScoreDal ScoreDal
        //ILoggingService loggingService,
        //IScoreDal ScoreDal,
        //IAuditDal auditDal
       // IScoreBalanceService balsvc
        ) 
        {
            _ScoreDal = ScoreDal;
            // _ScoreBalService = balsvc;
        }

        public async Task<ScoreModel?> GetById(int ScoreId)
        {           
            return _ScoreDal.GetById(ScoreId);
        }

        public async Task<List<ScoreModel>> GetAll()
        {            
            return _ScoreDal.GetAll();
        }

        public async Task<int> CreateScore(ScoreModel Score)
        {
            //write validations here
            var newScoreId = _ScoreDal.CreateScore(Score);
            return newScoreId;
        }

        public async Task UpdateScore(ScoreModel Score)
        {
            //write validations here 
            _ScoreDal.UpdateScore(Score);
        }

        public async Task DeleteScore(int ScoreId)
        {            
            try
            {
                //if(balservice.getBal(ScoreId) = 0)
                _ScoreDal.DeleteScore(ScoreId);
            }
            catch (Exception e)
            {
                //_loggingService.WriteLog(LoggingLevel.Error, "Layer", $"Error delete Score Id:{ScoreId}. {e.Message}", e.StackTrace);
            }
        }
    }
}
