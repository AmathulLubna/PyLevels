import React, { createContext, useContext, useState, useCallback } from 'react';
import quizData from '@/data/quizData';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [activeLevelId, setActiveLevelId] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  
  // New state for single question interactions
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const loadLevel = useCallback((levelId) => {
    const level = quizData.find(l => l.id === parseInt(levelId));
    if (level) {
      setActiveLevelId(level.id);
      setCurrentQuestions(level.questions);
      resetQuiz();
    }
  }, []);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setScore(0);
    setQuizComplete(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleSelectAnswer = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const currentQ = currentQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQ.correctAnswer;
    
    setSelectedAnswers(prev => [...prev, {
      questionId: currentQ.id,
      answer,
      isCorrect
    }]);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const calculateScore = () => {
    return {
      score,
      total: currentQuestions.length,
      percentage: Math.round((score / currentQuestions.length) * 100),
      levelId: activeLevelId
    };
  };
  
  const currentLevelInfo = activeLevelId ? quizData.find(l => l.id === activeLevelId) : null;

  const value = {
    currentQuestionIndex,
    currentQuestion: currentQuestions[currentQuestionIndex],
    currentQuestions,
    selectedAnswer,
    showFeedback,
    score,
    quizComplete,
    totalQuestions: currentQuestions.length,
    activeLevelId,
    currentLevelInfo,
    loadLevel,
    resetQuiz,
    selectAnswer: handleSelectAnswer,
    nextQuestion,
    calculateScore,
    isQuizComplete: quizComplete // redundant but compatible
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};