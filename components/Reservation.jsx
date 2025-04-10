
'use client';
import { motion } from 'framer-motion';

export default function Reservation() {
  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Savory Delights?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reserve your table today for an unforgettable dining experience
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-amber-900 font-bold rounded-lg shadow-lg"
          >
            Book a Table
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}