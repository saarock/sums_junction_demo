import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
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
} from "lucide-react";

import {
  EventDetails,
  HeroSection,
  Sponsors,
  WhatIsJunctionX,
  WhyKathmandu,
} from "./components/sections";
import { Footer } from "react-day-picker";

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
