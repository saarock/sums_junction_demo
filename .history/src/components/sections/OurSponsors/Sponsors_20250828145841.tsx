import React from 'react'
import PlatinumSponsors from './PlatinumSponsors'
import GoldSponsors from './GoldSponsors'

const Sponsors = () => {
  return (
 <>
    <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">Our Sponsors</h2>
            <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto">
              We're grateful to our amazing sponsors who make Junction X Kathmandu possible
            </p>

            <PlatinumSponsors/>
            <GoldSponsors/>



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


 </>
  )
}

export default Sponsors