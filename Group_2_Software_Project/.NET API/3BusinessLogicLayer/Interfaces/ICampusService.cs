using _1CommonInfrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3BusinessLogicLayer.Interfaces
{
    public interface ICampusService
    {
        Task<CampusModel?> GetById(int CampusId);
        Task<List<CampusModel>> GetAll();

        Task<int> CreateCampus(CampusModel Campus);
        Task UpdateCampus(CampusModel Campus);
        Task DeleteCampus(int CampusId);
    }
}
