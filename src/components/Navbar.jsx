import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null); // State untuk melacak posisi kursor

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact Me', href: '#contact' }, // Contact digabung ke sini agar bisa di-hover
  ];

  return (
    <nav className="fixed w-full z-50 bg-transparent py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 cursor-pointer relative z-50"
          >
            <a href="#home" className="text-2xl font-bold font-['Outfit'] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
              Farrel.
            </a>
          </motion.div>

          {/* Desktop Menu dengan Sliding Background */}
          <div className="hidden md:block">
            {/* Container Kapsul Kaca */}
            <div 
                className="flex items-center space-x-1 bg-white/5 backdrop-blur-md px-2 py-2 rounded-full border border-white/10"
                onMouseLeave={() => setHoveredTab(null)} // Saat mouse keluar, background hilang
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                  style={{
                    color: hoveredTab === link.name ? "#ffffff" : "#94a3b8", // Putih jika aktif, abu jika tidak
                  }}
                  onMouseEnter={() => setHoveredTab(link.name)}
                >
                  {/* Text Menu */}
                  <span className="relative z-10">{link.name}</span>

                  {/* Background Biru yang Meluncur (Sliding Pill) */}
                  {hoveredTab === link.name && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30"
                      transition={{ 
                        type: "spring", 
                        bounce: 0.2, 
                        duration: 0.6 
                      }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none bg-white/10 backdrop-blur-sm"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0b0f19]/95 backdrop-blur-xl absolute w-full top-0 left-0 pt-24 pb-10 px-4 border-b border-white/10 z-40"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 rounded-xl text-lg font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;