// components/InstagramFeed.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const instagramPosts = [
  "/images/hero.png",
  // 5-7 more images
];

export default function Feeds() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">Follow Us</h2>
          <p className="text-xl text-amber-700">@SavoryDelights</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {instagramPosts.map((src, index) => (
            <motion.a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded overflow-hidden"
            >
              <Image 
                src={src} 
                fill 
                className="object-cover" 
                alt="Instagram post" 
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}