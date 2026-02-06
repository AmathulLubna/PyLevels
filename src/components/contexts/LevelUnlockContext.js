import React, { createContext, useContext, useState, useEffect } from 'react';

const LevelUnlockContext = createContext();

export const LevelUnlockProvider = ({ children }) => {
  const [unlockedLevels, setUnlockedLevels] = useState(() => {
    const saved = localStorage.getItem('pyLevels_unlocked');
    return saved ? JSON.parse(saved) : [1]; // Level 1 unlocked by default
  });

  useEffect(() => {
    localStorage.setItem('pyLevels_unlocked', JSON.stringify(unlockedLevels));
  }, [unlockedLevels]);

  const completeLevel = (levelId, score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 60) {
      const nextLevelId = levelId + 1;
      // Max level is 17
      if (nextLevelId <= 17 && !unlockedLevels.includes(nextLevelId)) {
        setUnlockedLevels(prev => [...prev, nextLevelId]);
        return true; // Next level unlocked
      }
    }
    return false;
  };

  const isLevelUnlocked = (levelId) => {
    return unlockedLevels.includes(levelId);
  };

  return (
    <LevelUnlockContext.Provider value={{ unlockedLevels, completeLevel, isLevelUnlocked }}>
      {children}
    </LevelUnlockContext.Provider>
  );
};

export const useLevelUnlock = () => {
  const context = useContext(LevelUnlockContext);
  if (!context) {
    throw new Error('useLevelUnlock must be used within a LevelUnlockProvider');
  }
  return context;
};