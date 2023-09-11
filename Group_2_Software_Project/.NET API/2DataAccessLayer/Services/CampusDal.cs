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
    public class CampusDal : ICampusDal
    {
        //private readonly TestDBEntities context;
        private DBEntitiesContext _db;
        public CampusDal(DBEntitiesContext dbctx)
        {
            this._db = dbctx; // new TestDBEntities();
        }


        public List<CampusModel> GetAll()
        {
            var result = _db.Campus.ToList();

            var returnObject = new List<CampusModel>();
            foreach (var item in result)
            {
                returnObject.Add(item.ToCampusModel());
            }

            return returnObject;
        }

        public CampusModel? GetById(int CampusId)
        {
            var result = _db.Campus.SingleOrDefault(x => x.CampusId == CampusId);
            return result?.ToCampusModel();
        }


        public int CreateCampus(CampusModel Campus)
        {
            var newCampus = Campus.ToCampus();
            _db.Campus.Add(newCampus);
            _db.SaveChanges();
            return newCampus.CampusId;
        }


        public void UpdateCampus(CampusModel Campus)
        {
            var existingCampus = _db.Campus
                .SingleOrDefault(x => x.CampusId == Campus.CampusId);

            if (existingCampus == null)
            {
                throw new ApplicationException($"Campus {Campus.CampusId} does not exist.");
            }
            Campus.ToCampus(existingCampus);

            _db.Update(existingCampus);
            _db.SaveChanges();
        }

        public void DeleteCampus(int CampusId)
        {
            var efModel = _db.Campus.Find(CampusId);
            _db.Campus.Remove(efModel);
            _db.SaveChanges();


        }

    }

}
