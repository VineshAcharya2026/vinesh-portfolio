import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      className="block p-4 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700"
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
    </motion.a>
  );
}
