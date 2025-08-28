import React from "react";
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";
import BecomeASponsorSection from "./BecomeASponsorSection";
import SilverSponsors from "./SilverSponsors";
import { Button } from "../../ui/button";

const Sponsors = () => {
  return (
    <>
      <section className="py-20 relative">
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-pink-900/20"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">Our Sponsors</h2>
            <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto">
              We're grateful to our amazing sponsors who make Junction X Kathmandu possible
            </p>

            {/* Platinum Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-purple-400 mb-8">Platinum Sponsors</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { name: "TechCorp", color: "from-purple-500 to-blue-500", letter: "T" },
                  { name: "InnovateLabs", color: "from-green-500 to-teal-500", letter: "I" },
                  { name: "FutureTech", color: "from-orange-500 to-red-500", letter: "F" },
                ].map((sponsor, index) => (
                  <div key={index} className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-xl p-6 mb-4">
                      <div
                        className={`w-16 h-16 mx-auto bg-gradient-to-r ${sponsor.color} rounded-lg flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-xl">{sponsor.letter}</span>
                      </div>
                    </div>
                    <div className="text-white font-medium text-lg">{sponsor.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-yellow-500 mb-8">Gold Sponsors</h3>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "StartupHub", color: "from-yellow-500 to-orange-500", letter: "S" },
                  { name: "DevTools Inc", color: "from-blue-500 to-purple-500", letter: "D" },
                  { name: "CloudSolutions", color: "from-cyan-500 to-blue-500", letter: "C" },
                  { name: "DataMind", color: "from-green-500 to-emerald-500", letter: "D" },
                ].map((sponsor, index) => (
                  <div key={index} className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-lg p-4 mb-3">
                      <div
                        className={`w-12 h-12 mx-auto bg-gradient-to-r ${sponsor.color} rounded-lg flex items-center justify-center`}
                      >
                        <span className="text-white font-bold">{sponsor.letter}</span>
                      </div>
                    </div>
                    <div className="text-white font-medium">{sponsor.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-400 mb-8">Silver Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
                {[
                  { name: "CodeAcademy", color: "from-indigo-500 to-purple-500", letter: "C" },
                  { name: "TechMeetup", color: "from-pink-500 to-red-500", letter: "T" },
                  { name: "DigitalExpat", color: "from-teal-500 to-cyan-500", letter: "D" },
                  { name: "WebWorks", color: "from-emerald-500 to-green-500", letter: "W" },
                  { name: "AppLab", color: "from-violet-500 to-purple-500", letter: "A" },
                  { name: "TechStartup", color: "from-amber-500 to-orange-500", letter: "T" },
                ].map((sponsor, index) => (
                  <div key={index} className="glass-card rounded-lg p-4 hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-lg p-3 mb-2">
                      <div
                        className={`w-8 h-8 mx-auto bg-gradient-to-r ${sponsor.color} rounded flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-sm">{sponsor.letter}</span>
                      </div>
                    </div>
                    <div className="text-white font-medium text-sm">{sponsor.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Sponsor */}
            <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl mb-4 text-white font-bold">Become a Sponsor</h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join our mission to empower the next generation of tech innovators in Nepal. Get your brand in front of
                200+ talented developers and entrepreneurs.
              </p>
              <Button className="glass-button px-8 py-3 text-lg rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
                View Sponsorship Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

   
      </section>
    </>
  );
};

export default Sponsors;
