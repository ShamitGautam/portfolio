import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border max-w-[100px]" />
            <span className="font-mono text-primary text-sm">06.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Get In Touch</h2>
            <div className="flex-1 h-px bg-border max-w-[100px]" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
          >
            I'm currently looking for internship and placement opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span className="font-mono text-sm">Modinagar, Ghaziabad</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={16} className="text-primary" />
              <span className="font-mono text-sm">+91 7017510220</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:gautamshamit123@gmail.com"
              className="group inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 glow-border"
            >
              <Mail size={16} />
              <span>Say Hello</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shamit-gautam"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ShamitGautam"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-border text-muted-foreground hover:text-primary hover:border-primary/30 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
