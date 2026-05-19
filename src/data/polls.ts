import { Poll } from '../types';

export const JUVE_FIRE_POLL: Poll = {
  id: 'juve-fire-poll',
  title: 'Chi bisogna cacciare dalla Juventus?',
  description: 'Seleziona tutti i dirigenti e i giocatori che secondo te non sono all\'altezza della Juventus.',
  options: [
    // Dirigenti
    { id: 'comolli', name: 'Damien Comolli', type: 'dirigente', role: 'Chief Executive Officer' },
    { id: 'bodino', name: 'Greta Bodino', type: 'dirigente', role: 'Chief People, Culture and ESG Officer' },
    { id: 'braghin', name: 'Stefano Braghin', type: 'dirigente', role: 'Women\'s Football Director' },
    { id: 'cerrato', name: 'Stefano Cerrato', type: 'dirigente', role: 'Managing Director Corporate & Finance' },
    { id: 'chiellini', name: 'Giorgio Chiellini', type: 'dirigente', role: 'Director of Football Strategy' },
    { id: 'modesto', name: 'François Modesto', type: 'dirigente', role: 'Technical Director' },
    { id: 'ottolini', name: 'Marco Ottolini', type: 'dirigente', role: 'Sporting Director' },
    { id: 'ponte', name: 'Roberta Ponte', type: 'dirigente', role: 'Chief Legal Officer' },
    { id: 'silverstone', name: 'Peter Silverstone', type: 'dirigente', role: 'Chief Business Officer' },
    { id: 'vercellone', name: 'Pier Donato Vercellone', type: 'dirigente', role: 'Chief Communications Officer' },
    
    // Giocatori
    { id: 'digregorio', name: 'Michele Di Gregorio', type: 'giocatore', role: 'Portiere' },
    { id: 'perin', name: 'Mattia Perin', type: 'giocatore', role: 'Portiere' },
    { id: 'pinsoglio', name: 'Carlo Pinsoglio', type: 'giocatore', role: 'Portiere' },
    { id: 'bremer', name: 'Bremer', type: 'giocatore', role: 'Difensore centrale' },
    { id: 'kalulu', name: 'Pierre Kalulu', type: 'giocatore', role: 'Difensore centrale' },
    { id: 'kelly', name: 'Lloyd Kelly', type: 'giocatore', role: 'Difensore centrale' },
    { id: 'gatti', name: 'Federico Gatti', type: 'giocatore', role: 'Difensore centrale' },
    { id: 'cambiaso', name: 'Andrea Cambiaso', type: 'giocatore', role: 'Terzino sinistro' },
    { id: 'cabal', name: 'Juan Cabal', type: 'giocatore', role: 'Terzino sinistro' },
    { id: 'holm', name: 'Emil Holm', type: 'giocatore', role: 'Terzino destro' },
    { id: 'locatelli', name: 'Manuel Locatelli', type: 'giocatore', role: 'Mediano' },
    { id: 'koopmeiners', name: 'Teun Koopmeiners', type: 'giocatore', role: 'Mediano' },
    { id: 'thuram', name: 'Khéphren Thuram', type: 'giocatore', role: 'Centrocampista' },
    { id: 'mckennie', name: 'Weston McKennie', type: 'giocatore', role: 'Centrocampista' },
    { id: 'miretti', name: 'Fabio Miretti', type: 'giocatore', role: 'Centrocampista' },
    { id: 'kostic', name: 'Filip Kostić', type: 'giocatore', role: 'Esterno di sinistra' },
    { id: 'adzic', name: 'Vasilije Adžić', type: 'giocatore', role: 'Trequartista' },
    { id: 'yildiz', name: 'Kenan Yıldız', type: 'giocatore', role: 'Ala sinistra' },
    { id: 'boga', name: 'Jérémie Boga', type: 'giocatore', role: 'Ala sinistra' },
    { id: 'conceicao', name: 'Francisco Conceição', type: 'giocatore', role: 'Ala destra' },
    { id: 'zhegrova', name: 'Edon Zhegrova', type: 'giocatore', role: 'Ala destra' },
    { id: 'vlahovic', name: 'Dušan Vlahović', type: 'giocatore', role: 'Punta centrale' },
    { id: 'david', name: 'Jonathan David', type: 'giocatore', role: 'Punta centrale' },
    { id: 'openda', name: 'Loïs Openda', type: 'giocatore', role: 'Punta centrale' },
    { id: 'milik', name: 'Arkadiusz Milik', type: 'giocatore', role: 'Punta centrale' }
  ]
};

export const POLLS: Poll[] = [JUVE_FIRE_POLL];
