import React from "react";
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";
import BecomeASponsorSection from "./BecomeASponsorSection";
import SilverSponsors from "./SilverSponsors";
import { Button } from "../../ui/button";
import { Briefcase, Globe, Target } from "lucide-react";

const Sponsors = () => {
  return (
    <>
      <section
        className="py-20 relative bg-gray-900 overflow-hidden"
        id="partners"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-pink-900/20"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">
             Partnerships
            </h2>
            <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto">
              INVEST IN THE FUTURE OF NEPAL
            </p>
             <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto">
              INVEST IN THE FUTURE OF NEPAL
            </p>
            <p>
              Connect with Nepal's brightest tech talent and amplify your brand to 200+ innovators, media coverage, and global exposure! 🚀
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Challenge Owner */}
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 border-2 border-purple-500/40">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 mb-6">
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl text-white font-bold mb-2">
                  Challenge Owner
                </h3>
                <p className="text-purple-300">Drive Innovation</p>
              </div>

              <div className="text-left space-y-3 mb-8">
                {[
                  "Dedicated Challenge Track",
                  "Premium Branding",
                  "Direct Access to Solutions",
                  "Exclusive Demo Day",
                  "Top Talent Pipeline",
                  "Media Spotlight",
                  "Private Networking Access",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full glass-button py-3 rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
                Be Challenge Owner
              </Button>
            </div>

            {/* Event Sponsor */}
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 border-2 border-blue-500/40">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 mb-6">
                <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl text-white font-bold mb-2">
                  Event Sponsor
                </h3>
                <p className="text-blue-300">Maximum Impact</p>
              </div>

              <div className="text-left space-y-3 mb-8">
                {[
                  "Brand Promotion",
                  "Marketing Exposure",
                  "Speaking Opportunities",
                  "Branded Booth Space",
                  "Press Coverage",
                  "Private Networking Access",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full glass-button py-3 rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
                Choose Sponsor Tier
              </Button>
            </div>

            {/* InnoFest Partner */}
            <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 border-2 border-green-500/40">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 mb-6">
                <Globe className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl text-white font-bold mb-2">
                  InnoFest Partner
                </h3>
                <p className="text-green-300">Global Reach</p>
              </div>

              <div className="text-left space-y-3 mb-8">
                {[
                  "Finnish Pavilion Spotlight",
                  "Cross-Border Networking",
                  "Brand Promotion",
                  "Marketing Exposure",
                  "Talent Pipeline",
                  "Speaking Opportunities",
                  "Dedicated Workshops Hosting",
                  "Branded Booth Space",
                  "Press Coverage",
                  "Private Networking Access",
                  "University Partnerships & Partner School Visits",
                  "Cultural Exchange",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full glass-button py-3 rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
                Support InnoFest
              </Button>
            </div>
          </div>
          {/* Become a Sponsor Section */}
          <BecomeASponsorSection />
        </div>
      </section>
    </>
  );
};

export default Sponsors;
