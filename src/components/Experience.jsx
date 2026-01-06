import { experience } from "../content";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    // Pastikan className hanya ini (hapus bg-dark/50 jika masih ada)
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
            </h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12 group"
            >
              {/* Dot Timeline */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0b0f19] shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 mt-2 sm:mt-0 w-fit backdrop-blur-sm">
                    {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg text-blue-500 mb-2 font-medium">{exp.company}</h4>
              <p className="text-gray-400 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;