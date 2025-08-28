import React from "react";
import { Button } from "../../ui/button";

const BecomeASponsorSection = () => {
  return (
    <>
      {/* Become a Sponsor Section */}
      <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto flex justify-center items-center flex-col">
        <h3 className="text-3xl mb-4 text-white font-bold">Become a Sponsor</h3>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-center">
          Join our mission to empower the next generation of tech innovators in
          Nepal. Get your brand in front of 200+ talented developers and
          entrepreneurs.
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl px-12 py-6 rounded-xl border-0 hover:scale-105 transition-all duration-300 font-semibold"
        >
          <a href="mailto:manish.khadka@cogknit.io?subject=Sponsor">Contact</a>
        </Button>
      </div>
    </>
  );
};

export default BecomeASponsorSection;
