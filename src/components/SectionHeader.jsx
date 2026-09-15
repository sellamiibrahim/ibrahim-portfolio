import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from './motion.js';

export default function SectionHeader({ eyebrow, title, text }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? undefined : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
    >
      <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary">
        <span className="text-cyan">//</span> {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-normal text-text md:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted">{text}</p> : null}
    </motion.div>
  );
}
