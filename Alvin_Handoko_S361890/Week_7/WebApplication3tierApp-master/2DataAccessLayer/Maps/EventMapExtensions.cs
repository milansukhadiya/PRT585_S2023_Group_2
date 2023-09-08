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
    public static class EventMapExtensions
    {
        public static EventModel ToEventModel(this Event src)
        {
            var dst = new EventModel();

            dst.EventId = src.EventId;
            dst.EventLocation = src.EventLocation;
            dst.EventName = src.EventName;
            dst.EventDateTime = src.EventDateTime;

            return dst;
        }

        public static Event ToEvent(this EventModel src, Event dst = null)
        {
            if (dst == null)
            {
                dst = new Event();
            }

            dst.EventId = src.EventId;
            dst.EventLocation = src.EventLocation;
            dst.EventName = src.EventName;
            dst.EventDateTime = src.EventDateTime;

            return dst;
        }
    }
}
