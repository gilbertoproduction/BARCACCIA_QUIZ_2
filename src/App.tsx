/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, RefreshCw, Trophy, Zap, 
  Flame, Award, Settings, Volume2, 
  VolumeX, Target, Cpu, LayoutGrid
} from 'lucide-react';
import { Member, Choice } from './types';
import { QUIZZES, Quiz } from './data/quizzes';

// --- Types ---
type QuizPhase = 'START' | 'SELECT' | 'QUESTION' | 'RESULT';

interface UserStats {
  xp: number;
  level: number;
  streak: number;
  lastPlayed: string | null;
  badges: string[];
}

// --- Constants ---
const XP_PER_ANSWER = 50;
const XP_PER_LEVEL = 1000;
const BADGES = [
  { id: 'first_step', name: 'Codice Sorgente', icon: <Cpu />, desc: 'Primo quiz completato' },
  { id: 'streak_3', name: 'Circuiti Caldi', icon: <Flame />, desc: '3 giorni di streak' },
  { id: 'level_5', name: 'Architetto Digitale', icon: <Award />, desc: 'Raggiungi il livello 5' },
  { id: 'perfectionist', name: 'Algoritmo Puro', icon: <Target />, desc: '100% simile a qualcuno' },
];

// --- Utilities ---
const getLevel = (xp: number) => Math.floor(xp / XP_PER_LEVEL) + 1;
const getXPForNextLevel = (level: number) => level * XP_PER_LEVEL;

// --- Sub-components ---

const XPBar = ({ xp }: { xp: number }) => {
  const currentLevel = getLevel(xp);
  const xpInCurrentLevel = xp % XP_PER_LEVEL;
  const progress = (xpInCurrentLevel / XP_PER_LEVEL) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 pt-6 bg-gradient-to-b from-cyber-black to-transparent">
      <div className="max-w-md mx-auto flex items-center gap-4">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] font-mono text-neon-cyan/50 tracking-tighter">LVL {currentLevel}</span>
            <span className="text-[10px] font-mono text-neon-cyan/50 tracking-tighter">{xpInCurrentLevel}/{XP_PER_LEVEL} XP</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <motion.div 
              className="h-full bg-neon-cyan rounded-full neon-glow-cyan"
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', damping: 20, stiffness: 60 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CyberButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = 'primary',
  disabled = false 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  disabled?: boolean;
}) => {
  const variants = {
    primary: "bg-white/5 text-white hover:bg-white/10 active:scale-95 border-white/10",
    secondary: "bg-neon-magenta/20 text-neon-magenta hover:bg-neon-magenta/30 border-neon-magenta/30",
    outline: "bg-transparent border-white/20 text-white/70 hover:border-white/40",
    neon: "bg-neon-cyan text-black font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={`relative px-6 py-4 rounded-2xl border transition-all duration-200 flex items-center justify-center gap-2 group overflow-hidden ${variants[variant]} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.button>
  );
};

export default function App() {
  const [phase, setPhase] = useState<QuizPhase>('START');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('user_stats');
    if (saved) return JSON.parse(saved);
    return { xp: 0, level: 1, streak: 0, lastPlayed: null, badges: [] };
  });

  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>(() => {
    const saved = localStorage.getItem('completed_quizzes');
    return saved ? JSON.parse(saved) : [];
  });

  const [scores, setScores] = useState<Record<Member, number>>({
    SIMO: 0, MARCO: 0, DAVE: 0, PIETRO: 0, FILO: 0,
  });

  const saveStats = useCallback((newStats: UserStats) => {
    setStats(newStats);
    localStorage.setItem('user_stats', JSON.stringify(newStats));
  }, []);

  useEffect(() => {
    localStorage.setItem('completed_quizzes', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

  // Handle Level Up Check
  useEffect(() => {
    const currentLevel = getLevel(stats.xp);
    if (currentLevel > stats.level) {
      setShowLevelUp(true);
      saveStats({ ...stats, level: currentLevel });
      
      // Auto-unlock level badge
      if (currentLevel >= 5 && !stats.badges.includes('level_5')) {
        saveStats({ ...stats, level: currentLevel, badges: [...stats.badges, 'level_5'] });
      }
    }
  }, [stats.xp, stats.level, stats.badges, saveStats]);

  const currentQuestion = activeQuiz?.questions[currentIdx];

  const handleStart = () => {
    setPhase('SELECT');
  };

  const handleSelectQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setCurrentIdx(0);
    setHasAnswered(false);
    setScores({ SIMO: 0, MARCO: 0, DAVE: 0, PIETRO: 0, FILO: 0 });
    setPhase('QUESTION');
  };

  const handleChoice = (choice: Choice) => {
    if (hasAnswered) return;
    
    setScores(prev => ({ ...prev, [choice.member]: (prev[choice.member] as number) + 1 }));
    setHasAnswered(true);
    
    // Gain XP
    saveStats({ ...stats, xp: stats.xp + XP_PER_ANSWER });

    // Haptic feedback simulation or sound could go here
  };

  const handleNext = () => {
    if (activeQuiz && currentIdx < activeQuiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setHasAnswered(false);
    } else {
      if (activeQuiz && !completedQuizzes.includes(activeQuiz.id)) {
        setCompletedQuizzes(prev => [...prev, activeQuiz.id]);
        
        // Badge: first_step
        const newBadges = [...stats.badges];
        if (!newBadges.includes('first_step')) newBadges.push('first_step');
        
        saveStats({ ...stats, badges: newBadges });
      }
      setPhase('RESULT');
    }
  };

  const resetQuiz = () => {
    setPhase('SELECT');
    setActiveQuiz(null);
  };

  const sortedMembers = useMemo(() => {
    return (Object.entries(scores) as [Member, number][])
      .sort((a, b) => b[1] - a[1]);
  }, [scores]);

  const topMember = sortedMembers[0][0];
  const totalAnswers = (Object.values(scores) as number[]).reduce((acc, val) => acc + val, 0);
  const matchPercentage = totalAnswers > 0 ? Math.round((scores[topMember] / totalAnswers) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-cyber-black text-white font-sans overflow-hidden select-none touch-none">
      <XPBar xp={stats.xp} />
      
      <AnimatePresence mode="wait">
        {/* START PHASE */}
        {phase === 'START' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="h-full flex flex-col items-center justify-center p-8 text-center gap-10"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-48 h-48 rounded-full border-2 border-dashed border-neon-cyan/20 flex items-center justify-center"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-neon-cyan/10 rounded-full flex items-center justify-center neon-glow-cyan border border-neon-cyan/30">
                  <Cpu size={48} className="text-neon-cyan" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter uppercase italic">
                La Barcaccia <span className="text-neon-cyan">OS</span>
              </h1>
              <p className="text-white/40 max-w-xs text-sm mx-auto font-mono">
                Sincronizza il tuo profilo neurale con i cinque architetti del gruppo.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <CyberButton variant="neon" onClick={handleStart} className="w-full">
                INIZIALIZZA SESSIONE
              </CyberButton>
            </div>
            
            <div className="fixed bottom-10 flex gap-8">
              <div className="flex flex-col items-center gap-1">
                <Flame size={16} className="text-neon-magenta" />
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">{stats.streak} Streak</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Trophy size={16} className="text-neon-lime" />
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">{stats.badges.length} Badges</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* SELECT PHASE */}
        {phase === 'SELECT' && (
          <motion.div
            key="select"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col p-6 pt-24 overflow-y-auto hide-scrollbar"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight uppercase italic">DATABASE QUIZ</h2>
                <p className="text-xs text-white/40 font-mono">SELEZIONA MODULO DI TEST</p>
              </div>
              <button 
                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                className="p-3 glass-card rounded-xl text-white/50"
              >
                {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </button>
            </div>

            <div className="grid gap-4 pb-20">
              {QUIZZES.map((quiz) => {
                const isCompleted = completedQuizzes.includes(quiz.id);
                return (
                  <motion.button
                    key={quiz.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectQuiz(quiz)}
                    className={`relative overflow-hidden p-5 rounded-3xl border transition-all text-left ${
                      isCompleted 
                        ? 'bg-neon-lime/10 border-neon-lime/30 opacity-60' 
                        : 'glass-card'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${
                        isCompleted ? 'bg-neon-lime/20 text-neon-lime border-neon-lime/30' : 'bg-white/5 text-white/70 border-white/10'
                      }`}>
                        {isCompleted ? <Trophy size={22} /> : <LayoutGrid size={22} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg leading-none mb-1 uppercase tracking-tighter">
                          {quiz.title}
                        </h3>
                        <p className="text-[10px] text-white/50 uppercase font-mono overflow-hidden text-ellipsis whitespace-nowrap">
                          {quiz.description}
                        </p>
                      </div>
                      <ChevronRight size={16} className="text-white/20 mt-4" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* QUESTION PHASE */}
        {phase === 'QUESTION' && currentQuestion && activeQuiz && (
          <motion.div
            key={`q-${currentIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            className="h-full flex flex-col p-6 pt-24"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-mono text-[10px] text-neon-magenta tracking-widest uppercase">
                ANALISI {currentIdx + 1}/{activeQuiz.questions.length}
              </span>
              <div className="flex gap-1">
                {activeQuiz.questions.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 w-4 rounded-full transition-all ${
                      i <= currentIdx ? "bg-neon-magenta" : "bg-white/10"
                    }`} 
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <h2 className="text-3xl font-bold tracking-tighter leading-tight italic uppercase">
                {currentQuestion.text}
              </h2>
              
              <div className="grid gap-3 pb-32">
                {currentQuestion.choices.map((choice, i) => {
                  const isSelected = choice.member === sortedMembers.find(([m]) => scores[m] > 0)?.[0] && hasAnswered; 
                  // Simplified selected logic for display
                  return (
                    <motion.button
                      key={i}
                      disabled={hasAnswered}
                      onClick={() => handleChoice(choice)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`relative w-full text-left p-5 rounded-2xl border transition-all overflow-hidden ${
                        !hasAnswered 
                          ? "glass-card hover:border-neon-cyan/50 active:scale-[0.99]" 
                          : choice.member === choice.member ? "bg-white/5 border-white/20" : "opacity-30 border-transparent"
                      }`}
                    >
                      {hasAnswered && (
                        <motion.div 
                          className="absolute inset-0 bg-neon-cyan/10"
                          initial={{ x: '-100%' }}
                          animate={{ x: 0 }}
                        />
                      )}
                      <div className="relative flex justify-between items-center gap-4">
                        <span className="text-[15px] font-medium leading-snug">{choice.text}</span>
                        {hasAnswered && (
                          <span className="text-[10px] font-mono font-bold text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded">
                            {choice.member}
                          </span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {hasAnswered && (
              <div className="fixed bottom-10 left-6 right-6">
                <CyberButton variant="neon" onClick={handleNext} className="w-full">
                  ANALIZZA PROSSIMO <ChevronRight size={18} />
                </CyberButton>
              </div>
            )}
          </motion.div>
        )}

        {/* RESULT PHASE */}
        {phase === 'RESULT' && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col p-6 pt-24 overflow-y-auto hide-scrollbar"
          >
            <div className="text-center mb-10">
              <div className="text-neon-magenta text-xs font-mono mb-2 tracking-[0.3em] uppercase">Sincronizzazione Completa</div>
              <h2 className="text-xl font-mono text-white/40 mb-4 tracking-tighter">PROFILO NEURALE</h2>
              <div className="relative inline-block mt-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-neon-cyan to-neon-magenta neon-glow-cyan"
                >
                  {topMember}
                </motion.div>
                <div className="absolute -top-4 -right-8 bg-neon-lime text-black font-mono text-[10px] px-2 py-1 font-bold rounded glitch-effect">
                  {matchPercentage}% MATCH
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 mb-8">
              <h3 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-6">Matrice di Affinità</h3>
              <div className="space-y-5">
                {sortedMembers.map(([member, score], idx) => {
                  const perc = Math.round(((score as number) / totalAnswers) * 100);
                  return (
                    <div key={member} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center font-mono">
                        <span className="text-xs text-white/60">#{idx+1} {member}</span>
                        <span className="text-[10px] text-neon-cyan">{perc}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${perc}%` }}
                          className={`h-full ${idx === 0 ? 'bg-neon-cyan' : 'bg-white/20'}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center">
                <Zap size={20} className="text-neon-cyan mb-1" />
                <span className="text-xl font-bold italic tracking-tighter">+{XP_PER_ANSWER * (activeQuiz?.questions.length || 1)}</span>
                <span className="text-[8px] font-mono text-white/30 uppercase">XP GUADAGNATI</span>
              </div>
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center">
                <Award size={20} className="text-neon-lime mb-1" />
                <span className="text-xl font-bold italic tracking-tighter">#{completedQuizzes.length}</span>
                <span className="text-[8px] font-mono text-white/30 uppercase">QUIZ ARCHIVIATI</span>
              </div>
            </div>

            <CyberButton variant="outline" onClick={resetQuiz} className="w-full mb-20 translate-y-[-10px]">
              <RefreshCw size={18} /> RIAVVIA SISTEMA
            </CyberButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEVEL UP NOTIFICATION */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cyber-black/90 backdrop-blur-xl flex items-center justify-center p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="w-32 h-32 mx-auto relative">
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-neon-cyan"
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-neon-cyan italic">
                  {stats.level}
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-black italic tracking-tighter uppercase">Level Up!</h2>
                <p className="text-white/50 font-mono text-sm uppercase tracking-widest">Aggiornamento Neurale Completato</p>
              </div>
              <CyberButton variant="neon" onClick={() => setShowLevelUp(false)} className="w-full px-12 mt-8">
                RICEVUTO
              </CyberButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
