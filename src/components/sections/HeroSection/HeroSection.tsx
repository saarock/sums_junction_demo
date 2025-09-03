import React, { useEffect, useRef } from "react";
import { Button } from "../../ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import PrimaryButton from "../../PrimaryButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const elements = cardRef.current.querySelectorAll(
        "h1, h2, p, .flex.items-center, a"
      );

      gsap.fromTo(
        elements,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2, // each element animates with 0.2s delay
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-16"
    >
      <div className="hero-video">
        <video
          src="./videos/hero_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div ref={cardRef} className="max-w-4xl mx-auto text-center glass-card">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 font-bold text-white leading-none tracking-tight">
              JunctionX
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white/90 font-light">
              Kathmandu
            </h2>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              The premier Finnish tech hackathon is coming to Kathmandu with
              InnoFest side event. Join 200+ hackers (developers, designers,
              and innovators) and 2000+ participants for 36 hours of creation,
              entrepreneurial showcases, and career opportunities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-white/90">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-lg">December 05-07,2025</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-lg">Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-lg">
                200+ Hackers and 2000+ Participants
              </span>
            </div>
          </div>

          <div className="flex justify-center item-center text-white/90 pb-11">
            <p className="text-center">
              This is more than a hackathon. It's a movement. And you can be
              part of building it.
            </p>
          </div>
          <a href="#partners">
            <PrimaryButton text="Partner With Us" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
