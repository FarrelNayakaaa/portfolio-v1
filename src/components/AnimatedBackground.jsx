import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
      
      {/* Blob 1: Ungu/Pink (Gerak Melingkar) */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"
      />

      {/* Blob 2: Biru (Gerak Horizontal & Vertical) */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"
      />

      {/* Blob 3: Pink/Kuning (Kecil & Cepet di bawah) */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[80px]"
      />

    </div>
  );
};

export default AnimatedBackground;