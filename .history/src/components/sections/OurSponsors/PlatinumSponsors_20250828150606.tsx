import React from "react";

type Sponsor = {
  name: string;
  initials: string;
  gradient: string; // Tailwind gradient classes
};

const sponsors: Sponsor[] = [
  { name: "TechCorp", initials: "T", gradient: "from-purple-500 to-blue-500" },
  {
    name: "InnovateLabs",
    initials: "I",
    gradient: "from-green-500 to-teal-500",
  },
  { name: "FutureTech", initials: "F", gradient: "from-orange-500 to-red-500" },
  // Add more sponsors here
];

const PlatinumSponsors = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl mb-8 text-purple-400 font-semibold">
        Platinum Sponsors
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-xl p-6 mb-4">
              <div
                className={`w-16 h-16 mx-auto ${sponsor.gradient} rounded-lg flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg">
                  {sponsor.initials}
                </span>
              </div>
            </div>
            <div className="text-white/90 font-medium">{sponsor.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatinumSponsors;
