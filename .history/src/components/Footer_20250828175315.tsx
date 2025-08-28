import { Calendar, Mail, MapPin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <footer className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Junction X Kathmandu */}
              <div>
                <h3 className="text-2xl mb-4 text-white font-bold">
                  Junction X Kathmandu
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  The premier tech hackathon coming to Nepal. Join us for 48
                  hours of innovation, collaboration, and creation with the
                  brightest minds in tech.
                </p>
              </div>

              {/* Quick Links */}
              {/* <div>
                <h3 className="text-xl mb-4 text-white font-semibold">Quick Links</h3>
                <div className="space-y-3">
                  <div>
                    <Button variant="link" className="text-white/70 hover:text-white p-0 h-auto font-normal">
                      About
                    </Button>
                  </div>
                  <div>
                    <Button variant="link" className="text-white/70 hover:text-white p-0 h-auto font-normal">
                      Schedule
                    </Button>
                  </div>
                  <div>
                    <Button variant="link" className="text-white/70 hover:text-white p-0 h-auto font-normal">
                      Sponsors
                    </Button>
                  </div>
                  <div>
                    <Button variant="link" className="text-white/70 hover:text-white p-0 h-auto font-normal">
                      FAQ
                    </Button>
                  </div>
                  <div>
                    <Button variant="link" className="text-white/70 hover:text-white p-0 h-auto font-normal">
                      Code of Conduct
                    </Button>
                  </div>
                </div>
              </div> */}

              {/* Contact */}
              <div className="relative left-45">
                <h3 className="text-xl mb-4 text-white font-semibold">
                  Contact
                </h3>
                <div className="space-y-3 text-white/70">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>hello@junctionx-ktm.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>March 15-17, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom border */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="text-white/60">
                © {new Date().getFullYear()} Junction X Kathmandu. Brought to
                you by SUMS Nepal | Powered by Cogknit Oy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
