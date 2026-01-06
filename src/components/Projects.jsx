import { projects } from "../content";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400">Some cool stuff I've built recently.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotate: 1,
                transition: { type: "spring", stiffness: 300 } 
              }}
              className="bg-[#1a1f2e] border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all group"
            >
              {/* Fake Browser Header / Image Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${getGradient(index)} p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/30 backdrop-blur-md"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30 backdrop-blur-md"></div>
                </div>
                {/* Decorative Icon inside placeholder */}
                <div className="absolute bottom-4 right-4 text-white/20 text-9xl font-bold rotate-12 select-none">
                    {index + 1}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                </p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-primary rounded-full border border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* UPDATED BUTTON HERE */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                    >
                        <FaExternalLinkAlt /> View Project
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getGradient = (index) => {
    const gradients = [
        "from-pink-500 to-rose-500", 
        "from-blue-500 to-cyan-500", 
        "from-purple-500 to-indigo-500", 
        "from-emerald-400 to-teal-500", 
    ];
    return gradients[index % gradients.length];
}

export default Projects;