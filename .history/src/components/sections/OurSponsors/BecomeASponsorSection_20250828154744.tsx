import React from "react";
import { Button } from "../../ui/button";

const BecomeASponsorSection = () => {
  return (
    <>
      {/* Become a Sponsor Section */}
      <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto flex justify-center items-center flex-col">
        <h3 className="text-3xl mb-4 text-white font-bold">Become a Sponsor</h3>
        <p className="text-lg text-white/80 ">
          Join our mission to empower the next generation of tech innovators in
          Nepal. Get your brand in front of 200+ talented developers and
          entrepreneurs.
        </p>
        <Button className="glass-button px-8 py-3 text-lg rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
          View Sponsorship Packages
        </Button>
      </div>
    </>
  );
};

export default BecomeASponsorSection;
