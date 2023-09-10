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
    public static class ScoreMapExtensions
    {
        public static ScoreModel ToScoreModel(this Score src)
        {
            var dst = new ScoreModel();

            dst.ScoreId = src.ScoreId;
            dst.UnitId = src.UnitId;
            dst.StudentId = src.StudentId;
            dst.ScoreValue = src.ScoreValue;

            return dst;
        }

        public static Score ToScore(this ScoreModel src, Score dst = null)
        {
            if (dst == null)
            {
                dst = new Score();
            }

            dst.ScoreId = src.ScoreId;
            dst.UnitId = src.UnitId;
            dst.StudentId = src.StudentId;
            dst.ScoreValue = src.ScoreValue;

            return dst;
        }
    }
}
