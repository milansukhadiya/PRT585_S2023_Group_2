using _1CommonInfrastructure.Models;
using _2DataAccessLayer.Context;
using _2DataAccessLayer.Context.Models;
using _2DataAccessLayer.Interfaces;
using _2DataAccessLayer.Maps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Services
{
    public class ScoreDal : IScoreDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public ScoreDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<ScoreModel> GetAll()
        {
            var result = _db.Scores.ToList();

            var returnObject = new List<ScoreModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToScoreModel());
            }

            return returnObject;
        }

        public ScoreModel? GetById(int ScoreId)
        {
            var result = _db.Scores.SingleOrDefault(x => x.ScoreId == ScoreId);
            return result?.ToScoreModel();
        }


        public int CreateScore(ScoreModel Score)
        {
            var newScore = Score.ToScore();
            _db.Scores.Add(newScore);
            _db.SaveChanges();
            return newScore.ScoreId;
        }


        public void UpdateScore(ScoreModel Score)
        {
            var existingScore = _db.Scores
                .SingleOrDefault(x => x.ScoreId == Score.ScoreId);

            if (existingScore == null)
            {
                throw new ApplicationException($"Score {Score.ScoreId} does not exist.");
            }
            Score.ToScore(existingScore);

            _db.Update(existingScore);
            _db.SaveChanges();
        }

        public void DeleteScore(int ScoreId)
        {
            var efModel = _db.Scores.Find(ScoreId);
            _db.Scores.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
