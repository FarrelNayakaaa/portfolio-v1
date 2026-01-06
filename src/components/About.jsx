import { aboutDetails } from "../content";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Kiri: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Frame Aksen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-30 blur-lg"></div>
            <div className="relative bg-[#1a1f2e] border border-white/10 rounded-2xl p-8 overflow-hidden shadow-2xl">
                {/* Ilustrasi Dekoratif (Code snippet mockup) */}
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2 font-mono text-sm text-gray-400">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">profile</span> = &#123;</p>
                    <p className="pl-4">name: <span className="text-green-400">"{aboutDetails.university}"</span>,</p>
                    <p className="pl-4">role: <span className="text-green-400">"UI/UX & Frontend"</span>,</p>
                    <p className="pl-4">gpa: <span className="text-orange-400">"{aboutDetails.gpa}"</span>,</p>
                    <p className="pl-4">traits: [<span className="text-green-400">"Creative"</span>, <span className="text-green-400">"Detail-oriented"</span>]</p>
                    <p>&#125;;</p>
                </div>
            </div>
          </motion.div>

          {/* Bagian Kanan: Teks */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              {aboutDetails.description}
            </p>
            
            <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-blue-300 italic">
                    "Design is not just what it looks like and feels like. Design is how it works."
                </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;