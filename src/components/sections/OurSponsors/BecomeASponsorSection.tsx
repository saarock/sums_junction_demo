import React from "react";
import { Button } from "../../ui/button";
import UnderLineStyle from "../../UnderLineStyle";
import { Phone, Mail } from "lucide-react";
import PrimaryButton from "../../PrimaryButton";

const BecomeASponsorSection = () => {
  return (
    <section className="relative py-20">
      <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto flex justify-center items-center flex-col relative overflow-hidden shadow-2xl">
        {/* Glow border effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[0_0_60px_-15px_rgba(139,92,246,0.7)] pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
          Got Questions Still? Want To Discuss In Detail?
        </h2>
        <UnderLineStyle />

        {/* Contact Numbers */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8 mt-10">
          <a
            href="tel:+9779865995066"
            className="flex items-center gap-2 text-xl font-semibold text-white hover:text-purple-400 transition-colors"
          >
            <Phone className="w-6 h-6" /> +977 9865995066
          </a>
          <a
            href="tel:+358504750053"
            className="flex items-center gap-2 text-xl font-semibold text-white hover:text-purple-400 transition-colors"
          >
            <Phone className="w-6 h-6" /> +358 504750053
          </a>
        </div>

        {/* Contact Button */}

        <a
          href="mailto:manish.khadka@cogknit.io?subject=Sponsor"
          className="flex items-center gap-2"
        >
          <PrimaryButton text="Contact Us"></PrimaryButton>
        </a>
      </div>
    </section>
  );
};

export default BecomeASponsorSection;
