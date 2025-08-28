import { Award, Calendar, CalendarDays, Globe, MapPin, Trophy } from "lucide-react";
import EventSchedule from "../EventSchedule/EventSchedule";
import ReadytoJoin from "../ReadytoJoin/ReadytoJoin";

const EventDetails = () => {
  const cards = [
    {
      title: "Venue",
      items: [
        { icon: MapPin, label: "Kathmandu", subLabel: "Kathmandu, Nepal" },
        { icon: null, label: "Modern co-working space" },
        { icon: null, label: "24/7 access during event" },
        { icon: null, label: "Parking available" },
        { icon: null, label: "Public transport accessible" },
      ],
      bulletColor: "bg-purple-500",
    },
    {
      title: "Date & Time",
      items: [
        { icon: CalendarDays, label: "March 03-05, 2025", subLabel: "48 hours of non-stop innovation" },
        { icon: Calendar, label: "Starts Friday 10:00 AM" },
        { icon: Calendar, label: "Ends Sunday 10:00 AM" },
      ],
      bulletColor: "bg-green-500",
    },
    {
      title: "What's Provided",
      items: [
        { icon: Globe, label: "High-Speed Internet", subLabel: "Blazing fast WiFi throughout the venue" },
        { icon: Trophy, label: "Food & Drinks", subLabel: "Meals, snacks, and beverages provided" },
        { icon: Award, label: "Swag & Prizes", subLabel: "Exclusive t-shirts and amazing prizes" },
      ],
      bulletColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white font-extrabold tracking-tight">
            Event Details
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
            Everything you need to know about Junction X Kathmandu
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group glass-card rounded-2xl p-6 text-left bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                role="region"
                aria-labelledby={`card-title-${idx}`}
              >
                <h3
                  id={`card-title-${idx}`}
                  className="text-2xl mb-5 text-white font-semibold tracking-wide"
                >
                  {card.title}
                </h3>
                <div className="space-y-4">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-3">
                        {item.icon ? (
                          <item.icon
                            className={`w-5 h-5 text-${card.bulletColor.replace(
                              "bg-",
                              ""
                            )} flex-shrink-0`}
                            aria-hidden="true"
                          />
                        ) : (
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${card.bulletColor} flex-shrink-0`}
                            aria-hidden="true"
                          ></div>
                        )}
                        <span className="text-white text-base font-medium">
                          {item.label}
                        </span>
                      </div>
                      {item.subLabel && (
                        <span className="text-white/70 text-sm ml-8 block">
                          {item.subLabel}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EventSchedule />
      <ReadytoJoin />
    </section>
  );
};

export default EventDetails;