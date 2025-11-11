import React from 'react';
import { motion } from 'framer-motion';

export default function Footer({ name }) {
  return (
    <motion.footer initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} className="mt-16 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {name}. Built for internship project.
      </div>
    </motion.footer>
  );
}
