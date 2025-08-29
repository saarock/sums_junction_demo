import React from "react";
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";
import BecomeASponsorSection from "./BecomeASponsorSection";
import SilverSponsors from "./SilverSponsors";
import { Button } from "../../ui/button";
import {
  Briefcase,
  Globe,
  Target,
  Star,
  Award,
  Users,
  Megaphone,
  Calendar,
  Book,
  Heart,
} from "lucide-react";
import UnderLineStyle from "../../UnderLineStyle";
import PrimaryButton from "../../PrimaryButton";

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
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/15 to-green-500/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
              Partner With Us
            </h2>
            <UnderLineStyle />
            <p className="text-lg text-white/80 mb-3 max-w-2xl mx-auto mt-6">
              INVEST IN THE FUTURE OF NEPAL
            </p>
            <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto">
              🚀 Fuel the next wave of innovation in Nepal and put your brand in
              the spotlight; reaching 200+ hackers, 2,000+ participants,
              Nepalese and Finnish decision-makers, partners, and media, with
              global buzz guaranteed!
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
                  { text: "Dedicated Challenge Track", icon: Star },
                  { text: "Premium Branding", icon: Award },
                  { text: "Direct Access to Solutions", icon: Users },
                  { text: "Exclusive Demo Day", icon: Calendar },
                  { text: "Top Talent Pipeline", icon: Users },
                  { text: "Media Spotlight", icon: Megaphone },
                  { text: "Private Networking Access", icon: Users },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <benefit.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:manish.khadka@cogknit.io?subject=Challenge Owner">
                <PrimaryButton text="Contact Us"></PrimaryButton>
              </a>
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
                  { text: "Brand Promotion", icon: Megaphone },
                  { text: "Marketing Exposure", icon: Megaphone },
                  { text: "Speaking Opportunities", icon: Star },
                  { text: "Branded Booth Space", icon: Briefcase },
                  { text: "Press Coverage", icon: Book },
                  { text: "Private Networking Access", icon: Users },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <benefit.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:manish.khadka@cogknit.io?subject=Event Sponsor">
                <PrimaryButton text="Contact Us"></PrimaryButton>
              </a>
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
                  { text: "Finnish Pavilion Spotlight", icon: Star },
                  { text: "Cross-Border Networking", icon: Users },
                  { text: "Brand Promotion", icon: Megaphone },
                  { text: "Marketing Exposure", icon: Megaphone },
                  { text: "Talent Pipeline", icon: Users },
                  { text: "Speaking Opportunities", icon: Star },
                  { text: "Dedicated Workshops Hosting", icon: Book },
                  { text: "Branded Booth Space", icon: Briefcase },
                  { text: "Press Coverage", icon: Book },
                  { text: "Private Networking Access", icon: Users },
                  {
                    text: "University Partnerships & Partner School Visits",
                    icon: Book,
                  },
                  { text: "Cultural Exchange", icon: Heart },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <benefit.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:avinash.dhital@cogknit.io?subject=Event Sponsor">
                <PrimaryButton text="Contact Us"></PrimaryButton>
              </a>
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
