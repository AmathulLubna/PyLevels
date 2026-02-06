import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Brain, Trophy, Layers } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>PyLevels - Master Python with Interactive Quizzes</title>
        <meta name="description" content="Master Python programming through 17 progressive levels. Test your knowledge from basics to advanced concepts." />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1638272181967-7d3772a91265)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-slate-900/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8 flex justify-center"
            >
              <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl">
                <Code2 className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            {/* Main Title with Gradient Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              style={{ lineHeight: '1.2' }}
            >
              PyLevels
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-white mb-6"
            >
              Master Python in 17 Levels
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Embark on a structured journey from absolute beginner to Python expert.
              Unlock new challenges as you prove your skills.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/levels')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Layers className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">17 Progression Levels</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">250+ Questions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Earn Mastery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;