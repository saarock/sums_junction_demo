import { Code, DollarSign, Lightbulb, Trophy, UserCheck } from "lucide-react";
import React, { useCallback, useEffect, useRef } from "react";
import PrimaryButton from "../../PrimaryButton";
import UnderLineStyle from "../../UnderLineStyle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIsJunctionX = () => {
  const redirect = useCallback(() => {
    const element = document.createElement("a");
    element.href = "https://www.hackjunction.com/";
    element.target = "_blank";
    element.click();
  }, []);

  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".glass-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section className="py-20 relative" id="about">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-pink-900/70"></div>
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("./images/two.jpg")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
              What is JunctionX Kathmandu?
            </h2>
            <UnderLineStyle />
            <p className="text-lg text-white/80 leading-relaxed mb-16 mt-6 max-w-3xl mx-auto">
              From the heart of Finland’s innovation ecosystem to the vibrant
              streets of Kathmandu, Junction one of the world’s largest
              hackathons lands in Nepal for an unforgettable three-day
              celebration of creativity, technology, and entrepreneurship. Over
              the past 8 years, Junction has brought together 20,000+ innovators
              and produced 2,500+ groundbreaking projects. Now, JunctionX
              Kathmandu 2025 will ignite the dreams of the new-age Nepalese
              youth those daring to dream big, create fearlessly, and make their
              mark on the global stage.
            </p>
            <PrimaryButton onClick={redirect} text="Explore Junction" />

            {/* Feature Cards */}
            <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="glass-subtle rounded-xl p-4 w-fit mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl mb-3 text-white font-semibold">
                  36 Hours of Hacking
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Non-Stop Development Session Where Ideas Transform Into Reality
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
                  Tackle Real-World Problems With Cutting-Edge Technology Solutions
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
                  Compete For Cash Prizes And Startup Funding Opportunities
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
                  Winning Team Participate At Global Hackathon In Finland
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
