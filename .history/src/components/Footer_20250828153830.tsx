import { Calendar, Mail, MapPin } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Logo from './Logo'

const Footer = () => {
  return (
    <>
     <footer className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Junction X Kathmandu */}
              <div>
                  <Logo 
            className=" h13 object-contain filter brightness-0 invert" // white version
           />
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
    </>
  )
}

export default Footer