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
    <div className="fixed top-0 left-0 right-0 z-[60] px-4 pt-6 pb-4 bg-cyber-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-md mx-auto flex items-center gap-4">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[9px] font-mono font-bold text-neon-cyan/70 tracking-widest uppercase">SYS.STATUS: ONLINE</span>
            <span className="text-[10px] font-mono text-neon-cyan neon-text-cyan uppercase">LVL {currentLevel} • {xpInCurrentLevel}/{XP_PER_LEVEL} XP</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-neon-cyan rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]"
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
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
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
    setSelectedChoice(null);
    setScores({ SIMO: 0, MARCO: 0, DAVE: 0, PIETRO: 0, FILO: 0 });
    setPhase('QUESTION');
  };

  const handleChoice = (choice: Choice) => {
    if (hasAnswered) return;
    
    setSelectedChoice(choice);
    setScores(prev => ({ ...prev, [choice.member]: (prev[choice.member] as number) + 1 }));
    setHasAnswered(true);
    
    // Gain XP
    saveStats({ ...stats, xp: stats.xp + XP_PER_ANSWER });
  };

  const handleNext = () => {
    if (activeQuiz && currentIdx < activeQuiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setHasAnswered(false);
      setSelectedChoice(null);
    } else {
      if (activeQuiz && !completedQuizzes.includes(activeQuiz.id)) {
        setCompletedQuizzes(prev => [...prev, activeQuiz.id]);
        
        // Badge: first_step
        const newBadges = [...stats.badges];
        if (!newBadges.includes('first_step')) newBadges.push('first_step');
        
        saveStats({ ...stats, badges: newBadges });
      }
      setPhase('RESULT');
      setSelectedChoice(null);
    }
  };

  const resetQuiz = () => {
    setPhase('SELECT');
    setActiveQuiz(null);
    setSelectedChoice(null);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,243,255,0.05),_transparent_70%)]" />
      <XPBar xp={stats.xp} />
      
      <div className="relative h-full w-full max-w-md mx-auto">
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
            className="absolute inset-0 flex flex-col p-6 pt-28"
          >
            <div className="flex justify-between items-end mb-8 shrink-0 z-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight uppercase italic neon-text-cyan">NETWORK DATABASE</h2>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-[0.2em]">Select Neural Data Module</p>
              </div>
              <button 
                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                className="p-3 glass-card rounded-xl text-white/50 hover:text-white transition-colors"
                title="Toggle Audio"
              >
                {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto hide-scrollbar pb-10 space-y-4">
              {QUIZZES.map((quiz, idx) => {
                const isCompleted = completedQuizzes.includes(quiz.id);
                return (
                  <motion.button
                    key={quiz.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectQuiz(quiz)}
                    className={`relative w-full overflow-hidden p-5 rounded-3xl border transition-all text-left ${
                      isCompleted 
                        ? 'bg-neon-lime/10 border-neon-lime/30 opacity-60' 
                        : 'glass-card hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${
                        isCompleted ? 'bg-neon-lime/20 text-neon-lime border-neon-lime/30' : 'bg-white/5 text-white/70 border-white/10'
                      }`}>
                        {isCompleted ? <Trophy size={22} /> : <Cpu size={22} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg leading-none mb-1 uppercase tracking-tighter truncate">
                          {quiz.title}
                        </h3>
                        <p className="text-[10px] text-white/50 uppercase font-mono truncate">
                          {quiz.description}
                        </p>
                      </div>
                      <ChevronRight size={16} className="text-white/20 shrink-0" />
                    </div>
                  </motion.button>
                );
              })}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyber-black to-transparent pointer-events-none" />
          </motion.div>
        )}        {/* QUESTION PHASE */}
        {phase === 'QUESTION' && currentQuestion && activeQuiz && (
          <motion.div
            key={`q-${currentIdx}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col p-6 pt-20"
          >
            {/* Area contenuto compattata per visibilità totale senza scroll */}
            <div className="flex-1 flex flex-col min-h-0">
              <h2 className="text-lg md:text-xl font-bold tracking-tighter leading-tight italic uppercase mb-4 shrink-0 text-white/90">
                {currentQuestion.text}
              </h2>
              
              <div className="flex-1 flex flex-col gap-2 min-h-0">
                {currentQuestion.choices.map((choice, i) => {
                  const isThisSelected = selectedChoice?.text === choice.text;
                  const showSelectionStyle = hasAnswered && isThisSelected;
                  const showFadedStyle = hasAnswered && !isThisSelected;

                  return (
                    <motion.button
                      key={i}
                      disabled={hasAnswered}
                      onClick={() => handleChoice(choice)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: showFadedStyle ? 0.2 : 1, 
                        y: 0,
                        scale: isThisSelected ? 1.01 : 1,
                        borderColor: showSelectionStyle ? '#00f3ff' : 'rgba(255,255,255,0.08)'
                      }}
                      className={`relative w-full text-left p-3.5 rounded-xl border transition-colors duration-200 overflow-hidden shrink-0 ${
                        !hasAnswered 
                          ? "glass-card hover:bg-white/5 active:scale-[0.99]" 
                          : isThisSelected ? "bg-neon-cyan/5" : "bg-white/5"
                      }`}
                    >
                      {showSelectionStyle && (
                        <motion.div 
                          className="absolute inset-0 border-2 border-neon-cyan/40 neon-glow-cyan rounded-xl pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )}
                      
                      <div className="relative flex justify-between items-center gap-3">
                        <span className={`text-[13px] font-medium leading-tight transition-colors duration-300 ${showSelectionStyle ? 'text-neon-cyan' : 'text-white/80'}`}>
                          {choice.text}
                        </span>
                        {hasAnswered && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`text-[8px] font-mono font-black px-1.5 py-0.5 rounded shrink-0 border tracking-tighter ${
                              isThisSelected 
                                ? 'text-black bg-neon-cyan border-neon-cyan' 
                                : 'text-neon-orange bg-neon-orange/10 border-neon-orange/30 shadow-[0_0_5px_#ff9d0022]'
                            }`}
                          >
                            {choice.member}
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Area pulsante fissa ma con ingombro ridotto */}
            <div className="h-24 flex items-center shrink-0">
              <AnimatePresence>
                {hasAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="w-full"
                  >
                    <CyberButton variant="neon" onClick={handleNext} className="w-full h-12 text-sm tracking-[0.1em]">
                      AVANTI <ChevronRight size={16} />
                    </CyberButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* RESULT PHASE */}
        {phase === 'RESULT' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col p-6 pt-24 min-h-0 overflow-y-auto hide-scrollbar"
          >
            <div className="text-center mb-6 shrink-0">
              <motion.div 
                initial={{ opacity: 0, letterSpacing: '1em' }}
                animate={{ opacity: 1, letterSpacing: '0.3em' }}
                className="text-neon-magenta text-[9px] font-mono mb-2 uppercase"
              >
                Sincronizzazione Completa
              </motion.div>
              <h2 className="text-[10px] font-mono text-white/40 mb-2 tracking-tighter uppercase">PROFILO NEURALE IDENTIFICATO</h2>
              <div className="relative inline-block mt-2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-neon-cyan to-neon-magenta leading-none pb-2"
                >
                  {topMember}
                </motion.div>
                <div className="absolute -top-2 -right-10 bg-neon-cyan text-black font-mono text-[9px] px-1.5 py-0.5 font-bold rounded shadow-[0_0_10px_rgba(0,243,255,0.6)]">
                  {matchPercentage}% MATCH
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5 mb-4 shrink-0">
              <h3 className="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4">Matrice di Affinità Neurale</h3>
              <div className="space-y-4">
                {sortedMembers.map(([member, score], idx) => {
                  const perc = Math.round(((score as number) / totalAnswers) * 100);
                  return (
                    <div key={member} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center font-mono">
                        <span className={`text-[10px] tracking-widest ${idx === 0 ? 'text-neon-cyan' : 'text-white/40'}`}>
                          0{idx+1} {member}
                        </span>
                        <span className={`text-[10px] ${idx === 0 ? 'text-neon-cyan' : 'text-white/60'}`}>
                          {perc}%
                        </span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${perc}%` }}
                          className={`h-full transition-all duration-1000 ease-out ${idx === 0 ? 'bg-neon-cyan neon-glow-cyan shadow-[0_0_5px_#00f3ff]' : 'bg-white/20'}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 shrink-0">
              <div className="glass-card p-4 rounded-3xl flex flex-col items-center">
                <Zap size={18} className="text-neon-cyan mb-1" />
                <span className="text-xl font-bold italic tracking-tighter">+{XP_PER_ANSWER * (activeQuiz?.questions.length || 1)}</span>
                <span className="text-[8px] font-mono text-white/30 uppercase tracking-tighter">XP ACQUISITI</span>
              </div>
              <div className="glass-card p-4 rounded-3xl flex flex-col items-center">
                <Target size={18} className="text-neon-lime mb-1" />
                <span className="text-xl font-bold italic tracking-tighter">#{completedQuizzes.length}</span>
                <span className="text-[8px] font-mono text-white/30 uppercase tracking-tighter">SYSTEM LOGS</span>
              </div>
            </div>

            <div className="pb-10">
              <CyberButton variant="outline" onClick={resetQuiz} className="w-full">
                <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" /> RIAVVIA SISTEMA
              </CyberButton>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

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
