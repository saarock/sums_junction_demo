import React from 'react'
import { Button } from '../../ui/button'
import { Award, Calendar, Globe, Trophy } from 'lucide-react'

const EventDetails = () => {
  return (
    <>
     {/* Event Details Section Header */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">Event Details</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-16">
              Everything you need to know about Junction X Kathmandu
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Venue Card */}
              <div className="glass-card rounded-2xl p-6 text-left">
                <h3 className="text-xl mb-4 text-white font-semibold">Venue</h3>
                <div className="space-y-3">
                  <div className="text-white/90 font-medium">Tech Hub Kathmandu</div>
                  <div className="text-white/70 text-sm">Durbarmarg, Kathmandu 44600, Nepal</div>
                  <div className="space-y-2 text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>Modern co-working space</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>24/7 access during event</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>Parking available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                      <span>Public transport accessible</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date & Time Card */}
              <div className="glass-card rounded-2xl p-6 text-left">
                <h3 className="text-xl mb-4 text-white font-semibold">Date & Time</h3>
                <div className="space-y-3">
                  <div className="text-white/90 font-medium">March 15-17, 2024</div>
                  <div className="text-white/70 text-sm">48 hours of non-stop innovation</div>
                  <div className="space-y-2 text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Starts Friday 10:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Ends Sunday 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Provided Card */}
              <div className="glass-card rounded-2xl p-6 text-left">
                <h3 className="text-xl mb-4 text-white font-semibold">What's Provided</h3>
                <div className="space-y-3">
                  <div className="space-y-2 text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-green-400" />
                      <span>High-Speed Internet</span>
                    </div>
                    <div className="text-white/60 text-xs ml-6">Blazing fast WiFi throughout the venue</div>

                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-orange-400" />
                      <span>Food & Drinks</span>
                    </div>
                    <div className="text-white/60 text-xs ml-6">Meals, snacks, and beverages provided</div>

                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span>Swag & Prizes</span>
                    </div>
                    <div className="text-white/60 text-xs ml-6">Exclusive t-shirts and amazing prizes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">Event Schedule</h2>

            <div className="glass-card rounded-3xl p-16">
              <div className="text-center">
                <div className="glass-subtle rounded-full p-8 w-fit mx-auto mb-8">
                  <Calendar className="w-16 h-16 text-purple-400" />
                </div>
                <h3 className="text-3xl mb-4 text-white font-bold">Coming Soon</h3>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  We're putting together an amazing schedule packed with workshops, mentoring sessions, and networking
                  opportunities. Stay tuned for the full agenda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">Ready to Join?</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Registration is free and includes three days of building, learning, and networking experience!
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl px-12 py-6 rounded-xl border-0 hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Register Now - It's Free!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventDetails