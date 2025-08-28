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
            <Logo
              className="object-contain filter brightness-0 invert" // white version
            />
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
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
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
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 w-fit cursor-pointer z-50">
                <a href="mailto:manish.khadka@cogknit.io?subject=Sponsor">
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
