using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class CampusDto
    {
        public int CampusId { get; set; }
        public string CampusName { get; set; }
        public string CampusAddress { get; set; }

    }

    public static class CampusDtoMapExtensions
    {
        public static CampusDto ToCampusDto(this CampusModel src)
        {
            var dst = new CampusDto();
            dst.CampusId = src.CampusId;
            dst.CampusName = src.CampusName;
            dst.CampusAddress = src.CampusAddress;
            return dst;
        }

        public static CampusModel ToCampusModel(this CampusDto src)
        {
            var dst = new CampusModel();
            dst.CampusId = src.CampusId;
            dst.CampusName = src.CampusName;
            dst.CampusAddress = src.CampusAddress;
            return dst;
        }
    }
}
