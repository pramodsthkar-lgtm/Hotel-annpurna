import { motion } from 'motion/react';

const popularDishes = [
  { name: "Special Veg Thali", image: "https://images.unsplash.com/photo-1626779836968-3be3d5e305e5?auto=format&fit=crop&q=80", desc: "A royal feast of assorted vegetables, dal, rice, breads & dessert." },
  { name: "Paneer Butter Masala", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80", desc: "Rich and creamy tomato gravy with soft paneer cubes." },
  { name: "Dal Tadka", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80", desc: "Comforting yellow lentils tempered with ghee and aromatic spices." },
  { name: "Masala Dosa", image: "https://images.unsplash.com/photo-1630409351241-1939824209cb?auto=format&fit=crop&q=80", desc: "Crispy crepe served with savory potato filling, sambar, and chutney." },
  { name: "Veg Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80", desc: "Fragrant basmati rice cooked with mixed vegetables and spices." },
  { name: "Butter Naan", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80", desc: "Soft and fluffy Indian flatbread brushed with butter." },
  { name: "Shahi Paneer", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80", desc: "Cottage cheese in a thick gravy of cream, tomatoes and spices." },
  { name: "Gulab Jamun", image: "https://images.unsplash.com/photo-1599307374898-0c618641a27e?auto=format&fit=crop&q=80", desc: "Classic Indian sweet syrup-soaked dough balls." }
];

export default function PopularDishes() {
  return (
    <section id="dishes" className="py-20 md:py-32 bg-brand-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Chef's Recommendations</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown-dark font-bold mb-4">Popular Dishes</h2>
            <div className="w-20 h-1 bg-brand-gold"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularDishes.map((dish, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-brand-brown-dark mb-2">{dish.name}</h3>
                <p className="text-brand-brown/70 text-sm line-clamp-2">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
