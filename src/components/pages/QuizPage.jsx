import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { useQuizContext } from '../contexts/QuizContext';
import ProgressBar from '../ProgressBar';
import QuestionCard from '../QuestionCard';

const QuizPage = () => {
  const navigate = useNavigate();
  const { levelId } = useParams();
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showFeedback,
    quizComplete,
    totalQuestions,
    activeLevelId,
    currentLevelInfo,
    loadLevel,
    selectAnswer,
    nextQuestion,
    calculateScore
  } = useQuizContext();

  // Load level data when ID changes
  useEffect(() => {
    if (levelId) {
      loadLevel(levelId);
    }
  }, [levelId, loadLevel]);

  // Handle completion
  useEffect(() => {
    if (quizComplete && activeLevelId) {
      const scoreData = calculateScore();
      navigate('/results', { state: scoreData });
    }
  }, [quizComplete, activeLevelId, calculateScore, navigate]);

  if (!currentLevelInfo) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          <p>Loading Level {levelId}...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Level ${activeLevelId}: ${currentLevelInfo.name} | PyLevels`}</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
             <div className="flex items-center justify-between mb-2">
               <span className="text-purple-400 font-bold uppercase text-sm tracking-widest">Level {activeLevelId}</span>
               <button onClick={() => navigate('/levels')} className="text-gray-400 hover:text-white text-sm">Exit</button>
             </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
              {currentLevelInfo.name}
            </h1>
            <p className="text-gray-300 text-center text-sm md:text-base">{currentLevelInfo.description}</p>
          </motion.div>

          <ProgressBar current={currentQuestionIndex} total={totalQuestions} />

          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700 min-h-[400px] flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentQuestion && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuestionCard
                    question={currentQuestion}
                    onAnswerSelect={selectAnswer}
                    selectedAnswer={selectedAnswer}
                    showFeedback={showFeedback}
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex justify-end"
              >
                <button
                  onClick={nextQuestion}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200"
                >
                  {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;