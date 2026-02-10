import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from "./components/pages/LandingPage";
import LevelSelectPage from './components/pages/LevelSelectPage';
import QuizPage from './components/pages/QuizPage';
import ResultsPage from './components/pages/ResultsPage';
import { Toaster } from './components/ui/toaster';
import { LevelUnlockProvider } from './components/contexts/LevelUnlockContext';
import { QuizProvider } from './components/contexts/QuizContext';


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