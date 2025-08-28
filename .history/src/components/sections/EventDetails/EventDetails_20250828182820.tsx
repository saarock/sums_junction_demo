import { Award, Calendar, Calendar1, Globe, MapPin, Trophy } from "lucide-react";
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
      bulletColor: "bg-purple-400",
    },
    {
      title: "Date & Time",
      items: [
        { icon: Calendar1, label: "March 03-05, 2025", subLabel: "48 hours of non-stop innovation" },
        { icon: Calendar, label: "Starts Friday 10:00 AM" },
        { icon: Calendar, label: "Ends Sunday 10:00 AM" },
      ],
      bulletColor: "bg-green-400",
    },
    {
      title: "What's Provided",
      items: [
        { icon: Globe, label: "High-Speed Internet", subLabel: "Blazing fast WiFi throughout the venue" },
        { icon: Trophy, label: "Food & Drinks", subLabel: "Meals, snacks, and beverages provided" },
        { icon: Award, label: "Swag & Prizes", subLabel: "Exclusive t-shirts and amazing prizes" },
      ],
      bulletColor: "bg-orange-400",
    },
  ];

  return (
    <>
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">
              Event Details
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-16">
              Everything you need to know about Junction X Kathmandu
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 text-left"
                >
                  <h3 className="text-xl mb-4 text-white font-semibold">
                    {card.title}
                  </h3>
                  <div className="space-y-3">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-2">
                          {item.icon ? (
                            <item.icon className={`w-4 h-4 text-${card.bulletColor.replace('bg-','')} flex-shrink-0`} />
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${card.bulletColor} flex-shrink-0`}></div>
                          )}
                          <span className="text-white/90">{item.label}</span>
                        </div>
                        {item.subLabel && (
                          <span className="text-white/60 text-sm block mt-0.5">
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
      </section>

      <EventSchedule />
      <ReadytoJoin />
    </>
  );
};

export default EventDetails;
