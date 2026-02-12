import { useState } from 'react';
import quizData from '../data/quizData';

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = quizData[currentQuestionIndex];

  const selectAnswer = (answer) => {
    if (showFeedback) return; // Prevent changing answer after selection
    
    setSelectedAnswer(answer);
    setShowFeedback(true);

    const isCorrect = answer === currentQuestion.correctAnswer;
    
    setAnswers([...answers, {
      questionId: currentQuestion.id,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswers([]);
  };

  const calculateScore = () => {
    return {
      score,
      total: quizData.length,
      percentage: Math.round((score / quizData.length) * 100)
    };
  };

  const isQuizComplete = currentQuestionIndex === quizData.length - 1 && showFeedback;

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showFeedback,
    score,
    answers,
    totalQuestions: quizData.length,
    isQuizComplete,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    calculateScore
  };
};