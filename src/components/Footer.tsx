import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown-dark text-white border-t border-brand-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-4">
              Hotel Annapurna &<br/>Annapurna Bhojnalay
            </h3>
            <p className="text-brand-cream/60 leading-relaxed mb-6">
              Comfortable Stay, Pure Vegetarian Food & Memorable Hospitality in Chitrakoot.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown-dark transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Facilities', 'Menu', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-brand-cream/60 hover:text-brand-gold transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Contact Info & Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold flex-shrink-0 mt-1" size={18} />
                <span className="text-brand-cream/60 line-clamp-3">Ratnawali Marg, Ram Ghat Road, Kashavgarh, Chitrakoot, UP 210204</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold flex-shrink-0" size={18} />
                <span className="text-brand-cream/60">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold flex-shrink-0" size={18} />
                <span className="text-brand-cream/60">info@hotelannapurna.com</span>
              </li>
            </ul>
            <div className="mt-6 border-t border-white/10 pt-4">
              <h5 className="font-bold text-white mb-2 text-sm">Opening Hours</h5>
              <p className="text-brand-cream/60 text-sm flex justify-between">
                <span>Hotel Reception:</span>
                <span>24/7</span>
              </p>
              <p className="text-brand-cream/60 text-sm flex justify-between mt-1">
                <span>Restaurant:</span>
                <span>7:00 AM - 11:00 PM</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-brand-cream/60 mb-4">Subscribe for offers and updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="bg-white/5 border border-white/10 px-4 py-3 rounded outline-none focus:border-brand-gold transition-colors text-white w-full"
              />
              <button 
                type="submit" 
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-brown-dark font-bold py-3 rounded transition-colors w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-cream/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hotel Annapurna & Bhojnalay. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-cream/40">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
