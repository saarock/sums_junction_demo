import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

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
            <a
              href="#home"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              Details
            </a>
            <a
              href="#partners"
              className="text-white/80 hover:text-white transition-colors"
            >
              Sponsors
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
              <a href="mailto:manish.khadka@cogknit.io?subject=Sponsor">
                Contact
              </a>
            </Button>
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
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 py-6">
            <a
              href="#home"
              className="text-white/80 hover:text-white text-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white text-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Details
            </a>
            <a
              href="#partners"
              className="text-white/80 hover:text-white text-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 w-full">
              <a
                href="mailto:manish.khadka@cogknit.io?subject=Sponsor"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
