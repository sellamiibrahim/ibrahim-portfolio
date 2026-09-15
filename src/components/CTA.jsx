import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from './motion.js';

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={reduceMotion ? undefined : fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative overflow-hidden border border-primary/20 bg-panel2 p-7 md:p-10"
      >
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
        <div className="relative max-w-3xl">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Start here
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-normal text-text md:text-5xl">
            Have an idea? Let's build it.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Whether you need a website, a web application or a custom digital
            solution, let's turn your idea into something real.
          </p>
          <a href="#contact" className="btn-primary mt-7 inline-flex">
            Start a Project
            <ArrowRight size={17} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
