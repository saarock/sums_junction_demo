import React from 'react'

const ReadytoJoin = () => {
  return (
  <>
    <section className="py-20 relative">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl mb-6 text-white font-bold">
                    Ready to Join?
                  </h2>
                  <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                    Registration is free and includes three days of building,
                    learning, and networking experience!
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

export default ReadytoJoin