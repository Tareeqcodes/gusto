// components/LocationFeeds.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaUtensils, FaWifi, FaParking, FaSnowflake, FaStar } from 'react-icons/fa';

export default function LocationFeeds() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMonthly, setShowMonthly] = useState(false);
  
  const locations = [
    {
      city: 'Kano',
      image: '/images/3.png',
      dailyPrice: '₦25,000',
      monthlyPrice: '₦600,000',
      special: 'Northern Cuisine Special',
      features: ['Outdoor seating', 'Cultural decor', 'Spice market view'],
      amenities: [<FaWifi key="wifi" />, <FaParking key="parking" />],
      rating: 4.8,
      reviews: 124
    },
    {
      city: 'Abuja',
      image: '/images/3.png',
      dailyPrice: '₦30,000',
      monthlyPrice: '₦720,000',
      special: 'Executive Lunch Menu',
      features: ['Private dining', 'Skyline view', 'Wine pairing'],
      amenities: [<FaWifi key="wifi" />, <FaParking key="parking" />, <FaSnowflake key="ac" />],
      rating: 4.9,
      reviews: 156
    },
    {
      city: 'Lagos',
      image: '/images/3.png',
      dailyPrice: '₦35,000',
      monthlyPrice: '₦840,000',
      special: 'Coastal Fusion Experience',
      features: ['Beachfront access', 'Live band nights', 'Seafood bar'],
      amenities: [<FaWifi key="wifi" />, <FaParking key="parking" />, <FaSnowflake key="ac" />],
      rating: 4.7,
      reviews: 98
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Our Locations</h2>
          <p className="text-xl text-amber-700">Experience Gusto across Nigeria</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
          
          {/* Price Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-white p-1 rounded-full shadow-inner">
              <button
                onClick={() => setShowMonthly(false)}
                className={`px-4 py-2 rounded-full ${!showMonthly ? 'bg-amber-600 text-white' : 'text-amber-800'}`}
              >
                Daily Rates
              </button>
              <button
                onClick={() => setShowMonthly(true)}
                className={`px-4 py-2 rounded-full ${showMonthly ? 'bg-amber-600 text-white' : 'text-amber-800'}`}
              >
                Monthly Plans
              </button>
            </div>
          </div>
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Image with overlay */}
              <div className="relative h-48">
                <Image
                  src={location.image}
                  fill
                  className="object-cover"
                  alt={`Gusto ${location.city}`}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-amber-400 text-xl" />
                  <span className="text-white font-bold text-lg">{location.city}</span>
                </div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {showMonthly ? location.monthlyPrice : location.dailyPrice}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{location.special}</h3>
                
                {/* Ratings */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-sm ${i < Math.floor(location.rating) ? 'text-amber-400' : 'text-amber-200'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({location.reviews} reviews)
                  </span>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {location.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <FaUtensils className="text-amber-500 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Amenities */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-amber-100">
                  {location.amenities.map((amenity, i) => (
                    <div key={i} className="text-amber-600 text-lg p-2 bg-amber-50 rounded-full">
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedLocation(location.city)}
                  className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Book {location.city}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Modal */}
        {selectedLocation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Book Table in {selectedLocation}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border border-amber-200 rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Time</label>
                  <select className="w-full p-2 border border-amber-200 rounded">
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Guests</label>
                  <input 
                    type="number" 
                    min="1"
                    max="12"
                    defaultValue="2"
                    className="w-full p-2 border border-amber-200 rounded"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="flex-1 py-2 border border-amber-600 text-amber-600 rounded-lg"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2 bg-amber-600 text-white rounded-lg">
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}