import React from 'react';

type Sponsor = {
  name: string;
  initials: string;
  gradient: string; // Tailwind gradient classes
};

const goldSponsors: Sponsor[] = [
  { name: 'StartupHub', initials: 'S', gradient: 'from-yellow-500 to-orange-500' },
  { name: 'DevTools Inc', initials: 'D', gradient: 'from-blue-500 to-purple-500' },
  { name: 'CloudSolutions', initials: 'C', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'DataMind', initials: 'D', gradient: 'from-green-500 to-emerald-500' },
  // Add more sponsors as needed
];

const GoldSponsors = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl mb-8 text-yellow-400 font-semibold">Gold Sponsors</h3>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {goldSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300"
          >
            {/* Sponsor Icon */}
            <div className="bg-white rounded-xl p-4 mb-3">
              <div
                className={`w-12 h-12 mx-auto bg-gradient-to-r ${sponsor.gradient} rounded-lg flex items-center justify-center`}
              >
                <span className="text-white font-bold">{sponsor.initials}</span>
              </div>
            </div>

            {/* Sponsor Name */}
            <div className="text-white/90 font-medium text-sm">{sponsor.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldSponsors;
