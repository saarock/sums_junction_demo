

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

import { HeroSection, WhatIsJunctionX, WhyKathmandu } from "./components/sections";

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

      {/* Countdown Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* <Countdown /> */}
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-900/5 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl text-white/90 mb-8">Proudly Organized By</h3>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center max-w-4xl mx-auto">
                <div className="group cursor-pointer text-center">
                  <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                    <div className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
                      <img
                        src="/cogknit-logo.png"
                        alt="Cogknit Logo"
                        className="h-12 md:h-16 mx-auto object-contain filter contrast-125"
                      />
                    </div>
                    <p className="text-white/80 text-lg">Cogknit Oy</p>
                  </div>
                </div>
                <div className="group cursor-pointer text-center">
                  <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                    <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
                      <img
                        src="/sums-nepal-logo.png"
                        alt="SUMS Nepal Logo"
                        className="h-16 md:h-20 mx-auto object-contain filter contrast-125"
                      />
                    </div>
                    <p className="text-white/80 text-lg">SUMS Nepal</p>
                  </div>
                </div>
                <div className="group cursor-pointer text-center">
                  <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                    <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
                      <img
                        src="/kings-college-logo.png"
                        alt="King's College Logo"
                        className="h-16 md:h-20 mx-auto object-contain filter contrast-125"
                      />
                    </div>
                    <p className="text-white/80 text-lg">King's College Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Junction Section with Official Brand Text */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-900/5 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="glass-button mb-8 px-10 py-4 text-xl border-0 text-white">
                <Globe className="w-7 h-7 mr-4 text-purple-400" />
                What is Junction ?
              </Badge>

              <h2 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Global Innovation, Local Impact
              </h2>
            </div>

            {/* Official Junction Brand Text */}
            <div className="glass-card rounded-3xl p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed">
                Junction is a global hackathon and tech community, spreading the word of empowering people to create
                with technology. The JunctionX program was created for local tech communities around the world to have a
                way to create their own hackathon, and bring developers, designers and all other techies together. All
                JunctionX events are individual events created by the local community, supported by Junction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="glass-card rounded-3xl p-2 hover:scale-105 transition-all duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745847768382-816bfc32e1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXRobWFuZHUlMjBuZXBhbCUyMHNreWxpbmV8ZW58MXx8fHwxNzU1NTE1Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Innovation and collaboration"
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="glass-card rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center glass-subtle rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      10
                    </div>
                    <div className="text-white/70">Years</div>
                  </div>
                  <div className="text-center glass-subtle rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      2500+
                    </div>
                    <div className="text-white/70">Projects</div>
                  </div>
                  <div className="text-center glass-subtle rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      20K+
                    </div>
                    <div className="text-white/70">Participants</div>
                  </div>
                  <div className="text-center glass-subtle rounded-2xl p-4 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      107
                    </div>
                    <div className="text-white/70">Nationalities</div>
                  </div>
                </div>

                <p className="text-purple-300 text-lg mb-4"></p>
                <Button
                  className="glass-button border-0 text-white hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://hackjunction.com", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Junction Main Site
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      {/* <Tracks /> */}

      {/* How to Apply Section */}
      {/* <HowToApply /> */}

      {/* Partnership Section - Completely Redesigned for Sponsors */}
      <section id="partners" className="py-20 relative overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-black/30 to-blue-900/15"></div>

          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Floating Money Icons for Sponsor Appeal */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                }}
              >
                {i % 4 === 0 && <Trophy className="w-4 h-4 text-yellow-400" />}
                {i % 4 === 1 && <Star className="w-3 h-3 text-blue-400" />}
                {i % 4 === 2 && <Zap className="w-4 h-4 text-purple-400" />}
                {i % 4 === 3 && <Target className="w-3 h-3 text-green-400" />}
              </div>
            ))}
          </div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-8xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <Badge className="glass-button mb-8 px-10 py-4 text-xl border-0 text-white animate-pulse">
                <Handshake className="w-7 h-7 mr-4 text-purple-400" />
                Partnership Opportunities
              </Badge>

              <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 bg-gradient-to-r from-white via-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent leading-tight tracking-tight">
                INVEST IN THE
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  FUTURE OF NEPAL
                </span>
              </h2>

              <p className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Connect with Nepal's brightest tech talent and amplify your brand to 200+ innovators, media coverage,
                and global exposure! 🚀
              </p>

              {/* Key Sponsor Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: Users,
                    label: "Hackers",
                    value: "200+",
                    color: "text-purple-400",
                  },
                  {
                    icon: Globe,
                    label: "InnoFest Patricipant",
                    value: "2000+",
                    color: "text-blue-400",
                  },
                  {
                    icon: Award,
                    label: "Brand Exposure",
                    value: "3 Days",
                    color: "text-green-400",
                  },
                  {
                    icon: Network,
                    label: "Networking",
                    value: "Premium",
                    color: "text-orange-400",
                  },
                ].map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <div
                      key={index}
                      className="glass-card rounded-3xl p-6 text-center hover:scale-105 transition-all duration-300 border-2 border-white/10"
                    >
                      <IconComponent className={`w-10 h-10 mx-auto ${metric.color}`} />
                      <div className={`text-3xl mb-1 ${metric.color}`}>{metric.value}</div>
                      <div className="text-white/70">{metric.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Partnership Packages */}
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Challenge Owner Partners - Premium Tier */}
              <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden border-2 border-purple-500/40">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-40"></div>

                {/* Premium Badge */}

                <div className="relative z-10">
                  <div className="absolute -top bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm ">
                    PREMIUM
                  </div>
                  <div className="glass-subtle rounded-3xl p-6 mb-6 text-center">
                    <Target className="w-16 h-16 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-2xl text-white mb-2">Challenge Owner</h3>
                    <p className="text-purple-300 text-lg">Drive Innovation</p>
                  </div>

                  <div className="mb-6">
                    {/* <div className="text-4xl text-purple-400 mb-2">
                      Starting at
                    </div>
                    <div className="text-white/60">
                      Contact for Pricing
                    </div> */}
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "🎯 Dedicated Challenge Track",
                      "⭐ Premium Branding",
                      "💡 Direct Access to Solutions",
                      "🏆 Exclusive Demo Day",
                      "👥 Top Talent Pipeline",
                      "📺 Media Spotlight",
                      "🤝 Private Networking Access",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full glass-button text-lg py-4 rounded-2xl border-0 text-white hover:scale-105 transition-all duration-300">
                    <a href="mailto:manish.khadka@sumsnepal">Be Challenge Owner</a>
                  </Button>
                </div>
              </div>

              {/* Event Sponsors - Most Popular */}
              <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden border-2 border-blue-500/40 transform lg:scale-110">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-40"></div>

                <div className="relative z-10">
                  {/* Most Popular Badge */}
                  <div className="absolute -top bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm ">
                    MOST POPULAR
                  </div>

                  <div className="glass-subtle rounded-3xl p-6 mb-6 text-center">
                    <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-2xl text-white mb-2">Event Sponsor</h3>
                    <p className="text-blue-300 text-lg">Maximum Impact</p>
                  </div>

                  <div className="mb-6">
                    {/* <div className="text-4xl text-blue-400 mb-2">
                      Best Value
                    </div>
                    <div className="text-white/60">
                      Multiple Tiers Available
                    </div> */}
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      "🌟 Brand Awareness",
                      "📣 Marketing Exposure",
                      "🎤 Speaking Opportunities",
                      "🎪 Branded Booth Space",
                      "📰 Press Coverage",
                      "🥂 Private Access & Perks",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full glass-button text-lg py-4 rounded-2xl border-0 text-white hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                  >
                    <a href="mailto:manish.khadka@sumsnepal">Choose Sponsor Tier</a>
                  </Button>
                </div>
              </div>

              {/* InnoFest Partners - International */}
              <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden border-2 border-green-500/40">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-3xl opacity-40"></div>

                {/* <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm animate-pulse">
                  INTERNATIONAL
                </div> */}

                <div className="relative z-10">
                  {/* International Badge */}
                  <div className="absolute  bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm ">
                    INTERNATIONAL
                  </div>
                  <div className="glass-subtle rounded-3xl p-6 mb-6 text-center">
                    <Globe className="w-16 h-16 text-green-400 mx-auto mb-3" />
                    <h3 className="text-2xl text-white mb-2">InnoFest Partner</h3>
                    <p className="text-green-300 text-lg">Global Reach</p>
                  </div>

                  <div className="mb-6">
                    {/* <div className="text-4xl text-green-400 mb-2">
                      Exclusive
                    </div>
                    <div className="text-white/60">
                      Finnish Pavilion Access
                    </div> */}
                  </div>

                  <div className="space-y-3 mb-8 ">
                    {[
                      "🇫🇮 Finnish Pavilion Spotlight",
                      "🌍 Cross-Border Networking",
                      "🎓 University Partnerships & Partner School Visit",
                      "🎤 Thought Leadership",
                      "🧑‍🎓 Talent Pipeline",
                      "🔗 Cultural Exchange",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full glass-button text-lg py-4 rounded-2xl border-0 text-white hover:scale-105 transition-all duration-300">
                    <a href="mailto:manish.khadka@sumsnepal">Support InnoFest</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Why Sponsor Section */}
            <div className="glass-card rounded-3xl p-12 mb-20 relative overflow-hidden border-2 border-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl opacity-30"></div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl mb-8 text-center bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Why Sponsor Junction X Kathmandu? 🤔
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {[
                    {
                      icon: Users,
                      title: "Top Talent Access",
                      description: "Direct pipeline to Nepal's brightest developers, designers, and entrepreneurs",
                      color: "text-purple-400",
                    },
                    {
                      icon: Globe,
                      title: "Market Entry",
                      description: "Perfect gateway to enter the rapidly growing Nepalese tech market",
                      color: "text-blue-400",
                    },
                    {
                      icon: Star,
                      title: "Brand Building",
                      description: "Associate your brand with innovation, youth, and technological advancement",
                      color: "text-green-400",
                    },
                    {
                      icon: Network,
                      title: "ROI Focused",
                      description: "Measurable outcomes: leads, partnerships, talent acquisition, and brand awareness",
                      color: "text-orange-400",
                    },
                  ].map((reason, index) => {
                    const IconComponent = reason.icon
                    return (
                      <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
                        <div className="glass-subtle rounded-3xl p-6 mb-4">
                          <IconComponent className={`w-12 h-12 mx-auto ${reason.color}`} />
                        </div>
                        <h4 className="text-xl text-white mb-3">{reason.title}</h4>
                        <p className="text-white/70">{reason.description}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="text-center">
                  <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                    Join global brands investing in Nepal's tech future. Limited sponsorship slots available - secure
                    your partnership today! ⚡
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      className="glass-button text-xl px-12 py-6 rounded-2xl border-0 text-white hover:scale-110 transition-all duration-300 animate-pulse"
                      onClick={() =>
                        document.getElementById("contact")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      <Handshake className="w-6 h-6 mr-3" />
                      Become a Sponsor
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-subtle text-xl px-12 py-6 rounded-2xl border border-white/20 text-white hover:scale-110 hover:bg-white/10 transition-all duration-300 bg-transparent"
                    >
                      <ExternalLink className="w-6 h-6 mr-3" />
                      Download Prospectus
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add floating animation keyframes */}
        <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-10px) rotate(120deg);
            }
            66% {
              transform: translateY(5px) rotate(240deg);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Why Hackers Will Love It */}
      <section id="hackers" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-12xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="glass-button mb-6 px-6 py-3 border-0 text-white">🏆 For Hackers</Badge>
              <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Why Hackers Will Love It
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card rounded-3xl p-8 text-center hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="glass-subtle rounded-2xl p-4 w-fit mx-auto mb-6">
                  <Trophy className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-xl mb-4 text-white">Cash Prizes 💰</h3>
                <p className="text-white/70 leading-relaxed">Cash prizes for winners & runner-ups</p>
              </div>

              <div className="glass-card rounded-3xl p-8 text-center hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="glass-subtle rounded-2xl p-4 w-fit mx-auto mb-6">
                  <Zap className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl mb-4 text-white">Pre-Incubation 🚀</h3>
                <p className="text-white/70 leading-relaxed">3-month pre-incubation program for the top 3 teams</p>
              </div>

              <div className="glass-card rounded-3xl p-8 text-center hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="glass-subtle rounded-2xl p-4 w-fit mx-auto mb-6">
                  <Star className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl mb-4 text-white">Golden Ticket ✈️</h3>
                <p className="text-white/70 leading-relaxed">
                  Golden Ticket to JUNCTION 2026 Main Event in Finland for the final winner
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 text-center hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="glass-subtle rounded-2xl p-4 w-fit mx-auto mb-6">
                  <Users className="w-12 h-12 text-green-400" />
                </div>
                <h3 className="text-xl mb-4 text-white">Plus More! ✨</h3>
                <p className="text-white/70 leading-relaxed">Exclusive perks, resources & networking opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-green-900/5 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Let's Connect! 💬
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Got questions? Want to partner with us? Just want to say hi? We'd love to hear from you! Drop us a
                message and let's make some magic happen ✨
              </p>
            </div>

            <ContactForm />

            {/* Social Links */}
            <div className="text-center mt-12">
              <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl mb-6 text-white">Follow the Journey 📱</h3>
                <div className="flex justify-center gap-6">
                  <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    TikTok
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300"
                  >
                    Instagram
                  </Button>
                </div>
              </div>
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
