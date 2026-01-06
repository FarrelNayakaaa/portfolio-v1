import { socialLinks } from "../content";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden text-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-3xl mx-auto px-4">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s work together! 
            <motion.span 
                className="inline-block ml-4"
                animate={{ rotate: [0, 20, -20, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            >
                👋
            </motion.span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
            Got a project in mind? Or just want to say hi? <br/>
            I'm always open to new opportunities.
            </p>
            
            <motion.a 
                href={`mailto:farrel2075@gmail.com`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block bg-white text-dark font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-white/20 transition-shadow mb-12"
            >
                Say Hello
            </motion.a>
        </motion.div>

        {/* Social Icons with Bouncy Effect */}
        <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.2, color: "#3b82f6" }}
                    className="text-3xl text-gray-400 transition-colors"
                >
                    {social.icon}
                </motion.a>
            ))}
        </div>

        <footer className="mt-20 text-gray-600 text-sm">
            <p>Designed & Built by <span className="text-primary">Farrel Nayaka</span></p>
            <p className="mt-2 text-xs">© 2026 All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;