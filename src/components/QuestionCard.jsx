import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const QuestionCard = ({ question, onAnswerSelect, selectedAnswer, showFeedback }) => {
  const renderOptions = () => {
    if (question.type === 'mcq') {
      return (
        <div className="grid grid-cols-1 gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            
            let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ';
            
            if (showFeedback) {
              if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-500/20 text-white';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-500/20 text-white';
              } else {
                buttonClass += 'border-gray-600 bg-gray-800/50 text-gray-400';
              }
            } else {
              buttonClass += isSelected
                ? 'border-purple-500 bg-purple-500/20 text-white'
                : 'border-gray-600 bg-gray-800/50 text-white hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105';
            }

            return (
              <motion.button
                key={index}
                onClick={() => !showFeedback && onAnswerSelect(index)}
                className={buttonClass}
                disabled={showFeedback}
                whileHover={!showFeedback ? { scale: 1.02 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showFeedback && isCorrect && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      );
    } else if (question.type === 'trueFalse') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {[true, false].map((value) => {
            const isSelected = selectedAnswer === value;
            const isCorrect = value === question.correctAnswer;
            
            let buttonClass = 'p-6 rounded-lg border-2 transition-all duration-200 font-bold text-lg ';
            
            if (showFeedback) {
              if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-500/20 text-white';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-500/20 text-white';
              } else {
                buttonClass += 'border-gray-600 bg-gray-800/50 text-gray-400';
              }
            } else {
              buttonClass += isSelected
                ? 'border-purple-500 bg-purple-500/20 text-white'
                : 'border-gray-600 bg-gray-800/50 text-white hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105';
            }

            return (
              <motion.button
                key={value.toString()}
                onClick={() => !showFeedback && onAnswerSelect(value)}
                className={buttonClass}
                disabled={showFeedback}
                whileHover={!showFeedback ? { scale: 1.05 } : {}}
                whileTap={!showFeedback ? { scale: 0.95 } : {}}
              >
                <div className="flex flex-col items-center gap-2">
                  <span>{value ? 'TRUE' : 'FALSE'}</span>
                  {showFeedback && isCorrect && (
                    <Check className="w-6 h-6 text-green-500" />
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 whitespace-pre-line font-mono leading-relaxed">
          {question.question}
        </h2>
      </motion.div>

      {renderOptions()}

      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/30"
        >
          <p className="text-blue-200 leading-relaxed">{question.explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default QuestionCard;