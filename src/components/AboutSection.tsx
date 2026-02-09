import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Terminal card */}
          <div className="bg-card border border-border rounded-xl overflow-hidden glow-border">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-code-yellow/60" />
                <div className="w-3 h-3 rounded-full bg-code-green/60" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal size={14} className="text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">shamit@portfolio:~$ cat about.md</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                <span className="text-code-green">## </span>
                <span className="text-foreground">
                  I'm a Computer Science undergraduate at{" "}
                  <span className="text-primary">KIET Group of Institutions</span>, Ghaziabad,
                  currently in my 3rd year of B.Tech.
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground"
              >
                <span className="text-code-green">&gt; </span>
                <span className="text-foreground">
                  I'm passionate about building software solutions using{" "}
                  <span className="text-code-yellow">Java</span>,{" "}
                  <span className="text-code-yellow">Python</span>, and{" "}
                  <span className="text-code-yellow">SQL</span>. I'm actively exploring{" "}
                  <span className="text-primary">Cloud Computing</span> and{" "}
                  <span className="text-primary">AI-driven technologies</span>.
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground"
              >
                <span className="text-code-green">&gt; </span>
                <span className="text-foreground">
                  My goal is to contribute to real-world projects, gain industry experience,
                  and grow professionally in{" "}
                  <span className="text-accent">scalable systems</span> and{" "}
                  <span className="text-accent">AI-driven technologies</span>.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-2"
              >
                <span className="text-muted-foreground">shamit@portfolio:~$ </span>
                <span className="inline-block w-2 h-4 bg-primary animate-cursor-blink" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
