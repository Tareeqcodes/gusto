'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaWineGlassAlt, FaIceCream, FaFire, FaLeaf } from 'react-icons/fa';
import { GiSushis, GiNoodles, GiPizzaCutter, GiMeat, GiCoffeeCup } from 'react-icons/gi';
import { useCart } from './context/CartContext';

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('soup');
  const [dietaryFilter, setDietaryFilter] = useState(null);

  const menuCategories = [
    { id: 'soup', name: 'Soup & Noodles', icon: <GiNoodles /> },
    { id: 'salad', name: 'Salads', icon: <FaLeaf /> },
    { id: 'appetizer', name: 'Appetizers', icon: <FaUtensils /> },
    { id: 'italian', name: 'Italian Corner', icon: <GiPizzaCutter /> },
    { id: 'asian', name: 'Asian Corner', icon: <GiSushis /> },
    { id: 'signature', name: 'Our Signatures', icon: <FaFire /> },
    { id: 'sushi', name: 'Sushi & Sashimi', icon: <GiSushis /> },
    { id: 'teppanyaki', name: 'Teppanyaki', icon: <GiMeat /> },
    { id: 'dessert', name: 'Desserts', icon: <FaIceCream /> },
    { id: 'drinks', name: 'Drinks', icon: <FaWineGlassAlt /> },
    { id: 'alcohol', name: 'Wine & Spirits', icon: <GiCoffeeCup /> },
  ];

  const menuItems = {
    soup: [
      { name: 'SHRIMP WONTON', price: '₦15,500', description: 'Shrimp dumplings, Bok choy, carrot, leeks, mushroom', spicy: false, vegetarian: false },
      { name: 'CHICKEN SOUP', price: '₦9,000', description: 'Chicken Breast simmers in stock and cream', spicy: false, vegetarian: false },
      { name: 'KOREAN CHICKEN NOODLES', price: '₦11,500', description: 'Udon noodles, chicken, vegetables, soup stocks', spicy: false, vegetarian: false },
      { name: 'SEAFOOD PEPPER SOUP', price: '₦13,500', description: 'White fish, calamari, shrimps in pepper sauce', spicy: true, vegetarian: false },
      { name: 'CHILI BEEF SOBA', price: '₦13,500', description: 'Soba noodles, beef, vegetables, spicy soup stocks', spicy: true, vegetarian: false },
    ],
    salad: [
      { name: 'FATTOUSH', price: '₦11,500', description: 'Lettuce, cucumber, tomato, red onion, olives bell pepper, molasses dressing', spicy: false, vegetarian: true },
      { name: 'CAPRESE FETA SALAD', price: '₦13,500', description: 'Feta cheese, tomatoes, avocado, sweet basil, seasoned herb dressing', spicy: false, vegetarian: true },
      { name: 'BRESAOLA SALAD', price: '₦20,000', description: 'Rocket leaves, cherry tomatoes, walnuts, parmesan cheese with glazed balsamic and lemon ginger dressing', spicy: false, vegetarian: false },
      { name: 'SALMON CAESAR SALAD', price: '₦15,500', description: 'Lettuce, croutons, crispy parmesan, smoked salmon, caesar dressing', spicy: false, vegetarian: false },
    ],
  };

  const filteredItems = menuItems[activeCategory]?.filter(item => {
    if (dietaryFilter === 'spicy') return item.spicy;
    if (dietaryFilter === 'vegetarian') return item.vegetarian;
    return true;
  });

  return (
    <section className="py-12 bg-amber-50" id='menu'>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-amber-900 mb-2 font-serif">Gusto Menu</h1>
          <p className="text-lg text-amber-700 font-light">Discover our exquisite culinary offerings</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Dietary Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setDietaryFilter(null)}
            className={`px-4 py-2 rounded-full ${!dietaryFilter ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-800'}`}
          >
            All Items
          </button>
          <button
            onClick={() => setDietaryFilter('spicy')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${dietaryFilter === 'spicy' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800'}`}
          >
            <FaFire /> Spicy
          </button>
          <button
            onClick={() => setDietaryFilter('vegetarian')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 ${dietaryFilter === 'vegetarian' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
          >
            <FaLeaf /> Vegetarian
          </button>
        </div>

        <div className="relative">
  {/* Left fade indicator - only shows when scrolled */}
  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-50 to-transparent pointer-events-none z-10" />
  
  {/* Scrollable category navigation */}
  <div className="mb-12 overflow-x-auto scrollbar-hide">
    <div className="flex gap-2 md:gap-4 min-w-max py-1"> 
      {menuCategories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.id)}
          className={`flex flex-col items-center px-4 py-3 rounded-lg min-w-[100px] transition-all flex-shrink-0 ${
            activeCategory === category.id 
              ? 'bg-amber-700 text-white shadow-md' 
              : 'bg-white text-amber-900 hover:bg-amber-100 shadow-sm'
          }`}
        >
          <span className="text-xl mb-1">{category.icon}</span>
          <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
        </motion.button>
      ))}
    </div>
  </div>
  
  {/* Right fade indicator - always visible */}
  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-50 to-transparent pointer-events-none z-10" />
</div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredItems?.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-amber-600"
            >
              <div className="flex justify-between items-start">
                <div className="text-xl font-bold text-amber-900">{item.name}</div>
                <span className="font-bold text-amber-700">{item.price}</span>
              </div>
              <p className="text-gray-600 my-3">{item.description}</p>
              <div className="flex gap-2">
                {item.spicy && (
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full flex items-center gap-1">
                    <FaFire size={10} /> Spicy
                  </span>
                )}
                {item.vegetarian && (
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full flex items-center gap-1">
                    <FaLeaf size={10} /> Vegetarian
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dietary Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-amber-100 p-6 rounded-lg text-center"
        >
          <p className="text-amber-900 font-medium">
            Please inform your waiter of any food allergies or dietary requirements you may have.
            <br />
            All prices are in Naira, excluding taxes and service charge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;