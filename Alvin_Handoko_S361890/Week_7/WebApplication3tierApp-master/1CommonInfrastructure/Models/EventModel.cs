using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _1CommonInfrastructure.Models
{
    public class EventModel
    {
        [Key]
        public int EventId { get; set; } // int
        public string EventName { get; set; } // nvarchar(400) 
        public string EventLocation { get; set; } // nvarchar(400)

        public string EventDateTime { get; set; } // nvarchar(400)

    }

}
