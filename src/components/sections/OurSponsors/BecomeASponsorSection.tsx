import React from "react";
import { Button } from "../../ui/button";
import UnderLineStyle from "../../UnderLineStyle";
import { Phone, Mail } from "lucide-react";

const BecomeASponsorSection = () => {
  return (
    <section className="relative py-20">
      <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto flex justify-center items-center flex-col relative overflow-hidden shadow-2xl">
        {/* Glow border effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[0_0_60px_-15px_rgba(139,92,246,0.7)] pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
          Become a Sponsor
        </h2>
        <UnderLineStyle />

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto text-center mt-4">
          Partner with us and showcase your brand to a global audience. Got
          questions? Let’s talk in detail.
        </p>

        {/* Contact Numbers */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
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
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl px-12 py-6 rounded-xl border-0 hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
        >
          <a
            href="mailto:manish.khadka@cogknit.io?subject=Sponsor"
            className="flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Contact Us
          </a>
        </Button>
      </div>
    </section>
  );
};

export default BecomeASponsorSection;
