import { motion } from 'motion/react';
import { Snowflake, Users, Car, Leaf, UtensilsCrossed, Wifi, Sparkles, Headset } from 'lucide-react';

const facilities = [
  { icon: Snowflake, title: "AC Rooms", desc: "Climate controlled comfort" },
  { icon: Users, title: "Family Rooms", desc: "Spacious enough for everyone" },
  { icon: Car, title: "Free Parking", desc: "Secure parking space available" },
  { icon: Leaf, title: "Pure Veg Restaurant", desc: "Hygienic sattvic food" },
  { icon: UtensilsCrossed, title: "Room Service", desc: "Dine in the comfort of your room" },
  { icon: Wifi, title: "WiFi Available", desc: "Stay connected always" },
  { icon: Sparkles, title: "Clean Environment", desc: "Impeccable hygiene standards" },
  { icon: Headset, title: "24/7 Assistance", desc: "Round the clock front desk" }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 md:py-32 bg-brand-brown-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3"
          >
            Amenities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white font-bold mb-6"
          >
            Hotel Facilities
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-brand-gold mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 bg-brand-brown flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                  <Icon className="text-brand-gold group-hover:text-brand-brown-dark" size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{fac.title}</h3>
                <p className="text-brand-cream/60">{fac.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
