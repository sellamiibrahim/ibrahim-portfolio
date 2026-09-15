import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import SectionHeader from './SectionHeader.jsx';
import { fadeUp, stagger } from './motion.js';

function ProjectVisual({ project }) {
  return (
    <div
      className={`relative h-56 overflow-hidden border-b border-white/10 bg-gradient-to-br ${project.accent}`}
      role="img"
      aria-label={project.imageAlt}
    >
      <div className="absolute inset-5 border border-white/10 bg-ink/45 p-4 backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-primary" />
          <span className="h-2.5 w-2.5 bg-cyan" />
          <span className="h-2.5 w-2.5 bg-violet" />
          <span className="ml-auto font-display text-[10px] uppercase tracking-[0.14em] text-muted">
            Preview
          </span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 space-y-3">
            <span className="block h-20 border border-white/10 bg-primary/15" />
            <span className="block h-12 border border-white/10 bg-cyan/10" />
          </div>
          <div className="col-span-3 space-y-3">
            <span className="block h-4 w-4/5 bg-white/20" />
            <span className="block h-4 w-2/3 bg-white/10" />
            <span className="block h-20 border border-white/10 bg-white/5" />
            <span className="block h-8 w-1/2 bg-primary/30" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
        {project.technologies.join(' / ')}
      </div>
    </div>
  );
}

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="03. Work"
        title="Selected Projects"
        text="Modular project data is ready to edit with real URLs, images and expanded case-study copy."
      />

      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            variants={reduceMotion ? undefined : fadeUp}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            transition={{ duration: 0.25 }}
            key={project.name}
            className="group overflow-hidden border border-white/10 bg-panel/85 backdrop-blur transition-colors hover:border-primary/60"
          >
            <ProjectVisual project={project} />
            <div className="p-6">
              <h3 className="font-display text-2xl font-semibold text-text">{project.name}</h3>
              <p className="mt-3 min-h-20 leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="mini-action" href={project.liveUrl}>
                  <ExternalLink size={16} />
                  View Project
                </a>
                <a className="mini-action" href={project.githubUrl}>
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
