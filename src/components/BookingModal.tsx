import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Basic hash router setup for the modal.
    const handleHashChange = () => {
      if (window.location.hash === '#booking') {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const close = () => {
    window.location.hash = ''; // Clear hash to close
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request received! Our team will contact you shortly to confirm.');
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          ></motion.div>

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl relative z-10 overflow-hidden"
          >
            <div className="bg-brand-brown border-b border-brand-gold p-6 relative">
              <button 
                onClick={close}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-brand-brown-dark p-1 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-serif font-bold text-white mb-1">Book Your Stay</h2>
              <p className="text-brand-cream/70 text-sm">Fill in your details to request a room.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Check-in Date</label>
                  <input type="date" required className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Check-out Date</label>
                  <input type="date" required className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Guests</label>
                  <select className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>Family (2A + 2C)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Room Type</label>
                  <select className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all">
                    <option>Standard AC Room</option>
                    <option>Deluxe AC Room</option>
                    <option>Family Suite</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" required className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Mobile Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" required className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-brown-dark mb-1">Special Requests (Optional)</label>
                <textarea rows={2} className="w-full border border-brand-cream-dark rounded-md px-3 py-2 outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-brown-dark font-bold text-lg py-3 rounded-md transition-colors mt-2">
                Confirm Booking Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
