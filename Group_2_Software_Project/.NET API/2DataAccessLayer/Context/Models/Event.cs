using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2DataAccessLayer.Context.Models
{
    public class Event
    {
        [Key]
        public int EventId { get; set; } // int
        public string EventName { get; set; } // nvarchar(400) 
        public string EventLocation { get; set; } // nvarchar(400)

        public string EventDateTime { get; set; } // nvarchar(400)
    }
}
