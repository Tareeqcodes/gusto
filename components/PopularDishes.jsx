'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFire, FaStar, FaLeaf } from 'react-icons/fa';

const dishes = [
  {
    name: "Parmigiano Wheel Pasta",
    description: "Live cooking spaghetti pasta in white sauce inside a Parmigiano-Reggiano wheel",
    price: "₦25,000",
    image: "/dishes/2.png", // Replace with actual image paths
    isPopular: true,
    isVegetarian: false
  },
  {
    name: "Nigerian Pepper Prawns",
    description: "Prawns with authentic Nigerian chili sauce",
    price: "₦22,000",
    image: "/dishes/2.png",
    isPopular: true,
    isSpicy: true
  },
  {
    name: "Gusto Samurai Teppanyaki",
    description: "Filet mignon cooked on iron griddle with special sauce",
    price: "₦33,000",
    image: "/dishes/2.png",
    isPopular: true
  },
  {
    name: "Dragon Roll (8pc)",
    description: "Tempura shrimp, eel, avocado with special sauce",
    price: "₦20,000",
    image: "/dishes/2.png",
    isPopular: true
  },
  {
    name: "4 Cheese Pizza",
    description: "Four kinds of cheese in tomato sauce on thin crust",
    price: "₦20,000",
    image: "/dishes/2.png",
    isPopular: true,
    isVegetarian: true
  },
  {
    name: "Coconut Shrimp Curry",
    description: "Shrimp in rich curry and coconut sauce with white rice",
    price: "₦20,000",
    image: "/dishes/2.png",
    isPopular: true
  },
  {
    name: "Sizzling Brownie",
    description: "Warm chocolate brownie served sizzling with ice cream",
    price: "₦9,000",
    image: "/dishes/2.png",
    isPopular: true,
    isVegetarian: true
  }
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
          <h2 className="text-4xl font-bold text-amber-900 mb-2">Customer Favorites</h2>
          <p className="text-lg text-amber-700">Most loved dishes at Gusto</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              {/* Food Image Background */}
              <div className="absolute inset-0 bg-gray-800">
                <Image 
                  src={dish.image} 
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index === 0}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  {dish.isPopular && (
                    <div className="flex items-center gap-1 bg-amber-500 text-white px-2 py-1 rounded-full">
                      <FaStar className="text-xs" />
                      <span className="text-xs font-medium">Popular</span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-amber-100 mb-3">{dish.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-300">{dish.price}</span>
                  
                  <div className="flex gap-2">
                    {dish.isSpicy && (
                      <span className="text-xs px-2 py-1 bg-red-500/90 text-white rounded-full flex items-center gap-1">
                        <FaFire size={10} /> Spicy
                      </span>
                    )}
                    {dish.isVegetarian && (
                      <span className="text-xs px-2 py-1 bg-green-500/90 text-white rounded-full flex items-center gap-1">
                        <FaLeaf size={10} /> Veg
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}