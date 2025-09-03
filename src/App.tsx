import { Navigation } from "./components/Navigation";

import {
  EventDetails,
  HeroSection,
  PartnerLogos,
  Sponsors,
  WhatIsJunctionX,
} from "./components/sections";
import Footer from "./components/Footer";
import { Countdown } from "./components/Countdown";

export default function App() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black relative">
        <HeroSection />
        <Countdown />
        <PartnerLogos />
        <WhatIsJunctionX />
        {/* <WhyKathmandu /> */}
        <EventDetails />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
