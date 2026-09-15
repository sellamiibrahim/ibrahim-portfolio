import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { fadeUp, stagger } from './motion.js';

const codeLines = [
  ['const', 'developer', '= {'],
  ['name:', '"Ibrahim Sellami",'],
  ['role:', '"Full-Stack Developer",'],
  ['passion:', '"Building digital experiences"'],
  ['};', '', ''],
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pt-28"
    >
      <motion.div
        variants={reduceMotion ? undefined : stagger}
        initial="hidden"
        animate="visible"
        className="lg:col-span-7"
      >
        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping bg-primary opacity-70" />
            <span className="relative inline-flex h-2 w-2 bg-primary" />
          </span>
          Available for freelance work
        </motion.div>

        <motion.p
          variants={reduceMotion ? undefined : fadeUp}
          className="mb-3 font-display text-lg font-semibold text-muted md:text-xl"
        >
          Hi, I'm Ibrahim Sellami.
        </motion.p>
        <motion.h1
          variants={reduceMotion ? undefined : fadeUp}
          className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-normal text-text sm:text-6xl lg:text-7xl"
        >
          Full-Stack <span className="text-primary">Developer</span>
        </motion.h1>
        <motion.p
          variants={reduceMotion ? undefined : fadeUp}
          className="mt-6 max-w-2xl text-lg leading-8 text-muted"
        >
          I build modern, scalable web applications and digital experiences for
          businesses and individuals.
        </motion.p>

        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a className="btn-primary group" href="#projects">
            View My Work
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a className="btn-secondary" href="#contact">
            Let's Work Together
          </a>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : fadeUp}
          className="mt-8 flex flex-wrap items-center gap-5"
        >
          <a className="social-link" href="https://github.com/sellamiibrahim" target="_blank" rel="noreferrer">
            <Github size={19} />
            sellamiibrahim
          </a>
          <a className="social-link" href="https://linkedin.com/in/ibrahim-sellami-placeholder" target="_blank" rel="noreferrer">
            <Linkedin size={19} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 42, rotate: 1 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="lg:col-span-5"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative border border-white/10 bg-panel/85 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-panel3/70 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-[#ff5f56]" />
              <span className="h-3 w-3 bg-[#ffbd2e]" />
              <span className="h-3 w-3 bg-primary" />
              <span className="ml-2 font-display text-xs text-muted">developer.js</span>
            </div>
            <Sparkles className="text-primary" size={16} />
          </div>

          <div className="overflow-hidden p-5 font-mono text-sm leading-7 text-text sm:p-6">
            {codeLines.map((line, index) => (
              <div className="grid grid-cols-[2rem_1fr] gap-4" key={`${line[0]}-${index}`}>
                <span className="select-none text-right text-faint">{index + 1}</span>
                <code>
                  {index === 0 ? (
                    <>
                      <span className="text-violet">{line[0]}</span>{' '}
                      <span className="text-cyan">{line[1]}</span> {line[2]}
                    </>
                  ) : index === 4 ? (
                    <span>{line[0]}</span>
                  ) : (
                    <>
                      <span className="text-muted">{line[0]}</span>{' '}
                      <span className="text-primary">{line[1]}</span>
                    </>
                  )}
                </code>
              </div>
            ))}
            <div className="mt-5 border-t border-white/10 pt-4 font-display text-xs uppercase tracking-[0.16em] text-muted">
              <span className="text-primary">&gt;</span> Ready to build
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 hidden border border-primary/30 bg-primary/10 px-4 py-3 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-glow sm:block">
            Freelance mode: on
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
