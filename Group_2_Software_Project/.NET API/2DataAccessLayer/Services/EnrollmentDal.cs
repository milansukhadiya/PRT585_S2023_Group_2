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
    public class EnrollmentDal : IEnrollmentDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public EnrollmentDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<EnrollmentModel> GetAll()
        {
            var result = _db.Enrollments.ToList();

            var returnObject = new List<EnrollmentModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToEnrollmentModel());
            }

            return returnObject;
        }

        public EnrollmentModel? GetById(int EnrollmentId)
        {
            var result = _db.Enrollments.SingleOrDefault(x => x.EnrollmentId == EnrollmentId);
            return result?.ToEnrollmentModel();
        }


        public int CreateEnrollment(EnrollmentModel Enrollment)
        {
            var newEnrollment = Enrollment.ToEnrollment();
            _db.Enrollments.Add(newEnrollment);
            _db.SaveChanges();
            return newEnrollment.EnrollmentId;
        }


        public void UpdateEnrollment(EnrollmentModel Enrollment)
        {
            var existingEnrollment = _db.Enrollments
                .SingleOrDefault(x => x.EnrollmentId == Enrollment.EnrollmentId);

            if (existingEnrollment == null)
            {
                throw new ApplicationException($"Enrollment {Enrollment.EnrollmentId} does not exist.");
            }
            Enrollment.ToEnrollment(existingEnrollment);

            _db.Update(existingEnrollment);
            _db.SaveChanges();
        }

        public void DeleteEnrollment(int EnrollmentId)
        {
            var efModel = _db.Enrollments.Find(EnrollmentId);
            _db.Enrollments.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
