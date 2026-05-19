import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  ChevronLeft, 
  Check, 
  Clock, 
  BarChart3, 
  LayoutGrid, 
  ListFilter,
  UserCheck,
  RefreshCw
} from 'lucide-react';
import { db } from '../lib/firebase';
import { 
  collection, 
  query, 
  addDoc, 
  serverTimestamp, 
  onSnapshot,
  orderBy
} from 'firebase/firestore';
import { Poll, PollOption, Vote, Member } from '../types';
import { POLLS } from '../data/polls';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {},
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const MEMBERS: Member[] = ['SIMO', 'MARCO', 'DAVE', 'PIETRO', 'FILO'];

export const Sondaggi = ({ onBack }: { onBack: () => void }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(() => {
    const saved = localStorage.getItem('barcaccia_member');
    return (saved as Member) || null;
  });
  const [activePoll, setActivePoll] = useState<Poll | null>(null);
  const [allVotes, setAllVotes] = useState<Vote[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [viewMode, setViewMode] = useState<'VOTE' | 'RESULTS'>('VOTE');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedMember) {
      localStorage.setItem('barcaccia_member', selectedMember);
    } else {
      localStorage.removeItem('barcaccia_member');
    }
  }, [selectedMember]);

  useEffect(() => {
    if (activePoll && selectedMember) {
      const hasVoted = allVotes.some(v => v.pollId === activePoll.id && v.member === selectedMember);
      if (hasVoted) {
        setViewMode('RESULTS');
      } else {
        setViewMode('VOTE');
      }
    }
  }, [activePoll, selectedMember, allVotes]);

  useEffect(() => {
    let isMounted = true;
    const q = query(collection(db, 'votes'));
    
    const timeoutId = setTimeout(() => {
      if (isMounted) setLoading(false);
    }, 5000);

    const unsub = onSnapshot(q, (snapshot) => {
      if (!isMounted) return;
      console.log("Snapshot received, docs:", snapshot.docs.length);
      const votes = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Vote));
      setAllVotes(votes);
      setLoading(false);
      clearTimeout(timeoutId);
    }, (err) => {
      if (!isMounted) return;
      console.error("Firestore sync error:", err);
      setLoading(false);
      clearTimeout(timeoutId);
    });

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      unsub();
    };
  }, []);

  const handleVote = async () => {
    if (!selectedMember || !activePoll) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const timestamp = new Date().toISOString();
      
      // Optimistic local update
      const tempId = `temp-${Date.now()}`;
      const newVote: Vote = {
        id: tempId,
        pollId: activePoll.id,
        member: selectedMember,
        selectedOptions,
        timestamp: timestamp
      };

      setAllVotes(prev => {
        const filtered = prev.filter(v => !(v.member === selectedMember && v.pollId === activePoll.id));
        return [...filtered, newVote];
      });

      // Background Firestore update
      addDoc(collection(db, 'votes'), {
        pollId: activePoll.id,
        member: selectedMember,
        selectedOptions,
        timestamp: timestamp
      }).then((docRef) => {
        // Replace temp vote with real one once confirmed if you want, 
        // but onSnapshot will handle it.
      }).catch(err => {
        console.error("Delayed background vote failure:", err);
        setError("Salvataggio fallito. Verifica la connessione.");
      });
      
      setViewMode('RESULTS');
    } catch (err: any) {
      console.error("Vote failed:", err);
      setError("Errore durante il salvataggio. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(oid => oid !== id) : [...prev, id]
    );
  };

  const pollVotes = useMemo(() => activePoll ? allVotes.filter(v => v.pollId === activePoll.id) : [], [allVotes, activePoll]);

  const memberVotes = useMemo(() => {
    if (!activePoll) return {} as Record<Member, Vote>;
    
    const getVoteTime = (v: Vote) => {
      if (!v.timestamp) return 0;
      if (typeof v.timestamp === 'string') return new Date(v.timestamp).getTime();
      try {
        if (typeof (v.timestamp as any).toDate === 'function') {
          return (v.timestamp as any).toDate().getTime();
        }
      } catch (e) {}
      return 0;
    };

    return pollVotes.reduce((acc, v) => {
      const vTime = getVoteTime(v);
      const existingTime = acc[v.member] ? getVoteTime(acc[v.member]) : -1;
      
      if (!acc[v.member] || vTime > existingTime) {
        acc[v.member] = v;
      }
      return acc;
    }, {} as Record<Member, Vote>);
  }, [pollVotes, activePoll]);

  if (error) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-bg-base">
        <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta mb-4">
          <ChevronLeft size={24} className="rotate-90" />
        </div>
        <h3 className="text-xl font-serif text-ink mb-2">Ops! Qualcosa è andato storto</h3>
        <p className="text-neutral-500 mb-6 text-sm">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-olive text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest"
        >
          Riprova
        </button>
        <button onClick={onBack} className="mt-4 text-neutral-400 text-xs font-bold uppercase tracking-widest">Torna Indietro</button>
      </div>
    );
  }

  if (!selectedMember) {
    return (
      <div className="h-full flex flex-col p-8 pt-16 bg-bg-base">
        <header className="mb-10">
          <button onClick={onBack} className="flex items-center gap-1 text-olive mb-4">
            <ChevronLeft size={20} /> <span className="font-bold text-sm uppercase tracking-widest">Indietro</span>
          </button>
          <h2 className="text-3xl font-serif text-olive mb-2">Chi sei?</h2>
          <p className="text-neutral-500">Seleziona il tuo profilo Barcaccia per votare.</p>
        </header>

        <div className="grid gap-4">
          {MEMBERS.map(m => (
            <button
              key={m}
              onClick={() => setSelectedMember(m)}
              className="w-full p-6 bg-cream rounded-3xl border border-olive/5 text-left font-bold text-xl text-ink shadow-sm active:scale-98 transition-all flex items-center justify-between"
            >
              {m}
              <UserCheck size={20} className="text-olive/20" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (loading && !activePoll) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-bg-base">
        <div className="w-12 h-12 border-4 border-olive/10 border-t-olive rounded-full animate-spin mb-4" />
        <p className="text-olive font-bold text-xs uppercase tracking-widest opacity-40">Caricamento...</p>
      </div>
    );
  }

  if (activePoll) {
    const dirigenti = activePoll.options.filter(o => o.type === 'dirigente');
    const giocatori = activePoll.options.filter(o => o.type === 'giocatore');

    return (
      <div className="h-full relative flex flex-col bg-bg-base overflow-hidden">
        <header className="p-6 pt-12 border-b border-olive/5 bg-cream/50 z-10 shrink-0">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setActivePoll(null)} className="flex items-center gap-1 text-olive">
              <ChevronLeft size={20} /> <span className="font-bold text-xs uppercase tracking-widest">Sondaggi</span>
            </button>
            <div className="flex items-center gap-2">
               {loading && <RefreshCw size={10} className="animate-spin text-olive/30" />}
               <div className="px-3 py-1 bg-olive/5 rounded-full">
                 <span className="text-[10px] font-bold text-olive">{selectedMember}</span>
               </div>
            </div>
          </div>
          <h2 className="text-2xl font-serif text-ink leading-tight mb-1">{activePoll.title}</h2>
          <p className="text-sm text-neutral-500">{activePoll.description}</p>
          
          <div className="flex gap-2 mt-6">
            <button 
              onClick={() => setViewMode('VOTE')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                viewMode === 'VOTE' ? 'bg-olive text-white' : 'bg-olive/5 text-olive'
              }`}
            >
              <LayoutGrid size={14} /> Vota
            </button>
            <button 
              onClick={() => setViewMode('RESULTS')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                viewMode === 'RESULTS' ? 'bg-olive text-white' : 'bg-olive/5 text-olive'
              }`}
            >
              <BarChart3 size={14} /> Risultati
            </button>
          </div>
          
          {viewMode === 'RESULTS' && (
            <div className="mt-4 flex justify-between items-center px-1">
              <span className="text-[8px] font-bold text-olive/30 uppercase tracking-widest">
                Aggiornato: {new Date().toLocaleTimeString()}
              </span>
              <button 
                onClick={() => window.location.reload()} 
                className="text-terracotta text-[8px] font-bold uppercase tracking-widest flex items-center gap-1"
              >
                <RefreshCw size={10} /> Forza Ricarica
              </button>
            </div>
          )}
        </header>

        <main className="flex-1 overflow-y-auto p-6 pb-32">
          {viewMode === 'VOTE' ? (
            <div className="space-y-8">
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-olive mb-4 opacity-40">Dirigenti</h3>
                <div className="grid gap-2">
                  {dirigenti.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        selectedOptions.includes(opt.id) 
                          ? 'bg-terracotta/5 border-terracotta shadow-sm' 
                          : 'bg-cream border-olive/5'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-base text-ink">{opt.name}</div>
                        <div className="text-[10px] text-neutral-400 italic">{opt.role}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                        selectedOptions.includes(opt.id) ? 'bg-terracotta border-terracotta text-white' : 'border-olive/10'
                      }`}>
                        {selectedOptions.includes(opt.id) && <Check size={14} />}
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-olive mb-4 opacity-40">Giocatori</h3>
                <div className="grid gap-2">
                  {giocatori.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        selectedOptions.includes(opt.id) 
                          ? 'bg-terracotta/5 border-terracotta shadow-sm' 
                          : 'bg-cream border-olive/5'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-base text-ink">{opt.name}</div>
                        <div className="text-[10px] text-neutral-400 italic">{opt.role}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                        selectedOptions.includes(opt.id) ? 'bg-terracotta border-terracotta text-white' : 'border-olive/10'
                      }`}>
                        {selectedOptions.includes(opt.id) && <Check size={14} />}
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              {activePoll.options
                .map(opt => {
                  const voters = MEMBERS.filter(m => {
                    const vData = memberVotes[m];
                    return vData && Array.isArray(vData.selectedOptions) && vData.selectedOptions.includes(opt.id);
                  });
                  return { opt, voters, voteCount: voters.length };
                })
                .sort((a, b) => b.voteCount - a.voteCount)
                .map(({ opt, voters, voteCount }) => (
                  <div key={opt.id} className={`bg-cream rounded-2xl p-5 border transition-all ${voteCount > 0 ? 'border-terracotta/20 shadow-md scale-[1.02]' : 'border-olive/5 opacity-60'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-bold text-lg text-ink leading-tight">{opt.name}</div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mt-0.5">{opt.role}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[10px] font-black tracking-tighter ${voteCount > 0 ? 'bg-terracotta text-white' : 'bg-neutral-100 text-neutral-400'}`}>
                        {voteCount === 1 ? '1 VOTO' : `${voteCount} VOTI`}
                      </div>
                    </div>

                    {voteCount > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {voters.map(v => {
                          const vData = memberVotes[v];
                          let dateStr = '';
                          if (vData?.timestamp) {
                            try {
                              const date = typeof vData.timestamp === 'string' 
                                ? new Date(vData.timestamp) 
                                : (typeof (vData.timestamp as any).toDate === 'function' ? (vData.timestamp as any).toDate() : new Date());
                              dateStr = date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
                            } catch (e) {}
                          }
                          return (
                            <div key={v} className="bg-white border border-olive/10 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                              <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                              <span className="text-xs font-bold text-ink">{v}</span>
                              {dateStr && <span className="text-[8px] text-neutral-300 border-l border-neutral-100 pl-2">{dateStr}</span>}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-[10px] text-neutral-300 italic">Nessuna preferenza</div>
                    )}
                  </div>
                ))}
              
              {pollVotes.length > 0 && (
                <div className="pt-4 text-center">
                   <p className="text-[9px] font-bold text-olive/20 uppercase tracking-[0.3em]">Fine Risultati</p>
                </div>
              )}
            </div>
          )}
        </main>

        <footer className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-base via-bg-base to-transparent z-20">
          {viewMode === 'VOTE' && (
            <button
              disabled={isSubmitting}
              onClick={handleVote}
              className="w-full bg-terracotta text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Salvataggio...' : 'Conferma Voto'} <Check size={18} />
            </button>
          )}
          <div className="mt-4 flex justify-between text-[8px] font-bold text-olive/20 uppercase tracking-[0.2em]">
             <span>Barcaccia Official App</span>
             <button onClick={() => setSelectedMember(null)} className="flex items-center gap-1 hover:text-terracotta">
               <Users size={10} /> Cambia Profilo
             </button>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-8 pt-16 bg-bg-base overflow-y-auto">
      <header className="mb-10 flex justify-between items-start">
        <div>
          <button onClick={onBack} className="flex items-center gap-1 text-olive mb-4">
            <ChevronLeft size={20} /> <span className="font-bold text-sm uppercase tracking-widest">Indietro</span>
          </button>
          <h2 className="text-3xl font-serif text-olive mb-2">Sondaggi</h2>
          <p className="text-neutral-500 font-medium">Esprimi la tua opinione e confrontala con gli altri.</p>
        </div>
        <div className="bg-olive/5 p-2 rounded-xl text-center min-w-[60px]">
           <div className="text-[10px] font-bold text-olive/40 uppercase mb-0.5 leading-none">Membro</div>
           <div className="text-lg font-bold text-olive leading-none">{selectedMember}</div>
        </div>
      </header>

      <div className="grid gap-4 pb-20">
        {POLLS.map(poll => (
          <button
            key={poll.id}
            onClick={() => setActivePoll(poll)}
            className="w-full text-left p-6 bg-cream rounded-3xl border border-olive/5 shadow-sm active:scale-98 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-olive/5 rounded-2xl flex items-center justify-center text-olive group-hover:bg-olive group-hover:text-white transition-all">
                <ListFilter size={24} />
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[10px] font-bold text-olive/30 uppercase tracking-widest">Partecipanti</div>
                <div className="flex -space-x-1 mt-1">
                  {MEMBERS.map(m => {
                    const hasVoted = allVotes.some(v => v.member === m && v.pollId === poll.id);
                    return (
                      <div key={m} className={`w-5 h-5 rounded-full border border-white flex items-center justify-center text-[6px] font-bold ${
                        hasVoted ? 'bg-terracotta text-white' : 'bg-neutral-200 text-neutral-400'
                      }`}>
                        {m[0]}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-serif text-ink leading-tight mb-2">{poll.title}</h3>
            <p className="text-xs text-neutral-400 leading-normal">{poll.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
