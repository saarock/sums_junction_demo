import React from "react";
import { Button } from "../../ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import PrimaryButton from "../../PrimaryButton";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex items-center pt-16"
      >
   

        <div className="hero-video">
          <video src="./videos/hero_video.pm4"></video>
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 font-bold text-white leading-none tracking-tight">
                Junction X
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white/90 font-light">
                Kathmandu
              </h2>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
                The premier tech hackathon is coming to Kathmandu. Join 200+
                developers, designers, and innovators for 48 hours of creation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-white/90">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-lg">December 03-05, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-lg">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-lg">200+ Participants</span>
              </div>
            </div>

            <div className="flex justify-center item-center text-white/90 pb-11">
              <p className="text-center">
                This is more than a hackathon. It's a movement. And you can be
                part of building it.
              </p>
            </div>
            <PrimaryButton
              text="
                Partner With Us
           
           "
            />

            {/*  Can use in the future */}
            {/* <div className="max-w-sm mx-auto">
              <div className="text-center mb-4">
                <div className="text-white/90 text-lg mb-2">
                  Early Bird Registration Open
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="text-white/70 text-sm">
                  150 of 200 spots filled
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
