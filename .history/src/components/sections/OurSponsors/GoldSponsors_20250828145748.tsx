import React from 'react'

const GoldSponsors = () => {
  return (
    <>
    
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
    </>
  )
}

export default GoldSponsors