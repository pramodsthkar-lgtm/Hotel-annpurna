import { MapPin, Phone, MessageCircle, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown-dark font-bold mb-6">Contact & Location</h2>
          <div className="h-1 bg-brand-gold w-20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-8">Reach Out to Us</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm mr-5">
                  <MapPin className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark text-lg md:text-xl mb-1">Address</h4>
                  <p className="text-brand-brown/80 leading-relaxed max-w-sm">
                    Hotel Annapurna & Annapurna Bhojnalay<br />
                    Ratnawali Marg, Ram Ghat Road, Kashavgarh,<br />
                    Chitrakoot, Uttar Pradesh 210204, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm mr-5">
                  <Phone className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark text-lg md:text-xl mb-1">Phone</h4>
                  <p className="text-brand-brown/80">Call us for reservations.</p>
                  <a href="tel:+919999999999" className="text-brand-gold font-semibold hover:underline mt-1 block">+91 99999 99999</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm mr-5">
                  <Clock className="text-brand-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-brown-dark text-lg md:text-xl mb-1">Hours</h4>
                  <p className="text-brand-brown/80">
                    <span className="font-semibold block">Hotel Reception:</span> 24/7<br/>
                    <span className="font-semibold block mt-1">Restaurant:</span> 7:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919999999999" className="flex-1 flex items-center justify-center gap-2 bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-4 rounded-lg font-semibold transition-colors">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-4 rounded-lg font-semibold transition-colors">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form and Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Simple Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-serif font-bold text-brand-brown-dark mb-6">Send an Inquiry</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Request submitted successfully. We will get back to you soon!'); }} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="w-full px-4 py-3 bg-brand-cream border border-transparent focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none rounded-lg transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Your Mobile Number" 
                  required
                  className="w-full px-4 py-3 bg-brand-cream border border-transparent focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none rounded-lg transition-all"
                />
                <textarea 
                  rows={3}
                  placeholder="Message / Requirements" 
                  required
                  className="w-full px-4 py-3 bg-brand-cream border border-transparent focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none rounded-lg resize-none transition-all"
                ></textarea>
                <button type="submit" className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-brown-dark font-bold py-3 rounded-lg transition-colors">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Google Maps Embed */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.467475176008!2d80.8495029!3d25.2330364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984ca3b566580f5%3A0xc6a8dcacc5a6eef3!2sChitrakoot%20Dham%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location on Map"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
