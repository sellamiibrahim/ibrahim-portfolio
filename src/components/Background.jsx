import { motion, useReducedMotion } from 'framer-motion';

export default function Background() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(11,15,23,0.25)_42%,#0b0f17_80%)]" />
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 36, -18, 0],
                y: [0, -26, 18, 0],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 bg-primary/10 blur-3xl md:h-[28rem] md:w-[42rem]"
      />
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -42, 30, 0],
                y: [0, 24, -18, 0],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-10 h-72 w-72 bg-blue/10 blur-3xl md:h-96 md:w-96"
      />
    </div>
  );
}
