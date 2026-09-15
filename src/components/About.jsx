import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Brain, Layers3, Terminal } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { fadeUp, stagger } from './motion.js';

const features = [
  {
    title: 'Full-Stack Development',
    text: 'End-to-end thinking across interfaces, backend logic and databases.',
    icon: Layers3,
  },
  {
    title: 'Problem Solving',
    text: 'Practical engineering choices shaped around real user and business needs.',
    icon: Brain,
  },
  {
    title: 'Modern Web Technologies',
    text: 'Current frontend and backend tools used with focus, restraint and clarity.',
    icon: Terminal,
  },
  {
    title: 'Continuous Learning',
    text: 'A steady habit of improving systems, workflows and technical judgement.',
    icon: BookOpen,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell">
      <SectionHeader eyebrow="01. Profile" title="About Me" />
      <div className="grid gap-8 lg:grid-cols-12">
        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="border border-white/10 bg-panel/80 p-6 backdrop-blur md:p-8 lg:col-span-5"
        >
          <p className="text-xl font-semibold leading-8 text-text">
            I am a Full-Stack Developer interested in building complete web
            applications that are useful, clear and reliable.
          </p>
          <p className="mt-5 leading-7 text-muted">
            I enjoy turning ideas into practical digital products, from responsive
            interfaces to backend systems and data flows. My work is guided by
            clean structure, thoughtful user experience and maintainable code.
          </p>
          <p className="mt-5 leading-7 text-muted">
            For freelance clients, I focus on understanding the goal first, then
            shaping a web solution that feels polished, performs well and can grow
            beyond the first version.
          </p>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-7"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                variants={reduceMotion ? undefined : fadeUp}
                key={feature.title}
                className="group border border-white/10 bg-panel2/80 p-6 transition-colors hover:border-primary/70 hover:bg-panel3"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-ink text-primary transition-colors group-hover:border-primary">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-xs text-faint">0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-text">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
