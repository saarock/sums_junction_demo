

import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback"
import { Navigation } from "./components/Navigation";
import { ContactForm } from "./components/ContactForm";

import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Globe,
  Target,
  Handshake,
  Star,
  Zap,
  Award,
  Network,
  Briefcase,
  ExternalLink,
  Code,
  Lightbulb,
  DollarSign,
  UserCheck,
  Mail,
} from "lucide-react"

import { EventDetails, HeroSection, WhatIsJunctionX, WhyKathmandu } from "./components/sections";

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navigation />
      <HeroSection/>
      <WhatIsJunctionX/>
      <WhyKathmandu/>
      <EventDetails/>
     

     

      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">Our Sponsors</h2>
            <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto">
              We're grateful to our amazing sponsors who make Junction X Kathmandu possible
            </p>

            {/* Platinum Sponsors */}
            <div className="mb-12">
              <h3 className="text-2xl mb-8 text-purple-400 font-semibold">Platinum Sponsors</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium">TechCorp</div>
                </div>

                <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">I</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium">InnovateLabs</div>
                </div>

                <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">F</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium">FutureTech</div>
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-12">
              <h3 className="text-2xl mb-8 text-yellow-400 font-semibold">Gold Sponsors</h3>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-4 mb-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-sm">StartupHub</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-4 mb-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">D</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-sm">DevTools Inc</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-4 mb-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-sm">CloudSolutions</div>
                </div>

                <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-xl p-4 mb-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">D</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-sm">DataMind</div>
                </div>
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl mb-8 text-gray-300 font-semibold">Silver Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
                <div className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">C</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-xs">CodeAcademy</div>
                </div>

                <div className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-pink-500 to-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">T</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-xs">TechMeetup</div>
                </div>

                <div className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-teal-500 to-cyan-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">D</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-xs">DigitalExpat</div>
                </div>

                <div className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-emerald-500 to-green-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">W</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-xs">WebWorks</div>
                </div>

                <div className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-violet-500 to-purple-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">A</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-xs">AppLab</div>
                </div>

                <div className="glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-lg p-3 mb-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">T</span>
                    </div>
                  </div>
                  <div className="text-white/90 font-medium text-xs">TechStartup</div>
                </div>
              </div>
            </div>

            {/* Become a Sponsor Section */}
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl mb-4 text-white font-bold">Become a Sponsor</h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join our mission to empower the next generation of tech innovators in Nepal. Get your brand in front of
                200+ talented developers and entrepreneurs.
              </p>
              <Button className="glass-button px-8 py-3 text-lg rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
                View Sponsorship Packages
              </Button>
            </div>
          </div>
        </div>
      </section>


  

  
      <footer className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Junction X Kathmandu */}
              <div>
                <h3 className="text-2xl mb-4 text-white font-bold">Junction X Kathmandu</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  The premier tech hackathon coming to Nepal. Join us for 48 hours of innovation, collaboration, and
                  creation with the brightest minds in tech.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="glass-button px-6 py-2 rounded-xl border-0 text-white hover:scale-105 transition-all duration-300">
                    Register Now
                  </Button>
                  <Button
                    variant="outline"
                    className="glass-subtle px-6 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 bg-transparent"
                  >
                    Get Involved
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
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
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl mb-4 text-white font-semibold">Contact</h3>
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
                © 2024 Junction X Kathmandu. Brought to you by SUMS Nepal & King's College Nepal | Powered by Cogknit Oy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
