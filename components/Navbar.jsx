
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaUtensils, FaCalendarAlt, FaFilePdf } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';

const navItems = [
    {
        path: '/reservation',
        name: 'Reservation',
        icon: <FaUtensils className="text-lg" />,
      },
      {
        path: '/events',
        name: 'Events',
        icon: <FaCalendarAlt className="text-lg" />,
      },
  {
    path: '/MenuPage',
    name: 'MenuPDF',
    icon: <FaFilePdf className="text-lg" />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="flex items-center"
          >
            <Link href="/" className="text-2xl font-bold font-serif tracking-wider">
              Gusto
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-6"
          >
            {navItems.map((item) => (
              <motion.li key={item.path} variants={itemVariants}>
                <Link
                  href={item.path}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors duration-300 hover:bg-amber-800 ${
                    pathname === item.path ? 'bg-amber-800 font-medium' : ''
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-2 py-2"
            >
              {navItems.map((item) => (
                <motion.li key={item.path} variants={itemVariants}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors duration-300 hover:bg-amber-800 ${
                      pathname === item.path ? 'bg-amber-800 font-medium' : ''
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}