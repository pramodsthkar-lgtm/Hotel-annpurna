import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Tiwari",
    text: "Great food, great ambiance and excellent staff. Highly recommend for families visiting Chitrakoot.",
    rating: 5
  },
  {
    name: "Sneha Sharma",
    text: "Comfortable stay and delicious vegetarian meals. The thali here is a must-try. Clean and hygienic.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    text: "One of the best family hotels and restaurants in Chitrakoot. Located close to Ram Ghat, very convenient.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 md:py-32 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-brown-dark font-bold mb-6">Guest Experiences</h2>
          <div className="h-1 bg-brand-gold w-20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-brand-cream-dark p-8 rounded-2xl relative shadow-md"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20" size={64} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="#d4af37" className="text-brand-gold" size={20} />
                ))}
              </div>
              
              <p className="text-brand-brown/80 mb-6 italic text-lg leading-relaxed relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-brand-brown/10 pt-4">
                <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <h4 className="font-serif font-bold text-brand-brown-dark">{review.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
