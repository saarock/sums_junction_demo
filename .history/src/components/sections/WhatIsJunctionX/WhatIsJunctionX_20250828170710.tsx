import { Code, DollarSign, Lightbulb, Trophy, UserCheck } from "lucide-react";
import React, { useCallback } from "react";
import PrimaryButton from "../../PrimaryButton";

const WhatIsJunctionX = () => {
  const redirect = useCallback(() => {
    const element = document.createElement("a");
    element.href = "https://www.hackjunction.com/";
    element.target = "_blank";
    element.click();
  }, []);

  return (
    <>
      {/* What is Junction X Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
              What is Junction X?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-16 max-w-3xl mx-auto">
              Junction X is the world's leading hackathon series, bringing
              together the brightest minds to create innovative solutions that
              shape the future. Now coming to Kathmandu for the first time.
            </p>
            <PrimaryButton
              onClick={redirect}
              text="
                Explore
           
           "
            />

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="glass-subtle rounded-xl p-4 w-fit mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">
                  48 Hours of Coding
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Non-stop development session where ideas transform into
                  reality
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="glass-subtle rounded-xl p-4 w-fit mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">
                  Innovation Focus
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Tackle real-world problems with cutting-edge technology
                  solutions
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="glass-subtle rounded-xl p-4 w-fit mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">
                   Cash Prize
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Compete for Cash Prize and startup funding opportunities
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="glass-subtle rounded-xl p-4 w-fit mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">
                  Golden Ticket to Finland
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Participation in Global Hackathon in Finland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsJunctionX;
