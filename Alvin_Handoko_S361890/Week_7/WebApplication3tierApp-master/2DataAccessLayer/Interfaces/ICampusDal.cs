using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Interfaces
{
    public interface ICampusDal
    {
        // Getters
        CampusModel? GetById(int CampusId);
        List<CampusModel> GetAll();

        // Actions
        int CreateCampus(CampusModel Campus);
        void UpdateCampus(CampusModel Campus);
        void DeleteCampus(int CampusId);
    }
}
