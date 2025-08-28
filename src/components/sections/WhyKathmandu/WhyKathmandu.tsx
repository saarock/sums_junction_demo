import React from 'react'

const WhyKathmandu = () => {
  return (
    <>
     {/* Why Kathmandu Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="glass-card rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">Why Kathmandu?</h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Nepal's tech scene is rapidly growing, with incredible talent and innovative startups emerging across
                  the region. Junction X Kathmandu aims to accelerate this growth by bringing world-class hackathon
                  experience to South Asia.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>First international hackathon series in Nepal</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span>Gateway to South Asian tech ecosystem</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>Platform for regional talent showcase</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <img
                    src="./images/three.webp"
                    alt="Participants Expected"
                    className="w-full rounded-xl mb-4"
                  />
   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyKathmandu