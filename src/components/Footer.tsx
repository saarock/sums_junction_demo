import {
  Calendar,
  Mail,
  MapPin,
  Instagram,
  Music2,
  Linkedin,
} from "lucide-react";
import React from "react";

const organizations = [
  {
    name: "JunctionX Kathmandu",
    socials: [
      {
        label: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/",
        hover: "hover:text-pink-400",
      },
      {
        label: "TikTok",
        icon: Music2,
        url: "https://www.tiktok.com/",
        hover: "hover:text-green-400",
      },
      {
        label: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/company/",
        hover: "hover:text-blue-400",
      },
    ],
  },
];

const Footer = () => {
  return (
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
                JunctionX Kathmandu & InnoFest
              </h3>
              <div className="flex items-center gap-2 text-white/80 mb-6">
                <span className="text-lg font-medium">
                  The premier tech hackathon coming to Nepal. Join us for 36
                  hours of innovation, collaboration and creation with the
                  brightest minds in tech.
                </span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl mb-4 font-semibold">Contact</h3>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>manish.khadka@hackjunction.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                  <Calendar className="w-4 h-4" />
                  <span>December 05-07, 2025</span>
                </div>
              </div>
            </div>

            {/* Social Media - Dynamic */}
            <div>
              <h3 className="text-xl mb-4 font-semibold">Follow Us</h3>
              {organizations.map((org) => (
                <div key={org.name} className="mb-6">
                  <p className="text-white/80 font-medium mb-2">{org.name}</p>
                  <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                    {org.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-white/70 ${social.hover} transition-colors`}
                      >
                        <social.icon className="w-5 h-5" />
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom border */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-white/60 text-sm leading-relaxed">
              © {new Date().getFullYear()} JunctionX Kathmandu.{" "}
              <br className="sm:hidden" />
              Brought to you by{" "}
              <span className="font-medium text-white">SUMS Nepal</span> |
              Powered by{" "}
              <span className="font-medium text-white">Cogknit Oy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
