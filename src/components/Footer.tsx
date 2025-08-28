import { Calendar, Mail, MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative py-20 bg-black text-white overflow-hidden">
        {/* Background net design */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,255,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Responsive layout */}
            <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start md:text-left gap-10">
              {/* Junction X Kathmandu */}
              <div className="max-w-md">
                <h3 className="text-2xl mb-4 font-bold">
                  Junction X Kathmandu
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  The premier tech hackathon coming to Nepal. Join us for 48
                  hours of innovation, collaboration, and creation with the
                  brightest minds in tech.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl mb-4 font-semibold">Contact</h3>
                <div className="space-y-3 text-white/70">
                  <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>contact@cogknit.io</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>December 03-05, 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom border */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Junction X Kathmandu. Brought to
                you by{" "}
                <span className="font-medium text-white">SUMS Nepal</span> |
                Powered by{" "}
                <span className="font-medium text-white">Cogknit Oy</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
