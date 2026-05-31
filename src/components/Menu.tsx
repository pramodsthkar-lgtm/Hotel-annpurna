import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

const menuCategories = [
  { id: 'All', name: 'All Menu' },
  { id: 'Combos', name: 'Thali & Meals', image: 'https://images.unsplash.com/photo-1626779836968-3be3d5e305e5?auto=format&fit=crop&q=80' },
  { id: 'Paneer', name: 'Paneer Items', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80' },
  { id: 'Sabzi', name: 'Vegetables (Sabzi)', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80' },
  { id: 'Breads', name: 'Roti & Paratha', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80' },
  { id: 'Rice', name: 'Rice & Dal', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80' },
  { id: 'Vrat', name: 'Vrat Special', image: 'https://images.unsplash.com/photo-1626509653294-811c50e419b9?auto=format&fit=crop&q=80' },
  { id: 'Snacks', name: 'Snacks & Papad', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80' },
  { id: 'Sweets', name: 'Sweets & Beverages', image: 'https://images.unsplash.com/photo-1599307374898-0c618641a27e?auto=format&fit=crop&q=80' },
];

const allMenuItems = [
  // Combos
  { name: "Standard Thali", category: "Combos", desc: "1 Seasonal Gravy Sabzi, 1 Seasonal Dry Sabzi, Dal Fry, Raita / Kadhi Pakoda, Rice, Sweet Dish, 2 Types of Roti, Salad, Pickle, Chutney", isVeg: true, isSpecial: true },
  { name: "Bhojan", category: "Combos", desc: "1 Seasonal Gravy Sabzi, 1 Seasonal Dry Sabzi, Dal Fry, Raita (Day) / Kadhi Pakoda (Night), Rice, Sweet Dish, 2 Types of Roti, Salad, Pickle, Chutney", isVeg: true },
  { name: "Special Meal", category: "Combos", desc: "Paneer Sabzi, 1 Seasonal Gravy Sabzi, 1 Seasonal Dry Sabzi, Dal Tadka, Raita / Kadhi Pakoda, Jeera Rice, Sweet Dish, Salad, Pickle, Chutney, Plain Roti & Missi Roti", isVeg: true, isSpecial: true },
  { name: "Breakfast / Nashta", category: "Combos", desc: "2 Pieces Aloo Paratha, Sabzi, 100g Dahi, 50g Jalebi, Desi Ghee, Chutney, Pickle", isVeg: true },
  // Paneer
  { name: "Matar Paneer", category: "Paneer", isVeg: true },
  { name: "Paneer Butter Masala", category: "Paneer", isVeg: true, isSpecial: true },
  { name: "Shahi Paneer", category: "Paneer", isVeg: true, isSpecial: true },
  { name: "Kadhai Paneer", category: "Paneer", isVeg: true },
  { name: "Paneer Bhujia", category: "Paneer", isVeg: true },
  { name: "Matar Mushroom", category: "Paneer", isVeg: true },
  { name: "Mushroom Masala", category: "Paneer", isVeg: true },
  // Sabzi
  { name: "Gravy Sabzi", category: "Sabzi", isVeg: true },
  { name: "Aloo Matar Tamatar", category: "Sabzi", isVeg: true },
  { name: "Dry Seasonal Sabzi", category: "Sabzi", isVeg: true },
  { name: "Jeera Aloo", category: "Sabzi", isVeg: true },
  { name: "Sev Tamatar", category: "Sabzi", isVeg: true },
  { name: "Moong Dal Khichdi", category: "Sabzi", isVeg: true },
  // Rice & Dal
  { name: "Dal Fry", category: "Rice", isVeg: true },
  { name: "Dal Tadka", category: "Rice", isVeg: true, isSpecial: true },
  { name: "Steam Rice", category: "Rice", isVeg: true },
  { name: "Jeera Rice", category: "Rice", isVeg: true },
  { name: "Fried Rice", category: "Rice", isVeg: true },
  { name: "Kadhi Pakoda", category: "Rice", isVeg: true },
  { name: "Raita", category: "Rice", isVeg: true },
  // Breads
  { name: "Tawa Plain Roti", category: "Breads", isVeg: true },
  { name: "Tawa Missi Roti", category: "Breads", isVeg: true },
  { name: "Tandoori Plain Roti", category: "Breads", isVeg: true },
  { name: "Tandoori Missi Roti", category: "Breads", isVeg: true },
  { name: "Puri / Kachori", category: "Breads", isVeg: true },
  { name: "Plain Paratha", category: "Breads", isVeg: true },
  { name: "Aloo Paratha", category: "Breads", isVeg: true },
  { name: "Mix Paratha", category: "Breads", isVeg: true },
  { name: "Paneer Paratha", category: "Breads", isVeg: true },
  // Vrat Special
  { name: "Jeera Aloo (Vrat)", category: "Vrat", isVeg: true },
  { name: "Sabudana Khichdi", category: "Vrat", isVeg: true },
  { name: "Curd (Dahi)", category: "Vrat", isVeg: true },
  { name: "Singhade Aate Ki Puri", category: "Vrat", isVeg: true },
  { name: "Vrat Special Sabzi", category: "Vrat", isVeg: true },
  // Snacks
  { name: "Mix Veg Pakoda", category: "Snacks", isVeg: true },
  { name: "Onion Pakoda", category: "Snacks", isVeg: true },
  { name: "Paneer Pakoda", category: "Snacks", isVeg: true },
  { name: "Paneer Ball Pakoda", category: "Snacks", isVeg: true },
  { name: "Poha", category: "Snacks", isVeg: true },
  { name: "Upma", category: "Snacks", isVeg: true },
  { name: "Roasted Papad", category: "Snacks", isVeg: true },
  { name: "Fried Papad", category: "Snacks", isVeg: true },
  { name: "Masala Papad", category: "Snacks", isVeg: true },
  // Sweets & Beverages
  { name: "Rabdi / Kalakand", category: "Sweets", isVeg: true },
  { name: "Rasmalai", category: "Sweets", isVeg: true },
  { name: "Gulab Jamun", category: "Sweets", isVeg: true },
  { name: "Sponge Rasgulla", category: "Sweets", isVeg: true },
  { name: "Kheer", category: "Sweets", isVeg: true },
  { name: "Tea", category: "Sweets", isVeg: true },
  { name: "Coffee", category: "Sweets", isVeg: true },
  { name: "Chhach", category: "Sweets", isVeg: true },
  { name: "Lassi", category: "Sweets", isVeg: true },
  { name: "Shikanji", category: "Sweets", isVeg: true },
  { name: "Lemon Water", category: "Sweets", isVeg: true },
  { name: "Milk", category: "Sweets", isVeg: true },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return allMenuItems.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeCategoryData = menuCategories.find(c => c.id === activeCategory);

  return (
    <section id="menu" className="bg-brand-cream relative">
      {/* Full-width Food Banner at Menu top */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80" 
          alt="Annapurna Bhojnalay Premium Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div>
            <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">Pure Vegetarian Excellence</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4 drop-shadow-lg">
              Annapurna Bhojnalay Menu
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-medium">
              Savor the authentic taste of North Indian, South Indian, and traditional Sattvic cuisine.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-brand-brown/50 group-focus-within:text-brand-gold transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for dishes, thalis, sweets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 md:py-4 border border-brand-brown/20 rounded-xl leading-5 bg-white placeholder-brand-brown/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all duration-300 shadow-sm"
            />
          </div>

          {/* Quick WhatsApp Order Button */}
          <a 
            href="https://wa.me/919999999999?text=Hello,%20I%20would%20like%20to%20order%20food." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 md:py-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Categories Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar pb-4 mb-8 gap-3 snap-x snap-mandatory">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`snap-start whitespace-nowrap px-6 py-3 rounded-full font-serif font-bold transition-all duration-300 border ${
                activeCategory === category.id 
                  ? 'bg-brand-brown text-brand-gold border-brand-brown shadow-md scale-105' 
                  : 'bg-white text-brand-brown border-brand-brown/10 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Selected Category Image Header (if not All) */}
        <AnimatePresence mode="wait">
          {activeCategory !== 'All' && activeCategoryData?.image && (
            <motion.div 
              key={`cat-image-${activeCategory}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-12 relative shadow-lg"
            >
              <img src={activeCategoryData.image} alt={activeCategoryData.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/80 to-transparent flex items-end p-6 md:p-8">
                <h3 className="text-3xl md:text-4xl text-white font-serif font-bold drop-shadow-md">{activeCategoryData.name}</h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Display Items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-brand-brown/10 shadow-sm">
            <h3 className="text-2xl font-serif text-brand-brown-dark font-bold mb-2">No dishes found</h3>
            <p className="text-brand-brown/70">Please try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.name + idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-brand-brown/5 overflow-hidden transition-all duration-300 group relative"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif font-bold text-brand-brown-dark pr-4 group-hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                      {item.isVeg && (
                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 border-green-600 p-[2px] rounded-sm">
                          <span className="w-full h-full bg-green-600 rounded-full"></span>
                        </span>
                      )}
                    </div>
                    {item.desc && (
                      <p className="text-brand-brown/70 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    )}
                    {item.isSpecial && (
                      <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-brown-dark text-xs font-bold uppercase tracking-wider rounded border border-brand-gold/30">
                        Top Rated
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
