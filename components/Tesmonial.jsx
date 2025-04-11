// components/Testimonials.tsx
'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "The best dining experience I've had this year!",
    author: "Tareeq",
    role: "Fullstack Developer"
  },
  {
    quote: "The best dining experience I've had this year!",
    author: "Tareeq",
    role: "Fullstack Developer"
  },
  {
    quote: "The best dining experience I've had this year!",
    author: "Tareeq",
    role: "Fullstack Developer"
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-amber-800 p-8 rounded-lg"
            >
              <FaQuoteLeft className="text-amber-200 text-2xl mb-4" />
              <p className="italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-amber-200 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}