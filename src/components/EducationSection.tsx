import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    institution: "KIET Group of Institutions, Ghaziabad",
    degree: "Bachelor of Technology in Computer Science",
    period: "Sept 2023 – Sept 2027",
    score: "Current Percentage: 75%",
    icon: GraduationCap,
    current: true,
  },
  {
    institution: "Chhaya Public School, Modinagar",
    degree: "Intermediate (CBSE)",
    period: "May 2023",
    score: "Secured 86%",
    icon: School,
    current: false,
  },
  {
    institution: "Chhaya Public School, Modinagar",
    degree: "Matriculation (CBSE)",
    period: "Aug 2021",
    score: "Secured 82%",
    icon: School,
    current: false,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * i, duration: 0.5 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      edu.current
                        ? "border-primary bg-primary/20 animate-pulse-glow"
                        : "border-border bg-card"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        edu.current ? "bg-primary" : "bg-muted-foreground"
                      }`}
                    />
                  </div>

                  <div className="bg-card border border-border rounded-xl p-5 card-hover">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <edu.icon size={16} className="text-primary" />
                        <h3 className="font-semibold text-foreground text-sm md:text-base">
                          {edu.institution}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{edu.degree}</p>
                    <p className="font-mono text-xs text-accent">{edu.score}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
