import React, { useState } from "react";
import { Input } from "../../ui/input";
import UnderLineStyle from "../../UnderLineStyle";
import PrimaryButton from "../../PrimaryButton";

const ReadytoJoin = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Simple email regex check
  const isValidEmail = (value:string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleClick = (e:any) => {
    if (!email) {
      e.preventDefault();
      setError("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      e.preventDefault();
      setError("Please enter a valid email address.");
      return;
    }
    setError(""); // clear error if valid
  };

  const mailtoLink = `mailto:manish.khadka@cogknit.io?subject=Subscription&body=User email: ${encodeURIComponent(
    email
  )}`;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r animate-gradient-x opacity-30"></div>

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
                applications and tickets open!
              </p>

              {/* Email + Button Combined */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-80 input bg-white/10 border border-white/30 text-white  focus:ring-2 focus:ring-purple-500"
                />

                <a href={mailtoLink} onClick={handleClick}>
                  <PrimaryButton text="Pre-Register Me" isMb={false} />
                </a>
              </div>

              {/* Show error message */}
              {error && (
                <p className="text-red-400 text-sm mt-3">{error}</p>
              )}
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
