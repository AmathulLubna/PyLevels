import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Trophy, RefreshCw, List, Play, Award, Lock, CheckCircle, XCircle } from 'lucide-react';
import { useLevelUnlock } from '@/contexts/LevelUnlockContext';
import quizData from '@/data/quizData';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { completeLevel } = useLevelUnlock();
  
  const { score = 0, total = 0, percentage = 0, levelId = 1 } = location.state || {};

  // Find next level info
  const nextLevelId = levelId + 1;
  const nextLevel = quizData.find(l => l.id === nextLevelId);
  const isPassing = percentage >= 60;
  
  // Track new unlock state
  const [justUnlocked, setJustUnlocked] = React.useState(false);

  useEffect(() => {
    if (levelId && score !== undefined) {
      const unlocked = completeLevel(levelId, score, total);
      if (unlocked) setJustUnlocked(true);
    }
  }, [levelId, score, total, completeLevel]);

  const getMessage = () => {
    if (percentage >= 90) return { text: "Outstanding! Masterful Performance! 🌟", color: "text-yellow-400" };
    if (percentage >= 80) return { text: "Excellent Work! 🎉", color: "text-green-400" };
    if (percentage >= 60) return { text: "Level Passed! Good Job! 👍", color: "text-blue-400" };
    return { text: "Level Failed. Try Again! 💪", color: "text-red-400" };
  };

  const message = getMessage();

  return (
    <>
      <Helmet>
        <title>{`Results - Level ${levelId} | PyLevels`}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700"
          >
            {/* Header Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className={`p-6 rounded-full ${isPassing ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-700'}`}>
                {isPassing ? (
                  <Trophy className="w-16 h-16 text-white" />
                ) : (
                  <Lock className="w-16 h-16 text-gray-400" />
                )}
              </div>
            </motion.div>

            {/* Title & Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
              {isPassing ? 'Level Complete!' : 'Level Failed'}
            </h1>
            <p className={`text-xl font-bold text-center mb-8 ${message.color}`}>
              {message.text}
            </p>

            {/* Score Stats */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-white mb-1">{percentage}%</div>
                <div className="text-sm text-gray-400">Total Score</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-white mb-1">{score}/{total}</div>
                <div className="text-sm text-gray-400">Correct Answers</div>
              </div>
            </div>
            
            {/* Unlock Notification */}
            {justUnlocked && nextLevel && (
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-8 text-center"
               >
                 <p className="text-green-300 font-bold flex items-center justify-center gap-2">
                   <Award className="w-5 h-5" />
                   New Level Unlocked: {nextLevel.name}
                 </p>
               </motion.div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {isPassing && nextLevel && (
                <button
                  onClick={() => navigate(`/quiz/level/${nextLevelId}`)}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  Start Next Level <Play className="w-5 h-5 fill-current" />
                </button>
              )}
              
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/quiz/level/${levelId}`)}
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> {isPassing ? 'Retake Level' : 'Try Again'}
                </button>
                <button
                  onClick={() => navigate('/levels')}
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <List className="w-4 h-4" /> Levels
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;