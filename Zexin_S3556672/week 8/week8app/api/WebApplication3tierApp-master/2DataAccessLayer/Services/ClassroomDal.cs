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
    public class ClassroomDal : IClassroomDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public ClassroomDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<ClassroomModel> GetAll()
        {
            var result = _db.Classrooms.ToList();

            var returnObject = new List<ClassroomModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToClassroomModel());
            }

            return returnObject;
        }

        public ClassroomModel? GetById(int ClassroomId)
        {
            var result = _db.Classrooms.SingleOrDefault(x => x.ClassroomId == ClassroomId);
            return result?.ToClassroomModel();
        }


        public int CreateClassroom(ClassroomModel Classroom)
        {
            var newClassroom = Classroom.ToClassroom();
            _db.Classrooms.Add(newClassroom);
            _db.SaveChanges();
            return newClassroom.ClassroomId;
        }


        public void UpdateClassroom(ClassroomModel Classroom)
        {
            var existingClassroom = _db.Classrooms
                .SingleOrDefault(x => x.ClassroomId == Classroom.ClassroomId);

            if (existingClassroom == null)
            {
                throw new ApplicationException($"Classroom {Classroom.ClassroomId} does not exist.");
            }
            Classroom.ToClassroom(existingClassroom);

            _db.Update(existingClassroom);
            _db.SaveChanges();
        }

        public void DeleteClassroom(int ClassroomId)
        {
            var efModel = _db.Classrooms.Find(ClassroomId);
            _db.Classrooms.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
