import { Github, Linkedin } from 'lucide-react';

const links = ['Home', 'About', 'Projects', 'Services', 'Contact'];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-bold text-text">Ibrahim Sellami</p>
            <p className="mt-1 font-display text-sm text-primary">Full-Stack Developer</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Building digital experiences that solve real problems.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 md:flex-col" aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 md:justify-end">
            <a className="icon-link" href="https://github.com/sellamiibrahim" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="icon-link" href="https://linkedin.com/in/ibrahim-sellami-placeholder" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-sm text-muted">
          © 2026 Ibrahim Sellami. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
