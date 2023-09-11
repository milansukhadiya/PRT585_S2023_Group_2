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
    public static class CampusMapExtensions
    {
        public static CampusModel ToCampusModel(this Campus src)
        {
            var dst = new CampusModel();

            dst.CampusId = src.CampusId;
            dst.CampusName = src.CampusName;
            dst.CampusAddress = src.CampusAddress;

            return dst;
        }

        public static Campus ToCampus(this CampusModel src, Campus dst = null)
        {
            if (dst == null)
            {
                dst = new Campus();
            }

            dst.CampusId = src.CampusId;
            dst.CampusName = src.CampusName;
            dst.CampusAddress = src.CampusAddress;

            return dst;
        }
    }
}
