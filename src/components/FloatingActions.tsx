import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Scroll to top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-brand-brown border border-brand-cream-dark rounded-full shadow-lg flex items-center justify-center hover:bg-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative group w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 hover:bg-[#1ebd5a] transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={30} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-brand-brown-dark text-white text-sm font-medium px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
          {/* Tooltip triangle */}
          <span className="absolute top-1/2 -mt-1 -right-1 w-2 h-2 bg-brand-brown-dark rotate-45"></span>
        </span>
      </a>
    </div>
  );
}
