import React from 'react'
import PlatinumSponsors from './PlatinumSponsors'
import GoldSponsors from './GoldSponsors'
import BecomeASponsorSection from './BecomeASponsorSection'

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

            <BecomeASponsorSection/>n



       

      
          </div>
        </div>
      </section>


 </>
  )
}

export default Sponsors