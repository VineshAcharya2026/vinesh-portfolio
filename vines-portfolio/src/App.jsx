import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project A', desc: 'A short description of project A.', link: '#' },
  { title: 'Project B', desc: 'A short description of project B.', link: '#' },
  { title: 'Project C', desc: 'A short description of project C.', link: '#' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Header name="Vines" />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y:0 }} transition={{ duration: 0.8 }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-offset-2 ring-slate-700">
              <img src="./assets/profile.svg" alt="Vines" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">Hi, I'm <span className="text-indigo-400">Vines</span> 👋</h1>
              <p className="mt-3 text-slate-300 max-w-xl">
                I'm building this personal website as part of my internship project. I focus on clean UI,
                readable code, and pleasant micro-interactions. This one uses React + Tailwind + Framer Motion.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="#projects" className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition">View Projects</a>
                <a href="#contact" className="px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 transition">Contact</a>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="skills" className="mt-14">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {['JavaScript','React','Tailwind','Git','HTML','CSS'].map(s => (
              <span key={s} className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 text-sm">{s}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-10">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3 text-slate-300">Email: <a href="mailto:your-email@example.com" className="text-indigo-300">your-email@example.com</a></p>
        </section>
      </main>
      <Footer name="Vines" />
    </div>
  );
}
