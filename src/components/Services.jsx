import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services.js';
import SectionHeader from './SectionHeader.jsx';
import { fadeUp, stagger } from './motion.js';

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-shell">
      <SectionHeader
        eyebrow="04. Services"
        title="What I Can Build"
        text="Focused freelance services for businesses, founders and individuals who need reliable web products."
      />

      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              variants={reduceMotion ? undefined : fadeUp}
              key={service.title}
              className={`group border border-white/10 bg-panel2/80 p-6 transition-colors hover:border-primary/60 hover:bg-panel3 ${
                index === services.length - 1 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-ink text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-ink">
                  <Icon size={21} />
                </span>
                <ArrowRight
                  size={18}
                  className="text-faint transition-all group-hover:translate-x-1 group-hover:text-primary"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-text">{service.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-muted">{service.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
