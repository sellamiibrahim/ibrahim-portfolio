import { motion, useReducedMotion } from 'framer-motion';
import { skillCategories } from '../data/skills.js';
import SectionHeader from './SectionHeader.jsx';
import { fadeUp, stagger } from './motion.js';

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="02. Skills"
        title="Technical Arsenal"
        text="A focused toolkit for building modern interfaces, backend systems and practical web products."
      />
      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {skillCategories.map((category) => (
          <motion.article
            variants={reduceMotion ? undefined : fadeUp}
            key={category.title}
            className="group border border-white/10 bg-panel/80 p-5 backdrop-blur transition-colors hover:border-cyan/60"
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-lg font-semibold text-text">{category.title}</h3>
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                Layer {category.skills.length}
              </span>
            </div>
            <div className="grid gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between border border-white/8 bg-ink/70 px-3 py-3 transition-colors group-hover:border-white/15"
                >
                  <span className="text-sm font-medium text-text">{skill}</span>
                  <span className="h-2 w-2 bg-primary" />
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
