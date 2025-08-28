import React from 'react';

type Sponsor = {
  name: string;
  initials: string;
  gradient: string; // Tailwind gradient classes
};

const silverSponsors: Sponsor[] = [
  { name: 'CodeAcademy', initials: 'C', gradient: 'from-indigo-500 to-purple-500' },
  { name: 'TechMeetup', initials: 'T', gradient: 'from-pink-500 to-red-500' },
  { name: 'DigitalExpat', initials: 'D', gradient: 'from-teal-500 to-cyan-500' },
  { name: 'WebWorks', initials: 'W', gradient: 'from-emerald-500 to-green-500' },
  { name: 'AppLab', initials: 'A', gradient: 'from-violet-500 to-purple-500' },
  { name: 'TechStartup', initials: 'T', gradient: 'from-amber-500 to-orange-500' },
  // Add more sponsors if needed
];

const SilverSponsors = () => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl mb-8 text-gray-300 font-semibold">Silver Sponsors</h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {silverSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white rounded-lg p-3 mb-2">
              <div
                className={`w-8 h-8 mx-auto ${sponsor.gradient} rounded flex items-center justify-center`}
              >
                <span className="text-white font-bold text-xs">{sponsor.initials}</span>
              </div>
            </div>
            <div className="text-white/90 font-medium text-xs">{sponsor.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SilverSponsors;
