// components/PopularDishes.tsx
'use client';
import { motion } from 'framer-motion';
import { FaFire, FaStar, FaHeart } from 'react-icons/fa';

const dishes = [
  {
    name: "Truffle Pasta",
    description: "Handmade pasta with black truffle cream sauce",
    price: "$24",
    isNew: false,
    isPopular: true
  },
  // Add 5-7 popular dishes
];

export default function PopularDishes() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Customer Favorites</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-amber-900">{dish.name}</h3>
                {dish.isPopular && <FaFire className="text-amber-500" />}
              </div>
              <p className="text-gray-600 my-3">{dish.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-amber-700">{dish.price}</span>
                <button className="text-amber-600 hover:text-amber-800">
                  <FaHeart />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}