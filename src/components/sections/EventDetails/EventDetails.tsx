import {
  Award,
  Calendar,
  Globe,
  MapPin,
  Trophy,
} from "lucide-react";
import EventSchedule from "../EventSchedule/EventSchedule";
import ReadytoJoin from "../ReadytoJoin/ReadytoJoin";
import UnderLineStyle from "../../UnderLineStyle";

const EventDetails = () => {
  const cards = [
    {
      title: "Venue",
      items: [
        { icon: MapPin, label: "TBD", subLabel: "Kathmandu, Nepal" },
        { icon: Globe, label: "Modern co-working space" },
        { icon: Globe, label: "24/7 access for hackers" },
        { icon: Globe, label: "Parking available" },
        { icon: Globe, label: "Public transport accessible" },
      ],
      color: "purple",
    },
    {
      title: "Date & Time",
      items: [
        { icon: Calendar, label: "December 05-07, 2025", subLabel: "36 hours of non-stop innovation" },
        { icon: Calendar, label: "Hackathon Starts Friday 6:00 PM" },
        { icon: Calendar, label: "Hackathon Ends Sunday 6:00 AM" },
      ],
      color: "green",
    },
    {
      title: "What's Provided in Hackathon",
      items: [
        { icon: Globe, label: "High-Speed Internet", subLabel: "Blazing fast WiFi throughout the venue" },
        { icon: Trophy, label: "Food & Drinks", subLabel: "Meals, snacks, and beverages provided" },
        { icon: Award, label: "Swag & Prizes", subLabel: "Exclusive merch and amazing prizes" },
      ],
      color: "orange",
    },
    {
      title: "InnoFest Side Event",
      items: [
        { icon: Calendar, label: "December 06-07, 2025", subLabel: "2 days of entrepreneurial showcases, pitching, workshops, mentoring, and networking opportunities" },
        { icon: Calendar, label: "InnoFest Starts Saturday 9:00 AM" },
        { icon: Calendar, label: "InnoFest Ends Sunday 6:00 PM" },
      ],
      color: "orange",
    },
  ];

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-400 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-green-400 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange-400 blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16 space-y-6">
              <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
                Event Details
              </h2>
              <UnderLineStyle />
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
                Everything you need to know about JunctionX Kathmandu & InnoFest
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`group glass-card rounded-3xl p-8 text-left relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/10 backdrop-blur-xl`}
                >
                  {/* Accent Top Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-${card.color}-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <div className="mb-6">
                    <h3 className="text-2xl mb-2 text-white font-bold tracking-tight group-hover:text-white/90 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className={`w-12 h-0.5 bg-${card.color}-400 rounded-full opacity-60 group-hover:w-16 transition-all duration-300`}></div>
                  </div>

                  <div className="space-y-4">
                    {card.items.map((item, i) => (
                      <div
                        key={i}
                        className="group/item hover:bg-white/5 rounded-lg p-2 -m-2 transition-all duration-200 flex items-start gap-3"
                      >
                        <div className={`p-2 rounded-lg bg-${card.color}-400/20 group-hover/item:bg-${card.color}-400/30 transition-colors duration-200`}>
                          <item.icon className={`w-4 h-4 text-${card.color}-400`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-white/90 font-medium leading-relaxed block group-hover/item:text-white transition-colors duration-200">
                            {item.label}
                          </span>
                          {item.subLabel && (
                            <span className="text-white/60 text-sm block mt-1 leading-relaxed group-hover/item:text-white/70 transition-colors duration-200">
                              {item.subLabel}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-${card.color}-400/20 to-transparent pointer-events-none`}
                  ></div>
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
