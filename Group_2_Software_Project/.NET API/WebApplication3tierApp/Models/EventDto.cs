using _1CommonInfrastructure.Models;

namespace WebApplication3tierApp.Models
{
    public class EventDto
    {
        public int EventId { get; set; }
        public string EventName { get; set; }
        public string EventLocation { get; set; }

        public string EventDateTime { get; set; }

    }

    public static class EventDtoMapExtensions
    {
        public static EventDto ToEventDto(this EventModel src)
        {
            var dst = new EventDto();
            dst.EventId = src.EventId;
            dst.EventName = src.EventName;
            dst.EventLocation = src.EventLocation;
            dst.EventDateTime = src.EventDateTime;
            return dst;
        }

        public static EventModel ToEventModel(this EventDto src)
        {
            var dst = new EventModel();
            dst.EventId = src.EventId;
            dst.EventName = src.EventName;
            dst.EventLocation = src.EventLocation;
            dst.EventDateTime = src.EventDateTime;
            return dst;
        }
    }
}
