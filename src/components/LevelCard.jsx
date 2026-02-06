import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Play, CheckCircle2 } from 'lucide-react';
import LevelBadge from './LevelBadge';

const LevelCard = ({ level, isUnlocked, onStart, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={isUnlocked ? { scale: 1.03, y: -5 } : {}}
      className={`relative rounded-xl p-6 border transition-all duration-300 flex flex-col h-full ${
        isUnlocked 
          ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/20 shadow-xl' 
          : 'bg-gray-900/50 border-gray-800 opacity-70 grayscale'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-400 font-mono text-sm">Level {level.id}</span>
        {isUnlocked ? (
           <LevelBadge difficulty={level.difficulty} />
        ) : (
          <Lock className="w-5 h-5 text-gray-500" />
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{level.name}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{level.description}</p>

      <button
        onClick={() => isUnlocked && onStart(level.id)}
        disabled={!isUnlocked}
        className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors ${
          isUnlocked
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:from-purple-500 hover:to-blue-500'
            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isUnlocked ? (
          <>
            Start Level <Play className="w-4 h-4 fill-current" />
          </>
        ) : (
          <>
            Locked <Lock className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.div>
  );
};

export default LevelCard;