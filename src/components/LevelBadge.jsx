import React from 'react';
import { cn } from '@/lib/utils';

const LevelBadge = ({ difficulty }) => {
  const colors = {
    basic: 'bg-blue-500 text-white',
    intermediate: 'bg-purple-500 text-white',
    advanced: 'bg-red-500 text-white'
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
      colors[difficulty] || colors.basic
    )}>
      {difficulty}
    </span>
  );
};

export default LevelBadge;