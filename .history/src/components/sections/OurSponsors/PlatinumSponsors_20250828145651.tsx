import React from 'react'

const PlatinumSponsors = () => {
  return (
    <>
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
    </>
  )
}

export default PlatinumSponsors