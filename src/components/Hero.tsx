import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a4d14cece2?auto=format&fit=crop&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Welcome to <br />
            <span className="text-brand-gold drop-shadow-md">Hotel Annapurna</span><br />
            <span className="text-xl md:text-3xl font-medium tracking-widest text-brand-cream/90">& Annapurna Bhojnalay</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-cream/80 mb-10 max-w-2xl mx-auto font-light"
          >
            Comfortable Stay, Pure Vegetarian Food & Memorable Hospitality in the Holy City of Chitrakoot.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a 
              href="#booking"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-brown-dark font-semibold rounded-md transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Book Room
            </a>
            <a 
              href="#dishes"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-brown-dark font-semibold rounded-md transition-all"
            >
              View Menu
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-brand-gold/50 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-brand-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
