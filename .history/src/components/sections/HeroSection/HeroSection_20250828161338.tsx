import React from 'react'
import { Button } from '../../ui/button'
import { Calendar, MapPin, Users } from 'lucide-react'

const HeroSection = () => {
  return (
    <>
       {/* Hero Section */}
          <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-16">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-pink-900/70"></div>
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(139, 69, 19, 0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(139, 69, 19, 0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(75, 0, 130, 0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(75, 0, 130, 0.1) 75%)
                    `,
                    backgroundSize: "60px 60px",
                    backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
                  }}
                ></div>
              </div>
            </div>
    
            <div className="relative container mx-auto px-6 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 font-bold text-white leading-none tracking-tight">
                    Junction X
                  </h1>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white/90 font-light">Kathmandu</h2>
    
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
                    The premier tech hackathon is coming to Kathmandu. Join 200+ developers, designers, and innovators for
                    48 hours of creation.
                  </p>
                </div>
    
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                  <div className="flex items-center gap-3 text-white/90">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-lg">March 15-17, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-lg">Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-lg">200+ Participants</span>
                  </div>
                </div>
    
    <div className='flex justify-center item-center'>
      <p className='text-center'>
        This is more than a hackathon. It's a movement. And you can be part of building it.
      </p>
    </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-4 rounded-xl border-0 hover:scale-105 transition-all duration-300 font-semibold"
                  >
                   Partner With Us
                  </Button>
             
                </div>
    
                <div className="max-w-sm mx-auto">
                  <div className="text-center mb-4">
                    <div className="text-white/90 text-lg mb-2">Early Bird Registration Open</div>
                    <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <div className="text-white/70 text-sm">150 of 200 spots filled</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default HeroSection