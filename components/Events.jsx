'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaWineGlassAlt, FaMusic, FaGlassCheers, FaFish } from 'react-icons/fa';

const events = [
  {
    title: "Wine Pairing Dinner",
    date: "Every Friday",
    description: "5-course meal with sommelier-selected wines from our premium collection",
    icon: <FaWineGlassAlt className="text-amber-600" />,
    bgColor: "bg-amber-100"
  },
  {
    title: "Live Band Nights",
    date: "Every Saturday",
    description: "Enjoy your meal with live jazz and afrobeat performances",
    icon: <FaMusic className="text-amber-600" />,
    bgColor: "bg-amber-50"
  },
  {
    title: "Teppanyaki Show",
    date: "Every Thursday",
    description: "Chef's live cooking performance with premium cuts and seafood",
    icon: <FaFish className="text-amber-600" />,
    bgColor: "bg-amber-100"
  },
  {
    title: "Champagne Brunch",
    date: "Last Sunday of Month",
    description: "Unlimited champagne with our signature brunch menu",
    icon: <FaGlassCheers className="text-amber-600" />,
    bgColor: "bg-amber-50"
  },
  {
    title: "Parmigiano Wheel Night",
    date: "First Wednesday Monthly",
    description: "Live pasta preparation in 24-month aged Parmigiano-Reggiano wheel",
    icon: <FaWineGlassAlt className="text-amber-600" />,
    bgColor: "bg-amber-100"
  },
  {
    title: "Whiskey Tasting",
    date: "Every 2nd Tuesday",
    description: "Premium whiskey sampling with expert pairing recommendations",
    icon: <FaGlassCheers className="text-amber-600" />,
    bgColor: "bg-amber-50"
  }
];

export default function Events() {
  return (
    <section className="py-16 bg-white" id='events'>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-amber-900 mb-2">Upcoming Events</h2>
          <p className="text-lg text-amber-700">Experience Gusto's premium dining events</p>
          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`border border-amber-200 rounded-lg overflow-hidden hover:shadow-lg transition-all ${event.bgColor}`}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                    {event.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">{event.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-amber-700 mb-3">
                  <FaCalendarAlt />
                  <span className="font-medium">{event.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="mt-2 text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
                  View Details <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}