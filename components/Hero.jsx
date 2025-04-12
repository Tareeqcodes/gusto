
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative h-[40rem] w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
          alt="Gusto Restaurant Interior"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-4 max-w-4xl mx-auto"
        >
          {/* Restaurant Name with Branches */}
          <div className="mb-2">
            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold text-white font-serif tracking-tight"
            >
              GUSTO
            </motion.h1>
            <motion.div
              variants={textVariants}
              className="flex items-center justify-center gap-2 text-amber-200 mt-2"
            >
              <FaMapMarkerAlt className="text-lg" />
              <span className="font-medium tracking-wider">Abuja | Kano | Lagos</span>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div variants={textVariants} className="mb-6">
            <p className="text-2xl md:text-3xl font-light text-amber-100 italic mb-2">
              "A masterpiece you can taste"
            </p>
            <div className="w-24 h-0.5 bg-amber-400 mx-auto" />
          </motion.div>

          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto"
          >
            We're bringing everything together for an unforgettable dining experience
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={textVariants} className="flex flex-col items-center gap-4">
            <motion.a
              href="#menu"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-medium text-lg px-8 py-4 rounded-full shadow-lg transition-colors duration-300"
            >
              <FaUtensils className="text-xl" />
              <span>View Our Menu</span>
            </motion.a>
            <motion.div
              variants={textVariants}
              className="text-amber-100 text-sm mt-4"
            >
              <p>Follow us on <span className="font-bold">
                <a href="https://www.instagram.com/gusto.nigeria?igsh=NGhlNmpzY2N2NW41"
                target='_blank'
                rel='noopener noreferrer'
                >@gusto.nigeria</a>
                </span>
                </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-20 -left-20"
          >
            <div className="w-40 h-40 rounded-full bg-amber-400/20 blur-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute -top-20 -right-20"
          >
            <div className="w-60 h-60 rounded-full bg-amber-600/20 blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}