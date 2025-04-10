// components/EventsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaWineGlassAlt } from 'react-icons/fa';

const events = [
  {
    title: "Wine Pairing Dinner",
    date: "Every Friday",
    description: "5-course meal with sommelier-selected wines"
  },
  // 2-3 more events
];

export default function Events() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="border border-amber-200 rounded-lg p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-amber-100 rounded-full text-amber-700">
                  <FaWineGlassAlt />
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-amber-600 mb-3">
                <FaCalendarAlt />
                <span>{event.date}</span>
              </div>
              <p className="text-gray-600">{event.description}</p>
              <button className="mt-4 text-amber-600 hover:text-amber-800 font-medium">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}