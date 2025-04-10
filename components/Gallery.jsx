// components/Gallery.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiZoomIn } from 'react-icons/fi';

const galleryImages = [
  { src: "/images/1.png", category: "main-course" },
  { src: "/images/2.png", category: "desserts" },
  { src: "/images/3.png", category: "desserts" },
  { src: "/images/4.png", category: "desserts" },
  { src: "/images/5.png", category: "desserts" },
  { src: "/images/6.png", category: "desserts" },
  { src: "/images/8.png", category: "desserts" },
  { src: "/images/9.png", category: "desserts" },
  // 6-8 images
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Gallery</h2>
        
        {/* Interactive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={img.src}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Restaurant dish"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={galleryImages[selectedImage].src}
                fill
                 sizes="100vw"
                className="object-contain"
                alt="Enlarged view"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}