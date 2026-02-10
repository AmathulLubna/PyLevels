import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import quizData from '@/components/data/quizData';
import LevelCard from '@/components/LevelCard';
import { useLevelUnlock } from '@/contexts/LevelUnlockContext';

const LevelSelectPage = () => {
  const navigate = useNavigate();
  const { isLevelUnlocked, unlockedLevels } = useLevelUnlock();

  const handleStartLevel = (levelId) => {
    navigate(`/quiz/level/${levelId}`);
  };

  // Calculate overall progress
  const progressPercentage = (unlockedLevels.length / quizData.length) * 100;

  return (
    <>
      <Helmet>
        <title>Select Level | PyLevels</title>
        <meta name="description" content="Choose from 17 levels of Python mastery ranging from basics to advanced topics." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 px-4 py-8 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Python Mastery Path</h1>
              <p className="text-gray-400">Complete each level with ≥60% score to unlock the next.</p>
            </div>
            
            {/* Progress Widget */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 w-full md:w-64">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Progress</span>
                <span className="text-purple-400 font-bold">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                {unlockedLevels.length} of {quizData.length} Levels Unlocked
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {quizData.map((level, index) => (
              <LevelCard 
                key={level.id} 
                level={level} 
                index={index}
                isUnlocked={isLevelUnlocked(level.id)}
                onStart={handleStartLevel}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelSelectPage;