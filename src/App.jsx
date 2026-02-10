import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from "./pages/LandingPage";
import LevelSelectPage from './pages/LevelSelectPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import { Toaster } from './components/ui/toaster';
import { LevelUnlockProvider } from './contexts/LevelUnlockContext';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  return (
    <Router>
      <LevelUnlockProvider>
        <QuizProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/levels" element={<LevelSelectPage />} />
            <Route path="/quiz/level/:levelId" element={<QuizPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
          <Toaster />
        </QuizProvider>
      </LevelUnlockProvider>
    </Router>
  );
}

export default App;