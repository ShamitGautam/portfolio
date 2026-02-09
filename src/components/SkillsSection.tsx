import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Wrench, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    color: "text-code-yellow",
    borderColor: "border-code-yellow/20",
    glowColor: "hover:shadow-[0_0_25px_hsl(45_90%_65%/0.15)]",
    skills: ["Java", "Python", "SQL", "C"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-primary",
    borderColor: "border-primary/20",
    glowColor: "hover:shadow-[0_0_25px_hsl(185_80%_55%/0.15)]",
    skills: ["Oracle Cloud Infrastructure", "Vector Database"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "text-code-green",
    borderColor: "border-code-green/20",
    glowColor: "hover:shadow-[0_0_25px_hsl(120_60%_60%/0.15)]",
    skills: ["Git", "GitHub", "Wireshark", "Linux"],
  },
  {
    title: "Concepts",
    icon: BookOpen,
    color: "text-code-purple",
    borderColor: "border-code-purple/20",
    glowColor: "hover:shadow-[0_0_25px_hsl(270_70%_70%/0.15)]",
    skills: ["Data Structures", "OOP", "Operating Systems", "DBMS"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className={`bg-card border ${cat.borderColor} rounded-xl p-6 transition-all duration-300 ${cat.glowColor} hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon size={20} className={cat.color} />
                  <h3 className={`font-mono text-sm font-semibold ${cat.color}`}>
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-secondary/50 text-foreground border border-border/50 hover:border-primary/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
