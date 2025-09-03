import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";

const navLinks = [
  { label: "About", to: "home" },
  { label: "Details", to: "about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo className="object-contain filter brightness-0 invert" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80} // adjust for fixed navbar
                className="cursor-pointer text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </ScrollLink>
            ))}
            <ScrollLink
              to="partners"
              smooth={true}
              duration={500}
              offset={-80}
              className="h-full"
            >
              <PrimaryButton text="Partner with us" isMb={false}/>
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 transition-transform duration-300 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-white/80 hover:text-white text-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ))}
            <ScrollLink
              to="partners"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
            >
              <PrimaryButton text="Partner with us" />
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
