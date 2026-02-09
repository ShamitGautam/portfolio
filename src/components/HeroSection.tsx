import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-primary text-sm mb-4"
          >
            {'> hello_world.init()'}
          </motion.p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Shamit Gautam</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-lg md:text-xl text-muted-foreground mb-6"
          >
            <span className="text-code-purple">const</span>{" "}
            <span className="text-code-yellow">role</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="text-code-green">"CS Undergrad & Aspiring Engineer"</span>
            <span className="inline-block w-2 h-5 bg-primary ml-1 animate-cursor-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            B.Tech in Computer Science at KIET Group of Institutions. Passionate about
            cloud engineering, AI-driven technologies, and building scalable systems.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/shamit-gautam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-border px-4 py-2.5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ShamitGautam"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border border-border px-4 py-2.5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
            </a>
            <a
              href="mailto:gautamshamit123@gmail.com"
              className="group flex items-center gap-2 border border-border px-4 py-2.5 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-lg animate-pulse-glow" />
            {/* Border frame */}
            <div className="relative border-2 border-primary/30 rounded-2xl p-1">
              <img
                src={profileImg}
                alt="Shamit Gautam"
                className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-xl"
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg" />
            </div>
            {/* Floating label */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-lg px-3 py-1.5 font-mono text-xs text-primary glow-border"
            >
              status: <span className="text-code-green">available</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-primary/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
