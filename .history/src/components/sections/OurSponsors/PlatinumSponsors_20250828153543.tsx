import React from "react";

type Sponsor = {
  name: string;
  initials: string;
  gradient: string; // Tailwind gradient classes
};

// Dynamic list of platinum sponsors
const sponsors: Sponsor[] = [
  { name: "TechCorp", initials: "T", gradient: "from-purple-500 to-blue-500" },
  { name: "InnovateLabs", initials: "I", gradient: "from-green-500 to-teal-500" },
  { name: "FutureTech", initials: "F", gradient: "from-orange-500 to-red-500" },
  // Add more sponsors as needed
];

const PlatinumSponsors = () => {
  return (
    <section className="py-12 bg-gray-900">
      {/* Section Title */}
      <h3 className="text-3xl md:text-4xl font-extrabold text-purple-400 text-center mb-12">
        Platinum Sponsors
      </h3>

      {/* Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="glass-card bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            {/* Point 1: Icon with gradient */}
            <div className="bg-white rounded-xl p-6 mb-4 shadow-lg">
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-lg bg-gradient-to-r ${sponsor.gradient} shadow-inner`}
              >
                <span className="text-white font-extrabold text-2xl">
                  {sponsor.initials}
                </span>
              </div>
            </div>

            {/* Point 2: Sponsor Name */}
            <div className="text-white/90 font-semibold text-lg md:text-xl mb-2">
              {sponsor.name}
            </div>

            {/* Point 3: Optional description or tagline */}
            <p className="text-white/60 text-sm text-center">
              Leading innovator in technology and solutions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatinumSponsors;
