using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class ScoreDto
    {
        public int ScoreId { get; set; } // int
        public int UnitId { get; set; } // int
        public int StudentId { get; set; } // int
        //public string Unit { get; set; }
        //public string Student { get; set; }
        public int ScoreValue { get; set; } // nvarchar(400)

    }

    public static class ScoreDtoMapExtensions
    {
        public static ScoreDto ToScoreDto(this ScoreModel src)
        {
            var dst = new ScoreDto();
            dst.ScoreId = src.ScoreId;
            dst.UnitId = src.UnitId;
            dst.StudentId = src.StudentId;
            //dst.Unit = src.Unit;
            //dst.Student = src.Student;
            dst.ScoreValue = src.ScoreValue;
            return dst;
        }

        public static ScoreModel ToScoreModel(this ScoreDto src)
        {
            var dst = new ScoreModel();
            dst.ScoreId = src.ScoreId;
            dst.UnitId = src.UnitId;
            dst.StudentId = src.StudentId;
            //dst.Unit = src.Unit;
            //dst.Student = src.Student;
            dst.ScoreValue = src.ScoreValue;
            return dst;
        }
    }
}
