import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { fadeUp } from './motion.js';

const projectTypes = [
  'Custom Website',
  'Web Application',
  'Business Website',
  'API / Backend',
  'Website Improvement',
];

export default function Contact() {
  const [notice, setNotice] = useState('');
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(
      'This form is a frontend placeholder. Connect an email service or backend endpoint before using it in production.',
    );
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <SectionHeader
        eyebrow="05. Contact"
        title="Let's Work Together"
        text="Have a project in mind? I'd love to hear about it."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <motion.aside
          variants={reduceMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="border border-white/10 bg-panel/80 p-6 backdrop-blur lg:col-span-4"
        >
          <h3 className="font-display text-xl font-semibold text-text">Contact options</h3>
          <p className="mt-3 leading-7 text-muted">
            Use the form to outline the project. Social and email details can be
            updated when Ibrahim provides the final profiles.
          </p>

          <div className="mt-8 grid gap-3">
            <a className="contact-link" href="https://github.com/sellamiibrahim" target="_blank" rel="noreferrer">
              <Github size={18} />
              github.com/sellamiibrahim
            </a>
            <a className="contact-link" href="https://linkedin.com/in/ibrahim-sellami-placeholder" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn placeholder
            </a>
            <a className="contact-link" href="mailto:email@example.com">
              <Mail size={18} />
              email@example.com
            </a>
          </div>
        </motion.aside>

        <motion.form
          variants={reduceMotion ? undefined : fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="border border-white/10 bg-panel2/90 p-6 backdrop-blur md:p-8 lg:col-span-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="field-label">
              Name
              <input className="field-input" name="name" type="text" required placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" name="email" type="email" required placeholder="you@example.com" />
            </label>
          </div>

          <label className="field-label mt-5">
            Project type
            <select className="field-input" name="projectType" required defaultValue="">
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="field-label mt-5">
            Message
            <textarea
              className="field-input min-h-36 resize-y"
              name="message"
              required
              placeholder="Tell me what you want to build, what matters most, and any timeline you have in mind."
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="min-h-6 text-sm text-primary" role="status" aria-live="polite">
              {notice}
            </p>
            <button type="submit" className="btn-primary justify-center">
              Send Message
              <Send size={17} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
