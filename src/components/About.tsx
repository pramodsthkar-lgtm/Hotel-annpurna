import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80" 
                alt="Luxury Hotel Room" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/60 to-transparent"></div>
            </div>
            {/* Decal */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-brown rounded-2xl border-4 border-brand-cream shadow-xl hidden md:flex flex-col items-center justify-center p-4 z-10">
              <div className="flex gap-1 mb-2 text-brand-gold">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-brand-cream text-center font-serif font-bold leading-tight">
                Top Rated<br/>in Chitrakoot
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h4 className="text-brand-gold-light md:text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">
              About Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown-dark font-bold mb-6 leading-tight">
              A Legacy of Comfort & Pure Taste
            </h2>
            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
            
            <p className="text-lg text-brand-brown/80 mb-6 leading-relaxed">
              Located in the divine surroundings of Chitrakoot at Ratnawali Marg, Ram Ghat Road, 
              <strong> Hotel Annapurna & Annapurna Bhojnalay</strong> is a famous family hotel 
              and vegetarian restaurant dedicated to serving pilgrims and tourists with unmatched hospitality.
            </p>
            
            <p className="text-lg text-brand-brown/80 mb-8 leading-relaxed">
              We offer comfortable, well-appointed rooms for a peaceful stay. Our pride lies in our pure vegetarian restaurant, renowned for quality food, clean preparation, and a friendly atmosphere perfect for families.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Famous Family Hotel",
                "Spacious & Comfortable Rooms",
                "100% Pure Vegetarian Restaurant",
                "Excellent Room Service",
                "Walkable from Ram Ghat",
                "Safe & Friendly Atmosphere"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-brand-brown font-medium">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#facilities" className="inline-block border-b-2 border-brand-brown hover:border-brand-gold hover:text-brand-gold transition-colors pb-1 text-brand-brown font-semibold uppercase tracking-wide">
              Explore Our Facilities
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
