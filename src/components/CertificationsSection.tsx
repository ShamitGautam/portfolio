import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, Terminal, Database, Code2 } from "lucide-react";

const certifications = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "AWS Skill Builder",
    date: "Jan 2026",
    icon: Cloud,
    color: "text-code-orange",
  },
  {
    title: "Ubuntu Linux: Operating System Basics",
    issuer: "LinkedIn",
    date: "Jul 2025",
    icon: Terminal,
    color: "text-code-green",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Nov 2025",
    icon: Database,
    color: "text-primary",
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "Nov 2025",
    icon: Code2,
    color: "text-code-yellow",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-5 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <cert.icon size={20} className={`${cert.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="text-muted-foreground text-xs">{cert.issuer}</span>
                      <span className="font-mono text-xs text-primary">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
