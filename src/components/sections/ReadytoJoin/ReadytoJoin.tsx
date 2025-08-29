import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import UnderLineStyle from "../../UnderLineStyle";

const ReadytoJoin = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-ranimate-gradient-x opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Glow border effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[0_0_60px_-15px_rgba(139,92,246,0.7)] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
                Ready to Join?
              </h2>
              <UnderLineStyle />
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto mt-6">
                Innovators and visionaries are locking in now! Spots are
                limited—don’t let your hacking seat or InnoFest spotlight slip
                away. Pre-register and we will reach out to you ASAP when
                applications and tickets open!”
              </p>

              {/* Email + Button Combined */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-80 input bg-white/10 border border-white/30 text-white placeholder-white/60 focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-xl border-0 hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
                >
                  <a href="mailto:manish.khadka@cogknit.io?subject=subscription">
                    Pre-Register Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ReadytoJoin;
