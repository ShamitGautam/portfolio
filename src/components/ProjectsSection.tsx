import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FolderGit2, Database, Bot, Cloud } from "lucide-react";

const projects = [
  {
    title: "Domain-Specific QA System",
    subtitle: "RAG + Vector DB",
    date: "Oct 2025",
    description:
      "Designed and implemented a Retrieval-Augmented Generation (RAG) system using document embeddings and vector search. Built an end-to-end chatbot interface for factual, domain-grounded responses.",
    highlights: [
      "RAG architecture with document embeddings",
      "Vector database for semantic search",
      "Cloud-hosted AI services",
      "End-to-end chatbot interface",
    ],
    tags: ["Python", "Vector DB", "RAG", "Cloud AI"],
    icons: [Database, Bot, Cloud],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
              >
                {/* Project header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/20">
                  <div className="flex items-center gap-3">
                    <FolderGit2 size={18} className="text-primary" />
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {project.title}
                    </span>
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {project.subtitle}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <span className="text-primary font-mono text-xs mt-1">▹</span>
                        <span className="text-sm text-foreground/80">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags and icons */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-primary/80 bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.icons.map((Icon, idx) => (
                        <Icon
                          key={idx}
                          size={16}
                          className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <a
              href="https://github.com/ShamitGautam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>View more on GitHub</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
