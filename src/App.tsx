/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, RefreshCw, Users, BookOpen, CheckCircle2 } from 'lucide-react';
import { Member, Choice } from './types';
import { QUIZZES, Quiz } from './data/quizzes';

// --- Types ---

type QuizPhase = 'START' | 'SELECT' | 'QUESTION' | 'FEEDBACK' | 'RESULT';

// --- Sub-components ---

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  return (
    <div className="absolute top-4 left-0 right-0 px-4 flex gap-1 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-0.5 flex-1 bg-olive/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-olive/40"
            initial={false}
            animate={{ 
              width: i < current ? "100%" : i === current ? "0%" : "0%",
              backgroundColor: i < current ? "var(--color-olive)" : "rgba(var(--color-olive), 0.1)"
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [phase, setPhase] = useState<QuizPhase>('START');
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>(() => {
    const saved = localStorage.getItem('completed_quizzes');
    return saved ? JSON.parse(saved) : [];
  });

  const [scores, setScores] = useState<Record<Member, number>>({
    SIMO: 0,
    MARCO: 0,
    DAVE: 0,
    PIETRO: 0,
    FILO: 0,
  });
  const [lastSelectedMember, setLastSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    localStorage.setItem('completed_quizzes', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

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
    setLastSelectedMember(choice.member);
    setScores(prev => ({ ...prev, [choice.member]: (prev[choice.member] as number) + 1 }));
    setHasAnswered(true);
  };

  const handleNext = () => {
    if (activeQuiz && currentIdx < activeQuiz.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setHasAnswered(false);
    } else {
      if (activeQuiz && !completedQuizzes.includes(activeQuiz.id)) {
        setCompletedQuizzes(prev => [...prev, activeQuiz.id]);
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
    <div className="fixed inset-0 bg-bg-base text-ink font-sans overflow-hidden select-none touch-none">
      <AnimatePresence mode="wait">
        
        {/* START PHASE */}
        {phase === 'START' && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full flex flex-col items-center justify-center p-8 text-center gap-6"
          >
            <div className="w-20 h-20 bg-olive/5 rounded-full flex items-center justify-center mb-2">
              <Users size={32} className="text-olive" />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-serif text-olive leading-tight">
                L'Essenza dei Cinque
              </h1>
              <p className="text-neutral-500 max-w-xs text-lg mx-auto">
                Un'esperienza interattiva per scoprire quale pilastro del gruppo rispecchia la tua visione.
              </p>
            </div>
            <button
              onClick={handleStart}
              className="mt-8 bg-terracotta text-white px-12 py-4 rounded-full font-bold text-lg uppercase tracking-widest active:scale-95 transition-transform shadow-lg shadow-terracotta/20"
            >
              Comincia
            </button>
          </motion.div>
        )}

        {/* SELECT PHASE */}
        {phase === 'SELECT' && (
          <motion.div
            key="select"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-full flex flex-col p-8 pt-16 overflow-y-auto"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-serif text-olive mb-2">Scegli il Quiz</h2>
              <p className="text-neutral-500">Seleziona un argomento per iniziare il test.</p>
            </div>

            <div className="space-y-4 pb-12">
              {QUIZZES.map((quiz) => {
                const isCompleted = completedQuizzes.includes(quiz.id);
                return (
                  <button
                    key={quiz.id}
                    onClick={() => handleSelectQuiz(quiz)}
                    className={`w-full text-left p-6 rounded-3xl border transition-all shadow-sm active:scale-98 relative group ${
                      isCompleted ? 'bg-cream/40 border-olive/10' : 'bg-cream border-olive/5'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isCompleted ? 'bg-olive text-white border-olive' : 'bg-olive/5 text-olive border-olive/5'
                      }`}>
                        {isCompleted ? <CheckCircle2 size={20} /> : <BookOpen size={20} />}
                      </div>
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-bold text-lg leading-tight ${isCompleted ? 'text-ink/60' : 'text-ink'}`}>
                            {quiz.title}
                          </h3>
                        </div>
                        <p className={`text-xs leading-normal ${isCompleted ? 'text-neutral-400/60' : 'text-neutral-400'}`}>
                          {quiz.description}
                        </p>
                      </div>
                      
                      {isCompleted && (
                        <div className="absolute top-6 right-6 px-2 py-1 bg-olive/10 rounded-md">
                          <span className="text-[8px] font-bold uppercase tracking-wider text-olive">Completato</span>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* QUESTION PHASE */}
        {phase === 'QUESTION' && currentQuestion && activeQuiz && (
          <motion.div
            key={`q-${currentIdx}`}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="h-full relative flex flex-col p-6 pt-16"
          >
            <ProgressBar current={currentIdx} total={activeQuiz.questions.length} />
            
            <div className="flex-1 flex flex-col gap-10 mt-8 overflow-y-auto hide-scrollbar">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-olive opacity-60">
                  Domanda {currentIdx + 1} di {activeQuiz.questions.length}
                </span>
                <h2 className="text-3xl font-serif leading-[1.1] text-ink">
                  {currentQuestion.text}
                </h2>
              </div>
              
              <div className="grid gap-2.5 pb-32">
                {currentQuestion.choices.map((choice, i) => {
                  const isSelected = choice.member === lastSelectedMember;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleChoice(choice)}
                      disabled={hasAnswered}
                      initial={false}
                      animate={hasAnswered ? { 
                        opacity: isSelected ? 1 : 0.4,
                        scale: isSelected ? 1 : 0.98,
                        backgroundColor: isSelected ? "var(--color-cream)" : "rgba(255,255,255,0.05)"
                      } : {}}
                      className={`w-full text-left p-4 rounded-xl text-[15px] leading-snug font-medium transition-all relative flex items-center justify-between gap-4 border ${
                        !hasAnswered 
                          ? "bg-cream border-olive/5 shadow-sm active:scale-98 active:border-terracotta" 
                          : isSelected
                            ? "border-terracotta ring-1 ring-terracotta/20 shadow-md"
                            : "border-transparent"
                      }`}
                    >
                      <span className={`flex-1 ${hasAnswered && !isSelected ? "text-ink/60" : "text-ink"}`}>
                        {choice.text}
                      </span>
                      
                      <AnimatePresence>
                        {hasAnswered && (
                          <motion.div 
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className={`shrink-0 font-bold text-[9px] uppercase tracking-wider px-2 py-1 rounded-md ${
                              isSelected ? "bg-terracotta text-white" : "bg-olive/10 text-olive/40"
                            }`}
                          >
                            {choice.member}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {hasAnswered && (
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-10 left-6 right-6 z-20"
              >
                <button
                  onClick={handleNext}
                  className="w-full bg-olive text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  Prosegui <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            <div className="py-6 text-center text-olive/30 font-bold text-[9px] uppercase tracking-[0.3em]">
              {activeQuiz.title}
            </div>
          </motion.div>
        )}

        {/* FEEDBACK PHASE REMOVED AND MOVED TO QUESTION */}

        {/* RESULT PHASE */}
        {phase === 'RESULT' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full flex flex-col p-8 pt-16 overflow-y-auto"
          >
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 bg-terracotta/10 rounded-full text-terracotta font-bold text-[10px] uppercase tracking-widest mb-4">
                {activeQuiz?.title}
              </div>
              <h2 className="text-4xl font-serif text-olive leading-tight mb-2">
                Il tuo Profilo
              </h2>
              <p className="text-base text-neutral-500 font-medium mb-6">
                Sei al <span className="text-terracotta font-bold">{matchPercentage}%</span> simile a
              </p>
              <div className="text-7xl font-sans font-bold uppercase tracking-tighter text-ink leading-none">
                {topMember}
              </div>
            </div>

            <div className="bg-cream rounded-3xl p-6 shadow-sm border border-olive/5 mb-8">
              <h3 className="text-[10px] uppercase tracking-widest text-olive/40 font-bold mb-6">Classifica dei Pilastri</h3>
              <div className="space-y-6">
                {sortedMembers.map(([member, score], idx) => (
                  <div key={member} className="flex items-center gap-5">
                    <div className="w-8 text-xl font-serif italic text-olive/20 font-bold">#{idx + 1}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold uppercase tracking-wider text-ink/70">{member}</span>
                        <span className="text-xs font-mono text-terracotta font-bold">{Math.round(((score as number) / totalAnswers) * 100)}%</span>
                      </div>
                      <div className="h-1 bg-olive/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${((score as number) / totalAnswers) * 100}%` }}
                          className="h-full bg-olive/40"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetQuiz}
              className="mt-auto flex items-center justify-center gap-3 bg-terracotta text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm active:scale-95 transition-transform"
            >
              <RefreshCw size={18} /> Altri Quiz
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
