import React, { useState, useEffect } from 'react';
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
  LogOut
} from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  serverTimestamp, 
  onSnapshot,
  doc,
  setDoc,
  deleteDoc
} from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
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
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const MEMBERS: Member[] = ['SIMO', 'MARCO', 'DAVE', 'PIETRO', 'FILO'];

export const Sondaggi = ({ onBack }: { onBack: () => void }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [activePoll, setActivePoll] = useState<Poll | null>(null);
  const [allVotes, setAllVotes] = useState<Vote[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [viewMode, setViewMode] = useState<'VOTE' | 'RESULTS'>('VOTE');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'votes'));
    const unsub = onSnapshot(q, (snapshot) => {
      const votes = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Vote));
      setAllVotes(votes);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'votes');
    });
    return unsub;
  }, [user]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleVote = async () => {
    if (!user || !selectedMember || !activePoll) return;
    setIsSubmitting(true);
    try {
      // Remove existing vote for this member on this poll
      const existingVote = allVotes.find(v => v.member === selectedMember && v.pollId === activePoll.id);
      if (existingVote?.id) {
        // Technically rules might block this if not own userId, but we assume one user per member or shared account for now
        // For simplicity, we just add a new one and logic handles "latest" per member
      }

      await addDoc(collection(db, 'votes'), {
        pollId: activePoll.id,
        member: selectedMember,
        selectedOptions,
        timestamp: serverTimestamp(),
        userId: user.uid
      });
      setViewMode('RESULTS');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'votes');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(oid => oid !== id) : [...prev, id]
    );
  };

  if (loading) return null;

  if (!user) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-bg-base">
        <Users size={48} className="text-olive mb-6 opacity-20" />
        <h2 className="text-3xl font-serif text-olive mb-4">Sondaggi Barcaccia</h2>
        <p className="text-neutral-500 mb-8 max-w-xs">
          Per partecipare ai sondaggi e vedere i risultati devi autenticarti.
        </p>
        <button
          onClick={handleGoogleLogin}
          className="bg-white border border-neutral-200 text-ink px-8 py-3 rounded-full font-bold flex items-center gap-3 shadow-sm active:scale-95 transition-transform"
        >
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
          Accedi con Google
        </button>
        <button onClick={onBack} className="mt-6 text-neutral-400 text-sm font-medium">Torna ai Quiz</button>
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

  if (activePoll) {
    const dirigenti = activePoll.options.filter(o => o.type === 'dirigente');
    const giocatori = activePoll.options.filter(o => o.type === 'giocatore');

    const memberVotes = allVotes.reduce((acc, v) => {
      acc[v.member] = v;
      return acc;
    }, {} as Record<Member, Vote>);

    return (
      <div className="h-full flex flex-col bg-bg-base overflow-hidden">
        <header className="p-6 pt-12 border-b border-olive/5 bg-cream/50 z-10">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setActivePoll(null)} className="flex items-center gap-1 text-olive">
              <ChevronLeft size={20} /> <span className="font-bold text-xs uppercase tracking-widest">Sondaggi</span>
            </button>
            <div className="flex items-center gap-2 px-3 py-1 bg-olive/5 rounded-full">
              <span className="text-[10px] font-bold text-olive">{selectedMember}</span>
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
            <div className="space-y-8">
              {activePoll.options.map(opt => {
                const voters = MEMBERS.filter(m => memberVotes[m]?.selectedOptions.includes(opt.id));
                if (voters.length === 0) return null;
                
                return (
                  <div key={opt.id} className="bg-cream rounded-2xl p-4 border border-olive/5 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-bold text-ink">{opt.name}</div>
                        <div className="text-[10px] text-neutral-400 italic">{opt.role}</div>
                      </div>
                      <div className="bg-terracotta text-white px-2 py-0.5 rounded text-[10px] font-bold">
                        {voters.length} VOTI
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {voters.map(v => (
                        <span key={v} className="bg-olive/10 text-olive text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-olive/10">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {allVotes.length === 0 && (
                <div className="text-center py-20 opacity-30 italic">Nessun voto registrato.</div>
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
             <span>{user.email}</span>
             <button onClick={() => auth.signOut()} className="flex items-center gap-1 hover:text-terracotta">
               <LogOut size={10} /> Logout
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
