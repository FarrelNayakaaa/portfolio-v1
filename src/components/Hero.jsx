import { heroDetails } from "../content";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// 1. Import foto dari folder assets
// Pastikan nama file "Me.jpeg" besar kecil hurufnya SAMA PERSIS dengan file aslimu
import profilePic from "../assets/Me.png"; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Bagian Kiri: Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-blue-500 mb-2 font-['Outfit']">
            Hello, I&apos;m
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-['Outfit']">
            {heroDetails.name}
          </h1>
          
          <div className="text-xl md:text-3xl font-semibold text-gray-400 mb-6 h-12 font-['Outfit']">
            I am a{" "}
            <TypeAnimation
              sequence={[
                heroDetails.roles[0], 2000,
                heroDetails.roles[1], 2000,
                heroDetails.roles[2], 2000,
                heroDetails.roles[3], 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-500"
            />
          </div>

          <p className="text-gray-400 max-w-lg mb-8 text-lg leading-relaxed">
            {heroDetails.tagline}
          </p>

          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Bagian Kanan: Foto Profil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
            {/* Lingkaran Gradient sebagai bingkai */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full rounded-full bg-[#0b0f19] overflow-hidden flex items-center justify-center relative">
                    
                    {/* 2. Panggil variabel import tadi di sini */}
                    <img 
                      src={profilePic}
                      alt="Muhammad Farrel Nayaka" 
                      className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                    
                    {/* Optional: Overlay tipis biar menyatu dengan dark mode */}
                    <div className="absolute inset-0 bg-blue-500/10 hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;