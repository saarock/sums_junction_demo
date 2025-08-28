import React from "react";
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
      color: "purple",
    },
    {
      title: "Date & Time",
      items: [
        { icon: Calendar1, label: "March 03-05, 2025", subLabel: "48 hours of non-stop innovation" },
        { icon: Calendar, label: "Starts Friday 10:00 AM" },
        { icon: Calendar, label: "Ends Sunday 10:00 AM" },
      ],
      color: "green",
    },
    {
      title: "What's Provided",
      items: [
        { icon: Globe, label: "High-Speed Internet", subLabel: "Blazing fast WiFi throughout the venue" },
        { icon: Trophy, label: "Food & Drinks", subLabel: "Meals, snacks, and beverages provided" },
        { icon: Award, label: "Swag & Prizes", subLabel: "Exclusive t-shirts and amazing prizes" },
      ],
      color: "orange",
    },
  ];

  return (
    <>
      <section className="py-20 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Details</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Everything you need to know about Junction X Kathmandu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`glass-card rounded-3xl p-8 border-2 border-${card.color}-500/30 hover:scale-105 transition-all duration-500 shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-6 text-${card.color}-400`}>
                  {card.title}
                </h3>

                <div className="space-y-5">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      {/* Icon or bullet */}
                      {item.icon ? (
                        <item.icon className={`w-6 h-6 text-${card.color}-400 mt-1 flex-shrink-0`} />
                      ) : (
                        <div className={`w-3 h-3 rounded-full bg-${card.color}-400 mt-2 flex-shrink-0`}></div>
                      )}

                      {/* Label & subLabel */}
                      <div className="flex flex-col">
                        <span className="text-white/90 font-medium">{item.label}</span>
                        {item.subLabel && (
                          <span className="text-white/60 text-sm mt-1">{item.subLabel}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventSchedule />
      <ReadytoJoin />
    </>
  );
};

export default EventDetails;
