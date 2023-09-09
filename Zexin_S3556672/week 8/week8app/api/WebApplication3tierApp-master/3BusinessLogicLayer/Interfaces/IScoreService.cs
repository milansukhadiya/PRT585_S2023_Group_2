using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3BusinessLogicLayer.Interfaces
{
    public interface IScoreService
    {
        Task<ScoreModel?> GetById(int ScoreId);
        Task<List<ScoreModel>> GetAll();

        Task<int> CreateScore(ScoreModel Score);
        Task UpdateScore(ScoreModel Score);
        Task DeleteScore(int ScoreId);
    }
}
