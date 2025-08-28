import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Navigation } from "./components/Navigation";
import { ContactForm } from "./components/ContactForm";


import {
  EventDetails,
  HeroSection,
  Sponsors,
  WhatIsJunctionX,
  WhyKathmandu,
} from "./components/sections";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <Navigation />
      <HeroSection />
      <WhatIsJunctionX />
      <WhyKathmandu />
      <EventDetails />
      <Sponsors />
      <Footer />
    </div>
  );
}
