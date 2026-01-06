import { skills } from "../content";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stacks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring creative ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {skill.icon}
              </div>
              <p className="font-semibold text-lg text-gray-300 group-hover:text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;