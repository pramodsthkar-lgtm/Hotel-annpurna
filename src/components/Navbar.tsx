import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-brown-dark/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-xl md:text-2xl font-serif font-bold text-brand-gold">
              Hotel Annapurna
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-brand-gold transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" className="bg-brand-gold hover:bg-brand-gold-light text-brand-brown-dark px-6 py-2 rounded-md font-semibold transition-colors shadow-lg">
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-gold hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-brown border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-brand-gold text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-brand-gold text-center text-brand-brown-dark px-6 py-3 rounded-md font-semibold mt-4"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
