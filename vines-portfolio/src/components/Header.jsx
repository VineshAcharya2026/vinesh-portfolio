import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ name }) {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.5 }}>
          <span className="font-semibold text-lg">Vines</span>
        </motion.div>
        <nav className="hidden md:flex gap-6 text-slate-300">
          <a href="#skills" className="hover:text-slate-100">Skills</a>
          <a href="#projects" className="hover:text-slate-100">Projects</a>
          <a href="#contact" className="hover:text-slate-100">Contact</a>
        </nav>
      </div>
    </header>
  );
}
