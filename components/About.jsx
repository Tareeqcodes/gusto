
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/atef.png" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
                alt="Our Chef" 
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Savory Delights brings authentic flavors with a modern twist...
            </p>
            {/* More content */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-lg"
            >
              Meet Our Chef
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}