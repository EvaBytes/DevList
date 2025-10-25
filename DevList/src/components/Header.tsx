import React from "react";
import { motion} from "motion/react";

interface HeaderProps {
  progress: number;
}

const Header: React.FC<HeaderProps> = ({ progress }) => (
  <header className="flex items-center justify-between mb-6">
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight">My Devlist</h1>
      <p className="text-sm text-gray-600">Checklist de inspiración ✨</p>
    </div>
    <div className="text-right">
      <div className="text-sm text-gray-500">Progreso</div>
      <div className="w-56 bg-gray-200 rounded-full h-3 overflow-hidden mt-2 shadow-inner">
        <motion.div
          layout
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6 }}
          className="h-3 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"
        />
      </div>
      <div className="text-xs text-gray-600 mt-1">{progress}%</div>
    </div>
  </header>
);

export {Header};
