using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Interfaces
{
    public interface IScoreDal
    {
        // Getters
        ScoreModel? GetById(int ScoreId);
        List<ScoreModel> GetAll();

        // Actions
        int CreateScore(ScoreModel Score);
        void UpdateScore(ScoreModel Score);
        void DeleteScore(int ScoreId);
    }
}
