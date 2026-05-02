import { Member, Question } from '../types';

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const QUIZZES: Quiz[] = [
  {
    id: 'mercatoplayers',
    title: 'Calciomercato & Top Player',
    description: 'Il sacro rito del mercato, tra l\'arrivo di CR7 e le plusvalenze fittizie.',
    questions: [
      {
        id: 1,
        text: "Cosa ne pensi dell'acquisto di Cristiano Ronaldo a 100-120 milioni?",
        choices: [
          { text: "È l'operazione più conveniente di sempre, si ripaga solo con le magliette e il marketing!", member: 'FILO' },
          { text: "30 milioni netti a un 33enne? Tra tre anni lo trovate in panca a fare ridere come Totti.", member: 'SIMO' },
          { text: "Se lo prendiamo è perché FCA vuole fondersi con Hyundai, sono giri strani di soldi.", member: 'PIETRO' },
          { text: "Spero che aiuti a vincere 'sta maledetta Champions, ma a livello economico non ci credo che si ripaga.", member: 'DAVE' },
          { text: "Io ancora non ci credo, ma se arriva spacchiamo tutto!", member: 'MARCO' },
        ]
      },
      {
        id: 2,
        text: "Higuain al Milan: scambio alla pari con Bonucci o prestito?",
        choices: [
          { text: "Bonucci torna a casa, è uno juventino vero. Se gioca bene dimentichiamo tutto.", member: 'DAVE' },
          { text: "Dare Caldara per riprendersi lo spostatore di equilibri è da società ridicola.", member: 'MARCO' },
          { text: "Con Higuain al Milan i napoletani rosicano e questo mi basta.", member: 'PIETRO' },
          { text: "Higuain è ancora un top 5 al mondo, ma con lui non vinci la Champions.", member: 'FILO' },
          { text: "Il Milan un attaccante così a così poco non lo trova da nessuna parte, affarone.", member: 'SIMO' },
        ]
      },
      {
        id: 3,
        text: "Milinkovic-Savic vale davvero 120-150 milioni?",
        choices: [
          { text: "Ne vale almeno 110, se lo prende la Juve ordino la maglia il giorno dopo.", member: 'PIETRO' },
          { text: "Non ha mai giocato la Champions, 100 milioni è una richiesta stile Belotti.", member: 'DAVE' },
          { text: "Se arriva alla Juve è finita per tutti, ma Lotito è un osso duro.", member: 'MARCO' },
          { text: "Medro TG conferma: non andrà mai alla Juve a quelle cifre.", member: 'SIMO' },
          { text: "Se vuole andare via, Lotito non può chiedere quelle cifre, scenderà a 80.", member: 'FILO' },
        ]
      },
      {
        id: 4,
        text: "Cosa ne pensi di Cancelo?",
        choices: [
          { text: "È forte in attacco ma difensivamente è matto, fa interventi sconsiderati.", member: 'DAVE' },
          { text: "40 milioni per uno che non era titolare nel Portogallo sono troppi.", member: 'PIETRO' },
          { text: "È il nostro Dani Alves, crossa e spinge, io ci credo.", member: 'FILO' },
          { text: "Maledetti bastardi, ce lo avete soffiato, diventerà il più forte al mondo.", member: 'SIMO' },
          { text: "È un mostro, ma speriamo che Allegri non lo metta in panca.", member: 'MARCO' },
        ]
      },
      {
        id: 5,
        text: "E il mercato dell'Inter?",
        choices: [
          { text: "Mercato da 9.5, hanno preso tutti i migliori a zero o quasi.", member: 'PIETRO' },
          { text: "Hanno preso De Vrij, Asamoah e Lautaro... ma manca sempre il regista di qualità.", member: 'SIMO' },
          { text: "Campioni di luglio come ogni anno, poi perdono col Sion.", member: 'DAVE' },
          { text: "Hanno preso De Vrij e io godo se la Lazio rosica.", member: 'MARCO' },
          { text: "Se non vendono Perisic a 70 non hanno i soldi per fare altro.", member: 'FILO' },
        ]
      },
      {
        id: 6,
        text: "Malcom alla Roma e poi al Barca?",
        choices: [
          { text: "I romanisti avevano già fatto i video su YouTube, che figura di merda.", member: 'DAVE' },
          { text: "Monchi sta trasformando la Roma in un oratorio di giovani sconosciuti.", member: 'PIETRO' },
          { text: "Il Barca ha fatto una bastardata atomica, ma Malcom è un fenomeno.", member: 'SIMO' },
          { text: "Pazzesco, non l'avevo mai vista una roba del genere in diretta.", member: 'MARCO' },
          { text: "Meglio così, alla Roma serviva uno più pronto di un ragazzino del Bordeaux.", member: 'FILO' },
        ]
      },
      {
        id: 7,
        text: "La cessione di Mandragora a 20 milioni all'Udinese?",
        choices: [
          { text: "Puzza di manino contabile lontano un chilometro.", member: 'PIETRO' },
          { text: "Marotta è un genio, riesce a vendere i giovani a cifre pazze.", member: 'FILO' },
          { text: "Ladri, andrete in B per plusvalenze fittizie prima o poi.", member: 'SIMO' },
          { text: "Se l'Udinese paga così tanto, significa che il valore è quello.", member: 'DAVE' },
          { text: "Oro che cola per il bilancio della Juve.", member: 'MARCO' },
        ]
      },
      {
        id: 8,
        text: "Il ritorno di Bonucci alla Juve.",
        choices: [
          { text: "È un traditore, ma se ci serve per vincere la Champions me lo faccio andare bene.", member: 'MARCO' },
          { text: "Lo scambio alla pari con Caldara è un suicidio tattico e anagrafico.", member: 'DAVE' },
          { text: "Bonucci vuole la Juve, la volontà del giocatore vince sempre.", member: 'FILO' },
          { text: "Torna perché al Milan ha capito che non vinceva nemmeno a briscola.", member: 'PIETRO' },
          { text: "Medro TG: Visite mediche già prenotate, scambio fatto.", member: 'SIMO' },
        ]
      },
      {
        id: 9,
        text: "Cosa farà Buffon al PSG?",
        choices: [
          { text: "Va a prendere i milioni e a fare il testimonial per il Qatar, ci sta.", member: 'SIMO' },
          { text: "Spero che vinca la Champions parando un rigore alla Juve in finale.", member: 'FILO' },
          { text: "Doveva ritirarsi dopo la finale di Cardiff, ora fa solo papere.", member: 'DAVE' },
          { text: "Buffon al PSG mi fa strano, non lo vedo con un'altra maglia.", member: 'MARCO' },
          { text: "Lo hanno mandato via perché hanno preso Perin a 12 milioni, un furto.", member: 'PIETRO' },
        ]
      },
      {
        id: 10,
        text: "Vrsaljko all'Inter.",
        choices: [
          { text: "Ottimo terzino, ma speriamo che non si spacchi ogni tre partite.", member: 'MARCO' },
          { text: "Preso a 7 milioni di prestito, Ausilio sta umiliando Marotta quest'anno.", member: 'PIETRO' },
          { text: "Se gioca come al mondiale, l'Inter ha svoltato sulla fascia.", member: 'SIMO' },
          { text: "Giocatore normale, sopravvalutato per via del mondiale della Croazia.", member: 'DAVE' },
          { text: "Meglio lui di Cancelo? Non credo proprio.", member: 'FILO' },
        ]
      },
      {
        id: 11,
        text: "Il mercato del Napoli con Ancelotti.",
        choices: [
          { text: "Mercato da 5, hanno preso solo scarti e non hanno un portiere.", member: 'FILO' },
          { text: "Ancelotti è venuto solo per la Champions, il campionato lo hanno già mollato.", member: 'PIETRO' },
          { text: "Delaurentiis non caccia un euro nemmeno se lo minacci.", member: 'DAVE' },
          { text: "Hanno preso Fabian Ruiz e Meret, non sono proprio dei lesi.", member: 'SIMO' },
          { text: "Se prendono Benzema e Vidal allora ne riparliamo.", member: 'MARCO' },
        ]
      },
      {
        id: 12,
        text: "Chi vincerà la classifica cannonieri?",
        choices: [
          { text: "Icardi, perché gioca in Italia da anni e non salta una partita.", member: 'SIMO' },
          { text: "CR7 ne fa 40, non c'è storia, è una macchina.", member: 'FILO' },
          { text: "Ciro Immobile, è l'unico che segna anche bendato.", member: 'PIETRO' },
          { text: "Piatek è il nuovo crack, segna più di Ronaldo.", member: 'DAVE' },
          { text: "Dybala se Allegri lo fa giocare vicino alla porta.", member: 'MARCO' },
        ]
      },
      {
        id: 13,
        text: "Il caso De Vrij in Lazio-Inter.",
        choices: [
          { text: "Ha fatto un fallo da stupido, ma non era in malafede.", member: 'SIMO' },
          { text: "Lotito è un coglione a non avergli rinnovato il contratto prima.", member: 'FILO' },
          { text: "Se fosse successo alla Juve sarebbe scoppiata un'interrogazione parlamentare.", member: 'DAVE' },
          { text: "Ha regalato la Champions all'Inter, palese che avesse la testa altrove.", member: 'PIETRO' },
          { text: "Gesto tecnico imbarazzante per un difensore del suo livello.", member: 'MARCO' },
        ]
      },
      {
        id: 14,
        text: "Keita Balde all'Inter.",
        choices: [
          { text: "Preferisco lui a Di Maria, è giovane e spacca le partite.", member: 'SIMO' },
          { text: "Ennesimo esterno, ma chi difende in quella squadra?", member: 'PIETRO' },
          { text: "Se torna quello della Lazio è un colpaccio da 30 milioni.", member: 'MARCO' },
          { text: "È il classico giocatore tutto corsa e niente tiro, un Biabiany più tecnico.", member: 'DAVE' },
          { text: "Panchina fissa.", member: 'FILO' },
        ]
      },
      {
        id: 15,
        text: "Il mercato del Milan di Leonardo.",
        choices: [
          { text: "Hanno fatto in due settimane quello che i cinesi non hanno fatto in due anni.", member: 'DAVE' },
          { text: "Higuain è l'unica speranza per non arrivare decimi.", member: 'PIETRO' },
          { text: "Bakayoko è un bidone, lo sanno tutti tranne Leonardo.", member: 'FILO' },
          { text: "Se prendono anche Milinkovic diventano da scudetto.", member: 'MARCO' },
          { text: "Hanno preso Laxalt come vice-Chala, mossa interessante del Medro TG.", member: 'SIMO' },
        ]
      }
    ]
  },
  {
    id: 'fuffologia',
    title: 'Fuffologia & Carriera',
    description: 'Tra i seminari di Furio Camillo, i progetti National Geographic e le leggendarie truffe di Guzzon.',
    questions: [
      {
        id: 1,
        text: "Cos’è per te la \"Fuffa\"?",
        choices: [
          { text: "Scienze politiche, sociologia e chiunque parli senza avere i dati finanziari sotto mano.", member: 'FILO' },
          { text: "Qualunque progetto di marketing non supportato da una regressione seria.", member: 'DAVE' },
          { text: "È il pane quotidiano di chi studia marketing a Venezia, 30L con due facciate di appunti.", member: 'SIMO' },
          { text: "Quella roba sulle criptovalute che non capisco ma che fa salire i grafici.", member: 'PIETRO' },
          { text: "I video di Guzzon dove non giunge mai a una conclusione.", member: 'MARCO' },
        ]
      },
      {
        id: 2,
        text: "Francesco Guzzon e il progetto Marketeen.",
        choices: [
          { text: "Si è comprato i follower russi e i commenti in inglese \"Awesome!\". Che leso.", member: 'SIMO' },
          { text: "Dice di aver letto 453 libri di marketing... neanche esistessero.", member: 'PIETRO' },
          { text: "\"Ho creato un gruppo di 50 imprenditori in una settimana\". Ma basta!", member: 'DAVE' },
          { text: "Mi deve ancora dei soldi per una spesa fatta insieme, altro che imprenditore.", member: 'FILO' },
          { text: "Fa i video su YouTube che iniziano tutti allo stesso modo, un ritardo fortissimo.", member: 'MARCO' },
        ]
      },
      {
        id: 3,
        text: "Il colloquio di gruppo a Mirabilandia.",
        choices: [
          { text: "Mi volevano mettere alla ristorazione a fare i panini. Ho mollato tutto, io sono per i gelati.", member: 'FILO' },
          { text: "Devi fingere di ascoltare le idee lese degli altri e dire \"che bella idea\".", member: 'SIMO' },
          { text: "Fillo proporrà sicuramente di vendere erba ai sedicenni.", member: 'PIETRO' },
          { text: "Io mi immagino Fillo licenziato dopo 3 giorni per odio razziale verso i turisti.", member: 'DAVE' },
          { text: "Almeno ti danno la divisa hawaiana, è il top.", member: 'MARCO' },
        ]
      },
      {
        id: 4,
        text: "Il progetto National Geographic per ringiovanire il target.",
        choices: [
          { text: "Cobranding con Ryanair, è l'unica cosa sensata per i 20-35 anni.", member: 'FILO' },
          { text: "Facciamo una discoteca National Geographic con Alberto Angela in pista.", member: 'PIETRO' },
          { text: "Usiamo gli YouTuber come Human Safari, hanno un brand pazzesco.", member: 'DAVE' },
          { text: "Un liceale avrebbe un'idea migliore della nostra in 45 secondi.", member: 'SIMO' },
          { text: "Investiamo nelle serie TV e nel cinema, le riprese dei paesaggi sono il top.", member: 'MARCO' },
        ]
      },
      {
        id: 5,
        text: "Le Hard Skills vs Soft Skills.",
        choices: [
          { text: "Se non sai usare Stata o Excel per un'azienda vali zero.", member: 'DAVE' },
          { text: "Hard skills è un termine del vocabolario della fuffa, conta la leadership.", member: 'FILO' },
          { text: "Io punto a prendere il reddito di cittadinanza, altro che skills.", member: 'PIETRO' },
          { text: "Le skills servono solo per non farsi bocciare da Pastorello.", member: 'MARCO' },
          { text: "A Venezia ti insegnano come diventare ricco in 7 mesi, quelle sono le vere skills.", member: 'SIMO' },
        ]
      },
      {
        id: 6,
        text: "Il \"Genio in 21 Giorni\".",
        choices: [
          { text: "Ti fermano per strada a Bologna e ti chiedono di memorizzare 50 numeri.", member: 'PIETRO' },
          { text: "Una truffa da 1000 euro, Guzzon ci è cascato in pieno.", member: 'SIMO' },
          { text: "Studiano con \"gli alberi\" e le mappe mentali, ma cosa c'entra con Statistica?", member: 'DAVE' },
          { text: "Gente che scrive \"Giorni\" con la maiuscola non merita rispetto.", member: 'FILO' },
          { text: "È un modo per sborare con gli amici e basta.", member: 'MARCO' },
        ]
      },
      {
        id: 7,
        text: "L'esame di Econometria con Pastorello.",
        choices: [
          { text: "È una persona di merda, mi ha messo \"ritirato\" anche se non sono andato.", member: 'PIETRO' },
          { text: "Ho studiato 3 giorni e ho preso 25, sculato come pochi.", member: 'FILO' },
          { text: "Se non sai i comandi di Stata sei finito, io ho copiato tutto dal telefono.", member: 'DAVE' },
          { text: "Spegnete il cervello, altrimenti domani andrete male per eccesso di info.", member: 'SIMO' },
          { text: "Marco ha studiato, ma tanto non passa lo stesso.", member: 'MARCO' },
        ]
      },
      {
        id: 8,
        text: "Usare Gretl invece di Stata.",
        choices: [
          { text: "Gretl è una cazzata, è tipo JMulti, molto più facile.", member: 'PIETRO' },
          { text: "È lo strumento per chi non vuole imparare la metrica sul serio.", member: 'DAVE' },
          { text: "Basta saper interpretare il segno di Beta1 e sei a posto.", member: 'FILO' },
          { text: "È un'altra roba per chi sta al PC tutto il giorno.", member: 'SIMO' },
          { text: "Basta che funzioni per passare l'esame.", member: 'MARCO' },
        ]
      },
      {
        id: 9,
        text: "Il seminario di Furio Camillo sul calcio.",
        choices: [
          { text: "Ho parlato con una tipa dell'est che faceva SAS, devo trovarla su Facebook.", member: 'DAVE' },
          { text: "C'erano delle slide imbarazzanti, roba da non credoci.", member: 'FILO' },
          { text: "Mi sono addormentato dopo 10 minuti, troppa fuffa.", member: 'MARCO' },
          { text: "Gli ho fatto del pressing per avere il punto di partecipazione.", member: 'PIETRO' },
          { text: "Furio Camillo è un visionario, ma usa SAS che è preistoria.", member: 'SIMO' },
        ]
      },
      {
        id: 10,
        text: "La laurea di Micol e la dedica a Minniti.",
        choices: [
          { text: "Ha scritto una dedica d'odio perché l'ha segata tre volte. Che scema.", member: 'SIMO' },
          { text: "Ha i follower rubati su Instagram, usa le app per fare follow/unfollow.", member: 'FILO' },
          { text: "\"Viaggia\" e pensa che tutto le sia dovuto, Minniti ha fatto bene.", member: 'DAVE' },
          { text: "Sborava troppo per i miei gusti, non è neanche così figa.", member: 'PIETRO' },
          { text: "Dedica epica, io non l'avrei mai fatto.", member: 'MARCO' },
        ]
      },
      {
        id: 11,
        text: "Il lavoro post-magistrale.",
        choices: [
          { text: "Mi immagino in un ufficio a New York a pensare strategie mentre un robot dà ordini a Dave.", member: 'FILO' },
          { text: "Inizierete tutti davanti a un PC a inserire pile di fogli, rassegnatevi.", member: 'DAVE' },
          { text: "Io voglio diventare Senior Top Manager della Fuffa e prendere 7 milioni.", member: 'FILO' },
          { text: "Spero di non dover mai timbrare un cartellino in vita mia.", member: 'PIETRO' },
          { text: "Venezia offre molti sbocchi nel mercato della fuffologia.", member: 'SIMO' },
        ]
      },
      {
        id: 12,
        text: "Almalaurea e le offerte di lavoro.",
        choices: [
          { text: "Mi chiamano a ripetizione ma sono solo email generiche, mai una chiamata vera.", member: 'PIETRO' },
          { text: "Mi hanno chiamato per un colloquio serio a Bologna, funziona!", member: 'FILO' },
          { text: "\"Chiamato\" o \"mandato un'email\"? Fillo non conosce la differenza.", member: 'DAVE' },
          { text: "A me non caga nessuno, forse perché non faccio marketing.", member: 'MARCO' },
          { text: "A Ravenna mi hanno offerto un posto tramite Almalaurea, pazzia.", member: 'SIMO' },
        ]
      },
      {
        id: 13,
        text: "Il sito personalfrancescoguzzon.it.",
        choices: [
          { text: "Durato meno di un decone nelle mani di Vincenzo.", member: 'SIMO' },
          { text: "Nato dalla bufera, sembra l'inizio di un film porno.", member: 'MARCO' },
          { text: "Ha rimosso tutti i video perché si vergognava delle lesate che diceva.", member: 'FILO' },
          { text: "Un tema di scuola media scritto peggio di come scrive Dave.", member: 'PIETRO' },
          { text: "Mi manca l'articolo sulla moglie di Montemagno.", member: 'DAVE' },
        ]
      },
      {
        id: 14,
        text: "La borsa e le azioni Juventus.",
        choices: [
          { text: "Ho comprato 3 stack da 40 mila azioni, vi farò sapere se divento ricco.", member: 'FILO' },
          { text: "È il momento di shortare pesante, il prezzo crollerà dopo i gironi.", member: 'PIETRO' },
          { text: "+10% in un giorno, Ronaldo è una miniera d'oro per gli Agnelli.", member: 'DAVE' },
          { text: "Spero che non ci arrestino per aggiotaggio.", member: 'MARCO' },
          { text: "Lo spread della Juve è più alto di quello del governo Conte.", member: 'SIMO' },
        ]
      },
      {
        id: 15,
        text: "Le ripetizioni di Econometria.",
        choices: [
          { text: "Abbiamo chiesto a George di farci passare l'esame, eravamo disperati.", member: 'FILO' },
          { text: "Pietro e Simo mi hanno fatto una full immersion gratis, eroi.", member: 'MARCO' },
          { text: "Quando il tipo ha visto il regime istantaneo non sapeva più che fare.", member: 'FILO' },
          { text: "In quell'aula computer non abbiamo studiato più di 15 minuti di fila.", member: 'PIETRO' },
          { text: "Abbiamo passato più tempo a fare formazioni sulla lavagna che esercizi.", member: 'DAVE' },
        ]
      }
    ]
  },
  {
    id: 'stiledevita',
    title: 'Stile di Vita & "Simmenthal"',
    description: 'Dalla mensa universitaria ai locali di Marina di Ravenna, passando per la ricerca della donna perfetta.',
    questions: [
      {
        id: 1,
        text: "La mensa universitaria di Bologna.",
        choices: [
          { text: "Prodotti da discount, stoviglie sporche e gente schifosa. Un film dell'orrore.", member: 'FILO' },
          { text: "Costa 6 euro, un furto per la qualità che offre.", member: 'SIMO' },
          { text: "È comoda, mangi in 30 secondi e torni a studiare (o cazzeggiare).", member: 'DAVE' },
          { text: "Ci va Vincenzo che ha l'ebola nei denti, meglio evitare.", member: 'FILO' },
          { text: "La piada era meglio alla Barcaccia, nonostante tutto.", member: 'PIETRO' },
        ]
      },
      {
        id: 2,
        text: "Cos'è una \"Simmenthal\"?",
        choices: [
          { text: "Una ragazza con voto superiore al 6.5, possibilmente che si \"tira\" molto.", member: 'DAVE' },
          { text: "Una tipa che si veste da troia e si trucca pesante.", member: 'FILO' },
          { text: "La categoria di donne che Fillo vorrebbe nel suo team per dare ordini.", member: 'SIMO' },
          { text: "Una ragazza che ti porta via lo stipendio in 3 giorni.", member: 'PIETRO' },
          { text: "La bionda che twerka su Marco al Touché.", member: 'MARCO' },
        ]
      },
      {
        id: 3,
        text: "Il locale \"La Barcaccia\".",
        choices: [
          { text: "Un posto marcio, quasi peggio della mensa.", member: 'FILO' },
          { text: "Una barca di gente marcia... il nome è perfetto.", member: 'MARCO' },
          { text: "Avevano finito la salsiccia, un'attività commerciale destinata al fallimento.", member: 'PIETRO' },
          { text: "Posto sublime, ci andrei a mangiare anche i cadaveri.", member: 'SIMO' },
          { text: "Ideale per farsi un panino veloce tra una lezione e l'altra.", member: 'DAVE' },
        ]
      },
      {
        id: 4,
        text: "Le serate al Touché (Ciusté).",
        choices: [
          { text: "Pieno di ragazzine di 16 anni, rischiamo la galera ogni sabato.", member: 'FILO' },
          { text: "Qualcuno ha cagato in mezzo al corridoio, puzza di morte.", member: 'FILO' },
          { text: "Ciusté significa schifezza, il nome dice tutto sulla gente che ci va.", member: 'SIMO' },
          { text: "È una battaglia tra scimmie per accaparrarsi l'unica figa disponibile.", member: 'DAVE' },
          { text: "Io vado al Matilda, la pista è molto meglio.", member: 'MARCO' },
        ]
      },
      {
        id: 5,
        text: "Cara Delevingne vs Emma Watson.",
        choices: [
          { text: "Emma Watson da bambina, ma ora vince Cara a mani basse.", member: 'FILO' },
          { text: "Sono entrambe un 10/10, come scegliere tra Nike e Adidas.", member: 'DAVE' },
          { text: "Cara Delevingne ha una faccia strana, non mi convince.", member: 'PIETRO' },
          { text: "Meglio Ludovica Pagani che fa le gaffe in TV.", member: 'SIMO' },
          { text: "Basta che siano fighe, non facciamo i difficili.", member: 'MARCO' },
        ]
      },
      {
        id: 6,
        text: "Viaggiare a New York.",
        choices: [
          { text: "Vado ad abitare da un leso di nome Claudio trovato su Airbnb.", member: 'FILO' },
          { text: "A New York bisogna fare i finti ricchi anche se non hai un euro.", member: 'FILO' },
          { text: "Portami delle foto delle simmenthal americane, voglio il reportage.", member: 'DAVE' },
          { text: "Speriamo che non ti buttino fuori dal paese per il visto turistico.", member: 'SIMO' },
          { text: "Vai a vedere la NBA e lascia stare il calcio per un po'.", member: 'PIETRO' },
        ]
      },
      {
        id: 7,
        text: "Amsterdam e le sue \"attrazioni\".",
        choices: [
          { text: "Ho mangiato un muffin all'erba da 7 euro e non mi ha fatto nulla. Truffa.", member: 'SIMO' },
          { text: "Amsterdam è più sporca di Napoli, un letamaio pieno di bottiglie.", member: 'MARCO' },
          { text: "Dovete andare al Bulldog, i muffin lì sono i migliori.", member: 'FILO' },
          { text: "Siete andati ad Amsterdam e non avete nemmeno fumato? Lesi.", member: 'PIETRO' },
          { text: "L'odore della marijuana è la parte più buona di tutta la città.", member: 'DAVE' },
        ]
      },
      {
        id: 8,
        text: "La \"Tranviona\" del Clamm.",
        choices: [
          { text: "Ha una voce talmente maschile che ti spaventa.", member: 'DAVE' },
          { text: "Girava con la tipa bionda e facevano le bulle perché io non fumavo.", member: 'FILO' },
          { text: "In foto non rende, ma dal vivo è un trans palese.", member: 'DAVE' },
          { text: "Si fingeva Erasmus per scroccare i 18 ai professori.", member: 'SIMO' },
          { text: "Io me la ricordavo carina, siete voi che siete cattivi.", member: 'PIETRO' },
        ]
      },
      {
        id: 10,
        text: "Xausa, Belen o Pornostar?",
        choices: [
          { text: "Xausa perché è piccolina, poi Belen e infine la Pornostar.", member: 'FILO' },
          { text: "La Pornostar è prima perché non la conosco e quindi la idealizzo.", member: 'DAVE' },
          { text: "Belen è troppo alta, mi mette ansia.", member: 'PIETRO' },
          { text: "Sono indeciso tra Belen e Xausa, la Pornostar non è niente di che.", member: 'SIMO' },
          { text: "Messi, Ronaldo e Neymar... classifica difficilissima.", member: 'MARCO' },
        ]
      },
      {
        id: 11,
        text: "La tipa di Guzzon.",
        choices: [
          { text: "Si chiama Noemi, ma è una bottiglia marcia.", member: 'FILO' },
          { text: "Bella figa, peccato che stia con quello scemo di Guzzon.", member: 'PIETRO' },
          { text: "È una simmenthal, ma dicono sia ritardata quanto lui.", member: 'FILO' },
          { text: "Come ha fatto a convincerla a stare con lui? Miracolo del marketing.", member: 'SIMO' },
          { text: "L'ho vista al seminario, ma avevo fretta per l'esame.", member: 'DAVE' },
        ]
      },
      {
        id: 12,
        text: "Il caffè.",
        choices: [
          { text: "Ho bevuto il mio primo caffè a 23 anni. La mia vita è cambiata.", member: 'FILO' },
          { text: "Con il caffè riesco comunque ad addormentarmi dopo 10 minuti.", member: 'PIETRO' },
          { text: "Non volevo avere dipendenze, ma ormai sono nel tunnel.", member: 'FILO' },
          { text: "A Venezia un caffè e due biscotti costano 5 euro, roba da matti.", member: 'DAVE' },
          { text: "Filo finirà la magistrale in 12 mesi grazie alla caffeina.", member: 'SIMO' },
        ]
      },
      {
        id: 13,
        text: "Come vestirsi a un colloquio.",
        choices: [
          { text: "Camicia hawaiana e pantaloni lunghi, è la divisa più fresca.", member: 'SIMO' },
          { text: "Pantaloncini della Juve e infradito, tanto non capiscono nulla.", member: 'FILO' },
          { text: "Jeans e gillet col fazzoletto al collo, muori di caldo dopo 5 minuti.", member: 'SIMO' },
          { text: "Ci vuole la cravatta, altrimenti non ti prendono sul serio.", member: 'DAVE' },
          { text: "Mi metto la maglia tarocca di Del Piero del 2004.", member: 'PIETRO' },
        ]
      },
      {
        id: 14,
        text: "Le multe a Urbino.",
        choices: [
          { text: "Ho preso 3 multe nello stesso varco, me le hanno mandate dopo 3 mesi.", member: 'FILO' },
          { text: "Se fossi dittatore ucciderei i vigili uno ad uno.", member: 'FILO' },
          { text: "Bastava fare ricorso e dire che non lo sapevi, funziona sempre.", member: 'DAVE' },
          { text: "A Urbino ti multano anche se cammini troppo veloce.", member: 'PIETRO' },
          { text: "Guzzon ha pagato 500 euro per farsi togliere i punti da un altro.", member: 'SIMO' },
        ]
      },
      {
        id: 15,
        text: "La sedia a rotelle della prof di latino.",
        choices: [
          { text: "La persona che odio di più al mondo, le auguro il peggio.", member: 'PIETRO' },
          { text: "Sei troppo cattivo Pietro, io auguro il peggio solo a 3 milioni di napoletani.", member: 'FILO' },
          { text: "Ma cosa ti ha fatto di male? Ti ha messo 4?", member: 'MARCO' },
          { text: "Pietro è un bad boy, non lo sapevo.", member: 'DAVE' },
          { text: "Ti ha traumatizzato per la vita, portale un mazzo di fiori marci.", member: 'SIMO' },
        ]
      }
    ]
  },
  {
    id: 'politica',
    title: 'Politica & Governo',
    description: 'Le maratone di Mentana, l\'impeachment di Mattarella e i tweet della Lega.',
    questions: [
      {
        id: 1,
        text: "Cosa ne pensi di Mattarella che ha bocciato Savona?",
        choices: [
          { text: "È un figlio di puttana, si comporta come un re e non come un garante.", member: 'DAVE' },
          { text: "Ha impedito la formazione di un governo votato dal popolo, è nel torto marcio.", member: 'DAVE' },
          { text: "Licenziato! Esonerato! Non ne posso più di questi vecchi.", member: 'FILO' },
          { text: "Potevano proporre un altro nome, Giorgetti andava bene. Salvini è un idiota.", member: 'PIETRO' },
          { text: "È incredibile che una sola persona possa annullare un intero governo.", member: 'SIMO' },
        ]
      },
      {
        id: 2,
        text: "Di Maio e le sue gaffe (Matera in Puglia).",
        choices: [
          { text: "È un leso totale, ha lo sguardo perso nel vuoto ogni volta che parla.", member: 'PIETRO' },
          { text: "In realtà si riferiva al progetto Matera capitale della cultura, Emiliano gli ha parato il culo.", member: 'SIMO' },
          { text: "Non sa nemmeno parlare, dice \"anteriore\" invece di \"precedente\".", member: 'FILO' },
          { text: "È troppo facile sviare l'opinione pubblica con queste stronzate.", member: 'DAVE' },
          { text: "Di Maio è il nuovo Guzzon della politica.", member: 'MARCO' },
        ]
      },
      {
        id: 3,
        text: "Salvini e i piccioni.",
        choices: [
          { text: "Ha mandato il video del tizio che spennava il piccione: \"Lo mando a casa!\". Idolo.", member: 'SIMO' },
          { text: "Io i piccioni li sterminerei tutti, sono i ratti del cielo.", member: 'PIETRO' },
          { text: "Salvini sta facendo un'ignoranza pazzesca su Facebook, lo seguo in diretta.", member: 'FILO' },
          { text: "Un altro populista che parla alla pancia della gente.", member: 'DAVE' },
          { text: "Almeno caccia un po' di gente che puzza.", member: 'FILO' },
        ]
      },
      {
        id: 4,
        text: "Il governo tecnico di Cottarelli.",
        choices: [
          { text: "Mi piaceva, ma non avrebbe mai avuto la fiducia in aula.", member: 'PIETRO' },
          { text: "È un top player dell'economia, peccato che non lo voglia nessuno.", member: 'SIMO' },
          { text: "Un altro servo dell'Europa messo lì per farci stare zitti.", member: 'DAVE' },
          { text: "Chi cazzo è Cottarelli? Un altro leso.", member: 'FILO' },
          { text: "Sarà ospite fisso da Fazio, marketing puro.", member: 'MARCO' },
        ]
      },
      {
        id: 5,
        text: "Uscire dall'Euro: il \"Piano B\" di Savona.",
        choices: [
          { text: "Se si esce facciamo 10 anni di merda ma poi saremo sul tetto d'Europa.", member: 'DAVE' },
          { text: "Uscire dall'Euro in un weekend è un'idea da genio, ma non puoi dirlo in giro.", member: 'PIETRO' },
          { text: "La Germania ci invaderebbe il giorno dopo, rassegnatevi.", member: 'SIMO' },
          { text: "Bisognerebbe studiare gli effetti per 36 ore al giorno, impossibile capirci qualcosa.", member: 'FILO' },
          { text: "Savona è un eroe incompreso.", member: 'MARCO' },
        ]
      },
      {
        id: 6,
        text: "Chi hai votato alle elezioni?",
        choices: [
          { text: "Ho votato PD perché la destra di Salvini non è moderata.", member: 'SIMO' },
          { text: "Io appoggio Salvini perché voglio ordine, ma non sono leghista.", member: 'FILO' },
          { text: "Ero talmente indeciso che ho lasciato in bianco.", member: 'PIETRO' },
          { text: "Dave ha votato 5 stelle perché è del sud, palese.", member: 'FILO' },
          { text: "Io non voto, gioco a One Piece.", member: 'MARCO' },
        ]
      },
      {
        id: 7,
        text: "La ministra Fedeli all'Istruzione.",
        choices: [
          { text: "Non è nemmeno laureata e decide sulla scuola. Mi fa esplodere il cervello.", member: 'SIMO' },
          { text: "È come mettere come capo della CISL uno che non ha mai lavorato.", member: 'PIETRO' },
          { text: "Ci vorrebbe un ex preside, non una sindacalista.", member: 'DAVE' },
          { text: "È pure scema, mi ha fatto pagare un libro invece di due.", member: 'FILO' },
          { text: "In Italia la competenza non conta nulla.", member: 'MARCO' },
        ]
      },
      {
        id: 8,
        text: "L'impeachment di Mattarella.",
        choices: [
          { text: "Di Maio è passato dall'impeachment al dialogo in 15 minuti.", member: 'PIETRO' },
          { text: "La Stefanelli si starà masturbando sui libri di diritto costituzionale.", member: 'DAVE' },
          { text: "Mettiamolo in stato d'accusa e mandiamolo a casa subito.", member: 'FILO' },
          { text: "Era solo una sparata per guadagnare voti, lo sanno tutti.", member: 'SIMO' },
          { text: "Che caciara, sembra di stare al calciomercato.", member: 'MARCO' },
        ]
      },
      {
        id: 9,
        text: "I Casamonica a Roma.",
        choices: [
          { text: "Una famiglia rom mafiosa che controlla la città, pazzesco nel 2018.", member: 'DAVE' },
          { text: "Li farei catturare e umiliare in piazza davanti a tutti.", member: 'PIETRO' },
          { text: "Se fossi dittatore li farei pedinare e uccidere uno ad uno.", member: 'FILO' },
          { text: "Salvini farà qualcosa, ne sono certo.", member: 'FILO' },
          { text: "Rompono il cazzo alla gente onesta, da radere al suolo.", member: 'MARCO' },
        ]
      },
      {
        id: 10,
        text: "La crisi diplomatica con la Francia.",
        choices: [
          { text: "Macron è un altro leso che ci vuole dare lezioni.", member: 'FILO' },
          { text: "Ci odiano perché abbiamo preso Ronaldo e loro hanno solo Neymar.", member: 'PIETRO' },
          { text: "L'unica che decide in Europa è la Germania, la Francia non conta nulla.", member: 'MARCO' },
          { text: "Dovremmo smetterla di litigare con tutti o finiamo isolati.", member: 'SIMO' },
          { text: "I mercati sono manipolati dai mangiawurstel.", member: 'PIETRO' },
        ]
      },
      {
        id: 11,
        text: "I \"Poteri Forti\" e la finanza.",
        choices: [
          { text: "Lo spread sale perché hanno paura del cambiamento.", member: 'DAVE' },
          { text: "I mercati sono sopravvalutati, Bajo si sta giocando lo stipendio sullo short.", member: 'PIETRO' },
          { text: "Se la borsa scende è colpa degli operai che scioperano.", member: 'FILO' },
          { text: "La Consob che chiede lumi alla Juve su Ronaldo è ridicola.", member: 'MARCO' },
          { text: "È tutto un complotto di Singapore.", member: 'SIMO' },
        ]
      },
      {
        id: 12,
        text: "La gestione dei migranti.",
        choices: [
          { text: "Se li vedo spennare piccioni mi sale l'odio.", member: 'SIMO' },
          { text: "Salvini li rimanda tutti a casa con un calcio nei denti.", member: 'FILO' },
          { text: "Bisognerebbe far entrare solo quelli che sanno fare 30 palleggi.", member: 'DAVE' },
          { text: "Li mettiamo tutti a lavorare per Guzzon, così capiscono cos'è la sofferenza.", member: 'PIETRO' },
          { text: "La Libia è il nuovo mercato della Juve.", member: 'MARCO' },
        ]
      },
      {
        id: 13,
        text: "Il PD e il futuro della sinistra.",
        choices: [
          { text: "Sono tutti account falsi che retwittano #senzadime.", member: 'DAVE' },
          { text: "Renzi è l'unico che si salva, ma lo odiano tutti.", member: 'SIMO' },
          { text: "Sono dei falliti, hanno perso tutto e ancora parlano.", member: 'FILO' },
          { text: "Meglio un barlume di destra che questo marciume.", member: 'PIETRO' },
          { text: "La sinistra riparta da Padoin.", member: 'MARCO' },
        ]
      },
      {
        id: 14,
        text: "La libertà di stampa e le Fake News.",
        choices: [
          { text: "Repubblica e Corriere sono pro-PD spudoratamente.", member: 'DAVE' },
          { text: "Metterei una multa da 250 euro per ogni cazzata scritta sui social.", member: 'SIMO' },
          { text: "Meglio Il Fatto Quotidiano, almeno sono ignoranti il giusto.", member: 'FILO' },
          { text: "Mettiamo le stelle per la graduatoria di affidabilità dei siti.", member: 'SIMO' },
          { text: "Fantagazzetta è il re delle fake news sul calcio.", member: 'PIETRO' },
        ]
      },
      {
        id: 15,
        text: "Il Premier Giuseppe Conte.",
        choices: [
          { text: "Potrà dire di aver fatto due volte il governo senza essere eletto.", member: 'PIETRO' },
          { text: "Lo ha fatto solo per scrivere sul CV che è stato Presidente del Consiglio.", member: 'SIMO' },
          { text: "Spero che sia un \"decision maker\" e non un burattino.", member: 'FILO' },
          { text: "È un tipo molto pacato, mi ricorda Seba.", member: 'DAVE' },
          { text: "Ha lo stesso nome di Andonio, vinceremo tutto!", member: 'MARCO' },
        ]
      }
    ]
  },
  {
    id: 'campo',
    title: 'Campo, Arbitri & "Lesità"',
    description: 'Le imbarazzanti uscite in Champions, il VAR e i tuffi di Neymar.',
    questions: [
      {
        id: 1,
        text: "Il rigore di Benatia su Vazquez al 93'.",
        choices: [
          { text: "Rigore netto, gli tira un calcio nel petto. Non facciamo i napoletani.", member: 'DAVE' },
          { text: "È un \"rigorino\" che non si dà mai all'ultimo secondo, arbitro leso.", member: 'FILO' },
          { text: "Benatia ha preso la palla, ho visto il fermo immagine su Sportmediaset.", member: 'FILO' },
          { text: "Se cade così dopo un calcio nel petto è un attore da Oscar.", member: 'PIETRO' },
          { text: "Espellere Buffon è stato un gesto di una bassezza infinita.", member: 'SIMO' },
        ]
      },
      {
        id: 2,
        text: "Neymar e le sceneggiate al mondiale.",
        choices: [
          { text: "È l'anticalcio, si rotola per 14 minuti a partita. Da prendere a botte.", member: 'DAVE' },
          { text: "Layun gli ha dato un pestone volontario, se non fai così il VAR non lo vede.", member: 'SIMO' },
          { text: "Lo ha sfiorato, Neymar non ha neanche un graffio. Simulazione pura.", member: 'PIETRO' },
          { text: "Neymar figlio di puttana, mi vergogno di averlo preso al fanta.", member: 'MARCO' },
          { text: "Si è mangiato del catarro marcio, la sua faccia è impagabile.", member: 'SIMO' },
        ]
      },
      {
        id: 3,
        text: "Cosa ne pensi del VAR?",
        choices: [
          { text: "Lo userei solo nei momenti fondamentali, troppe interruzioni rovinano il gioco.", member: 'FILO' },
          { text: "Aiuta solo le squadre più forti, senza VAR può succedere di tutto.", member: 'FILO' },
          { text: "Deve esserci un arbitro in TV con lo stesso potere di quello in campo.", member: 'SIMO' },
          { text: "Il VAR aiuta gli onesti, infatti la Juve ha vinto lo stesso.", member: 'PIETRO' },
          { text: "Cancelliamo il maggior numero di errori possibile, io sono favorevole.", member: 'MARCO' },
        ]
      },
      {
        id: 4,
        text: "L'uscita dell'Italia contro la Svezia.",
        choices: [
          { text: "Ventura è un allenatore da oratorio, ha fallito con una rosa decente.", member: 'DAVE' },
          { text: "La maglia dell'Italia li rende tutti più scarsi, sembrano dei beduini.", member: 'PIETRO' },
          { text: "Almeno ci siamo risparmiati delle figure di merda peggiori al mondiale.", member: 'DAVE' },
          { text: "Senza il blocco Juve dietro non si va da nessuna parte.", member: 'PIETRO' },
          { text: "Svezia fortissima, si è meritata il mondiale più di noi.", member: 'SIMO' },
        ]
      },
      {
        id: 5,
        text: "La prestazione della Roma contro il Barca.",
        choices: [
          { text: "La tattica ha vinto sui singoli, dovremmo imparare da Di Francesco.", member: 'FILO' },
          { text: "Hanno overperformato una volta e ora pensano di essere il Real.", member: 'DAVE' },
          { text: "Goduria veder piangere i catalani, Roma vendicaci!", member: 'PIETRO' },
          { text: "Pallotta che si tuffa nella fontana è un gesto da provinciale.", member: 'SIMO' },
          { text: "Incredibile, non ci credevo nemmeno io.", member: 'MARCO' },
        ]
      },
      {
        id: 6,
        text: "Il gioco di Allegri.",
        choices: [
          { text: "Vince in Italia perché ha due squadre, in Europa però serve il \"bel giuoco\".", member: 'DAVE' },
          { text: "Allegri è uno psicologo, gestisce i momenti della partita come nessun altro.", member: 'SIMO' },
          { text: "Mi sono rotto del suo calcio sparagnino, voglio Zidane.", member: 'FILO' },
          { text: "Preferisco giocar male e vincere che fare la fine del Napoli.", member: 'MARCO' },
          { text: "È un manager, delega tutto ai preparatori e si occupa di comunicazione.", member: 'DAVE' },
        ]
      },
      {
        id: 7,
        text: "Donnarumma e le sue papere.",
        choices: [
          { text: "Ha la reattività di un bradipo, gli riescono solo le parate difficili.", member: 'DAVE' },
          { text: "A 20 anni può permettersi di fare delle lesità, migliorerà col tempo.", member: 'FILO' },
          { text: "Raiola gli ha rovinato la carriera, non ha più serenità mentale.", member: 'SIMO' },
          { text: "Sorrentino e Consigli sono molto più forti di lui al momento.", member: 'DAVE' },
          { text: "Al Milan gli danno 6 milioni per prendere gol da polli.", member: 'PIETRO' },
        ]
      },
      {
        id: 8,
        text: "Il 6-0 della Spagna sulla Croazia.",
        choices: [
          { text: "Modric pallone d'oro? Dopo questa partita dovrebbero radiarlo.", member: 'FILO' },
          { text: "Senza Mandzukic la Croazia è una squadra da metà classifica.", member: 'FILO' },
          { text: "Vrsaljko si è rotto dopo 20 minuti, lì è finita la partita.", member: 'PIETRO' },
          { text: "Chi cazzo è Santini in attacco? Imbarazzo puro.", member: 'SIMO' },
          { text: "La Croazia è forte ma non può reggere certi ritmi.", member: 'MARCO' },
        ]
      },
      {
        id: 9,
        text: "Cosa pensi di Gagliardini?",
        choices: [
          { text: "È un maiale, entra sempre a martello senza motivo.", member: 'PIETRO' },
          { text: "È infinitamente scarso, non giocherebbe nemmeno nel Burundi.", member: 'MARCO' },
          { text: "Entra in forma solo da febbraio, prima è un fantasma.", member: 'SIMO' },
          { text: "Inutile a centrocampo, non ha visione di gioco.", member: 'DAVE' },
          { text: "Lo hanno convocato in nazionale solo per farci un dispetto.", member: 'FILO' },
        ]
      },
      {
        id: 10,
        text: "La Nations League.",
        choices: [
          { text: "È qualitativamente meglio dell'europeo, finalmente partite vere.", member: 'SIMO' },
          { text: "Sostituisce le amichevoli, non frega niente a nessuno.", member: 'FILO' },
          { text: "Serve solo a stancare i giocatori della Juve prima della Champions.", member: 'PIETRO' },
          { text: "Vedere Italia-Polonia di venerdì sera è il punto più basso della mia vita.", member: 'DAVE' },
          { text: "Almeno c'è qualcosa da guardare mentre studio.", member: 'MARCO' },
        ]
      },
      {
        id: 11,
        text: "Il fallo di Vecino su Mandzukic.",
        choices: [
          { text: "Rosso inesistente, Pjanic doveva essere espulso tre volte.", member: 'SIMO' },
          { text: "Gli ha fatto uno sbrago sulla tibia, rosso sacrosanto.", member: 'PIETRO' },
          { text: "Orsato ha cambiato metro di giudizio durante la partita, vergogna.", member: 'SIMO' },
          { text: "Vecino è un macellaio, ha rischiato di rovinare la stagione a Marione.", member: 'FILO' },
          { text: "È la solita Inter pazza che si rovina da sola.", member: 'DAVE' },
        ]
      },
      {
        id: 12,
        text: "I sorteggi della Champions League.",
        choices: [
          { text: "Il girone della Juve è facile, possiamo fare turnover e passare primi.", member: 'PIETRO' },
          { text: "Inter in quarta fascia? Non passeremo mai, becchiamo Barca e Tottenham.", member: 'SIMO' },
          { text: "Il Porto becca sempre il girone facile, è un cartello dell'UEFA.", member: 'DAVE' },
          { text: "Napoli eliminato già a settembre con quel sorteggio.", member: 'MARCO' },
          { text: "Bello il nostro girone, affrontiamo squadre vere subito.", member: 'FILO' },
        ]
      },
      {
        id: 13,
        text: "La spalla di Salah e Sergio Ramos.",
        choices: [
          { text: "Ramos è l'uomo partita, ha capito come vincere la finale in 20 minuti.", member: 'SIMO' },
          { text: "Un killer, doveva essere squalificato per tre anni.", member: 'MARCO' },
          { text: "Salah non lo ha nemmeno cagato alla premiazione, idolo.", member: 'DAVE' },
          { text: "Senza Salah il Liverpool è diventato una squadra di Serie B.", member: 'FILO' },
          { text: "Ramos alla Juve sarebbe il top, cattiveria pura.", member: 'PIETRO' },
        ]
      },
      {
        id: 14,
        text: "Le parate di Karius in finale.",
        choices: [
          { text: "Ha preso due gol che non prende nemmeno il portiere dell'oratorio.", member: 'PIETRO' },
          { text: "È la dimostrazione che in finale serve la mentalità del Real.", member: 'FILO' },
          { text: "Mi ha fatto pena vederlo piangere sotto la curva.", member: 'MARCO' },
          { text: "Il Liverpool ha speso 80 milioni per un difensore e ha un citofono in porta.", member: 'DAVE' },
          { text: "Aveva una commozione cerebrale, lo dicono i medici americani!", member: 'SIMO' },
        ]
      },
      {
        id: 15,
        text: "Chi vincerà lo scudetto 2018-2019?",
        choices: [
          { text: "La Juve con 15 punti di distacco, è un campionato già finito.", member: 'MARCO' },
          { text: "Il Napoli di Ancelotti farà il miracolo se la Juve si concentra sulla Champions.", member: 'SIMO' },
          { text: "L'Inter arriva seconda e vince il derby di Milano 4-0.", member: 'PIETRO' },
          { text: "Lo scudetto andrà a chi ruba di meno, quindi non alla Juve.", member: 'SIMO' },
          { text: "Se Ronaldo ne fa 40, lo vinciamo a marzo.", member: 'FILO' },
        ]
      }
    ]
  },
  {
    id: 'bilanci',
    title: 'Calciomercato & Bilanci (L\'arte della Plusvalenza)',
    description: 'Plusvalenze, Ronaldo, Ramsey e il magheggio Sturaro. Tutto quello che conta nel calcio moderno.',
    questions: [
      {
        id: 1,
        text: 'Icardi viene messo fuori rosa e la sua valutazione crolla. Qual è il prezzo giusto?',
        choices: [
          { text: 'Meno di 80 milioni è un’offerta ridicola, Marotta non la prende neanche in considerazione.', member: 'SIMO' },
          { text: 'Se arriva un’offerta da 90, Marotta accetta subito, ma lo darebbe solo per Dybala alla Juve.', member: 'FILO' },
          { text: '100 milioni? Se ne vale 9 Santon, Icardi ne vale 100 anche da fermo.', member: 'MARCO' },
          { text: 'Vale meno di 70 milioni ormai, è un fuori rosa e nessuno te li dà cash.', member: 'PIETRO' },
          { text: 'Sotto i 100 è una perdita, ma con l\'Inter tutto è possibile, anche venderlo a 60.', member: 'DAVE' }
        ]
      },
      {
        id: 2,
        text: 'La Juve spende 100 milioni per un over 30 come Ronaldo. Operazione sostenibile?',
        choices: [
          { text: 'È un progetto in perdita, chiudiamo il bilancio in rosso nonostante le plusvalenze.', member: 'PIETRO' },
          { text: 'Si è già ripagato da solo con la storia, il blasone e gli sponsor.', member: 'FILO' },
          { text: 'Se lo rivendono in Cina tra due anni a 30 milioni hanno fatto l\'affare.', member: 'SIMO' },
          { text: 'In borsa è un bitcoin, ma a livello mediatico ora siamo un terzo di Barca e Real.', member: 'MARCO' },
          { text: 'Un 30enne ha un fisico che scade prima delle rate d\'ammortamento.', member: 'DAVE' }
        ]
      },
      {
        id: 3,
        text: 'Ramsey alla Juve con uno stipendio da 7 milioni netti. Che ne pensi?',
        choices: [
          { text: 'Pazzia fare 5 anni a un 28enne, tra tre anni è peggio di Khedira.', member: 'PIETRO' },
          { text: 'Lo prendi a 0, è normale che lo stipendio sia più alto del 30%.', member: 'SIMO' },
          { text: 'Spero sia forte, la concorrenza era tanta e toccava pagarlo.', member: 'FILO' },
          { text: 'Spero non sia una ciofeca come Gordon Ramsey, non l\'ho mai visto giocare.', member: 'MARCO' },
          { text: 'Serve qualcuno di gamba e tecnica, Ramsey alza il livello del centrocampo.', member: 'DAVE' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi di Sturaro venduto al Genoa per 16,5 milioni?',
        choices: [
          { text: 'Operazione magistrale, il Genoa è l\'amico dei grandi club per aggiustare i bilanci.', member: 'PIETRO' },
          { text: 'Grazie Milan per aver ricaricato le casse del Genoa, la metà di Piatek è finita a noi.', member: 'DAVE' },
          { text: 'Sturaro ha la media gol migliore della Serie A, li vale tutti.', member: 'SIMO' },
          { text: 'È un magheggio clamoroso, ma se funziona siamo dei geni.', member: 'MARCO' },
          { text: 'Sturaro è un eroe degli scudetti, ci vuole rispetto.', member: 'FILO' }
        ]
      },
      {
        id: 5,
        text: 'Barella vale 50 milioni?',
        choices: [
          { text: 'Nuovo Allan, li vale tranquillamente.', member: 'PIETRO' },
          { text: 'Diventerà un giocatore normale, meglio venderlo finché se ne parla.', member: 'DAVE' },
          { text: 'Un nuovo Gagliardini, 50 milioni sono una pazzia.', member: 'SIMO' },
          { text: 'Se lo paga il Chelsea ok, in Italia è un prezzo fuori mercato.', member: 'FILO' },
          { text: 'Per me è un fenomeno, ma 50 milioni sono tanti per uno che deve ancora dimostrare.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Il Barcellona prende Boateng. Reazione?',
        choices: [
          { text: 'Hanno letto le mie critiche sul loro centrocampo scarso.', member: 'PIETRO' },
          { text: 'Meglio lui di un primavera a caso.', member: 'FILO' },
          { text: 'Spero che Caputo vada al PSG per 40 milioni a questo punto.', member: 'DAVE' },
          { text: 'In un fanta avevo sia lui che Higuain, sono distrutto.', member: 'SIMO' },
          { text: '🤣🤣🤣 Ridicoli.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Marcelo alla Juve per 45 milioni, lo faresti?',
        choices: [
          { text: 'Basta cicciotti ultratrentenni, a parte Ronaldo.', member: 'DAVE' },
          { text: 'Povero Marcelo, lo prenderei solo per lo stipendio dimezzato.', member: 'MARCO' },
          { text: 'Se arriva a 10-15 milioni è un colpo, altrimenti è un Evra 2.', member: 'PIETRO' },
          { text: 'Cristiano lo ha chiesto, quindi la società lo prenderà.', member: 'FILO' },
          { text: 'Ha 7kg in più, non giocherebbe neanche nel Milan.', member: 'SIMO' }
        ]
      },
      {
        id: 8,
        text: 'L\'Inter deve riscattare Keita?',
        choices: [
          { text: '34 milioni sono troppi per uno che non gioca mai.', member: 'PIETRO' },
          { text: 'Piuttosto metto Ranocchia punta.', member: 'SIMO' },
          { text: 'Solo se ci fanno lo sconto.', member: 'FILO' },
          { text: 'Keita chi? Quello del Monaco che va in B?', member: 'MARCO' },
          { text: 'È un altro pacco, rimandiamolo indietro.', member: 'DAVE' }
        ]
      },
      {
        id: 9,
        text: 'Higuain al Chelsea, come finirà?',
        choices: [
          { text: 'Sarri lo ha preso per non farlo riscattare e tenerlo l\'anno prossimo alla Juve.', member: 'PIETRO' },
          { text: 'Farà schifo, non segna neanche in allenamento.', member: 'SIMO' },
          { text: 'Ha dei problemi di autostima, gli serve Sarri.', member: 'FILO' },
          { text: 'Spero lo riscattino così non torna a pesare sul nostro bilancio.', member: 'DAVE' },
          { text: 'Il Pipa è finito, segna solo contro le squadrette.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Milinkovic-Savic vale ancora 120 milioni?',
        choices: [
          { text: 'Lotito è un leso, doveva venderlo l\'anno scorso a 160.', member: 'FILO' },
          { text: 'Vale 60 milioni adesso, è scomparso dal campo.', member: 'SIMO' },
          { text: 'È il momento di comprarlo in sconto a 70-80.', member: 'PIETRO' },
          { text: 'In un 3-5-2 di Conte sarebbe il top.', member: 'DAVE' },
          { text: 'Giocatore fortissimo ma troppo incostante.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Zaniolo per 4,5 milioni più Nainggolan. Chi ha fatto l\'affare?',
        choices: [
          { text: 'L\'Inter ha regalato 40 milioni alla Roma, Marotta è un infiltrato.', member: 'FILO' },
          { text: 'Zaniolo vale 60 milioni ora, noi abbiamo preso un bidone tatuato.', member: 'SIMO' },
          { text: 'Plusvalenza fittizia della Roma, l\'Inter ha truccato i conti.', member: 'PIETRO' },
          { text: 'Zaniolo nuovo Totti? Non fatemi ridere.', member: 'DAVE' },
          { text: 'Fenomeno Zaniolo, lo voglio alla Juve.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Qual è il segreto del mercato del Napoli?',
        choices: [
          { text: 'Vendere i pacchi tipo Allan a 100 milioni al PSG.', member: 'SIMO' },
          { text: 'Hanno De Laurentiis che è un mostro a gestire i soldi.', member: 'PIETRO' },
          { text: 'Comprano solo gente che corre e poi si lamentano del fatturato.', member: 'FILO' },
          { text: 'Hanno un culo rotto nello scovare i talenti a poco.', member: 'MARCO' },
          { text: 'Prendono gli scarti degli altri e li fanno sembrare campioni.', member: 'DAVE' }
        ]
      },
      {
        id: 13,
        text: 'La maglia della Juve a 90 euro è un furto?',
        choices: [
          { text: 'Con 90 euro compri la società del Genoa.', member: 'PIETRO' },
          { text: 'Se c\'è Ronaldo sopra ne vale anche 150.', member: 'FILO' },
          { text: 'Io la compro solo se è in saldo al 70%.', member: 'SIMO' },
          { text: 'Bellissima, la prendo a prescindere dal prezzo.', member: 'MARCO' },
          { text: 'Marketing per polli, io aspetto che falliscano.', member: 'DAVE' }
        ]
      },
      {
        id: 14,
        text: 'De Ligt a 75 milioni, li vale?',
        choices: [
          { text: '100 milioni per sistemare la difesa per 15 anni li spendo subito.', member: 'DAVE' },
          { text: 'Meglio Manolas a 35, De Ligt è troppo giovane.', member: 'PIETRO' },
          { text: 'Il Barca lo ha già preso, noi arriviamo sempre tardi.', member: 'SIMO' },
          { text: 'Se lo dice Ronaldo di prenderlo, va preso.', member: 'FILO' },
          { text: 'Fenomeno assoluto, alziamo l\'offerta.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'James Rodriguez in Italia?',
        choices: [
          { text: 'Al Napoli con Ancelotti è quasi ufficiale.', member: 'PIETRO' },
          { text: 'Sarebbe il colpo perfetto per l\'Inter al posto di Candreva.', member: 'SIMO' },
          { text: 'Un altro trequartista che non corre, no grazie.', member: 'DAVE' },
          { text: 'Solo se lo paghiamo a rate in 10 anni.', member: 'MARCO' },
          { text: 'Lo vorrei alla Juve per la Champions.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'tattica',
    title: 'Tattica & Filosofia (Il Salotto dei Lesi)',
    description: 'Dal "calcio è semplice" di Allegri alla Garra Charrua. Analisi tattica per veri intenditori.',
    questions: [
      {
        id: 1,
        text: 'Allegri dice che il calcio è semplice e non servono gli schemi. Commenti?',
        choices: [
          { text: 'Ha ragione, i libri non servono a niente, conta la pratica.', member: 'FILO' },
          { text: 'È un incompetente, si affida solo alle giocate dei singoli.', member: 'PIETRO' },
          { text: 'Se il calcio è semplice, allora perché giochiamo così male?', member: 'DAVE' },
          { text: 'Finché vince ha ragione lui, ma che noia guardare le partite.', member: 'SIMO' },
          { text: 'Conferenze stampa top, ma in campo servirebbe più dinamismo.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Quanti difensori centrali servono in una rosa top?',
        choices: [
          { text: 'Ne servono 5, perché se si rompono Chiellini e Bonucci rimaniamo con Rugani.', member: 'PIETRO' },
          { text: '4 sono più che sufficienti, il quinto è un costo inutile e sta scontento.', member: 'DAVE' },
          { text: 'Ne servono 6, viste le sfighe che abbiamo.', member: 'FILO' },
          { text: 'Basta avere Barzagli fresco come una rosa e siamo a posto.', member: 'MARCO' },
          { text: 'Ne servono 5 ma solo se uno è adattabile, tipo Can.', member: 'SIMO' }
        ]
      },
      {
        id: 3,
        text: 'Il VAR in Champions League dagli ottavi. Giusto?',
        choices: [
          { text: 'Finalmente, così il Real smette di rubare con i rigori inesistenti.', member: 'MARCO' },
          { text: 'È una mezza cosa, se non lo usano per i falli a centrocampo non ha senso.', member: 'FILO' },
          { text: 'Meno male che c\'è, zittisce i complottisti che dicono che la Juve ruba.', member: 'PIETRO' },
          { text: 'Rende tutto più corretto, ma certe decisioni sono comunque ridicole.', member: 'SIMO' },
          { text: 'Inutile se poi gli arbitri sono scarsi come quello di ieri.', member: 'DAVE' }
        ]
      },
      {
        id: 4,
        text: 'Pjanic davanti alla difesa: regista o schermo?',
        choices: [
          { text: 'È una sega, fa solo passaggi orizzontali di due metri.', member: 'FILO' },
          { text: 'È un top a livello mondiale, ma quest\'anno sta calando.', member: 'PIETRO' },
          { text: 'Deve giocare più avanzato, lì è sprecato.', member: 'SIMO' },
          { text: 'È matto, fa delle giocate che nessuno capisce.', member: 'MARCO' },
          { text: 'Non filtra un cazzo, serve qualcuno di più tosto.', member: 'DAVE' }
        ]
      },
      {
        id: 5,
        text: 'Bernardeschi vs Dybala. Chi è più forte?',
        choices: [
          { text: 'Bernardeschi 100 milioni, dà la merda a Dybala.', member: 'SIMO' },
          { text: 'Dybala è un fenomeno, ma con Ronaldo vicino si è svalutato.', member: 'FILO' },
          { text: 'Bernardeschi ha più voglia, Dybala sembra un centrocampista lento ora.', member: 'PIETRO' },
          { text: 'Dybala è ineluttabile, Bernardeschi è solo un buon giocatore.', member: 'MARCO' },
          { text: 'Dybala non è imprescindibile, meglio venderlo finché vale 100.', member: 'DAVE' }
        ]
      },
      {
        id: 6,
        text: 'Cosa pensi di Kean titolare?',
        choices: [
          { text: 'È il nuovo Balotelli, ma con meno testa di cazzo (spero).', member: 'PIETRO' },
          { text: 'Va mandato in prestito all\'Atalanta per farsi le ossa.', member: 'SIMO' },
          { text: 'Deve giocare sempre, altro che Mandzukic vecchio.', member: 'FILO' },
          { text: 'Lo rivendiamo a 200 milioni tra due anni.', member: 'MARCO' },
          { text: 'È una scommessa, ma Allegri non lo farà mai giocare nelle partite serie.', member: 'DAVE' }
        ]
      },
      {
        id: 7,
        text: 'Il gioco dell\'Inter di Spalletti?',
        choices: [
          { text: 'Cross in area e spera in Dio, 0 sovrapposizioni.', member: 'SIMO' },
          { text: 'Catenaccio e contropiede, tipico delle squadre di periferia.', member: 'PIETRO' },
          { text: 'Spalletti ha le palle, ha distrutto Icardi come uomo.', member: 'FILO' },
          { text: 'Giocano meglio quando hanno 10 infortunati, pazzesco.', member: 'MARCO' },
          { text: 'Mentalità europea pari a zero.', member: 'DAVE' }
        ]
      },
      {
        id: 8,
        text: 'Chi è il miglior allenatore per il dopo-Allegri?',
        choices: [
          { text: 'Guardiola, così vinciamo e giochiamo bene.', member: 'MARCO' },
          { text: 'Conte, riporta la garra e lo stile Juve.', member: 'DAVE' },
          { text: 'Pochettino, le sue prestazioni in CL hanno convinto tutti.', member: 'SIMO' },
          { text: 'Di Francesco, è il re della Champions con le squadre piccole.', member: 'PIETRO' },
          { text: 'Mourinho, per cercare la stagione fortunata e vincere tutto.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Il rigore di mano: distanza o posizione?',
        choices: [
          { text: 'Se hai le mani larghe è rigore sempre, anche da 20 cm.', member: 'SIMO' },
          { text: 'Se rimbalza prima sul corpo non può mai essere fallo.', member: 'PIETRO' },
          { text: 'I difensori con le braccia dietro la schiena mi fanno cagare.', member: 'MARCO' },
          { text: 'Il regolamento va cambiato, è una pagliacciata.', member: 'FILO' },
          { text: 'Col VAR devono fischiarli tutti, non ci sono scuse.', member: 'DAVE' }
        ]
      },
      {
        id: 10,
        text: 'La "Garra Charrua" serve davvero?',
        choices: [
          { text: 'Serve per vincere le partite sporche al 92esimo.', member: 'SIMO' },
          { text: 'Sono solo chiacchiere da bar dei commentatori Adani-style.', member: 'PIETRO' },
          { text: 'È quello che manca a questa Juve moscia.', member: 'FILO' },
          { text: 'Meglio avere i piedi buoni che la garra.', member: 'DAVE' },
          { text: 'Pavoletti ha più garra di tutti gli uruguaiani messi insieme.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Cosa ne pensi di Jorginho?',
        choices: [
          { text: 'Inutile, non verticalizza mai, fa solo passaggi da due metri.', member: 'DAVE' },
          { text: 'È un regista top, ma in Premier lo stanno massacrando a caso.', member: 'PIETRO' },
          { text: 'Vale 50 milioni, altro che Nzonzi.', member: 'FILO' },
          { text: '0 assist in una stagione, basta questo dato.', member: 'SIMO' },
          { text: 'Altro pacco che ci volevano rifilare.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Il turnover di Allegri è eccessivo?',
        choices: [
          { text: 'No, serve per arrivare a marzo in forma, ma quest\'anno ha esagerato.', member: 'PIETRO' },
          { text: 'Fa riposare Ronaldo quando ci sono due settimane di pausa, geniale.', member: 'DAVE' },
          { text: 'Cambia 38 formazioni su 38, è un pazzo.', member: 'SIMO' },
          { text: 'Meglio far giocare i primavera con la Spal.', member: 'MARCO' },
          { text: 'Con Allegri i titolari non esistono, giocano tutti a caso.', member: 'FILO' }
        ]
      },
      {
        id: 13,
        text: 'La difesa a 3: ritorno al passato o futuro?',
        choices: [
          { text: 'Con i centrali che abbiamo è l\'unico modo per non prendere gol.', member: 'FILO' },
          { text: 'È il mio sogno da inizio anno, Bonucci rende meglio così.', member: 'DAVE' },
          { text: 'Solo se hai i quinti che spingono, tipo Cancelo.', member: 'SIMO' },
          { text: 'Basta che non metta De Sciglio centrale.', member: 'PIETRO' },
          { text: 'La bbc è finita, rassegnatevi.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'L\'Atalanta merita la Champions?',
        choices: [
          { text: 'Giocano il miglior calcio d\'Italia, intensità europea.', member: 'DAVE' },
          { text: 'Verranno stuprati appena beccano una big inglese.', member: 'SIMO' },
          { text: 'Spero di no, preferisco le milanesi per il ranking.', member: 'MARCO' },
          { text: 'Gasperini è un miracolato, ma bravi loro.', member: 'PIETRO' },
          { text: 'Mi fanno volare, spero arrivino terzi.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'I portieri devono saper giocare con i piedi?',
        choices: [
          { text: 'Sì, Szczesny è migliorato un sacco in questo.', member: 'FILO' },
          { text: 'No, devono parare e basta, le uscite di Donnarumma fanno ridere.', member: 'PIETRO' },
          { text: 'Ederson del City è un centrocampista aggiunto, quello è il futuro.', member: 'DAVE' },
          { text: 'Se sai giocare con i piedi ma non pari sei una sega.', member: 'SIMO' },
          { text: 'Alisson è il più forte del mondo perché fa entrambe le cose.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'accademia',
    title: 'Accademia & Professionalità (Fuffa vs Dati)',
    description: 'Marketing, esami a crocette, R e il piano per esportare trattori in Messico.',
    questions: [
      {
        id: 1,
        text: 'Il Marketing è una scienza o "fuffa"?',
        choices: [
          { text: 'È fuffa organizzata, ma serve per vendere i Pampers o le Lamborghini.', member: 'SIMO' },
          { text: 'Analisi dei dati e modelli previsivi, il resto sono chiacchiere.', member: 'PIETRO' },
          { text: 'È quella cosa che ti fa guadagnare 2000 euro in 20 minuti come Di Marco.', member: 'MARCO' },
          { text: 'I costi fissi di svogliatezza pesano più di qualsiasi piano di marketing.', member: 'DAVE' },
          { text: 'È l\'anima di un\'azienda, senza comunicazione non sei nessuno.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Come si passa un esame a crocette senza studiare?',
        choices: [
          { text: 'Devi avere un disegno divino e sperare che il prof non si presenti.', member: 'DAVE' },
          { text: 'Ti metti in after e vai a provarlo, mal che vada prendi 18.', member: 'PIETRO' },
          { text: 'Fai un audio a chi lo sta facendo per farti dare le risposte.', member: 'MARCO' },
          { text: 'Studi 8 capitoli su 20 e speri che le domande siano su quelli.', member: 'SIMO' },
          { text: 'Usi la logica e l\'intuizione, le crocette sono facili.', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'Analisi dei sentiment sui Tweet di Adidas. Risultato?',
        choices: [
          { text: 'Percezione positiva, ma occhio ai tweet tristi che sono il 20%.', member: 'DAVE' },
          { text: 'Basta corrompere gli influencer per alzare il sentiment.', member: 'PIETRO' },
          { text: 'Bisogna vedere quanti sono gli "unique authors" o è tutto falsato.', member: 'SIMO' },
          { text: 'L\'importante è che se ne parli, anche male.', member: 'FILO' },
          { text: 'Ho studiato questa materia l\'anno scorso, ma non ricordo nulla.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Lavorare in Ferrari o Lamborghini. Cosa sceglieresti?',
        choices: [
          { text: 'Lambo tutta la vita, mi hanno chiamato loro!', member: 'SIMO' },
          { text: 'Ferrari per distruggerli dall\'interno e cacciare Vettel.', member: 'PIETRO' },
          { text: 'Portfolio Manager in una di queste e si vola.', member: 'MARCO' },
          { text: 'Magazziniere a Varsavia è più stimolante.', member: 'DAVE' },
          { text: 'CEO di entrambe contemporaneamente.', member: 'FILO' }
        ]
      },
      {
        id: 5,
        text: 'Cosa pensi di LinkedIn?',
        choices: [
          { text: 'È il posto dove i lesi come Ciuraru mettono 20 corsi di formazione falsi.', member: 'SIMO' },
          { text: 'Utile per far vedere che sei un "Project Manager" anche se non fai nulla.', member: 'MARCO' },
          { text: 'Non me lo sono ancora fatto, troppo sbattimento.', member: 'PIETRO' },
          { text: 'È pieno di gente che vende fumo.', member: 'FILO' },
          { text: 'Lo uso solo per guardare le carriere dei calciatori falliti.', member: 'DAVE' }
        ]
      },
      {
        id: 6,
        text: 'Il "Project Manager" perfetto chi è?',
        choices: [
          { text: 'Uno che delega tutto e si prende il merito.', member: 'PIETRO' },
          { text: 'Io, ma solo da dopo le 11 di mattina.', member: 'FILO' },
          { text: 'Uno che sa usare R e Python come me.', member: 'DAVE' },
          { text: 'Chiunque sappia scrivere "Direziona Aziendale" correttamente sul CV.', member: 'SIMO' },
          { text: 'Mio padre, lui fa queste cose da anni.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Fare un piano di marketing per esportare trattori in Messico. Strategia?',
        choices: [
          { text: 'Trattore rosso stile Ferrari e bundle con 50 grammi di droga.', member: 'SIMO' },
          { text: 'Analisi del rischio paese e barriere tariffarie, un lavoro da ingegneri.', member: 'DAVE' },
          { text: 'Usare il trattore per sfondare il muro di Trump.', member: 'FILO' },
          { text: 'Creare una nicchia di streetwear per agricoltori.', member: 'PIETRO' },
          { text: 'Chiedere 2000 euro per 20 minuti di consulenza.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'La "Peer Evaluation" in azienda è utile?',
        choices: [
          { text: 'Sì, così emerge chi lavora meno e lo puoi cazziare.', member: 'FILO' },
          { text: 'È un\'ottima mossa per dare la percezione di un sistema giusto.', member: 'SIMO' },
          { text: 'Solo se è anonima, altrimenti ci si picchia in ufficio.', member: 'MARCO' },
          { text: 'I dati verrebbero comunque manipolati dai poteri forti.', member: 'PIETRO' },
          { text: 'Un\'altra perdita di tempo che toglie spazio allo studio.', member: 'DAVE' }
        ]
      },
      {
        id: 9,
        text: 'Cosa ne pensi dei seminari universitari per crediti facili?',
        choices: [
          { text: 'Bellissimi, 3 crediti per ascoltare cazzate è una pacchia.', member: 'PIETRO' },
          { text: 'Li faccio solo se non ho allenamento in palestra.', member: 'SIMO' },
          { text: 'Una roba vergognosa, ma ci vado per la gloria.', member: 'FILO' },
          { text: 'Meglio stare a casa a giocare a Football Manager.', member: 'MARCO' },
          { text: 'Utili per conoscere gente nuova, forse.', member: 'DAVE' }
        ]
      },
      {
        id: 10,
        text: 'Studiare a Ravenna o Bologna?',
        choices: [
          { text: 'Ravenna è morta, Bologna è la capitale della fuffa ma almeno c\'è vita.', member: 'SIMO' },
          { text: 'A Bologna piove sempre quando devo far serata.', member: 'PIETRO' },
          { text: 'Meglio l\'Erasmus a Varsavia, costa meno e c\'è più gnagna.', member: 'DAVE' },
          { text: 'Ravenna regna, basta avere il babbo che ti porta in stazione.', member: 'MARCO' },
          { text: 'Urbino è il top, ma piove da 10 giorni.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Come scriveresti "Addetto alle vendite al baracchino" sul CV?',
        choices: [
          { text: '"Sales Assistant in a dynamic food environment".', member: 'SIMO' },
          { text: '"Amministratore del baracchino e venditore di granite".', member: 'FILO' },
          { text: 'Lo ometterei per non sembrare un poveraccio.', member: 'PIETRO' },
          { text: '"Portfolio Manager di prodotti alimentari estivi".', member: 'MARCO' },
          { text: '"Analista di mercato nel settore retail".', member: 'DAVE' }
        ]
      },
      {
        id: 12,
        text: 'Usare R per il trading system. Fattibile?',
        choices: [
          { text: 'Se ti si chiude il programma e perdi il codice è la fine.', member: 'DAVE' },
          { text: 'Meglio Sas, R è lercio.', member: 'PIETRO' },
          { text: 'Pago qualcuno per farmelo e mi prendo il 30.', member: 'SIMO' },
          { text: 'Il mio capo mi lascia usare la sua postazione con 4 schermi.', member: 'FILO' },
          { text: 'Un algoritmo che elimina le emozioni? Magia.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'La tesi di laurea: impegno o sbatta?',
        choices: [
          { text: 'Una pazzia, ma se segui un manager te la cavi.', member: 'FILO' },
          { text: 'Ho preso 30 studiando 8 capitoli, sono un genio.', member: 'SIMO' },
          { text: 'Ho fatto 7 pagine di riassunti e via.', member: 'MARCO' },
          { text: 'La mia era sul modello di Elon Musk, ma ho scritto "Direziona".', member: 'PIETRO' },
          { text: 'Non vedo l\'ora di finirla per non studiare mai più.', member: 'DAVE' }
        ]
      },
      {
        id: 14,
        text: 'Career Day in Università. Utile?',
        choices: [
          { text: 'Sì, per trovare tirocini in P&G o Lamborghini.', member: 'SIMO' },
          { text: 'Solo per vedere le tipe che ci lavorano.', member: 'MARCO' },
          { text: 'Ci trovi gente lesa come Giulio e Ibrahim.', member: 'PIETRO' },
          { text: 'Una perdita di tempo se non hai il CV perfetto.', member: 'FILO' },
          { text: 'Ci vado solo se mi regalano dei gadget.', member: 'DAVE' }
        ]
      },
      {
        id: 15,
        text: 'Essere "Top 1% in the admission program" cosa significa?',
        choices: [
          { text: 'Che hai sculato con le domande facili.', member: 'SIMO' },
          { text: 'Che sei il re dei lesi di tutto il CLAMM.', member: 'FILO' },
          { text: 'Che sei pronto per una carriera a Wall Street.', member: 'PIETRO' },
          { text: 'Che hai studiato troppo e non hai fatto abbastanza ignoranza.', member: 'DAVE' },
          { text: 'Significa che sono il migliore, punto.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'champions',
    title: 'Grandi Eventi & Champions (Il Sogno Europeo)',
    description: 'Dall\'Ajax al 4-0 di Anfield. Le notti europee più pazze tra miracoli e delusioni.',
    questions: [
      {
        id: 1,
        text: 'L\'Ajax elimina Juve e Real. Come è successo?',
        choices: [
          { text: 'Hanno incontrato le squadre nei loro momenti peggiori, sculata pura.', member: 'PIETRO' },
          { text: 'Giocano un calcio champagne, sono superiori tecnicamente.', member: 'SIMO' },
          { text: 'È un caso che capita 1 volta su 1000, al ritorno li aravamo.', member: 'MARCO' },
          { text: 'Hanno una mentalità che a noi manca, corrono il doppio.', member: 'DAVE' },
          { text: 'Senza Chiellini ci siamo cagati addosso, ecco la verità.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Liverpool-Barcellona 4-0. Reazione?',
        choices: [
          { text: 'Mi sto pulendo perché sono venuto, godo come un maiale.', member: 'SIMO' },
          { text: 'Klopp è un Montella che ce l\'ha fatta, ride sempre.', member: 'PIETRO' },
          { text: 'Valverde è un esploso, ha buttato 3 gol di vantaggio.', member: 'DAVE' },
          { text: 'La Champions più brutta di sempre, finaliste a caso.', member: 'MARCO' },
          { text: 'Messi pallone d\'oro? Dopo questa deve nascondersi.', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'Juve-Atletico 3-0. Chi è l\'eroe?',
        choices: [
          { text: 'Emre Can, migliore in campo insieme a Ronaldo.', member: 'PIETRO' },
          { text: 'Bernardeschi, in questo modulo è illegale.', member: 'SIMO' },
          { text: 'Spinazzola, ha saltato l\'uomo per 90 minuti.', member: 'FILO' },
          { text: 'Allegri, ha zittito tutti i "giochisti" del cazzo.', member: 'DAVE' },
          { text: 'CR7, per questo abbiamo speso 100 milioni.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Chi vincerà la finale di Madrid?',
        choices: [
          { text: 'Il Barcellona, Messi è troppo superiore.', member: 'SIMO' },
          { text: 'L\'Ajax, è l\'anno delle outsider.', member: 'DAVE' },
          { text: 'Una inglese, dominano fisicamente.', member: 'FILO' },
          { text: 'Il Tottenham, basta mettere Llorente e buttarla in mezzo.', member: 'PIETRO' },
          { text: 'Spero nessuno, mi fanno schifo entrambe.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Perché le italiane falliscono in Europa?',
        choices: [
          { text: 'Perché il nostro campionato è mediocre e non siamo abituati a certi ritmi.', member: 'SIMO' },
          { text: 'Colpa del fatturato, come dice De Laurentiis (non è vero).', member: 'FILO' },
          { text: 'Arbitri in malafede e niente VAR, un complotto Uefa.', member: 'MARCO' },
          { text: 'Non investiamo sui giovani e prendiamo solo parametri zero rotti.', member: 'PIETRO' },
          { text: 'Mancanza di un\'identità di gioco precisa.', member: 'DAVE' }
        ]
      },
      {
        id: 6,
        text: 'Cosa pensi di Messi che segna 600 gol?',
        choices: [
          { text: 'Li ha fatti solo perché gioca nella marcissima Liga.', member: 'MARCO' },
          { text: 'È il miglior giocatore della storia, non ci sono dubbi.', member: 'SIMO' },
          { text: 'Se viene in Italia ne fa 15 a stagione stando bene.', member: 'PIETRO' },
          { text: 'Pallone d\'oro a lui è un\'abitudine noiosa.', member: 'DAVE' },
          { text: 'Ronaldo rimane più completo e decisivo.', member: 'FILO' }
        ]
      },
      {
        id: 7,
        text: 'Roma-Porto, rigore non dato al 120esimo. Opinione?',
        choices: [
          { text: 'Era netto, la Roma è stata derubata.', member: 'FILO' },
          { text: 'Non era rigore, si è buttato come un leso.', member: 'PIETRO' },
          { text: 'Almeno il Porto non è una squadraccia come pensavate.', member: 'SIMO' },
          { text: 'Il VAR non serve a nulla se l\'arbitro è scarso.', member: 'DAVE' },
          { text: 'Povera Roma, sfiga perenne.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Il 7-0 del City allo Schalke?',
        choices: [
          { text: 'Bundes imbarazzante, peggio della serie B.', member: 'MARCO' },
          { text: 'Guardiola è un genio, fa quello che vuole.', member: 'SIMO' },
          { text: 'Lo Schalke si è scansato, palese.', member: 'PIETRO' },
          { text: 'Quando hanno Mahrez e Sane in panca è facile.', member: 'DAVE' },
          { text: 'Inghilterra superiore, rassegnatevi.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Cosa pensi di Kepa che rifiuta il cambio?',
        choices: [
          { text: 'Sarri ha perso lo spogliatoio, è finito.', member: 'SIMO' },
          { text: 'Kepa è un eroe, ha dimostrato di avere le palle.', member: 'MARCO' },
          { text: 'Se lo faceva alla Juve finiva a spalare merda a Vinovo.', member: 'PIETRO' },
          { text: 'Solo perché costa 80 milioni può permettersi queste figure.', member: 'DAVE' },
          { text: 'Una roba mai vista, ridicolo.', member: 'FILO' }
        ]
      },
      {
        id: 10,
        text: 'I 2 minuti di recupero in Juve-Ajax?',
        choices: [
          { text: 'Complotto, volevano farci uscire a tutti i costi.', member: 'FILO' },
          { text: 'In 20 minuti di VAR ne danno 2? Scandaloso.', member: 'PIETRO' },
          { text: 'Non avremmo segnato neanche in 20 minuti, eravamo spompati.', member: 'DAVE' },
          { text: 'Giusto così, eravamo dominati.', member: 'SIMO' },
          { text: 'Uefa Mafia.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Il Tottenham senza Kane arriva in finale. Miracolo?',
        choices: [
          { text: 'No, è Pochettino che li fa giocare a memoria.', member: 'SIMO' },
          { text: 'Hanno sculato contro il City e contro l\'Ajax.', member: 'PIETRO' },
          { text: 'Lucas Moura ha fatto la partita della vita, capita 1 volta su 1000.', member: 'MARCO' },
          { text: 'Kane è sopravvalutato, giocano meglio senza.', member: 'FILO' },
          { text: 'Dimostra che la squadra conta più del singolo.', member: 'DAVE' }
        ]
      },
      {
        id: 12,
        text: 'Chi vince l\'Europa League?',
        choices: [
          { text: 'Il Chelsea di Sarri, ha la rosa più forte.', member: 'PIETRO' },
          { text: 'Spero il Napoli, ma Ancelotti ha la testa altrove.', member: 'MARCO' },
          { text: 'L\'Arsenal, ci ha distrutto Napoli e Lazio.', member: 'SIMO' },
          { text: 'Una tra le inglesi, tanto le italiane escono subito.', member: 'FILO' },
          { text: 'Il Frankfurt, giocano con un\'intensità pazzesca.', member: 'DAVE' }
        ]
      },
      {
        id: 13,
        text: 'Ronaldo deluso dopo l\'eliminazione. Cosa farà?',
        choices: [
          { text: 'Chiede di comprare mezzo Real Madrid per l\'anno prossimo.', member: 'SIMO' },
          { text: 'Se ne va se non cambiano allenatore.', member: 'DAVE' },
          { text: 'Rimane e l\'anno prossimo ne fa 30 in campionato.', member: 'FILO' },
          { text: 'Si consola con la sua nuova Bugatti da 11 milioni.', member: 'PIETRO' },
          { text: 'È un leader, trascinerà la squadra alla vittoria.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'La finale di Champions 2020: chi ci sarà?',
        choices: [
          { text: 'Juve-Barca, finalmente Messi vs Ronaldo.', member: 'SIMO' },
          { text: 'City-Liverpool di nuovo, la Premier domina.', member: 'FILO' },
          { text: 'Real-Juve, Zidane contro il suo passato.', member: 'MARCO' },
          { text: 'Ajax e un\'altra sorpresa, il calcio sta cambiando.', member: 'DAVE' },
          { text: 'Spero il Bologna se continua così.', member: 'PIETRO' }
        ]
      },
      {
        id: 15,
        text: 'Il tifo per le italiane in Europa è d\'obbligo?',
        choices: [
          { text: 'Sì, per il ranking e per il prestigio nazionale.', member: 'FILO' },
          { text: 'No, godo se l\'Inter esce col PSV.', member: 'MARCO' },
          { text: 'Tifo le italiane tranne quando i tifosi sono dei lesi.', member: 'PIETRO' },
          { text: 'Solo se gioca il mio idolo Messi, il resto è noia.', member: 'SIMO' },
          { text: 'Non mi interessa, tifo solo la mia squadra.', member: 'DAVE' }
        ]
      }
    ]
  },
  {
    id: 'visione',
    title: 'Visione del Mondo (Dittatura & Dintorni)',
    description: 'Piani di governo, gestione della ricchezza e la ricerca del "luogo del cuore" a Bologna.',
    questions: [
      {
        id: 1,
        text: 'Qual è il primo punto del tuo programma di governo?',
        choices: [
          { text: 'Tassa a salire per le persone in sovrappeso.', member: 'PIETRO' },
          { text: 'Riforma scolastica pesante per eliminare i lesi.', member: 'FILO' },
          { text: 'Obbligo di apostrofi corretti ovunque.', member: 'SIMO' },
          { text: 'Legalizzazione di ogni vizio per fare cassa.', member: 'MARCO' },
          { text: 'Wifi a 100mb gratis per tutti, anche a Ravenna.', member: 'DAVE' }
        ]
      },
      {
        id: 2,
        text: 'Come si risolve il problema degli Ultras negli stadi?',
        choices: [
          { text: 'Deportarli in Siria o fargli spalare merda in piazza.', member: 'PIETRO' },
          { text: 'La polizia deve poter sparare se fanno casino.', member: 'MARCO' },
          { text: 'Daspo a vita e controllo dei telefoni a campione.', member: 'FILO' },
          { text: 'Creare un tifo organizzato basato sui sondaggi online.', member: 'DAVE' },
          { text: 'Ignorarli, sono solo dei poveretti frustrati.', member: 'SIMO' }
        ]
      },
      {
        id: 3,
        text: 'Cosa pensi di Salvini?',
        choices: [
          { text: 'È il politico più coerente che abbiamo, anche se fa le lesate.', member: 'SIMO' },
          { text: 'Ha rovinato la destra moderata, è un parolaio.', member: 'PIETRO' },
          { text: 'Sono d\'accordo su tutto finché non mi smentisce i dati.', member: 'FILO' },
          { text: 'Un genio del male nella comunicazione social.', member: 'DAVE' },
          { text: 'Mi sta simpatico perché triggera tutti.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'L’immigrazione in Italia: dati reali o propaganda?',
        choices: [
          { text: 'Salvini dice 90mila, i 5 stelle 500mila, la verità non la sa nessuno.', member: 'SIMO' },
          { text: 'Basta vedere chi spaccia in Piazza Verdi a Bologna.', member: 'PIETRO' },
          { text: 'Non mi fido di chi non ha cultura di vita.', member: 'FILO' },
          { text: 'È tutta una questione di integrazione di seconda generazione.', member: 'DAVE' },
          { text: 'Preferisco non parlarne o finisco nei guai.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'La gestione della ricchezza personale?',
        choices: [
          { text: 'Metto 500 euro in Plus500 e spero nel miracolo.', member: 'FILO' },
          { text: 'Risparmio maniacale, niente Netflix e Spotify craccato.', member: 'SIMO' },
          { text: 'Se divento milionario vi do l\'1% a testa per diversificare il rischio.', member: 'PIETRO' },
          { text: 'Spendo tutto in cene e viaggi, la vita è una.', member: 'MARCO' },
          { text: 'Investo solo in ciò che conosco bene, tipo i centrali della Juve.', member: 'DAVE' }
        ]
      },
      {
        id: 6,
        text: 'Il tuo rapporto con il "trash" e i video virali?',
        choices: [
          { text: 'Sono un esperto, guardo solo video di gente che cade o litiga.', member: 'PIETRO' },
          { text: 'Mi fanno sbragare i commenti dei boomer su Facebook.', member: 'SIMO' },
          { text: 'Preferisco i video di freestyle o le parodie di Maccio.', member: 'FILO' },
          { text: 'Guardo solo roba seria, ma ogni tanto ci casco.', member: 'DAVE' },
          { text: 'Non ho tempo per queste stronzate, devo giocare a FM.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa faresti se fossi un dittatore?',
        choices: [
          { text: 'Stipendio da 50 milioni e eliminazione del contante.', member: 'PIETRO' },
          { text: 'Farei piazza pulita dei sindacati e dei pensionati.', member: 'FILO' },
          { text: 'Imporrei il bel gioco anche nelle serie minori.', member: 'DAVE' },
          { text: 'Metterei Del Piero come Presidente della Repubblica.', member: 'MARCO' },
          { text: 'Creerei un ministero del marketing e della comunicazione.', member: 'SIMO' }
        ]
      },
      {
        id: 8,
        text: 'Il tuo approccio con le ragazze/gnagna?',
        choices: [
          { text: 'Guardo la sezione "cerca" di Instagram per ore.', member: 'SIMO' },
          { text: 'Tinder a Milano funziona, a Urbino è un massacro.', member: 'FILO' },
          { text: 'Se mi scrive la sorella di un amico, scappo in Polonia.', member: 'DAVE' },
          { text: 'Non chiedo mai l\'età per non rischiare la galera.', member: 'PIETRO' },
          { text: 'Mi piacciono solo le 2000, le altre sono vecchie.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Cosa pensi di Greta Thunberg?',
        choices: [
          { text: 'È nel mio giro, la inserirei nel programma della Barcaccia.', member: 'PIETRO' },
          { text: 'Dice cose giuste ma in modo fastidioso.', member: 'FILO' },
          { text: 'Un\'altra che ha capito come fare marketing di se stessa.', member: 'SIMO' },
          { text: 'Utile per sensibilizzare i lesi che buttano le cicche per terra.', member: 'DAVE' },
          { text: 'Non so chi sia, è una dei 5 stelle?', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'La tua reazione davanti a un\'ingiustizia?',
        choices: [
          { text: 'Esplodo e inizio a urlare come Spalletti contro Caressa.', member: 'FILO' },
          { text: 'Faccio una gufata talmente grossa che la realtà si ribalta.', member: 'PIETRO' },
          { text: 'Scrivo un post su Facebook e aspetto i like.', member: 'SIMO' },
          { text: 'Analizzo i dati per capire se è davvero un\'ingiustizia.', member: 'DAVE' },
          { text: 'Mi mangio una torta per dimenticare.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Qual è il tuo livello di pigrizia?',
        choices: [
          { text: 'Non metto gli apostrofi per risparmiare tempo sulla tastiera.', member: 'SIMO' },
          { text: 'Dormo fino alle 11 anche se ho un esame.', member: 'FILO' },
          { text: 'Delegherei anche il respiro se potessi.', member: 'PIETRO' },
          { text: 'Mi sveglio alle 7 solo per studiare R, poi torno a letto.', member: 'DAVE' },
          { text: 'Ho giocato 221 stagioni a FM, non chiamatemi pigro.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Il tuo "luogo del cuore" a Bologna?',
        choices: [
          { text: 'Pizza Casa, qualità a 2.50 euro.', member: 'FILO' },
          { text: 'Il Green per una cena ignorante.', member: 'PIETRO' },
          { text: 'La biblioteca Cicu, piena di gente che sottolinea.', member: 'DAVE' },
          { text: 'Il baracchino delle granite.', member: 'MARCO' },
          { text: 'La stazione, per scappare a Ravenna.', member: 'SIMO' }
        ]
      },
      {
        id: 13,
        text: 'Come definiresti un "Leso"?',
        choices: [
          { text: 'Uno che compra Piatek a 70 milioni dopo due partite.', member: 'SIMO' },
          { text: 'Uno che crede alle scie chimiche e vota PD.', member: 'PIETRO' },
          { text: 'I miei amici non sono mai lesi, è una contraddizione.', member: 'FILO' },
          { text: 'Chiunque non capisca una regressione lineare.', member: 'DAVE' },
          { text: 'Io, ma solo quando sono ubriaco a una festa.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'L\'incendio di Notre Dame: un segno del destino?',
        choices: [
          { text: 'È successo perché Gigi Buffon è andato al PSG.', member: 'PIETRO' },
          { text: 'Tristezza infinita, ma la ricostruiranno in 2 giorni.', member: 'FILO' },
          { text: 'I russi sulle scale mobili sono stati peggio.', member: 'SIMO' },
          { text: 'Un complotto dei poteri forti francesi.', member: 'MARCO' },
          { text: 'Non ho seguito, stavo studiando finanza.', member: 'DAVE' }
        ]
      },
      {
        id: 15,
        text: 'Il futuro della "Barcaccia"?',
        choices: [
          { text: 'Apriamo un canale YouTube e facciamo i milioni con le scommesse.', member: 'PIETRO' },
          { text: 'Ci vediamo a luglio e chiudiamo il gruppo se non facciamo serata.', member: 'DAVE' },
          { text: 'Diventeremo tutti manager famosi e ci ritroveremo in suite a NY.', member: 'MARCO' },
          { text: 'Faremo un programma radiofonico intitolato "Il salotto dei lesi".', member: 'FILO' },
          { text: 'Diventerà un marchio registrato nel 2020.', member: 'SIMO' }
        ]
      }
    ]
  },
  {
    id: 'mercatopratici',
    title: 'Calciomercato e Strategie',
    description: 'Il Teorema Paratici vs Marotta. Analisi profonda dei movimenti di mercato 2019/2020.',
    questions: [
      {
        id: 1,
        text: 'La Juventus acquista De Ligt a 75 milioni. Qual è il tuo primo commento?',
        choices: [
          { text: 'Demiral è molto più forte, lo sta aiutando a migliorare ma è ancora lontano dalla muraglia turca.', member: 'PIETRO' },
          { text: 'È fortissimo, non valutatelo per due amichevoli. È il pilastro per i prossimi 10 anni.', member: 'SIMO' },
          { text: 'Un investimento assurdo che distrugge il bilancio. Meglio prendere due giocatori da 60 con 1/3 dello stipendio.', member: 'DAVE' },
          { text: 'Speriamo arrivi in fretta così le azioni si impennano!', member: 'MARCO' },
          { text: 'Ha 20 anni, veniva dall\'Ajax dove era il più forte. Diamogli tempo.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Come giudichi la cessione di Moise Kean all\'Everton?',
        choices: [
          { text: 'Scelta saggia. Quello buono lo compri a 150 milioni, non paghi giovani 50 milioni che sono solo promesse.', member: 'SIMO' },
          { text: 'Un altro errore che rimpiangeremo. Agnelli diceva di prendere i giovani prima che esplodessero e poi li vendiamo?', member: 'PIETRO' },
          { text: 'Senza di lui non portiamo 22 giocatori in lista Champions. ParaticiOut.', member: 'DAVE' },
          { text: 'Plusvalenza di 40 milioni e possiamo pure ricomprarlo. Ci sta.', member: 'FILO' },
          { text: 'È un peccato, ci sarebbe servito.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'L\'Inter decide di mettere Icardi fuori progetto. Cosa ne pensi?',
        choices: [
          { text: 'Marotta porta un po\' di palle allo spogliatoio. Tanto lo vendi comunque, gli altri club sanno com\'è la situazione.', member: 'SIMO' },
          { text: 'Conte è un codardo. Dovrebbe dargli una chance se non riesce a venderlo.', member: 'PIETRO' },
          { text: 'Spogliatoio distrutto da quel ritardato e da quella mongola di sua moglie.', member: 'FILO' },
          { text: 'Sarebbe l\'affare della vita per l\'Inter venderlo bene ora.', member: 'MARCO' },
          { text: 'Lo prenderei alla Juve solo a Natale a prezzo di saldo, tipo 38 milioni.', member: 'DAVE' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi dello scambio Cancelo-Danilo tra Juve e City?',
        choices: [
          { text: 'Scandaloso. Regaliamo il terzino più forte del mondo perché abbiamo il bilancio a pezzi.', member: 'FILO' },
          { text: 'Danilo rischia di essere il nuovo titolare con De Sciglio, siamo alla frutta.', member: 'PIETRO' },
          { text: '28 milioni cash e 37 di valutazione per Danilo... era l\'unico modo per far valere Cancelo 65.', member: 'SIMO' },
          { text: 'Cancelo è stato sprecato da Allegri, ma Danilo non mi ispira sicurezza.', member: 'DAVE' },
          { text: 'Porcaputtana maiala, che colpo basso.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Chi è il miglior dirigente sportivo tra Marotta e Paratici?',
        choices: [
          { text: 'Marotta è Dio. Ha pulito l\'Inter e fa plusvalenze pure con i giovani della B.', member: 'SIMO' },
          { text: 'Paratici è un incompetente. Da quando è andato via Marotta la Juve fa solo cavolate.', member: 'PIETRO' },
          { text: 'Paratici sembrava un genio a inizio mercato, poi è diventato il cugino scemo di Marotta.', member: 'DAVE' },
          { text: 'Marotta ha fatto un dispetto alla Juve prima di andarsene rinnovando Khedira.', member: 'FILO' },
          { text: 'Mi fido della società, ma i conti sono un po\' così.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Come valuti l\'acquisto di Romelu Lukaku da parte dell\'Inter?',
        choices: [
          { text: 'È un okaka con le treccine, strapagato. Segna solo su rigore.', member: 'DAVE' },
          { text: 'È un armadio, ma non è un goleador da 25 gol a stagione. Fa solo salire la squadra.', member: 'SIMO' },
          { text: 'Una bestia di 25 anni. Se non è Guardiola, lui sposta gli equilibri.', member: 'PIETRO' },
          { text: 'Con Lautaro forma una coppia che ci darà fastidio per anni.', member: 'MARCO' },
          { text: 'Meglio Kean di Lukaku. Dare via un giovane per un 33enne (finto) è da lesi.', member: 'FILO' }
        ]
      },
      {
        id: 7,
        text: 'Emre Can fuori dalla lista Champions. Reazione?',
        choices: [
          { text: 'Vergognoso. Può fare 4 ruoli, ma lo hanno liquidato in un minuto. Juve merda.', member: 'PIETRO' },
          { text: 'Se proprio volevano tenerne altri, avrei fatto fuori Bentancur.', member: 'DAVE' },
          { text: 'Una troiata palese, spero non lo facciate sul serio.', member: 'SIMO' },
          { text: 'È il momento di venderlo e fare megaplusvalenza a gennaio.', member: 'FILO' },
          { text: 'Poveretto, mi dispiace.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Il ritorno di Buffon alla Juventus è...',
        choices: [
          { text: 'Una lesità. Serve solo per il record di Maldini e per vincere la Champions da fermo.', member: 'FILO' },
          { text: 'Utile per le liste, ma avrei preso Mirante che è più integro.', member: 'DAVE' },
          { text: 'Un grande ritorno, ma giocherà solo in Coppa Italia.', member: 'MARCO' },
          { text: 'Una mossa per non spendere e avere un secondo che accetta la panca.', member: 'PIETRO' },
          { text: 'Lo hanno preso per dargli un\'ultima chance di alzare la coppa.', member: 'SIMO' }
        ]
      },
      {
        id: 9,
        text: 'Cosa pensi dei giocatori che vanno a giocare in Cina (es. El Shaarawy)?',
        choices: [
          { text: 'Giocatori finiti. A 26 anni andare lì significa non avere più voglia di calcio vero.', member: 'PIETRO' },
          { text: 'Ci andrei anche io per 13 milioni netti a stagione.', member: 'FILO' },
          { text: 'In Cina hanno mollato il colpo, ora comprano solo scarti a prezzi onesti.', member: 'SIMO' },
          { text: 'Almeno lì non devono marcare difensori seri.', member: 'DAVE' },
          { text: 'Mi dispiace non vederlo più in Serie A.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Alexis Sanchez all\'Inter: colpaccio o pacco?',
        choices: [
          { text: 'Colpaccio se lo United paga metà stipendio. A zero è un regalo.', member: 'SIMO' },
          { text: 'Giocatore che ha già dato il meglio, rischia di fare la fine di Pjaca.', member: 'DAVE' },
          { text: 'Lo dico da mesi che arrivava gratis, sono un profeta.', member: 'PIETRO' },
          { text: 'Speriamo non si rompa subito.', member: 'MARCO' },
          { text: 'Un altro tassello per la squadra da battere.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Qual è la squadra regina delle "plusvalenze marce"?',
        choices: [
          { text: 'Il Genoa di Preziosi. Vendono pure l\'aria a 20 milioni.', member: 'DAVE' },
          { text: 'L\'Inter con i giovani della primavera prima del 30 giugno.', member: 'PIETRO' },
          { text: 'La Juventus con Sturaro e Romero. Una truffa legalizzata.', member: 'SIMO' },
          { text: 'La Roma ogni volta che deve pareggiare il bilancio.', member: 'FILO' },
          { text: 'Tutti le fanno, è il sistema che è così.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Adrien Rabiot alla Juve. Qual è il tuo verdetto dopo i primi mesi?',
        choices: [
          { text: 'Non ha mai giocato a calcio, è una truffa internazionale.', member: 'SIMO' },
          { text: 'Deve tagliarsi i capelli e svegliarsi. Inciampa sulla palla.', member: 'FILO' },
          { text: 'È fisicamente indietro, ma tecnicamente è di un altro livello.', member: 'DAVE' },
          { text: 'Se non gioca è perché Sarri non capisce il suo valore.', member: 'PIETRO' },
          { text: 'Speriamo che esploda l\'anno prossimo.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'Il rinnovo di Leonardo Bonucci a 7,5 milioni a 32 anni...',
        choices: [
          { text: 'Follia. Agnelli mentiva sul rapporto fatturato-stipendi.', member: 'DAVE' },
          { text: 'Giustissimo. È il pilastro della difesa, se De Ligt ne prende 12 lui ne merita almeno 7.', member: 'SIMO' },
          { text: 'Meglio venderlo ora che sta facendo bene e puntare su Demiral.', member: 'PIETRO' },
          { text: 'Se lo possono permettere, la leva finanziaria è sotto controllo.', member: 'MARCO' },
          { text: 'Uomo di merda, non doveva nemmeno tornare.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Come vedi il futuro di Gonzalo Higuain?',
        choices: [
          { text: 'Rimane e fa 20 gol. Rigenerato da Sarri, è un altro giocatore.', member: 'PIETRO' },
          { text: 'È un peso a bilancio. Dovevamo darlo alla Roma per Zaniolo.', member: 'DAVE' },
          { text: 'Finisce a giocare con i bambini in Qatar tra un anno.', member: 'SIMO' },
          { text: 'Lo hanno provato a vendere in tutti i modi ma lui ha resistito. Grande Pipa.', member: 'MARCO' },
          { text: 'Meriterebbe la fascia da capitano più di altri.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'Qual è il segreto del successo di Lotito alla Lazio?',
        choices: [
          { text: 'È un genio del male. Prende i giocatori a 0 e li rivende a 30 alla Fiorentina.', member: 'PIETRO' },
          { text: 'Tiene il giocatore più forte del mondo (Savic) e non lo vende neanche per 100 milioni.', member: 'FILO' },
          { text: 'Slalom tra debiti e stipendi pagati in ritardo.', member: 'DAVE' },
          { text: 'È il più grosso leso del triennio, non vende Milinkovic quando vale 90.', member: 'SIMO' },
          { text: 'Grande presidente, ha salvato la società.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'parlamento',
    title: 'Il Parlamento',
    description: 'Politica, "Sardine" e Ruspe. Il dibattito sociopolitico della Barcaccia.',
    questions: [
      {
        id: 1,
        text: 'Qual è la tua reazione alla caduta del governo Giallo-Verde?',
        choices: [
          { text: 'Salvini li ha scopati tutti. I 5 stelle non abbandoneranno mai la poltrona.', member: 'PIETRO' },
          { text: 'Un suicidio politico della Lega. Si ritroveranno in minoranza per anni.', member: 'DAVE' },
          { text: 'Sono tutti imbarazzanti, sembrano bambini alle elementari che litigano.', member: 'SIMO' },
          { text: 'Dobbiamo andarci noi al governo, sono tutti idioti.', member: 'FILO' },
          { text: 'Cosa è successo? Ero al mare.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Cosa pensi del voto sulla piattaforma Rousseau?',
        choices: [
          { text: 'Antidemocratico. 40.000 disoccupati decidono il destino di 60 milioni di persone.', member: 'PIETRO' },
          { text: 'Molto democratico. Chiedono il consenso a chi li ha votati su una scelta non esplicitata prima.', member: 'DAVE' },
          { text: 'Una farsa. Il movimento indica il Sì e poi aspetta la conferma.', member: 'SIMO' },
          { text: 'L\'ho inventato io Rousseau, mi hanno rubato l\'idea.', member: 'FILO' },
          { text: 'Non riesco a iscrivermi, mi dà errore.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Matteo Salvini pubblica la foto con il rosario o invoca la Vergine Maria. Tu...',
        choices: [
          { text: 'È un grande, lo fa per l\'elettorato che conta.', member: 'FILO' },
          { text: 'Invocare la religione per voti in più è da ritardati.', member: 'SIMO' },
          { text: 'Rappresenta la sudditanza italiana verso la Chiesa.', member: 'PIETRO' },
          { text: 'Lo fa per distogliere l\'attenzione dai 49 milioni e dai russi.', member: 'DAVE' },
          { text: 'Fa bene, un po\' di fede non guasta.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Come risolveresti il problema dei campi rom abusivi?',
        choices: [
          { text: 'Se non mandano i figli a scuola, glieli togliamo per sempre. Tra 60 anni il problema sparisce.', member: 'PIETRO' },
          { text: 'Ruspa subito e basta. Zingaraccia cit.', member: 'FILO' },
          { text: 'Bisogna concentrarsi sul fatto che sono abusivi, non sull\'etnia.', member: 'DAVE' },
          { text: 'Lo Stato deve integrare, non solo abbattere.', member: 'SIMO' },
          { text: 'Basta che non mi rubino in casa.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Cosa pensi del movimento delle "Sardine"?',
        choices: [
          { text: 'Gente che manifesta per moda senza avere un programma.', member: 'FILO' },
          { text: 'Salvini dice che se le mangia, ed è la comunicazione vincente.', member: 'PIETRO' },
          { text: 'Finalmente qualcuno che si oppone a questo populismo becero.', member: 'DAVE' },
          { text: 'Un altro fenomeno passeggero della politica italiana.', member: 'SIMO' },
          { text: 'Preferisco il tonno in scatola.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Il caso ILVA di Taranto: di chi è la colpa?',
        choices: [
          { text: 'Dell\'incompetenza dei 5 Stelle che hanno tolto lo scudo penale.', member: 'PIETRO' },
          { text: 'Delle multinazionali che vogliono ricattare lo Stato.', member: 'DAVE' },
          { text: 'Di un governo che non sa fare leggi stabili per le imprese.', member: 'SIMO' },
          { text: 'Mandiamo gli operai a fare i mosaici a Ravenna.', member: 'FILO' },
          { text: 'È una situazione complicata da anni.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'La tassa sulla plastica e sullo zucchero (Plastic & Sugar Tax)...',
        choices: [
          { text: 'Giustissima. Serve a ridurre l\'inquinamento e a salvare i ciccioni di merda.', member: 'PIETRO' },
          { text: 'Da deficienti. Colpisce le multinazionali che danno lavoro in Italia.', member: 'FILO' },
          { text: 'Una manovra per fare cassa mascherata da ecologismo.', member: 'SIMO' },
          { text: 'Meglio mettere la Coca Cola nel cartoncino.', member: 'DAVE' },
          { text: 'Spero non aumenti il prezzo della birra.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Matteo Renzi lascia il PD e fonda Italia Viva. Verdetto?',
        choices: [
          { text: 'Un eroe nazionale. Ha salvato l\'Italia dal voto a settembre con una frase.', member: 'PIETRO' },
          { text: 'Uno statista fenomenale, ma l\'italiano medio non lo capisce.', member: 'SIMO' },
          { text: 'Ha distrutto Salvini in aula. 2-0 palla al centro.', member: 'DAVE' },
          { text: 'Lo fa solo per mantenere la poltrona e il potere.', member: 'FILO' },
          { text: 'Mi piace il nome del nuovo partito.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Cosa pensi di Luigi Di Maio come Ministro degli Esteri?',
        choices: [
          { text: 'Imbarazzante. L\'unica lingua che parla è il napoletano.', member: 'DAVE' },
          { text: 'Un miracolato che non sa nemmeno dove sta Urbino.', member: 'PIETRO' },
          { text: 'Rappresenta l\'incompetenza al potere.', member: 'SIMO' },
          { text: 'È il mio idolo, voglio diventare come lui.', member: 'FILO' },
          { text: 'Almeno viaggia gratis.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'I sindacati in Italia...',
        choices: [
          { text: 'Hanno rovinato il paese. Inutili.', member: 'MARCO' },
          { text: 'Dovrebbero difendere i giovani e non solo i pensionati.', member: 'PIETRO' },
          { text: 'Servono a tutelare chi lavora 12 ore al giorno come me.', member: 'SIMO' },
          { text: 'Sono parte integrante dei poteri forti.', member: 'DAVE' },
          { text: 'Ne fondiamo uno noi della Barcaccia.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Qual è la tua visione dell\'Italia nel 2050?',
        choices: [
          { text: 'Un paese di vecchi pensionati mantenuti da tre neri che corrono.', member: 'PIETRO' },
          { text: 'Fallita miseramente se non tagliamo le spese inutili.', member: 'FILO' },
          { text: 'Un hub tecnologico con lo smart working ovunque.', member: 'DAVE' },
          { text: 'La 19esima economia del mondo, ma stiamo meglio della Cina.', member: 'SIMO' },
          { text: 'Spero di essere ancora vivo.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Come valuti l\'operato del Presidente Mattarella?',
        choices: [
          { text: 'A casa tutti, anche lui. Non serve a nulla.', member: 'FILO' },
          { text: 'L\'unico che mantiene un minimo di equilibrio in questo manicomio.', member: 'SIMO' },
          { text: 'Dovrebbe essere sostituito da un dittatore illuminato.', member: 'PIETRO' },
          { text: 'Fa quello che gli dicono i poteri forti.', member: 'DAVE' },
          { text: 'Un nonno saggio.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'Il debito pubblico italiano è un problema?',
        choices: [
          { text: 'No, perché lo Stato non può fallire. Chiedi a Filo.', member: 'SIMO' },
          { text: 'Sì, è una spirale negativa che ci porterà al default.', member: 'PIETRO' },
          { text: 'Basta stampare più moneta o fare surplus.', member: 'DAVE' },
          { text: 'Bisogna chiedere i soldi a Jeff Bezos.', member: 'MARCO' },
          { text: 'Dobbiamo smettere di pagare gli interessi alle banche.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Greta Thunberg: icona o moda?',
        choices: [
          { text: 'Una moda degli ultimi tempi per ragazzini che non vogliono studiare.', member: 'FILO' },
          { text: 'Brava lei, manda un messaggio che la politica deve ascoltare per forza.', member: 'PIETRO' },
          { text: 'Utile per la consapevolezza, ma le soluzioni devono essere tecniche.', member: 'SIMO' },
          { text: 'Creata a tavolino per vendere auto elettriche.', member: 'DAVE' },
          { text: 'Chi è?', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Qual è il tuo slogan elettorale?',
        choices: [
          { text: 'Make Itaglia Great Aghein.', member: 'PIETRO' },
          { text: 'Più Mosaici per Tutti.', member: 'FILO' },
          { text: 'Meno tasse, più Sensi titolare.', member: 'SIMO' },
          { text: 'Honesta e Reddito di Cittadinanza.', member: 'DAVE' },
          { text: '3 euro a tutti.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'startupmosaici',
    title: 'Start-up e Sogni di Gloria',
    description: 'Mosaici e App Pazzesche. L\'imprenditorialità secondo la Barcaccia.',
    questions: [
      {
        id: 1,
        text: 'Filippo propone un business sui mosaici. Qual è la tua obiezione?',
        choices: [
          { text: 'Cosa sono i mosaici? Sono i vasi?', member: 'PIETRO' },
          { text: 'È una nicchia troppo ristretta, non si ripaga l\'investimento.', member: 'SIMO' },
          { text: 'Serve un\'azienda in outsourcing che li produca in serie.', member: 'DAVE' },
          { text: 'Io gestirò il business plan e in tre anni saremo falliti.', member: 'MARCO' },
          { text: 'Faremo una gioielleria del mosaico con ingresso pataccone.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Qual è l\'idea per rivoluzionare il mondo dei social network?',
        choices: [
          { text: 'Facebook per giovani, con una grafica accattivante.', member: 'PIETRO' },
          { text: 'Un\'app che ti paga per guardare la pubblicità mentre scrivi.', member: 'FILO' },
          { text: 'Un social basato interamente sulla realtà virtuale.', member: 'MARCO' },
          { text: 'Un aggregatore di notizie certificate senza fake news.', member: 'SIMO' },
          { text: 'Un\'app per sincronizzare Netflix tra amici lontani.', member: 'DAVE' }
        ]
      },
      {
        id: 3,
        text: 'Come definiresti il "Marketing"?',
        choices: [
          { text: 'Lo studio della fattibilità per la realizzazione di un progetto.', member: 'PIETRO' },
          { text: 'È solo fuffa venduta bene da gente in camicia.', member: 'FILO' },
          { text: 'Semplice logica applicata alle vendite.', member: 'SIMO' },
          { text: 'Convincere la gente che ha bisogno di un lavaggio a 50 gradi.', member: 'DAVE' },
          { text: 'Qualcosa che fa guadagnare un sacco di soldi agli altri.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'L\'idea del distributore automatico di crema solare in spiaggia...',
        choices: [
          { text: 'Geniale, ma deve essere gratis e spruzzare tutto il corpo tranne la faccia.', member: 'DAVE' },
          { text: 'Impraticabile. Le creme a spruzzo hanno una protezione bassissima.', member: 'SIMO' },
          { text: 'Un\'idea nata per vendere telefoni nuovi a chi li perde in mare.', member: 'PIETRO' },
          { text: 'Serve un finanziatore della Silicon Valley.', member: 'FILO' },
          { text: 'La userei se costasse 1 euro.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Smart Working: cosa ne pensi?',
        choices: [
          { text: 'Una cazzata da Guzzon o Montemagno.', member: 'DAVE' },
          { text: 'Il futuro. 80 dipendenti che lavorano 1 ora al giorno da casa.', member: 'FILO' },
          { text: 'Un benefit che la Fater dà solo ai manager.', member: 'SIMO' },
          { text: 'Avrà l\'impatto economico di un floppy disk.', member: 'PIETRO' },
          { text: 'L\'unico modo per dormire fino a mezzogiorno.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Vuoi aprire un\'azienda di consulenza. Qual è il team perfetto?',
        choices: [
          { text: 'Dave statistica, Simo marketing, Io management, Marco... mascotte.', member: 'FILO' },
          { text: 'Serve assolutamente un informatico per sistemare i tablet.', member: 'SIMO' },
          { text: 'Io faccio il socio al 50% perché le idee sono mie.', member: 'PIETRO' },
          { text: 'Io faccio il tecnico che non viene alle riunioni.', member: 'DAVE' },
          { text: 'Firmo tutto per il 15% delle quote.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa faresti per risollevare le sorti del Milan?',
        choices: [
          { text: 'Metto i nomi della Juve su FM2020 e compro tutti a zero.', member: 'PIETRO' },
          { text: 'Caccio Maldini e Boban e metto la Barcaccia in dirigenza.', member: 'FILO' },
          { text: 'Compro Ibrahimovic a 38 anni per 6 milioni.', member: 'SIMO' },
          { text: 'Cedo Suso anche gratis per poter cambiare modulo.', member: 'DAVE' },
          { text: 'Chiamo Berlusconi e gli chiedo di tornare.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Qual è il prodotto di design definitivo?',
        choices: [
          { text: 'Un tronco d\'albero con incastonato un tablet.', member: 'FILO' },
          { text: 'Una sciarpa della Juve con scritto "Forza Palace".', member: 'PIETRO' },
          { text: 'Una lavatrice che lava a 50 gradi fissi.', member: 'DAVE' },
          { text: 'Un orologio da 3 euro che sembra un Rolex.', member: 'MARCO' },
          { text: 'Un packaging di Ace sgrassatore super tecnologico.', member: 'SIMO' }
        ]
      },
      {
        id: 9,
        text: 'Come trovi il lavoro dei tuoi sogni?',
        choices: [
          { text: 'Vado al Career Day dell\'Unibo con Marco e Pietro.', member: 'SIMO' },
          { text: 'Faccio il dj su una barca per i turisti a Marina.', member: 'PIETRO' },
          { text: 'Mi faccio assumere come Chief Football Officer.', member: 'DAVE' },
          { text: 'Studio fisica quantistica e poi vado in politica.', member: 'FILO' },
          { text: 'Aspetto che qualcuno mi offra 3 euro.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'La tua opinione sugli "Esports"...',
        choices: [
          { text: 'Il futuro. Guardo la F1 Esports e tifo Tonizza.', member: 'PIETRO' },
          { text: 'Una roba per nerd, preferirei guardare il calcio femminile.', member: 'DAVE' },
          { text: 'Utili solo se ci puoi scommettere sopra.', member: 'FILO' },
          { text: 'Una perdita di tempo totale.', member: 'SIMO' },
          { text: 'Figo se posso giocare io.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Qual è la tua strategia per vincere al Fantakalcio?',
        choices: [
          { text: 'È tutta fortuna. Se prendi i forti si rompono.', member: 'SIMO' },
          { text: 'Analisi dei dati e zero sentimenti.', member: 'PIETRO' },
          { text: 'Mettere i giocatori in panchina così segnano per dispetto.', member: 'FILO' },
          { text: 'Scommettere sulle promesse del Lecce.', member: 'DAVE' },
          { text: 'Pregare Medjugorje.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Come si ottengono libri gratis legalmente?',
        choices: [
          { text: 'Usando il Wi-Fi dell\'Unibo che sblocca i siti russi.', member: 'PIETRO' },
          { text: 'Rubandoli senza farsi beccare.', member: 'MARCO' },
          { text: 'Aspettando che Dave ci dia il link definitivo.', member: 'FILO' },
          { text: 'Andando in biblioteca come le persone normali.', member: 'SIMO' },
          { text: 'Non leggo libri, guardo tutorial su YouTube.', member: 'DAVE' }
        ]
      },
      {
        id: 13,
        text: 'La Transitiva Assicurazione serve a...',
        choices: [
          { text: 'Proteggerti dalle truffe degli zingari online.', member: 'FILO' },
          { text: 'Creare un mercato che non esiste e fatturare miliardi.', member: 'PIETRO' },
          { text: 'Assicurare le transazioni di droga su internet.', member: 'DAVE' },
          { text: 'Un\'altra idea fuffa che non prenderà mai piede.', member: 'SIMO' },
          { text: 'Mi serve per la macchina.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'Se avessi un budget illimitato, quale azienda compreresti?',
        choices: [
          { text: 'Il Ravenna Calcio per portarlo in Champions.', member: 'MARCO' },
          { text: 'La Fater, per licenziare il reparto IT.', member: 'DAVE' },
          { text: 'Il Barcellona, per fare il tridente Messi-Ronaldo-Neymar.', member: 'PIETRO' },
          { text: 'Amazon, per far correre i dipendenti più veloci.', member: 'FILO' },
          { text: 'Sky, per chiudere tutti i siti di streaming.', member: 'SIMO' }
        ]
      },
      {
        id: 15,
        text: 'Qual è la tua "Soft Skill" principale?',
        choices: [
          { text: 'Arrampicarsi sugli specchi quando ho torto.', member: 'SIMO' },
          { text: 'Creare polemica dal nulla in stile barese.', member: 'FILO' },
          { text: 'Trovare link di Mamahd che non crashano.', member: 'PIETRO' },
          { text: 'Fare lo scemo per non andare in guerra.', member: 'MARCO' },
          { text: 'Analizzare i flussi di nero dei parrucchieri.', member: 'DAVE' }
        ]
      }
    ]
  },
  {
    id: 'lesitascienza',
    title: 'La Scienza della Lesità',
    description: 'Gerarchie e Meme. Studio sistematico della ritardatezza e dei trend digitali.',
    questions: [
      {
        id: 1,
        text: 'Chi merita il premio "Gigaleso del Mese" di novembre?',
        choices: [
          { text: 'Marco, perché è andato al piano sbagliato per la laurea.', member: 'PIETRO' },
          { text: 'Dave, perché ha cambiato numero di telefono 4 volte.', member: 'SIMO' },
          { text: 'Filo, per la polemica su Suso-Salvini.', member: 'DAVE' },
          { text: 'Simo, per i suoi audio da 9 minuti in cui non dice nulla.', member: 'FILO' },
          { text: 'Io, per diritto di nascita.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Cos\'è "1 Marco" nel sistema internazionale di misura?',
        choices: [
          { text: 'L\'unità di misura della sfiga al fanta.', member: 'FILO' },
          { text: 'Il valore massimo di lesità raggiungibile da un essere umano.', member: 'SIMO' },
          { text: 'Il prezzo di un orologio tarocco di Pietro.', member: 'MARCO' },
          { text: 'La probabilità che la Juve perda contro il Lecce.', member: 'DAVE' },
          { text: 'Un parametro statistico per le plusvalenze marce.', member: 'PIETRO' }
        ]
      },
      {
        id: 3,
        text: 'Cosa succede se la Barcaccia si riunisce tutta insieme?',
        choices: [
          { text: 'Non ci facciamo nemmeno una foto perché siamo troppo lesi.', member: 'DAVE' },
          { text: 'Sbocchiamo 5 volte a testa e torniamo a casa distrutti.', member: 'MARCO' },
          { text: 'Fondiamo un partito politico e un\'azienda di mosaici.', member: 'FILO' },
          { text: 'Pietro ci prova con tutte le simmenthal presenti.', member: 'SIMO' },
          { text: 'Facciamo una live su Twitch che non guarda nessuno.', member: 'PIETRO' }
        ]
      },
      {
        id: 4,
        text: 'Come reagiresti se venissi tagliato dalla strada da un camion?',
        choices: [
          { text: 'Gli urlo "Imbecille!" e poi faccio un audio di 10 minuti sul gruppo.', member: 'SIMO' },
          { text: 'Gli mando la ruspa a casa.', member: 'FILO' },
          { text: 'Controllo i dati del tachigrafo per vedere se andava piano.', member: 'PIETRO' },
          { text: 'Scatto una foto per il mio account di infortuni stradali.', member: 'DAVE' },
          { text: 'Mi giro e finisco nel fosso.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Il "Dygualdo" è...',
        choices: [
          { text: 'Un termine orribile inventato dai giornalisti lesi.', member: 'SIMO' },
          { text: 'La salvezza della Juventus.', member: 'MARCO' },
          { text: 'Un modulo che prevede Ronaldo ala e Dybala trequartista.', member: 'FILO' },
          { text: 'Un esperimento sociale fallito di Sarri.', member: 'DAVE' },
          { text: 'Qualcosa che su FM2020 funziona benissimo.', member: 'PIETRO' }
        ]
      },
      {
        id: 6,
        text: 'Chi è il membro più "influencer" del gruppo?',
        choices: [
          { text: 'Pietro, perché ha convertito un fan su Twitter.', member: 'DAVE' },
          { text: 'Dave, perché ha fatto 11 visualizzazioni su un tweet a caso.', member: 'FILO' },
          { text: 'Simo, perché ci mostra i prodotti Ace in anteprima.', member: 'PIETRO' },
          { text: 'Marco, perché lo pagano 3 euro per ogni post.', member: 'SIMO' },
          { text: 'Nessuno, siamo tutti dei falliti digitali.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'La "Sfiga di Simo" al Fantacalcio è causata da:',
        choices: [
          { text: 'Il fatto che compra tutti i giocatori che piacciono a me.', member: 'PIETRO' },
          { text: 'È un complotto della Gazzetta che dà voti a caso.', member: 'SIMO' },
          { text: 'Karma per aver gufato la Juve contro l\'Atalanta.', member: 'MARCO' },
          { text: 'Incapacità tecnica mascherata da fatalismo.', member: 'FILO' },
          { text: 'La svalutazione fisiologica di Ronaldo.', member: 'DAVE' }
        ]
      },
      {
        id: 8,
        text: 'Come si definisce un "normodotato" nella Barcaccia?',
        choices: [
          { text: 'Uno che non crede che l\'Atalanta sia da 9.5 in classifica.', member: 'PIETRO' },
          { text: 'Uno che non vota 5 stelle.', member: 'FILO' },
          { text: 'Uno che sa usare Excel meglio di un informatico della Fater.', member: 'SIMO' },
          { text: 'Uno che ha già finito tutti gli esami.', member: 'MARCO' },
          { text: 'Qualcuno che non fa parte di questo gruppo.', member: 'DAVE' }
        ]
      },
      {
        id: 9,
        text: 'Qual è il commento tipico di Marco durante una discussione?',
        choices: [
          { text: '"Non so, non ho seguito, ero al mare".', member: 'PIETRO' },
          { text: '"Ahahahahah spettaccolo".', member: 'FILO' },
          { text: '"Porcaputtana maiala".', member: 'DAVE' },
          { text: '"🤣".', member: 'SIMO' },
          { text: 'Tutte le precedenti.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Cosa pensi di Stramaccioni in Iran?',
        choices: [
          { text: 'Un martire del calcio. Ha bruciato la carriera per amore.', member: 'PIETRO' },
          { text: 'È stato fatto fuori dai poteri forti di Teheran.', member: 'FILO' },
          { text: 'Coglione lui ad essere andato in un posto radioattivo.', member: 'SIMO' },
          { text: 'Non parla bene inglese e ha capito fischi per fiaschi.', member: 'DAVE' },
          { text: 'Diventerà il nuovo re di Persia.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Se ti dicono "Zingaraccia", a chi pensi?',
        choices: [
          { text: 'A una che mi ha tagliato la strada in rotonda.', member: 'FILO' },
          { text: 'Al post di Salvini che ha fatto 100k like.', member: 'PIETRO' },
          { text: 'A una vittima del maschilismo vegetale degli alberi.', member: 'DAVE' },
          { text: 'A un\'offesa goliardica da capo ultrà del Verona.', member: 'SIMO' },
          { text: 'A qualcuno che non paga il biglietto del treno.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Qual è l\'hobby preferito di Pietro?',
        choices: [
          { text: 'Comprare maglie tarocche su siti cinesi.', member: 'SIMO' },
          { text: 'Shortare sulla Juve e perdere soldi.', member: 'FILO' },
          { text: 'Cercare video di gente che ride in Parlamento.', member: 'DAVE' },
          { text: 'Studiare 12 ore al giorno e prendere 30L in Econometria.', member: 'MARCO' },
          { text: 'Fare il dittatore su Democracy 3.', member: 'PIETRO' }
        ]
      },
      {
        id: 13,
        text: 'La Barcaccia è...',
        choices: [
          { text: 'Una testata giornalistica più affidabile della Gazzetta.', member: 'FILO' },
          { text: 'Un gruppo di 5 individui che creano mistero.', member: 'SIMO' },
          { text: 'Una start-up destinata a fallire in 3 giorni.', member: 'MARCO' },
          { text: 'Il posto dove tutto è iniziato.', member: 'PIETRO' },
          { text: 'Un cantiere aperto 24 ore su 24.', member: 'DAVE' }
        ]
      },
      {
        id: 14,
        text: 'Perché Dave non viene mai alle riunioni?',
        choices: [
          { text: 'Perché è un pigro che non vuole accendere il PC.', member: 'PIETRO' },
          { text: 'Perché deve studiare 30 crediti che non gli hanno riconosciuto.', member: 'SIMO' },
          { text: 'Perché ci ha silenziati tutti da mesi.', member: 'FILO' },
          { text: 'Perché gli hanno rovinato i capelli al parrucchiere.', member: 'MARCO' },
          { text: 'Perché Discord è un programma spazzatura.', member: 'DAVE' }
        ]
      },
      {
        id: 15,
        text: 'Chi vincerà la sfida finale di lesità?',
        choices: [
          { text: 'La vince chi non esprime mai un parere.', member: 'PIETRO' },
          { text: 'Quello che ha più sfiga al fanta.', member: 'SIMO' },
          { text: 'Il capitano dei lesi.', member: 'MARCO' },
          { text: 'Io, perché merito un premio per la pazienza.', member: 'DAVE' },
          { text: 'Nessuno, siamo tutti sullo stesso livello.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'lifetech',
    title: 'Life & Tech',
    description: 'Streaming, X-Factor e Lavastoviglie. La tecnologia e la vita quotidiana nel triennio.',
    questions: [
      {
        id: 1,
        text: 'Qual è il miglior sito per vedere le partite gratis?',
        choices: [
          { text: 'Mamahd, ma devi saper cliccare sui link giusti in basso.', member: 'SIMO' },
          { text: 'Rojadirecta, un classico che non tradisce mai.', member: 'MARCO' },
          { text: 'Oomovie, il futuro dello streaming in 4k.', member: 'FILO' },
          { text: 'Nessuno, fanno tutti schifo e si bloccano sul più bello.', member: 'DAVE' },
          { text: 'Quello che ti scarica i virus russi sul computer.', member: 'PIETRO' }
        ]
      },
      {
        id: 2,
        text: 'Cosa pensi di "Carote" a X-Factor?',
        choices: [
          { text: 'Un progetto costruito a tavolino per fare 12 milioni di views.', member: 'PIETRO' },
          { text: 'Una roba che non ha senso, dovevano buttarlo fuori subito.', member: 'SIMO' },
          { text: 'La seconda canzone del funerale è quasi decente.', member: 'MARCO' },
          { text: 'Un personaggio che piace solo perché è strano.', member: 'DAVE' },
          { text: 'Spazzatura musicale al pari dei Maneskin.', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'Hai scoperto che nella lavastoviglie ci va il sale. Cosa fai?',
        choices: [
          { text: 'Lo dico a tutti come se fossi l\'unico a saperlo.', member: 'SIMO' },
          { text: 'Penso che sia un complotto della Calgon.', member: 'DAVE' },
          { text: 'Non lo sapevo, ma mia mamma sì perché la paga Soros.', member: 'PIETRO' },
          { text: 'Studio la composizione chimica del sale per 4 ore.', member: 'FILO' },
          { text: 'Chiedo a un napoletano dove lo vendono a meno.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Come si combatte il razzismo negli stadi?',
        choices: [
          { text: 'Mettendo delle foto di scimmie sulla prima pagina dei giornali.', member: 'SIMO' },
          { text: 'Ignorando i quattro coglioni che fanno i versi.', member: 'DAVE' },
          { text: 'Dando il daspo di 5 anni e chiudendo le curve.', member: 'PIETRO' },
          { text: 'Facendo giocare solo i bianchi così non si lamentano.', member: 'FILO' },
          { text: 'È una battaglia persa in Italia.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Cosa ne pensi del calcio femminile?',
        choices: [
          { text: 'Dovrebbero giocare in perizoma per aumentare l\'audience.', member: 'PIETRO' },
          { text: 'È un massacro, c\'è troppa differenza fisica con gli uomini.', member: 'MARCO' },
          { text: 'Una roba da amiche del liceo, troppo lento.', member: 'DAVE' },
          { text: 'Bisogna apprezzare l\'impegno, sono più brave di me.', member: 'SIMO' },
          { text: 'Un\'altra moda spinta dai buonisti.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Il "Mondo Virtuale" proposto da Marco...',
        choices: [
          { text: 'Una figata dove puoi essere figo anche se sei un frustrato.', member: 'MARCO' },
          { text: 'Un futuro distopico alla Black Mirror dove tutti scopano.', member: 'PIETRO' },
          { text: 'Un\'idea che Whatsapp ruberà in 10 minuti.', member: 'FILO' },
          { text: 'Inutile, preferisco la vita reale a Pescara.', member: 'SIMO' },
          { text: 'Servirebbe solo a vendere pubblicità mirata.', member: 'DAVE' }
        ]
      },
      {
        id: 7,
        text: 'Come si scaricano i libri universitari gratis?',
        choices: [
          { text: 'Usando siti russi che funzionano solo col Wi-Fi dell\'Uni.', member: 'PIETRO' },
          { text: 'Chiedendo a Dave che ha il database segreto.', member: 'FILO' },
          { text: 'Non li scarico, li compro originali all\'80%.', member: 'SIMO' },
          { text: 'Li cerco su Emule perché sono un boomer.', member: 'MARCO' },
          { text: 'Non servono, basta studiare le slide marce.', member: 'DAVE' }
        ]
      },
      {
        id: 8,
        text: 'La Formula 1 oggi è...',
        choices: [
          { text: 'Vettel che fa testacoda a caso e Leclerc che vince tutto.', member: 'SIMO' },
          { text: 'Una noia mortale, meglio gli Esports.', member: 'PIETRO' },
          { text: 'Hamilton che vince solo perché ha la macchina migliore.', member: 'MARCO' },
          { text: 'Binotto che deve dimettersi subito.', member: 'FILO' },
          { text: 'Una gara di strategie sbagliate della Ferrari.', member: 'DAVE' }
        ]
      },
      {
        id: 9,
        text: 'Cosa pensi di Twitch?',
        choices: [
          { text: 'Il posto perfetto per il nostro podcast intellettuale.', member: 'FILO' },
          { text: 'Una piattaforma dove sembriamo dei ritardati.', member: 'PIETRO' },
          { text: 'Troppo complicato collegarsi in 5.', member: 'DAVE' },
          { text: 'Utile per far abbonare gli over 30 con Amazon Prime.', member: 'SIMO' },
          { text: 'Non so cosa sia, devo fare spazio sul telefono.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Il film "Joker"...',
        choices: [
          { text: 'Lo usiamo come metafora per le plusvalenze dell\'Inter.', member: 'SIMO' },
          { text: 'Un capolavoro, ma io preferisco i video di YouTube.', member: 'DAVE' },
          { text: 'Ci vorrebbe lui al governo per sistemare i pensionati.', member: 'PIETRO' },
          { text: 'Non l\'ho visto, stavo preparando la laurea.', member: 'FILO' },
          { text: 'Mi hanno detto che fa ridere.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Qual è il miglior modo per viaggiare in treno?',
        choices: [
          { text: 'Non pagare il biglietto e sedersi nei posti vuoti sul Frecciarossa.', member: 'SIMO' },
          { text: 'Prenotare e uscire prima del pagamento per avere il buono da 5€.', member: 'DAVE' },
          { text: 'In macchina con tre lesi dividendo le spese.', member: 'PIETRO' },
          { text: 'Col treno delle 17 così arrivo a Urbino per l\'aperitivo.', member: 'MARCO' },
          { text: 'In prima classe per non stare in mezzo ai negri.', member: 'FILO' }
        ]
      },
      {
        id: 12,
        text: 'Cosa pensi degli occhiali per la luce blu?',
        choices: [
          { text: 'Li voglio comprare per smartphone, cambieranno il mondo.', member: 'FILO' },
          { text: 'Esistono già, li usano i piccoli artigiani.', member: 'PIETRO' },
          { text: 'Una spesa inutile se non hai problemi di vista.', member: 'SIMO' },
          { text: 'Servono a chi lavora 12 ore al PC come un sistemista.', member: 'DAVE' },
          { text: 'Li prendo se hanno una montatura figa.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'La tua opinione sul Wi-Fi di Bigiavi:',
        choices: [
          { text: 'Fondamentale per scaricare libri proibiti.', member: 'PIETRO' },
          { text: 'Fa schifo, non carica nemmeno un\'azione della Juve.', member: 'FILO' },
          { text: 'Meglio di quello che ho in ufficio.', member: 'SIMO' },
          { text: 'Non ci vado perché non voglio portarmi il PC dietro.', member: 'DAVE' },
          { text: 'Serve per giocare a One Piece a lezione.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'Come giudichi la tecnologia VAR?',
        choices: [
          { text: 'Usata dai poteri forti per non far vincere il Napoli.', member: 'PIETRO' },
          { text: 'Ridicola se non la mettono anche in Europa League.', member: 'MARCO' },
          { text: 'Toglie l\'emozione del gol, ma almeno è più giusto.', member: 'SIMO' },
          { text: 'Infallibile, a meno che non ci sia di mezzo De Ligt.', member: 'DAVE' },
          { text: 'Una lesità che rallenta solo il gioco.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'Qual è il gadget tecnologico dell\'anno?',
        choices: [
          { text: 'L\'orologio da 3 euro di Pietro.', member: 'MARCO' },
          { text: 'Il Bimby che cucina da solo mentre sei in live.', member: 'PIETRO' },
          { text: 'Un nuovo tablet incastonato nel legno.', member: 'FILO' },
          { text: 'Il gioco per smartphone con la faccia di Simo.', member: 'SIMO' },
          { text: 'Un paio di cuffie che non filtrano il rumore del parrucchiere.', member: 'DAVE' }
        ]
      }
    ]
  },
  {
    id: 'calciofantacalcio',
    title: 'Calcio e Fantacalcio',
    description: 'Sangue, Sciamani e Plusvalenze. Il sacro rito del Fantacalcio e l\'odio per le pagelle.',
    questions: [
      {
        id: 1,
        text: 'Cosa ne pensi di un pareggio 0-0 della Juventus in casa?',
        choices: [
          { text: 'Spalletti out, pelato di merda. Non c\'è un\'identità.', member: 'DAVE' },
          { text: 'Colpa di quella merda lenta di Locatelli. Se non lo panchini non vinci.', member: 'FILO' },
          { text: 'È la classica partita sporca, vinceremo 1-0 con gol di Yildiz al 92esimo.', member: 'SIMO' },
          { text: 'La Juve è finita, rassegnatevi. Farà fatica ad arrivare quarta.', member: 'PIETRO' },
          { text: 'Stupidi, idioti, pezzi di merda! Mi hanno mandato affanculo il clean sheet.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Come giudichi l\'acquisto di Lois Openda a 45 milioni?',
        choices: [
          { text: 'Un ambulante che segna solo se inciampa sul pallone.', member: 'DAVE' },
          { text: 'Rapporto qualità-prezzo imbarazzante, ma alla Ralph non sanno cosa sia il mercato.', member: 'SIMO' },
          { text: 'Ancora rivendibile a 30 milioni in Premier, voi non capite il contesto.', member: 'PIETRO' },
          { text: 'Avete buttato 200 milioni per degli scarti. Meglio Lewandowski a zero.', member: 'FILO' },
          { text: 'Un altro malus assicurato per la Ralph. Godo.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Qual è la tua reazione se un tuo giocatore prende 5.5 dopo un assist?',
        choices: [
          { text: 'Denuncio fantacalcio.it. Sono dei malati mentali, parenti di Pietro.', member: 'SIMO' },
          { text: 'Tutto regolare, in questo gioco se non subisco 3 gol a partita non sono io.', member: 'MARCO' },
          { text: 'È colpa della mafia Inter che pompa i voti a Bastoni e Dimarco.', member: 'FILO' },
          { text: 'Pagelle fatte da idioti che non guardano le partite.', member: 'DAVE' },
          { text: 'Ringrazio gli sciamani per aver evitato il 4.', member: 'PIETRO' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi di Cristian Shpendi (Pio Esposito)?',
        choices: [
          { text: 'Un crack, una partecipazione al gol ogni 100 minuti. Chiedete scusa.', member: 'SIMO' },
          { text: 'Deve raparsi a zero per essere temibile.', member: 'PIETRO' },
          { text: 'In under 21 deve andare! Non tiene una palla.', member: 'DAVE' },
          { text: 'Se continua così tra 2 anni vale 80 milioni.', member: 'MARCO' },
          { text: 'Segna solo gol facili, è un giocatorino da serie B.', member: 'FILO' }
        ]
      },
      {
        id: 5,
        text: 'Se l\'Inter vince il derby con gol di un difensore?',
        choices: [
          { text: 'Mafia Inter, campionato falsato da simulazioni.', member: 'MARCO' },
          { text: 'Hortomuso! Allegri ti ha arato di nuovo.', member: 'SIMO' },
          { text: 'Dimarco è buggato, segna come una punta.', member: 'PIETRO' },
          { text: 'Tirate via gli interisti dalla nazionale, sono impresentabili.', member: 'DAVE' },
          { text: 'Sculo Inter, solo colpi di fortuna e arbitri venduti.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Proposta di scambio: Paz per Lookman e Politano.',
        choices: [
          { text: 'La Palace ci pensa, ma solo se aggiungete crediti.', member: 'FILO' },
          { text: 'Paz è morto, fantamedia sotto Baturina. Scambiare subito.', member: 'PIETRO' },
          { text: 'Lookman vale 20 milioni, l\'Atalanta ha fatto un affare a venderlo.', member: 'MARCO' },
          { text: 'Accetto solo se mi dai anche un vassoio d\'argento.', member: 'SIMO' },
          { text: 'Lookman è un ex giocatore, tra 2 anni non lo ricorderà nessuno.', member: 'DAVE' }
        ]
      },
      {
        id: 7,
        text: 'Opinione su Chivu all\'Inter.',
        choices: [
          { text: 'Uno scappato di casa, vince solo perché la squadra è troppo forte.', member: 'SIMO' },
          { text: 'Meglio di Inzaghi, almeno non fa turnover folli.', member: 'PIETRO' },
          { text: 'Un idiota graziato dalla fortuna.', member: 'FILO' },
          { text: 'Deve chiedere scusa per come ha gestito il caso Bastoni.', member: 'DAVE' },
          { text: 'Esonero immediato, non ha vinto un big match.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Cosa serve alla Juventus nel mercato di riparazione?',
        choices: [
          { text: 'Mandare via Locatelli a pedate nel culo.', member: 'FILO' },
          { text: 'Un portiere normale, Di Gregorio è un frigorifero.', member: 'DAVE' },
          { text: 'Un centrale nero, alto e con i capelli alla Puyol.', member: 'PIETRO' },
          { text: 'Ricomprare tutti i giovani venduti a 120 milioni che ora ne valgono 270.', member: 'SIMO' },
          { text: 'Svincolare Vlahovic e pregare.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Come finisce la corsa Champions quest\'anno?',
        choices: [
          { text: 'La Juve arriva settima e Spalletti viene esonerato.', member: 'DAVE' },
          { text: 'Il Como ci va in ciabatte, Fabregas è un genio.', member: 'PIETRO' },
          { text: 'Il Milan di Allegri la vince camminando.', member: 'SIMO' },
          { text: 'Noi arriviamo quarti per miracolo con i gol di Mckennie.', member: 'FILO' },
          { text: 'Mi basta che la Fiorentina retroceda in B.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'La simulazione di Bastoni nel derby.',
        choices: [
          { text: 'È il Perin madridista, un viscido schifoso.', member: 'DAVE' },
          { text: 'Ha fatto bene, bisogna essere furbi per vincere.', member: 'SIMO' },
          { text: 'Radiato dal calcio! Non deve mai più vestire l\'azzurro.', member: 'MARCO' },
          { text: 'Ha caricato i bosniaci, per colpa sua siamo fuori dai mondiali.', member: 'PIETRO' },
          { text: 'Bastoni è un bastardo, lo dico da mesi.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Il rendimento di Nico Paz.',
        choices: [
          { text: 'Fenomeno, salta l\'uomo e crea superiorità.', member: 'DAVE' },
          { text: 'Bidone, sbaglia i rigori e si deprime.', member: 'PIETRO' },
          { text: 'Lo volevo prendere ma Simo mi ha stoppato.', member: 'FILO' },
          { text: 'Capitano nel mio Fantagazza, mi farà vincere tutto.', member: 'SIMO' },
          { text: 'Un altro che si scioglie al sole.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Chi è il colpevole dei fallimenti della Nazionale?',
        choices: [
          { text: 'Gravina e i suoi stage inutili.', member: 'PIETRO' },
          { text: 'I piani alti, se non si dimettono è una vergogna.', member: 'FILO' },
          { text: 'La mancanza di qualità, servivano Zaniolo e Berna.', member: 'DAVE' },
          { text: 'Il format delle qualificazioni fatto da cani.', member: 'SIMO' },
          { text: 'Quei coglioni che ridono dopo aver perso.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'Come gestisci il Fantacalcio?',
        choices: [
          { text: 'Analisi maniacale dei minuti e dei rapporti qualità-prezzo.', member: 'SIMO' },
          { text: 'Mi affido agli algoritmi e poi mi lamento se sbagliano.', member: 'PIETRO' },
          { text: 'Dimentico di mettere la formazione e riapro il campionato.', member: 'FILO' },
          { text: 'Mi incazzo per ogni gol subito, anche se vinco.', member: 'MARCO' },
          { text: 'Studio la formazione al lunedì e poi non la guardo più.', member: 'DAVE' }
        ]
      },
      {
        id: 14,
        text: 'David vs Vlahovic.',
        choices: [
          { text: 'Vlahovic ha rubato 100 milioni lordi alla Juve.', member: 'PIETRO' },
          { text: 'Entrambi mediocri, ci voleva Icardi.', member: 'DAVE' },
          { text: 'David è un Icardi che non segna.', member: 'MARCO' },
          { text: 'David segna solo se gli sbatte la palla addosso.', member: 'FILO' },
          { text: 'David ha numeri da top, 7 gol in 1500 minuti.', member: 'SIMO' }
        ]
      },
      {
        id: 15,
        text: 'La Fiorentina in Serie B?',
        choices: [
          { text: 'Spero arrivino ultimissimi, odio Italiano.', member: 'SIMO' },
          { text: 'In B con lo stadio che sembra un campo di sterminio.', member: 'DAVE' },
          { text: 'Se retrocedono compriamo Kean e Dodo a 5 milioni.', member: 'PIETRO' },
          { text: 'Meritano la C per come hanno giocato col Verona.', member: 'MARCO' },
          { text: 'Comisso ha rovinato tutto, povera viola.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'motoritennis',
    title: 'Motori e Tennis',
    description: 'Strategie Fallimentari e "Braccini Molli". Tra il muretto Ferrari e i crampi di Sinner.',
    questions: [
      {
        id: 1,
        text: 'Cosa ne pensi delle nuove regole della F1 2026?',
        choices: [
          { text: 'Una merda, perdono potenza in rettilineo.', member: 'PIETRO' },
          { text: 'Sarà un mondiale noioso vinto da Russell alla gara 8.', member: 'MARCO' },
          { text: 'Se la Ferrari non mette l\'ala rotante è finita.', member: 'SIMO' },
          { text: 'Non si sono mai visti così tanti ritiri tecnici, regolamento da buttare.', member: 'DAVE' },
          { text: 'Non bisogna più guardare la Ferrari, muretto da 4 in pagella.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Sinner perde una finale contro Alcaraz, il tuo commento?',
        choices: [
          { text: 'Braccino molle, al caldo si scioglie come un ghiacciolo.', member: 'DAVE' },
          { text: 'Alcaraz ha solo un culo enorme.', member: 'MARCO' },
          { text: 'Il tennis non esisteva prima di Nadal e Federer.', member: 'PIETRO' },
          { text: 'Sinner ha fatto una preparazione gasperiniana, sarà top a maggio.', member: 'SIMO' },
          { text: 'Vattene via dall\'Italia bastardo!', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'Lewis Hamilton in Ferrari.',
        choices: [
          { text: 'Lo hanno mandato al manicomio, guida come se fosse sullo sterrato.', member: 'PIETRO' },
          { text: 'Bollito, arriva sempre dietro a Leclerc.', member: 'DAVE' },
          { text: 'Un grande, ci porterà il mondiale 2027.', member: 'FILO' },
          { text: 'La Ferrari di Vettel era più forte.', member: 'SIMO' },
          { text: 'Un altro leso strapagato.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Cosa faresti se uno spettatore avesse un malore durante una partita di tennis?',
        choices: [
          { text: 'Gli spettatori del calcio sono più forti, i tennisti sono pieni di vecchi ricchi.', member: 'PIETRO' },
          { text: 'È un teatrino per andare in contemporanea con la Nazionale.', member: 'DAVE' },
          { text: '1000 euro di biglietto buttati.', member: 'MARCO' },
          { text: 'Farei i test fisici obbligatori all\'ingresso.', member: 'SIMO' },
          { text: 'Basta fermare il gioco per ogni minima cosa!', member: 'FILO' }
        ]
      },
      {
        id: 5,
        text: 'Adrian Newey disegna le macchine a matita.',
        choices: [
          { text: 'Si vede dai risultati, la macchina vibra e spacca le mani ai piloti.', member: 'PIETRO' },
          { text: 'Un genio, lo vorrei alla Juve per fare il mercato.', member: 'FILO' },
          { text: 'Fa il figo ma è rimasto agli anni \'90.', member: 'DAVE' },
          { text: 'Ho massacrato anche lui con i miei poteri.', member: 'SIMO' },
          { text: 'Sopravvalutato.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Kimi Antonelli debutta in Mercedes.',
        choices: [
          { text: 'Ha fatto una roba da pilota con 50 anni di esperienza.', member: 'PIETRO' },
          { text: 'Il vero GOAT della F1 italiana.', member: 'DAVE' },
          { text: 'Batterà tutti i record di Hamilton come rookie.', member: 'SIMO' },
          { text: 'Spero vinca lui e non Russell.', member: 'MARCO' },
          { text: 'Troppo giovane, si brucerà.', member: 'FILO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa pensi del Curling o del Baseball?',
        choices: [
          { text: 'Sport terziari, meglio guardare Bossetti da Bruno Vespa.', member: 'PIETRO' },
          { text: 'Il baseball è il futuro, l\'Italia ha battuto gli USA!', member: 'SIMO' },
          { text: 'Se l\'Italia non va ai mondiali di calcio, seguo il ping pong.', member: 'DAVE' },
          { text: 'Non guarderò mai sta roba.', member: 'MARCO' },
          { text: 'Che schifo.', member: 'FILO' }
        ]
      },
      {
        id: 8,
        text: 'La "Battle of Sexes" tra Kyrgios e Sabalenka.',
        choices: [
          { text: 'Potrebbe segnare la fine del patriarcato.', member: 'DAVE' },
          { text: 'Sabalenka viene arata, vincerà massimo 4 set.', member: 'SIMO' },
          { text: 'Una pagliacciata americana.', member: 'PIETRO' },
          { text: 'Forza Sabalenka, umilia quel coglione.', member: 'MARCO' },
          { text: 'Non ne posso più di queste cafonate.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Flavio Cobolli che si strappa la maglia.',
        choices: [
          { text: 'Un coatto romano, miglior amico di Bove.', member: 'DAVE' },
          { text: 'Un barella con più capelli.', member: 'MARCO' },
          { text: 'Mi ricorda Frattesi, esulta a caso.', member: 'PIETRO' },
          { text: 'Un leso totale.', member: 'SIMO' },
          { text: 'Deve imparare l\'educazione.', member: 'FILO' }
        ]
      },
      {
        id: 10,
        text: 'La Ferrari mette il bianco sulla livrea.',
        choices: [
          { text: 'Team clienti vibes, sembra una Kinder.', member: 'DAVE' },
          { text: 'Le giacche fanno cagare, chi le compra ha la 104.', member: 'PIETRO' },
          { text: 'Se vincono possono metterla anche viola.', member: 'SIMO' },
          { text: 'Orribile, rivoglio il rosso corsa.', member: 'FILO' },
          { text: 'Tanto arrivano quinti comunque.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Sinner ha i crampi durante un match.',
        choices: [
          { text: 'Salute cagionevole, si scioglie al sole.', member: 'DAVE' },
          { text: 'Deve credere di più nel cuore della pallina.', member: 'PIETRO' },
          { text: 'Nel calcio non succederebbe, giocano con le gambe rotte.', member: 'MARCO' },
          { text: 'Ha fatto una preparazione alla Gasperini, ci sta.', member: 'SIMO' },
          { text: 'Basta piangere per ogni dolorino!', member: 'FILO' }
        ]
      },
      {
        id: 12,
        text: 'Djokovic batte Sinner a 40 anni.',
        choices: [
          { text: 'Sinner non è al livello di Federer e Nadal prime.', member: 'PIETRO' },
          { text: 'Djokovic è un alieno, non è umano.', member: 'MARCO' },
          { text: 'Ha passato il turno in cavalleria senza giocare.', member: 'SIMO' },
          { text: 'Sinner ha il braccino molle nelle finali.', member: 'DAVE' },
          { text: 'Vergognoso perdere così.', member: 'FILO' }
        ]
      },
      {
        id: 13,
        text: 'Carlos Sainz in Williams.',
        choices: [
          { text: 'Finirà a lottare per il decimo posto, carriera buttata.', member: 'DAVE' },
          { text: 'L\'invidioso, voleva sabotare Leclerc.', member: 'SIMO' },
          { text: 'Ha la tipa più bella del paddock, ha già vinto.', member: 'PIETRO' },
          { text: 'Un grande pilota sottovalutato.', member: 'FILO' },
          { text: 'Chi se ne frega della Williams.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'Verstappen perde il mondiale all\'ultima gara.',
        choices: [
          { text: 'Giustizia per Hamilton e il 2021.', member: 'PIETRO' },
          { text: '#VerstappenMerda, essere schifoso e putrido.', member: 'MARCO' },
          { text: 'Ha lottato da solo contro una macchina superiore.', member: 'SIMO' },
          { text: 'La Red Bull ha fallito tutto lo sviluppo.', member: 'DAVE' },
          { text: 'Gp noioso, spero lo perda all\'ultimo giro.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'Il ritorno di Imola in calendario.',
        choices: [
          { text: 'Meglio di quei circuiti arabi nel deserto.', member: 'PIETRO' },
          { text: 'Pizzerie piene, ottimo per il Pil locale.', member: 'DAVE' },
          { text: 'Ci andrò a vedere il mondiale 2026.', member: 'SIMO' },
          { text: 'Spero non piova o è il solito caos.', member: 'MARCO' },
          { text: 'Inutile se la Ferrari non vince.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'geopolitica',
    title: 'Geopolitica e Società',
    description: 'Trump, Iran e Maranza. La Barcaccia analizza lo scacchiere mondiale e la sicurezza urbana.',
    questions: [
      {
        id: 1,
        text: 'Trump minaccia dazi per la Groenlandia. Cosa ne pensi?',
        choices: [
          { text: 'È un pazzo ricattato da Israele.', member: 'PIETRO' },
          { text: 'Modus operandi da mafioso, ricatta tutti.', member: 'SIMO' },
          { text: 'Vuole solo il Nobel per la pace, farà saltare la guerra.', member: 'DAVE' },
          { text: 'Se bombarda l\'Iran la benzina va a 4 euro.', member: 'MARCO' },
          { text: 'Trump numero 1, sta mettendo in riga l\'UE.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Gli scippi e le aggressioni a Milano.',
        choices: [
          { text: 'Serve il piano sicurezza di Dave, braccarli tutti.', member: 'PIETRO' },
          { text: 'Meriterebbero di essere massacrati di botte ogni giorno.', member: 'DAVE' },
          { text: 'Se sei straniero e sbagli, torni al tuo paese subito.', member: 'SIMO' },
          { text: 'Milano è un ufficio terribile, ammassati come cani.', member: 'FILO' },
          { text: 'Non si può più girare tranquilli, che schifo.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'La morte del capotreno accoltellato.',
        choices: [
          { text: 'Colpa della sinistra che tutela i diritti dei criminali.', member: 'SIMO' },
          { text: 'Succede perché la destra è incapace e nasconde gli sbarchi.', member: 'PIETRO' },
          { text: 'Sistema fatto apposta per mantenere questi tumori.', member: 'DAVE' },
          { text: 'Mi ha distrutto, non è giusto morire lavorando.', member: 'FILO' },
          { text: 'Schifo e vergogna, tutti a lavorare in miniera.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Il caso degli Epstein Files.',
        choices: [
          { text: 'Bill Gates chiedeva consigli su come curare la moglie...', member: 'PIETRO' },
          { text: 'Ne parlano poco per coprire i potenti.', member: 'DAVE' },
          { text: 'Una roba allucinante, ma non finirà nessuno in galera.', member: 'SIMO' },
          { text: 'Trump ne uscirà pulito, lo spero.', member: 'FILO' },
          { text: 'Che schifo di gente.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'La gestione del referendum della Meloni.',
        choices: [
          { text: 'Si dimette perché sa che tra un anno l\'economia esplode.', member: 'PIETRO' },
          { text: 'Ha abbassato la benza di 25 centesimi solo per propaganda.', member: 'DAVE' },
          { text: 'Ha ragione Mattarella, non dovete andare al podcast di Fedez.', member: 'FILO' },
          { text: 'Se vince il No escono gli stupratori? Cazzate da telemeloni.', member: 'MARCO' },
          { text: 'Solo un ritardato basa il voto sulle accise della benzina.', member: 'SIMO' }
        ]
      },
      {
        id: 6,
        text: 'L\'Iran chiude lo stretto di Hormuz.',
        choices: [
          { text: 'Lo stretto di Trump! Passano solo le navi spagnole.', member: 'PIETRO' },
          { text: 'Siamo fottuti, aeroporti senza carburante in 3 settimane.', member: 'SIMO' },
          { text: 'Spero che qualcuno violi la tregua così lo short ha senso.', member: 'DAVE' },
          { text: 'Bisogna attaccarli subito col Generale Vannacci.', member: 'FILO' },
          { text: 'Petrolio a 300 dollari, prepariamo le biciclette.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa faresti con i maranza di Milano?',
        choices: [
          { text: 'Posterei sui loro social il video mentre vengono umiliati.', member: 'PIETRO' },
          { text: 'Li chiuderei in stanzini e li riempirei di botte.', member: 'DAVE' },
          { text: 'Li manderei a ridipingere le strade come servizi sociali.', member: 'SIMO' },
          { text: 'Gli vieterei l\'accesso a YouTube e ai trapper.', member: 'FILO' },
          { text: 'Non li sopporto, girano sempre armati.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'L\'arresto del presidente del Venezuela.',
        choices: [
          { text: 'Lo hanno rapito e processato con le loro regole, follia.', member: 'DAVE' },
          { text: 'Operazione antidroga? Si, per il petrolio.', member: 'PIETRO' },
          { text: 'Trump ha dimostrato di avere le palle.', member: 'FILO' },
          { text: 'Spero che la Cina non attacchi Taiwan per ripicca.', member: 'SIMO' },
          { text: 'Ben gli sta.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'La leva militare obbligatoria.',
        choices: [
          { text: 'Favorevole solo per i maranza.', member: 'DAVE' },
          { text: 'Una cazzata, non conosco nessuno che la voglia.', member: 'SIMO' },
          { text: 'Solo se mandano al fronte i politici romani e toscani.', member: 'PIETRO' },
          { text: 'Avanti Generale, portaci ordine!', member: 'FILO' },
          { text: 'Ci starebbe per dare una regolata a sti giovani.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Gli USA vogliono comprare la Groenlandia.',
        choices: [
          { text: 'Vogliono le risorse minerarie, americani schifosi.', member: 'PIETRO' },
          { text: 'Meglio loro dei russi o dei cinesi.', member: 'FILO' },
          { text: 'Spero ci provino per svegliare l\'UE dal torpore.', member: 'SIMO' },
          { text: 'Diventerà la nuova meta turistica per ricchi.', member: 'DAVE' },
          { text: 'Follia totale.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Le Olimpiadi di Milano-Cortina.',
        choices: [
          { text: 'Soldi pubblici buttati per piste di bob inutili.', member: 'PIETRO' },
          { text: 'Non ne guarderò un secondo, è solo un magna magna.', member: 'DAVE' },
          { text: 'Abbiamo vinto 8 ori, siamo una potenza!', member: 'SIMO' },
          { text: 'Dovevano farle a Torino per risparmiare.', member: 'MARCO' },
          { text: 'Tamberi mi ha rotto i coglioni.', member: 'FILO' }
        ]
      },
      {
        id: 12,
        text: 'Netanyahu e Israele.',
        choices: [
          { text: 'Sono dei pazzi assassini sionisti.', member: 'PIETRO' },
          { text: 'Trump è il loro burattino.', member: 'DAVE' },
          { text: 'Se fermano la guerra gli do il Nobel.', member: 'FILO' },
          { text: 'Hanno colpito gli italiani in Libano, devono fermarsi.', member: 'SIMO' },
          { text: 'Situazione troppo complicata per commentare.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'La corruzione in Italia.',
        choices: [
          { text: 'Siamo mangiati dall\'amichettismo, vedi il governo Meloni.', member: 'PIETRO' },
          { text: 'I concorsi universitari sono bolle mafiose.', member: 'SIMO' },
          { text: 'Finché non puniscono le cause inutili non cambierà nulla.', member: 'DAVE' },
          { text: 'Serve una terapia d\'urto, 16 anni fuori dal mondo civile.', member: 'MARCO' },
          { text: 'Ridatemi Berlusconi nel pieno delle forze.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Elon Musk e la sindrome di Kessler.',
        choices: [
          { text: 'Può scatenare il caos nello spazio, è un pazzo.', member: 'SIMO' },
          { text: 'Gli manderei un tweet per proporgli la guida autonoma con l\'indiano.', member: 'FILO' },
          { text: 'Altro che spazio, pensasse a far funzionare le Tesla.', member: 'DAVE' },
          { text: 'Lo hanno eletto per distrarre dai problemi veri.', member: 'PIETRO' },
          { text: 'Un genio incompreso.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'economialavoro',
    title: 'Economia, Lavoro e Trading',
    description: 'Short, Long e Pannolini. Tra i mercati finanziari e le dinamiche aziendali.',
    questions: [
      {
        id: 1,
        text: 'L\'oro scende a 4100 dollari. Cosa fai?',
        choices: [
          { text: 'Aspetto i 3500 per l\'all in, si deve sgonfiare ancora.', member: 'FILO' },
          { text: 'Entro ora, tra un anno starà a 140 euro al grammo.', member: 'SIMO' },
          { text: 'Apro uno short di 50k euro per fare profitto veloce.', member: 'DAVE' },
          { text: 'Vado in leva x100 se arriva a 2500.', member: 'PIETRO' },
          { text: 'Compro una catenina al collo per farmi scippare a Milano.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Stellantis perde il 28% in borsa.',
        choices: [
          { text: 'Fallimento dell\'elettrico imposto dall\'UE.', member: 'FILO' },
          { text: 'Compro tutto, o la va o la spacca!', member: 'MARCO' },
          { text: 'Colpa di Agnelli che ha distrutto la Fiat.', member: 'PIETRO' },
          { text: 'Hanno oneri per 22 miliardi, letta su TuttoJuve.', member: 'DAVE' },
          { text: 'Dovevate comprare azioni Ferrari un anno fa.', member: 'SIMO' }
        ]
      },
      {
        id: 3,
        text: 'La riforma del riscatto della laurea.',
        choices: [
          { text: 'Follia retroattiva, i sindacati li devono massacrare.', member: 'SIMO' },
          { text: 'Se mi tolgono 30 mesi di pensione vado a Roma con il C4.', member: 'DAVE' },
          { text: 'Tanto l\'Inps tra 40 anni non esisterà più.', member: 'PIETRO' },
          { text: 'Non passerà mai, i giornali montano il caso per gli idioti.', member: 'FILO' },
          { text: 'Io lavoro fino a 80 anni, non mi serve la pensione.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Bonus Fater e ferie illimitate.',
        choices: [
          { text: 'Markettata incredibile, te le autorizzano solo se sei un leccaculo.', member: 'SIMO' },
          { text: 'Bonus alzato di 100 euro? Stonks!', member: 'PIETRO' },
          { text: 'Mi prendo 6 mesi di ferie e vado negli USA.', member: 'DAVE' },
          { text: 'Chi le prende oltre il consentito è un demente.', member: 'FILO' },
          { text: 'In Congo non sanno nemmeno cosa siano le ferie.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Investire nel Nucleare a fusione.',
        choices: [
          { text: 'Dobbiamo trovare i fornitori di materie prime quotati.', member: 'SIMO' },
          { text: 'Apro la "Srl Barcaccia" e prendo i fondi europei.', member: 'PIETRO' },
          { text: 'Aspetto che Trump ci metta i soldi.', member: 'FILO' },
          { text: 'Troppo rischioso, meglio l\'argento.', member: 'MARCO' },
          { text: 'Chiedi all\'AI di farti l\'analisi dei ticker.', member: 'DAVE' }
        ]
      },
      {
        id: 6,
        text: 'Il prezzo della benzina sale a 2.50 euro.',
        choices: [
          { text: 'Long sul petrolio per ripagarsi il pieno.', member: 'PIETRO' },
          { text: 'Guiderò a 110 in autostrada per risparmiare.', member: 'DAVE' },
          { text: 'Nazionalizziamo i distributori, basta speculazioni.', member: 'SIMO' },
          { text: 'Colpa dell\'Iran, bombardateli.', member: 'FILO' },
          { text: 'Vago in treno, anzi sul tram.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Trading di carte collezionabili (One Piece/Pokemon).',
        choices: [
          { text: 'Ho il box raro fondo blu, tra 5 anni vale quanto una Ferrari.', member: 'PIETRO' },
          { text: 'Sell tutto, in Giappone la bolla è scoppiata.', member: 'SIMO' },
          { text: 'Ma chi compra ste cagate, comprate oro.', member: 'FILO' },
          { text: 'Ho trovato le mie vecchie carte, valgono 20 euro?', member: 'MARCO' },
          { text: 'Meglio le uova di Pasqua a edizione limitata.', member: 'DAVE' }
        ]
      },
      {
        id: 8,
        text: 'Cosa pensi di Matteo Conti e SQR Capital?',
        choices: [
          { text: 'Un fuffa guru che vende corsi di trading.', member: 'DAVE' },
          { text: 'Capello incredibile, ma posta 4 reel al giorno.', member: 'SIMO' },
          { text: 'Lo inviterei a cena per rubargli qualche segreto.', member: 'FILO' },
          { text: 'La nostra generazione ha troppa voglia di fare impresa.', member: 'PIETRO' },
          { text: 'Un gigaleso insomma.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Il business del Bidet a New York.',
        choices: [
          { text: 'Il più grande progresso dai tempi della rivoluzione industriale.', member: 'SIMO' },
          { text: 'Investirei in aziende di bidet subito.', member: 'PIETRO' },
          { text: 'Agli americani non serve, non sanno usarlo.', member: 'FILO' },
          { text: 'Ma se non hanno neanche l\'arredamento nelle case.', member: 'MARCO' },
          { text: 'Tipica lesità da startup.', member: 'DAVE' }
        ]
      },
      {
        id: 10,
        text: 'La crisi di liquidità di Esselunga.',
        choices: [
          { text: 'Non pagano i fornitori, bastardi.', member: 'SIMO' },
          { text: 'Short immediato se fossero quotati.', member: 'PIETRO' },
          { text: 'Colpa della sponsorizzazione alla Nazionale.', member: 'MARCO' },
          { text: 'Mi fido solo di Amazon.', member: 'FILO' },
          { text: 'Compro solo prodotti in offerta.', member: 'DAVE' }
        ]
      },
      {
        id: 11,
        text: 'I dazi di Trump contro l\'Europa.',
        choices: [
          { text: 'Spero che l\'UE risponda con le palle di Sanchez.', member: 'PIETRO' },
          { text: 'Un disastro per l\'export di pannolini.', member: 'SIMO' },
          { text: 'Mi ripago l\'abbonamento Dazn con lo short.', member: 'DAVE' },
          { text: 'Trump fa bene, l\'Europa ci vuole male.', member: 'FILO' },
          { text: 'Tanto io non compro roba americana.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Gli stipendi dei dipendenti pubblici.',
        choices: [
          { text: 'Fermi al 2021, una vergogna assoluta.', member: 'DAVE' },
          { text: 'Almeno hanno il posto fisso, noi rischiamo ogni giorno.', member: 'SIMO' },
          { text: 'Meglio essere un maranza e rubare gli iPhone.', member: 'PIETRO' },
          { text: 'Dovrebbero lavorare per obiettivi come in Fater.', member: 'FILO' },
          { text: 'In Italia si sta male, andate in Polonia.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'L\'ascesa economica della Spagna.',
        choices: [
          { text: 'Sanchez è un visionario, altro che Meloni.', member: 'PIETRO' },
          { text: 'Momento fisiologico, non è merito della politica.', member: 'FILO' },
          { text: 'Hanno abbassato l\'IVA sulla benza, geni.', member: 'SIMO' },
          { text: 'Preferisco le spagnole ai loro BTP.', member: 'MARCO' },
          { text: 'Compro casa a Madrid.', member: 'DAVE' }
        ]
      },
      {
        id: 14,
        text: 'L\'inflazione e il carrello della spesa.',
        choices: [
          { text: 'Arrotondano tutti per eccesso, ladri.', member: 'PIETRO' },
          { text: 'Mangio solo Simmenthal per risparmiare.', member: 'DAVE' },
          { text: 'Compro i pannolini in stock per 3 anni.', member: 'SIMO' },
          { text: 'Costa tutto troppo, non si possono fare figli.', member: 'MARCO' },
          { text: 'Bisogna guadagnare di più, non spendere di meno.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'Il fallimento del car sharing a Milano.',
        choices: [
          { text: 'Finito il mito degli anni del Clamm.', member: 'DAVE' },
          { text: 'Troppo costoso, meglio il monopattino.', member: 'PIETRO' },
          { text: 'La gente preferisce il Cassone BMW.', member: 'SIMO' },
          { text: 'Si rubavano le auto troppo facilmente.', member: 'MARCO' },
          { text: 'Un servizio inutile.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'lifestyleauto',
    title: 'Lifestyle, Auto e Gossip',
    description: 'BMW, Labubu e "Cose da Lesi". La vita quotidiana tra lusso, meme e ossessioni estetiche.',
    questions: [
      {
        id: 1,
        text: 'Devi comprare un\'auto nuova, cosa scegli?',
        choices: [
          { text: 'BMW X1 usata certificata, possibilmente bianca.', member: 'FILO' },
          { text: 'Un cassone SUV con bagagliaio enorme per mangiarci dentro.', member: 'SIMO' },
          { text: 'Un GIppone americano o una Mustang, la benza costa zero.', member: 'DAVE' },
          { text: 'Una Opel Corsa del 2012, investimento sicuro.', member: 'PIETRO' },
          { text: 'Un\'auto da meno di 10k euro che duri 50 anni.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Cosa pensi di chi si fa cambiare il vetro da "New Martina"?',
        choices: [
          { text: 'Elettorato pro-Trump, analfabeti funzionali.', member: 'PIETRO' },
          { text: 'Una gran gnocca lei, ma i clienti sono dei bambini.', member: 'DAVE' },
          { text: 'Spendere 50 euro per una cover è da polli.', member: 'SIMO' },
          { text: 'Bullizzerei i ragazzi che ci vanno.', member: 'MARCO' },
          { text: 'Business geniale, ha 10 negozi.', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'La tua opinione sui capelli bianchi a 30 anni.',
        choices: [
          { text: 'Segno di stress da fondo d\'investimento.', member: 'SIMO' },
          { text: 'Si tingono per sembrare più esperti.', member: 'PIETRO' },
          { text: 'Meglio bianchi che pelato come Spalletti.', member: 'FILO' },
          { text: 'Dave sembra un Adone a confronto.', member: 'MARCO' },
          { text: 'Invecchiato malissimo come Felipe Massa.', member: 'DAVE' }
        ]
      },
      {
        id: 4,
        text: 'Come ti vesti per andare a una cena elegante?',
        choices: [
          { text: 'Cappottone da padrino alla Perin.', member: 'DAVE' },
          { text: 'Tuta del Ravenna e scarpe da ginnastica.', member: 'SIMO' },
          { text: 'Due paia di pantaloni in tutto per risparmiare milioni.', member: 'FILO' },
          { text: 'Maglia della Lazio con septum finto.', member: 'PIETRO' },
          { text: 'Un pigiamino griffato.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Cosa faresti se rimanessi chiuso fuori casa a Parigi durante l\'asta?',
        choices: [
          { text: 'Chiedo ai coinquilini di rientrare... ah no, non ci sono.', member: 'PIETRO' },
          { text: 'Faccio l\'asta dal marciapiede rubando il wifi.', member: 'SIMO' },
          { text: 'Mi incazzo e lancio il telefono sul tavolo.', member: 'MARCO' },
          { text: 'Una lezione di comunicazione per gli HR.', member: 'DAVE' },
          { text: 'Chiamo Filo per farmi fare la squadra.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Il tuo rapporto con i social (LinkedIn/Instagram).',
        choices: [
          { text: 'Posto foto della mia TV da 75 pollici in un corridoio vuoto.', member: 'FILO' },
          { text: 'Guardo i reel di cucina ad alto livello.', member: 'DAVE' },
          { text: 'Stalkero i giocatori degli avversari h24.', member: 'SIMO' },
          { text: 'Seguo solo account che parlano di geopolitica e droni.', member: 'PIETRO' },
          { text: 'Non ci capisco nulla, preferisco le navi.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Una vacanza ideale?',
        choices: [
          { text: 'Tour dei parchi nazionali USA con Chrysler Pacifica.', member: 'DAVE' },
          { text: 'Weekend a Varsavia con guida turistica polacca.', member: 'SIMO' },
          { text: 'Settimana bianca in Val d\'Aosta in smart working.', member: 'FILO' },
          { text: 'Gita nello stretto di Hormuz a caccia di mine.', member: 'PIETRO' },
          { text: 'Rimanere bloccato in Congo per le proteste.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Cosa pensi dei Labubu?',
        choices: [
          { text: 'Una bolla che sparirà tra due mesi, ho investito in argento.', member: 'SIMO' },
          { text: 'Monnezza per lesi.', member: 'PIETRO' },
          { text: 'Meglio di quelli di Dave di 10 anni fa.', member: 'FILO' },
          { text: 'Li comprerei solo per truffare Pietro nel 2050.', member: 'MARCO' },
          { text: 'Hanno gli artwork più belli dei Pokemon.', member: 'DAVE' }
        ]
      },
      {
        id: 9,
        text: 'Come reagisci a un ordine di piadine sbagliato?',
        choices: [
          { text: 'Lancio la piadina sul tavolo e guardo il vuoto per 8 secondi.', member: 'MARCO' },
          { text: 'Dico che ho pagato anche se non l\'ho ordinata.', member: 'PIETRO' },
          { text: 'Mangio gli avanzi degli altri.', member: 'FILO' },
          { text: 'Faccio un esposto in Lega Piadina.', member: 'SIMO' },
          { text: 'Inquadro la scena col telefono per un video "iconico".', member: 'DAVE' }
        ]
      },
      {
        id: 10,
        text: 'La figlia di Balotelli ha 100k follower a 13 anni.',
        choices: [
          { text: 'Follia dare i social a una cinna.', member: 'PIETRO' },
          { text: 'Ha preso tutto dalla madre, gran gnocca.', member: 'DAVE' },
          { text: 'A 25 anni peserà 100 kg se non si tiene.', member: 'MARCO' },
          { text: 'È una risorsa per il marketing futuro.', member: 'SIMO' },
          { text: 'Mi vengono i brividi.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'I professori influencer.',
        choices: [
          { text: 'Un cancro della società, vanno radiati.', member: 'PIETRO' },
          { text: 'Meglio loro che le lezioni di economia di Simo.', member: 'FILO' },
          { text: '"Turbopaolo" è il mio idolo.', member: 'SIMO' },
          { text: 'Didattica a distanza fallimentare.', member: 'DAVE' },
          { text: 'Non sanno nemmeno contare fino a 10.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Il tuo rapporto con la tecnologia Apple.',
        choices: [
          { text: 'Uso solo iPhone scintillanti per provocare i maranza.', member: 'DAVE' },
          { text: 'Compro l\'ultimo modello e poi mi lamento del prezzo.', member: 'FILO' },
          { text: 'Preferisco una TV Oled 2024 per vedere meglio la pirateria.', member: 'PIETRO' },
          { text: 'Aspetto che scoppi la bolla tech.', member: 'SIMO' },
          { text: 'Non so manco come si accende.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'Cosa pensi di chi mangia in macchina?',
        choices: [
          { text: 'Rischio macchie assurdo, sedili in pelle distrutti.', member: 'SIMO' },
          { text: 'Solo se sei un capotreno che ha fretta.', member: 'PIETRO' },
          { text: 'In America lo fanno tutti con hamburger XXL.', member: 'DAVE' },
          { text: 'Io non lo farei mai nella mia BMW.', member: 'FILO' },
          { text: 'Masticare i sedili è il mio hobby.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'Il "Pizza Index" a Ravenna.',
        choices: [
          { text: 'Schizzato alle stelle, siamo in bolla.', member: 'SIMO' },
          { text: 'Pizzerie piene nonostante la crisi.', member: 'DAVE' },
          { text: 'Meglio un\'app che misuri quanto fa schifo la pizza fuori Napoli.', member: 'PIETRO' },
          { text: 'Costa 20 euro una margherita, follia.', member: 'FILO' },
          { text: 'Mangio solo focaccia pugliese.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'La "Reunion Barcaccia" ideale.',
        choices: [
          { text: 'In un casinò a Las Vegas a giocare a poker.', member: 'DAVE' },
          { text: 'In un rudere occupato a Pesaro a picchiare i senzatetto.', member: 'FILO' },
          { text: 'A casa di Filo davanti alla TV da 75 pollici con birre a 2 dollari.', member: 'SIMO' },
          { text: 'In una tenda in Groenlandia aspettando l\'atomica.', member: 'PIETRO' },
          { text: 'A vedere il Ravenna in serie C.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'calciofollie',
    title: 'Calciomercato & Follie Societarie',
    description: 'Valutazioni dei giocatori, scambi improbabili e l\'odio per Paratici.',
    questions: [
      {
        id: 1,
        text: 'Cosa pensi della clausola da 111 milioni di Lautaro Martinez?',
        choices: [
          { text: 'Per me vale pure ben di più di 110, se Dybala andasse in Premier varrebbe 170 in due mesi.', member: 'MARCO' },
          { text: 'È palesemente problematica perché non hai la capacità di spesa per sostituirlo con uno che renda uguale.', member: 'SIMO' },
          { text: 'Vale 40 milioni, 6 mesi storti e non lo vendi più, è come Piatek.', member: 'PIETRO' },
          { text: 'È una valutazione gonfiata per fare plusvalenze fittizie tra Inter e Barça.', member: 'DAVE' },
          { text: 'Un altro africano che non arriva all\'uva, per me vale 40 milioni e non ha dimostrato nulla.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'De Ligt è stato pagato 85 milioni. Qual è il tuo verdetto?',
        choices: [
          { text: 'Pagare così tanto un 19enne è senza senso, ha lo stipendio più alto di Chiellini e Bonucci.', member: 'SIMO' },
          { text: 'È un investimento ripagato dai click su Transfermarkt, i turchi sono malati di queste cose.', member: 'PIETRO' },
          { text: 'Un difensore di alto livello, ma la difesa traballa perché il centrocampo non filtra nulla.', member: 'FILO' },
          { text: 'È un prezzo da calciatore affermato, non voglio dargli tempo di maturare a quelle cifre.', member: 'DAVE' },
          { text: 'È molto forte, ma vederlo in panchina per far giocare Demiral fa esplodere.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Paratici propone lo scambio De Sciglio-Kurzawa. Cosa ne pensi?',
        choices: [
          { text: 'De Sciglio è il miglior terzino della Serie A, Kurzawa a giugno lo prendi gratis.', member: 'PIETRO' },
          { text: 'Paratici è istintivo e pericoloso, sta cercando di rimediare ai buchi di bilancio.', member: 'DAVE' },
          { text: 'Ennesima operazione basata su plusvalenze per far quadrare i conti della Juve a pecora.', member: 'SIMO' },
          { text: 'De Sciglio difende peggio di un centrale di Serie C, lo scambio ci può stare.', member: 'FILO' },
          { text: 'Ormai alla Juve si fanno solo scambi pazzi perché non c\'è più un soldo.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Come valuti l\'acquisto di Eriksen da parte dell\'Inter a gennaio?',
        choices: [
          { text: 'Classico giocatore preso solo perché era in saldo, totalmente inutile nel modulo di Conte.', member: 'DAVE' },
          { text: 'Mossa da top manager di Marotta, a giugno lo avrebbero cercato tutti i big club.', member: 'SIMO' },
          { text: 'È il "vecino" del Barcellona, un giocatore buono ma non un fenomeno da 100 milioni.', member: 'PIETRO' },
          { text: 'Inconsistentep, rallenta la manovra e deprime le azioni con passaggi all\'indietro.', member: 'FILO' },
          { text: 'Bisogna vedere quanto ci mette ad adattarsi, ma indubbiamente è forte.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Qual è il segreto del successo dell\'Atalanta sul mercato?',
        choices: [
          { text: 'Vendono la merda come se fosse oro e Percassi si mette tutto in tasca.', member: 'PIETRO' },
          { text: 'Hanno una struttura all\'inglese, investono gradualmente senza bruciare le tappe.', member: 'SIMO' },
          { text: 'Producono giocatori decenti che poi la Juve ricompra strapagandoli.', member: 'DAVE' },
          { text: 'Giocano a memoria da tre anni, hanno un parco attaccanti che fa invidia al Brasile.', member: 'FILO' },
          { text: 'Corrono il doppio degli altri e asfaltano chiunque, sono una roba pazza.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Il ritorno di Ibrahimovic al Milan: marketing o tecnica?',
        choices: [
          { text: 'Mossa da disperati, prendono uno che non si allena da mesi per sistemare i loro casini.', member: 'PIETRO' },
          { text: 'Marketing puro, ma almeno lui stacca i piedi da terra a differenza di altri.', member: 'FILO' },
          { text: 'Farà almeno 10 gol, serve a rivalutare una squadra di bidoni.', member: 'DAVE' },
          { text: 'Pagato un\'ira di dio di stipendio, giocherà minimo 8 partite.', member: 'SIMO' },
          { text: 'È il "diavolo che veste Ibra", l\'unica pezza in un cantiere aperto.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Se fossi il Direttore Sportivo della Juve, chi venderesti subito?',
        choices: [
          { text: 'Douglas Costa e Alex Sandro, cessioni obbligate per liberare il monte ingaggi.', member: 'PIETRO' },
          { text: 'Ramsey e Rabiot, giocano solo per lo stipendio che prendono.', member: 'DAVE' },
          { text: 'Danilo, un terzino penoso che non sa né difendere né giocare la palla.', member: 'FILO' },
          { text: 'Tutti quelli che non corrono, serve gente con la fame di vincere.', member: 'MARCO' },
          { text: 'Chiunque non sia funzionale al progetto di Sarri per l\'anno prossimo.', member: 'SIMO' }
        ]
      },
      {
        id: 8,
        text: 'Cosa pensi dello scambio Politano-Spinazzola saltato?',
        choices: [
          { text: 'Marotta ha avuto il cuore juventino, Spinazzola è fatto di cristallo.', member: 'PIETRO' },
          { text: 'Ausilio ha rotto i coglioni, non si parla con Marotta e fanno casini.', member: 'DAVE' },
          { text: 'Prestito con obbligo basato sulle presenze, era l\'unico modo per non perderci.', member: 'SIMO' },
          { text: 'Ennesima figura di merda dei dirigenti che non sanno comunicare tra loro.', member: 'MARCO' },
          { text: 'Politano vale 25 milioni, darlo via per uno rotto era da galera.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Chi è il peggior dirigente del calcio italiano attuale?',
        choices: [
          { text: 'Paratici, è pericoloso e istintivo negli acquisti sopra i 100 milioni.', member: 'DAVE' },
          { text: 'Maldini e Boban, hanno un livello di incompetenza straordinaria.', member: 'PIETRO' },
          { text: 'Quelli del Napoli che vendono ma non reinvestono mai seriamente.', member: 'SIMO' },
          { text: 'Cairo, dice che fattura ma poi chiede sacrifici ai giocatori.', member: 'MARCO' },
          { text: 'Tutti quelli che non sanno ammazzare il campionato quando ne hanno l\'occasione.', member: 'FILO' }
        ]
      },
      {
        id: 10,
        text: 'Tonali o Zaniolo: chi è il vero colpo da fare?',
        choices: [
          { text: 'Tonali, ha qualità che dureranno fino a fine carriera, Zaniolo a 27 anni sarà un bidone.', member: 'DAVE' },
          { text: 'Zaniolo, ha una fisicità impressionante ed è già il migliore della Roma.', member: 'SIMO' },
          { text: 'Zaniolo solo se includi Rugani o Bernardeschi nello scambio per la plusvalenza.', member: 'PIETRO' },
          { text: 'Entrambi sopravvalutati dai giornali italiani, ma Zaniolo spacca le partite.', member: 'FILO' },
          { text: 'A pari prezzo Zaniolo, ma se costa troppo allora meglio Tonali.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Cosa pensi dei parametri zero della Juve?',
        choices: [
          { text: 'Non conviene prenderli, tra commissioni e stipendio ti costano come un acquisto normale.', member: 'DAVE' },
          { text: 'Emre Can a parametro zero un cazzo, abbiamo pagato 17 milioni i procuratori.', member: 'PIETRO' },
          { text: 'Marotta li ha sempre usati bene, Paratici invece li usa per affossare il bilancio.', member: 'MARCO' },
          { text: 'Sono devastanti a livello di bilancio perché puoi fare plusvalenze pazze rivendendoli.', member: 'SIMO' },
          { text: 'Khedira e Matuidi sono vecchi, non corrono più e pesano troppo.', member: 'FILO' }
        ]
      },
      {
        id: 12,
        text: 'La valutazione di 170 milioni per Alexander-Arnold è corretta?',
        choices: [
          { text: 'Un terzino anche se è Dio non può costare più di 80 milioni.', member: 'PIETRO' },
          { text: 'In Premier i prezzi sono pompati oltremodo, è una roba scandalosa.', member: 'MARCO' },
          { text: 'È il prezzo giusto per un giovane che sposta gli equilibri in un top club.', member: 'SIMO' },
          { text: 'Pagare così tanto per un difensore è una follia della Premier League.', member: 'FILO' },
          { text: 'Cifra basata solo sull\'hype della Champions vinta dal Liverpool.', member: 'DAVE' }
        ]
      },
      {
        id: 13,
        text: 'Mandragora alla Juve per 26 milioni. Operazione sensata?',
        choices: [
          { text: 'È una merda di giocatore, non vale 10 milioni.', member: 'SIMO' },
          { text: 'Vecchi debiti da rimborsare all\'Udinese, altrimenti fanno uscire cose losche.', member: 'PIETRO' },
          { text: 'Cifra pazza, un giocatore mediocre che serve solo per le liste.', member: 'MARCO' },
          { text: 'Tipico magheggio Juve-Udinese per gonfiare i valori dei cartellini.', member: 'DAVE' },
          { text: 'Meglio puntare su altri giovani della primavera Atalanta.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Qual quale sarà la prossima squadra di Bonaventura a parametro zero?',
        choices: [
          { text: 'Fiorentina o Cagliari, squadre da metà classifica.', member: 'PIETRO' },
          { text: 'Atalanta, tornerebbe dove ha fatto bene.', member: 'DAVE' },
          { text: 'È un giocatore finito, non lo prenderei neanche gratis.', member: 'FILO' },
          { text: 'Il Milan è un leso a farlo scadere, l\'anno scorso valeva ancora molto.', member: 'SIMO' },
          { text: 'Una squadra che ha bisogno di esperienza in mezzo al campo.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Chi vincerà il prossimo scudetto post-dominio Juve?',
        choices: [
          { text: 'L\'Inter di Conte, ormai il ciclo Juve è finito per colpa di Paratici.', member: 'PIETRO' },
          { text: 'La Lazio, giocano a memoria e hanno Immobile che è un record-man.', member: 'FILO' },
          { text: 'La Juve vincerà ancora per anni perché le altre squadre sono gestite da incapaci.', member: 'MARCO' },
          { text: 'Dipende tutto dal mercato estivo e da come si adatteranno i nuovi acquisti.', member: 'SIMO' },
          { text: 'Se non rivoluzionano la rosa, lo scudetto lo vince chi ha più fortuna.', member: 'DAVE' }
        ]
      }
    ]
  },
  {
    id: 'covidgombloddi',
    title: 'Coronavirus & Gombloddi Globali',
    description: 'Allarmismo, statistiche sui morti, zone rosse e l\'odio per Burioni.',
    questions: [
      {
        id: 1,
        text: 'Qual è stata la tua prima reazione ai primi casi in Italia?',
        choices: [
          { text: 'In Italia non morirà nessuno, è solo una stupida influenza.', member: 'DAVE' },
          { text: 'Bisogna creare allarmismo, altrimenti mi rimandano a lavorare a Lodi.', member: 'SIMO' },
          { text: 'È un complotto dei 5 Stelle per rimanere al governo senza elezioni.', member: 'PIETRO' },
          { text: 'È una malattia creata in laboratorio a Wuhan e ci hanno tenuto tutto nascosto.', member: 'MARCO' },
          { text: 'Signori, siamo fottuti, è la fine del mondo libero.', member: 'FILO' }
        ]
      },
      {
        id: 2,
        text: 'Cosa pensi del dato sui decessi comunicato dalla Protezione Civile?',
        choices: [
          { text: 'Sono morti "con" coronavirus, non "di" coronavirus. Il quadro clinico era già compromesso.', member: 'DAVE' },
          { text: 'I numeri sono sottostimati, la gente muore in casa e non gli fanno nemmeno il tampone.', member: 'SIMO' },
          { text: 'La letalità è bassissima tra i giovani, ammazza solo chi ha già tre patologie gravi.', member: 'FILO' },
          { text: 'In Italia contano tutto per fare pietà all\'Europa e chiedere i Coronabond.', member: 'PIETRO' },
          { text: '30 milioni di italiani ce l\'hanno già latente, i morti sono solo una piccola percentuale.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Burioni è un eroe della scienza o un cercatore di fama?',
        choices: [
          { text: 'È un coglione che blasta la gente solo per tornaconto personale.', member: 'DAVE' },
          { text: 'È un idolo, ha ragione a insultare chi non capisce la matematica dei contagi.', member: 'SIMO' },
          { text: 'Un pezzente che approfitta del trend per vendere libri.', member: 'PIETRO' },
          { text: 'Fa parte della lobby medica che vuole chiudere tutto per i propri interessi.', member: 'MARCO' },
          { text: 'Non lo so, io seguo solo le notizie di Polemica Quotidiana.', member: 'FILO' }
        ]
      },
      {
        id: 4,
        text: 'Come si sconfigge veramente il virus secondo te?',
        choices: [
          { text: 'Stando in casa in pigiama a fare smart working e ordinando cibo online.', member: 'SIMO' },
          { text: 'Con l\'immunità di gregge, facciamo ammalare tutti i giovani e salviamo l\'economia.', member: 'PIETRO' },
          { text: 'Usando l\'Avigan, in Giappone hanno risolto tutto in due giorni e noi non lo diciamo.', member: 'DAVE' },
          { text: 'Riaprendo tutto e tornando alla normalità, muore solo l\'1% in più della popolazione.', member: 'MARCO' },
          { text: 'Con una rivolta a Roma contro il governo che ci toglie la libertà.', member: 'FILO' }
        ]
      },
      {
        id: 5,
        text: 'La Cina ha gestito bene l\'emergenza?',
        choices: [
          { text: 'Hanno costruito due ospedali in dieci giorni, sono delle formiche geneticamente superiori.', member: 'SIMO' },
          { text: 'I loro numeri sono ridicoli, hanno nascosto tutto finché non sono stati costretti a chiudere.', member: 'PIETRO' },
          { text: 'Hanno una dittatura efficiente, se sgarri ti fucilano e risolvono il problema.', member: 'MARCO' },
          { text: 'Ci hanno insegnato a barare sui dati per fare bella figura col mondo.', member: 'DAVE' },
          { text: 'Maledetti cinesi di merda, ci hanno infettato tutti con i loro mercatini luridi.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Cosa pensi del video del TGR Leonardo del 2015 sul virus creato in laboratorio?',
        choices: [
          { text: 'Prova schiacciante che sapevano tutto da anni, altro che pipistrelli.', member: 'MARCO' },
          { text: 'È una bufala per boomer, i coronavirus naturali si evolvono sempre.', member: 'SIMO' },
          { text: 'Salvini lo usa per fare propaganda, ma è un video vecchio che non c\'entra nulla.', member: 'DAVE' },
          { text: 'È il jolly di chi non sa argomentare e vede complotti ovunque.', member: 'PIETRO' },
          { text: 'Se lo ha detto la Rai allora deve essere vero per forza.', member: 'FILO' }
        ]
      },
      {
        id: 7,
        text: 'Ti fideresti del vaccino quando uscirà?',
        choices: [
          { text: 'Subito, voglio uscire di casa senza patemi e tornare alla vita di prima.', member: 'SIMO' },
          { text: 'Dipende, non vorrei avere effetti collaterali e diventare autistico.', member: 'PIETRO' },
          { text: 'Lo farò solo se obbligatorio, ma preferirei evitare.', member: 'MARCO' },
          { text: 'Aspetto di vedere se funziona sugli altri prima di farlo io.', member: 'DAVE' },
          { text: 'Solo se me lo garantisce Trump o una società seria americana.', member: 'FILO' }
        ]
      },
      {
        id: 8,
        text: 'Cosa pensi dei runner inseguiti dagli elicotteri in TV?',
        choices: [
          { text: 'Ridicolo, fanno più danni gli ospedali con i contagi interni che uno che corre da solo.', member: 'PIETRO' },
          { text: 'Giusto, bisogna spaventare la gente perché gli italiani sono indisciplinati.', member: 'DAVE' },
          { text: 'È una scena da regime totalitario, una violazione dei diritti civili.', member: 'FILO' },
          { text: 'Operazione simpatia per far vedere che lo stato c\'è, ma è una fuffa.', member: 'SIMO' },
          { text: 'Una roba da galera, Barbara d\'Urso dovrebbe essere chiusa.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'La Svezia non ha fatto il lockdown. Chi ha ragione?',
        choices: [
          { text: 'Hanno avuto culo che il virus era una robetta e la loro densità è bassa.', member: 'PIETRO' },
          { text: 'Hanno ammesso di aver sbagliato, noi siamo stati i primi a capire la gravità.', member: 'SIMO' },
          { text: 'Sono stati più intelligenti, non hanno sfasciato l\'economia per un\'influenza.', member: 'MARCO' },
          { text: 'Hanno una cultura diversa, non hanno bisogno di leggi per stare distanti.', member: 'DAVE' },
          { text: 'Hanno dimostrato che la quarantena è una lesità totale.', member: 'FILO' }
        ]
      },
      {
        id: 10,
        text: 'Qual è il sintomo più strano del coronavirus secondo te?',
        choices: [
          { text: 'Non sentire i gusti, mio padre è stato male tre giorni per questo.', member: 'PIETRO' },
          { text: 'La stupidità della gente che compra 40 pacchi di carta igienica.', member: 'SIMO' },
          { text: 'Pensare di avere il virus solo perché hai un colpo di tosse.', member: 'DAVE' },
          { text: 'L\'ansia che ti viene a guardare i bollettini delle 18.', member: 'MARCO' },
          { text: 'La voglia di fare start-up assurde chiusi in camera.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Cosa pensi di chi gira con la mascherina all\'aperto da solo?',
        choices: [
          { text: 'Un terrorizzato che guarda male tutti quelli che si avvicinano.', member: 'SIMO' },
          { text: 'Un imbecille, la mascherina serve solo per non contagiare, non per proteggersi.', member: 'PIETRO' },
          { text: 'Io la porto doppia per sicurezza, non si sa mai con questi neri in giro.', member: 'FILO' },
          { text: 'Una vittima dell\'allarmismo mediatico creato dai giornali.', member: 'MARCO' },
          { text: 'Inutile se non è una FFP3 professionale col filtro sostituibile.', member: 'DAVE' }
        ]
      },
      {
        id: 12,
        text: 'La chiusura dei voli dalla Cina è stata utile?',
        choices: [
          { text: 'Una lesata enorme, hanno fatto scalo in Europa e sono arrivati lo stesso senza controlli.', member: 'DAVE' },
          { text: 'Sì, ma dovevamo farlo un mese prima invece di dire "abbraccia un cinese".', member: 'MARCO' },
          { text: 'Ha solo ritardato l\'inevitabile, il virus circolava già da gennaio.', member: 'PIETRO' },
          { text: 'Giusto per dare un segnale politico, ma tecnicamente non è servito a nulla.', member: 'SIMO' },
          { text: 'Dovevamo bombardarli direttamente a Wuhan per fermare il contagio.', member: 'FILO' }
        ]
      },
      {
        id: 13,
        text: 'Come vedi l\'Italia dopo la fine della quarantena?',
        choices: [
          { text: 'In recessione pesantissima, con lo spread a 300 e un governo tecnico cattivo.', member: 'PIETRO' },
          { text: 'Più forte di prima, con una digitalizzazione accelerata grazie allo smart working.', member: 'SIMO' },
          { text: 'Una nazione bonsai, al 21esimo posto per ricchezza nel mondo.', member: 'MARCO' },
          { text: 'Un paese che ha distrutto il proprio futuro per salvare dei vecchi oncologici.', member: 'DAVE' },
          { text: 'Un inferno di disoccupazione e rabbia sociale, pronti alla rivoluzione.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Boris Johnson in terapia intensiva: karma o sfortuna?',
        choices: [
          { text: 'Karma purissimo, così impara a parlare di immunità di gregge.', member: 'SIMO' },
          { text: 'Sfortuna, ma almeno ha avuto il coraggio di dire la verità sul rischio di perdere i propri cari.', member: 'DAVE' },
          { text: 'Un complotto per fargli cambiare idea sulla strategia di apertura.', member: 'MARCO' },
          { text: 'Un disonore per il Regno Unito, sono diventati gli zimbelli del mondo.', member: 'PIETRO' },
          { text: 'Spero che schiatti così si libera un posto al top.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'Qual è la tua attività preferita durante il lockdown?',
        choices: [
          { text: 'Fare grafici su Excel e seguire i corsi Mooc gratuiti.', member: 'SIMO' },
          { text: 'Studiare trading e fare esperimenti con le opzioni su Plus500.', member: 'DAVE' },
          { text: 'Seguire le dirette di Conte e insultare i complottisti su Facebook.', member: 'MARCO' },
          { text: 'Leggere il Sole 24 Ore e prevedere il crollo di Tesla.', member: 'PIETRO' },
          { text: 'Gestire la pagina Polemica Quotidiana e cercare followers.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'wallstreetstartup',
    title: 'Wall Street & Startup Lese',
    description: 'Trading compulsivo, spread, overnight e idee di business assurde.',
    questions: [
      {
        id: 1,
        text: 'Qual è la tua strategia su Plus500?',
        choices: [
          { text: 'Short su qualsiasi cosa sia in bolla, soprattutto Tesla e le navi da crociera.', member: 'PIETRO' },
          { text: 'Comprare azioni Juve al minimo e rivenderle dopo il rimbalzo in borsa.', member: 'DAVE' },
          { text: 'Long su aziende solide come LVMH e P&G e lasciarle marcire per mesi.', member: 'SIMO' },
          { text: 'Usare la demo per fare 700k di profitto finto con leve pazze a 100.', member: 'FILO' },
          { text: 'Non investire, è un mondo di bot che ti fottono in 3 secondi.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Cos\'è lo spread?',
        choices: [
          { text: 'Una tassa sull\'acquisto che ti fa partire subito in negativo di 3 euro sulla Juve.', member: 'DAVE' },
          { text: 'La differenza tra ricchi e poveri che aumenta durante le crisi.', member: 'MARCO' },
          { text: 'Una roba che non ho mai calcolato in anni di trading in demo.', member: 'FILO' },
          { text: 'Una commissione irrisoria se investi migliaia di euro, ma pesante per noi poveri.', member: 'PIETRO' },
          { text: 'Un valore che dipende dalla volatilità del titolo, lo sanno tutti.', member: 'SIMO' }
        ]
      },
      {
        id: 3,
        text: 'Qual è l\'idea di startup più rivoluzionaria del gruppo?',
        choices: [
          { text: 'Una catena di Kebab di lusso con chef marocchini esperti e grafica accattivante.', member: 'PIETRO' },
          { text: 'Un\'azienda che stipendia donne single per aumentare la natalità italiana con fondi UE.', member: 'FILO' },
          { text: 'Un\'agenzia di social media marketing per kebabbari e agenzie immobiliari a 50€ al mese.', member: 'SIMO' },
          { text: 'Un\'app per prenotare il turno in palestra dopo la riapertura.', member: 'DAVE' },
          { text: 'Pavimenti grigliati che mangiano la polvere per eliminare le colf.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi di Elon Musk e Tesla?',
        choices: [
          { text: 'Un venditore di fuffa, Tesla è una bolla che crollerà appena finisce l\'hype.', member: 'PIETRO' },
          { text: 'Un genio che ha mascherato un business di batterie con delle auto invendibili.', member: 'SIMO' },
          { text: 'Un pazzo che scrive su Twitter di sparare alla gente e poi si lamenta della censura.', member: 'MARCO' },
          { text: 'Bisogna comprarla ora che è scesa, rimbalzerà a 900 dollari.', member: 'FILO' },
          { text: 'Il suo sistema di guida autonoma è pericoloso, basta un adesivo sul cartello per fotterlo.', member: 'DAVE' }
        ]
      },
      {
        id: 5,
        text: 'Jeff Bezos ha regalato un mese di Amazon Video gratis. Perché?',
        choices: [
          { text: 'Markettata pazzesca per passare da santo e farsi pubblicità gratuita.', member: 'PIETRO' },
          { text: 'Vuole distruggere definitivamente i negozi fisici e le finanziarie.', member: 'DAVE' },
          { text: 'Perché è un uomo illuminato che ha a cuore la nostra quarantena.', member: 'MARCO' },
          { text: 'Per abituare la gente al servizio e poi fargli pagare l\'abbonamento.', member: 'SIMO' },
          { text: 'Perché Amazon è in vita grazie alla finanza e non alle vendite.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Qual è il miglior broker per iniziare a investire soldi reali?',
        choices: [
          { text: 'Revolut, perché hai 3 operazioni gratis al mese e compri frazioni di azioni.', member: 'DAVE' },
          { text: 'eToro, è un social trading a prova di scemo e non ha commissioni sulla leva.', member: 'PIETRO' },
          { text: 'Intesa San Paolo, è la mia banca e mi fido delle istituzioni italiane.', member: 'FILO' },
          { text: 'Banca Sella o Fineco, ma hanno commissioni fisse troppo alte per noi.', member: 'MARCO' },
          { text: 'Nessuno, meglio tenere i soldi sotto il materasso in questo periodo.', member: 'SIMO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa sono i Coronacoin?',
        choices: [
          { text: 'Una criptovaluta geniale basata sul numero di infetti, salirà del 1000%.', member: 'PIETRO' },
          { text: 'Una truffa ai danni di idioti che non sanno dove buttare i soldi.', member: 'SIMO' },
          { text: 'Un modo per investire nella ricerca medica tramite blockchain.', member: 'MARCO' },
          { text: 'Roba spazzatura che non ha alcun valore legale.', member: 'DAVE' },
          { text: 'Una pazzia nata durante le notti di quarantena.', member: 'FILO' }
        ]
      },
      {
        id: 8,
        text: 'Perché l\'oro è crollato nonostante sia un bene rifugio?',
        choices: [
          { text: 'Perché i grandi investitori hanno venduto oro per coprire le perdite azionarie.', member: 'DAVE' },
          { text: 'È un bug del mercato, tornerà a 60 euro al grammo tra tre mesi.', member: 'SIMO' },
          { text: 'Perché la gente ha bisogno di liquidità immediata per fare la spesa.', member: 'PIETRO' },
          { text: 'Significa che non è una vera crisi economica ma solo passeggera.', member: 'FILO' },
          { text: 'Boh, io l\'oro lo vedo solo nelle collane dei rapper.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Qual è il ruolo ideale per Marco in una startup?',
        choices: [
          { text: 'Controllo qualità e assaggiatore ufficiale (specialmente per il kebab).', member: 'MARCO' },
          { text: 'Project Manager per i rapporti con le nuove generazioni su TikTok.', member: 'DAVE' },
          { text: 'Responsabile dell\'amministrazione e archiviazione fatture MRN.', member: 'SIMO' },
          { text: 'Quello che pacca le riunioni per andare al mare a Marina.', member: 'PIETRO' },
          { text: 'L\'uomo del mistero che non interviene mai ma osserva.', member: 'FILO' }
        ]
      },
      {
        id: 10,
        text: 'Come descriveresti il "Metodo Guzzon" nel marketing?',
        choices: [
          { text: 'Comprare 35k followers su Instagram e poi dire "io i social non li uso".', member: 'SIMO' },
          { text: 'Un cialtrone che ha cancellato i video da YouTube per nascondere le sue lesate.', member: 'DAVE' },
          { text: 'Dire che hai letto 453 libri ma non ricordarti nemmeno la terza differenza del tuo servizio.', member: 'PIETRO' },
          { text: 'Un imprenditore atipico che ha fallito con MySecretary.', member: 'MARCO' },
          { text: 'Un genio del male che voleva creare il gruppo S. Stefano.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Cosa succederà al prezzo del petrolio dopo il crollo a -37 dollari?',
        choices: [
          { text: 'Falliranno tutte le aziende tranne quelle garantite dagli stati.', member: 'PIETRO' },
          { text: 'È il momento di fare all-in ed entrare a prezzi ridicoli.', member: 'FILO' },
          { text: 'Le macchine elettriche diventeranno inutili perché la benzina costerà zero.', member: 'MARCO' },
          { text: 'Le lobby del petrolio dichiareranno guerra alla Cina per rialzare i prezzi.', member: 'DAVE' },
          { text: 'Non cambierà nulla per noi consumatori, ci fottono sempre al distributore.', member: 'SIMO' }
        ]
      },
      {
        id: 12,
        text: 'Qual è la miglior fonte di informazione finanziaria?',
        choices: [
          { text: 'Il Sole 24 Ore cartaceo, anche se a volte invertono i grafici.', member: 'PIETRO' },
          { text: 'Bloomberg e la CNN, i mercati americani anticipano tutto.', member: 'SIMO' },
          { text: 'Yahoo Finance e una calcolatrice, bastano e avanzano.', member: 'DAVE' },
          { text: 'Le dirette di Mentana e i post di Warren Buffett.', member: 'MARCO' },
          { text: 'I report segreti di JP Morgan che filtrano su Telegram.', member: 'FILO' }
        ]
      },
      {
        id: 13,
        text: 'Cosa faresti con un budget di 500 euro reali?',
        choices: [
          { text: 'Tre posizioni su indici USA e Germania, leva 1:10.', member: 'PIETRO' },
          { text: 'Compro un MacBook Pro usato per studiare meglio il trading.', member: 'DAVE' },
          { text: 'Li tengo pronti sul conto in attesa del crollo definitivo della borsa italiana.', member: 'MARCO' },
          { text: 'Compro 50 mascherine e le rivendo a 20 euro l\'una a Bari.', member: 'SIMO' },
          { text: 'Ci apro un conto trading e seguo l\'istinto di Filo.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Perché l\'India è trentesima in classifica nonostante sia un colosso?',
        choices: [
          { text: 'Perché non fanno tamponi e hanno problemi molto più grandi del virus.', member: 'PIETRO' },
          { text: 'Inquinano così tanto il Gange che il virus muore appena entra in acqua.', member: 'MARCO' },
          { text: 'Si stanno muovendo a piedi verso i villaggi, i dati veri sono 200 volte superiori.', member: 'SIMO' },
          { text: 'Hanno l\'immunità di gregge naturale perché vivono nello sporco.', member: 'FILO' },
          { text: 'Aspettano il momento giusto per superare tutti e prendersi il podio.', member: 'DAVE' }
        ]
      },
      {
        id: 15,
        text: 'Qual è il segreto per non farsi fottere dalle commissioni overnight?',
        choices: [
          { text: 'Chiudere tutte le posizioni il venerdì alle 17.29 e riaprirle il lunedì.', member: 'PIETRO' },
          { text: 'Non fare day trading ma investimenti di lungo periodo.', member: 'SIMO' },
          { text: 'Usare solo piattaforme che non hanno interessi notturni come eToro.', member: 'DAVE' },
          { text: 'Non tenere posizioni aperte durante il weekend, paghi 3 volte.', member: 'MARCO' },
          { text: 'Guadagnare così tanto che le commissioni diventano trascurabili.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'politicaita',
    title: 'Politica Italiana & Personaggi Pubblici',
    description: 'Conte, Salvini, Renzi, il MES e i Governatori locali.',
    questions: [
      {
        id: 1,
        text: 'Cosa ne pensi dell\'attacco di Conte a Salvini e Meloni in diretta nazionale?',
        choices: [
          { text: 'Ha fatto benissimo, bisognava ristabilire la verità contro chi diffonde fake news.', member: 'DAVE' },
          { text: 'Una mossa politica scorretta, ha usato un mezzo istituzionale per fare campagna elettorale.', member: 'PIETRO' },
          { text: 'Ha parlato con logica e senso compiuto, finalmente un premier non ignorante.', member: 'SIMO' },
          { text: 'Ha fatto il leso, doveva tacere e lavorare invece di cercare lo scontro.', member: 'FILO' },
          { text: 'Mi è piaciuto, ha blastato i caciaroni che non sanno nemmeno cos\'è il MES.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Qual è la tua posizione sul MES?',
        choices: [
          { text: 'È il "Messia", può risolvere i problemi dell\'Italia se lo usiamo per la sanità.', member: 'PIETRO' },
          { text: 'Una trappola della Germania per commissariarci e rubarci i soldi.', member: 'MARCO' },
          { text: 'Strumento necessario se non ci sono condizioni stringenti, bisogna fidarsi.', member: 'DAVE' },
          { text: 'No al MES per principio, meglio i Coronabond o il Recovery Fund.', member: 'SIMO' },
          { text: 'Il MES è debito, ci stiamo indebitando per generazioni come faceva Berlusconi.', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'Matteo Salvini è ancora un leader credibile?',
        choices: [
          { text: 'È un genio del marketing, sa che cambiare idea ogni tre giorni paga in termini di voti.', member: 'SIMO' },
          { text: 'Un ignorante che non si è nemmeno laureato e spara cazzate per attirare i boomer.', member: 'PIETRO' },
          { text: 'L\'unico che prova a difendere l\'Italia dagli immigrati e dall\'Europa cattiva.', member: 'FILO' },
          { text: 'Sta prendendo troppe cantonate, segnalo ogni suo post per notizia falsa.', member: 'DAVE' },
          { text: 'Mi stava più simpatico un tempo, ultimamente è diventato troppo leso.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi del Governatore De Luca?',
        choices: [
          { text: 'Il miglior comico del 2020, le sue minacce col lanciafiamme sono poesia.', member: 'PIETRO' },
          { text: 'Un politico serio che parla in italiano e si fa capire dalla gente ignorante.', member: 'SIMO' },
          { text: 'Un pazzo che vuole chiudere tutto anche se non c\'è motivo.', member: 'MARCO' },
          { text: 'In Campania servono questi messaggi forti per far stare la gente a casa.', member: 'DAVE' },
          { text: 'Mi fa morire quando insulta i sindaci e la movida.', member: 'FILO' }
        ]
      },
      {
        id: 5,
        text: 'Matteo Renzi: genio incompreso o traditore?',
        choices: [
          { text: 'Il miglior politico della storia italiana, superiore intellettualmente a tutti.', member: 'PIETRO' },
          { text: 'Un egocentrico che vuole sempre stare al centro dell\'attenzione.', member: 'SIMO' },
          { text: 'L\'uomo di Confindustria, pensa solo all\'economia e mai ai cittadini.', member: 'DAVE' },
          { text: 'Uno che ha rovinato il PD e ora cerca di distruggere il governo.', member: 'MARCO' },
          { text: 'Renzie mi sembra sul pezzo, ha capito che il virus girerà per due anni.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Cosa ne pensi di Trump e della sua gestione del virus?',
        choices: [
          { text: 'Un deficiente che si è tolto dall\'accordo di Parigi e nega il clima.', member: 'MARCO' },
          { text: 'Un grande, l\'unico che sta frenando l\'avanzata cinese nel mondo.', member: 'PIETRO' },
          { text: 'Ha già perso le elezioni perché ha detto che il virus non esisteva negli USA.', member: 'SIMO' },
          { text: 'Un manipolatore di masse, la sua comunicazione è da regime.', member: 'DAVE' },
          { text: 'Trump è il top, dice sempre quello che pensa senza filtri.', member: 'FILO' }
        ]
      },
      {
        id: 7,
        text: 'La regolarizzazione di 600.000 immigrati è una buona idea?',
        choices: [
          { text: 'Sì, serve per farli emergere dal nero e fargli pagare le tasse.', member: 'SIMO' },
          { text: 'Una follia, con la disoccupazione che salirà a morte non ha senso darla a loro.', member: 'FILO' },
          { text: 'Giusto, aumenta il PIL e toglie manovalanza alla criminalità organizzata.', member: 'PIETRO' },
          { text: 'Lo fanno solo per avere nuovi braccianti legali per l\'agricoltura.', member: 'MARCO' },
          { text: 'Un provvedimento tardivo, andava fatto anni fa indipendentemente dal virus.', member: 'DAVE' }
        ]
      },
      {
        id: 8,
        text: 'Chi vedresti bene in un "Governo del Cambiamento"?',
        choices: [
          { text: 'Draghi alla presidenza e Cottarelli all\'economia, il dream team dei tecnici.', member: 'PIETRO' },
          { text: 'Giuseppe Conte supportato da una commissione di veri esperti.', member: 'DAVE' },
          { text: 'Qualcuno che non sia né di destra né di sinistra, ma competente.', member: 'MARCO' },
          { text: 'Filippo Mazzotti a capo della comunicazione nazionale.', member: 'SIMO' },
          { text: 'Silvio Berlusconi, l\'unico che sapeva gestire i rapporti internazionali.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Cosa pensi del movimento delle "Sardine"?',
        choices: [
          { text: 'Hanno rotto il cazzo, sono solo dei radical chic che non hanno proposte vere.', member: 'FILO' },
          { text: 'Un\'operazione per fermare Salvini che ha funzionato in Emilia.', member: 'SIMO' },
          { text: 'Gente che canta "Bella Ciao" senza sapere nemmeno perché.', member: 'PIETRO' },
          { text: 'Mi ero trovato in piazza con loro a dicembre, sembravano propositivi.', member: 'DAVE' },
          { text: 'Non li seguo, mi sembrano un po\' troppo legati al PD.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'La Lagarde alla BCE: promossa o bocciata?',
        choices: [
          { text: 'Una puttana, ha fatto salire lo spread di proposito con quella frase.', member: 'PIETRO' },
          { text: 'Una dilettante, ha distrutto in un secondo il lavoro di anni di Draghi.', member: 'MARCO' },
          { text: 'Ha corretto il tiro dopo, ma l\'errore iniziale è stato gravissimo.', member: 'SIMO' },
          { text: 'Voleva favorire le banche tedesche a discapito dell\'Italia.', member: 'DAVE' },
          { text: 'Inadatta al ruolo, ci porterà al default.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Cosa pensi di Luigi Di Maio?',
        choices: [
          { text: 'Uno che non sa parlare e sembra stupido, l\'immagine peggiore dell\'Italia nel mondo.', member: 'FILO' },
          { text: 'Un miracolato che ha chiesto l\'impeachment di Mattarella e poi ha chiesto scusa.', member: 'SIMO' },
          { text: 'Meglio di Gallera, almeno lui ogni tanto ammette di non sapere le cose.', member: 'PIETRO' },
          { text: 'Ha perso tutto il potere che aveva nei 5 Stelle, ormai è finito.', member: 'MARCO' },
          { text: 'Non ha nemmeno la laurea, non dovrebbe stare al ministero degli esteri.', member: 'DAVE' }
        ]
      },
      {
        id: 12,
        text: 'La gestione della "Fase 2" è stata coerente?',
        choices: [
          { text: 'No, hanno aperto le librerie ma non i parrucchieri, non ha senso logico.', member: 'DAVE' },
          { text: 'È un lockdown mascherato, hanno solo cambiato il nome alla fase 1.', member: 'MARCO' },
          { text: 'Hanno messo la responsabilità in mano ai cittadini, una mossa da geni.', member: 'SIMO' },
          { text: 'Ridicola, puoi vedere la zia ma non l\'amico, indimostrabile.', member: 'PIETRO' },
          { text: 'Bisognava riaprire tutto subito, la gente sta morendo di fame non di virus.', member: 'FILO' }
        ]
      },
      {
        id: 13,
        text: 'Cosa pensi dei rimborsi da 600 euro per le partite IVA?',
        choices: [
          { text: 'Una miseria, non ci paghi nemmeno le bollette dell\'ufficio.', member: 'FILO' },
          { text: 'Assistenzialismo puro che serve solo a comprare voti.', member: 'PIETRO' },
          { text: 'Meglio di niente, ma i soldi devono arrivare subito, non a settembre.', member: 'MARCO' },
          { text: 'Bisognerebbe darli solo a chi ha avuto cali di fatturato reali.', member: 'DAVE' },
          { text: 'Lo stato dovrebbe dare un indennizzo maggiore a chi è stato costretto a chiudere.', member: 'SIMO' }
        ]
      },
      {
        id: 14,
        text: 'La Chiesa che vuole riaprire a Pasqua: cosa ne pensi?',
        choices: [
          { text: 'Vogliono solo alleggerire la spesa INPS facendo infettare i vecchi.', member: 'PIETRO' },
          { text: 'Follia, sono delle bombe di contagio per i credenti.', member: 'SIMO' },
          { text: 'Una scelta coraggiosa per dare speranza alle persone.', member: 'MARCO' },
          { text: 'Se aprono loro allora devono aprire anche i centri commerciali.', member: 'DAVE' },
          { text: 'Maledetti cristiani, pensano solo alle loro canzoncine.', member: 'FILO' }
        ]
      },
      {
        id: 15,
        text: 'Chi è il vero "nemico dell\'Italia" in Europa?',
        choices: [
          { text: 'L\'Olanda e i paesi del nord, ci chiamano PIGS e ci godono a vederci a pecora.', member: 'PIETRO' },
          { text: 'La Germania, che ci blocca le mascherine e poi chiede scusa in ritardo.', member: 'MARCO' },
          { text: 'Noi stessi, perché siamo un popolo di evasori e analfabeti funzionali.', member: 'SIMO' },
          { text: 'I burocrati di Bruxelles che non capiscono le esigenze dei singoli stati.', member: 'DAVE' },
          { text: 'La Francia, che bara sui morti e non fa i tamponi.', member: 'FILO' }
        ]
      }
    ]
  },
  {
    id: 'calciotattica',
    title: 'Calcio, Tattica & Bel Giuoco',
    description: 'Sarri vs Allegri, portieri registi, Serie A vs Premier e infortuni.',
    questions: [
      {
        id: 1,
        text: 'Maurizio Sarri alla Juve: rivoluzione o fallimento?',
        choices: [
          { text: 'Fallimento totale, il bel gioco non è mai esistito e giochiamo peggio di prima.', member: 'FILO' },
          { text: 'Va aspettato fino all\'anno prossimo, deve avere i giocatori adatti al suo calcio.', member: 'SIMO' },
          { text: 'Sta facendo più di quel che deve con una squadra costruita senza senso da Paratici.', member: 'PIETRO' },
          { text: 'La sua mano non si vede, la squadra vince solo per le giocate dei singoli.', member: 'DAVE' },
          { text: 'Se vince il campionato rimane, altrimenti lo cacciano subito.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Qual è il problema principale di questa Juve?',
        choices: [
          { text: 'Il centrocampo schifoso, Matuidi e Khedira sono troppo vecchi per correre.', member: 'DAVE' },
          { text: 'L\'assenza di Chiellini, senza il capitano la difesa non ha sicurezza.', member: 'MARCO' },
          { text: 'Ronaldo, perché per farlo giocare bisogna sacrificare l\'equilibrio di tutta la squadra.', member: 'PIETRO' },
          { text: 'La lentezza nel muovere palla, facciamo 25 minuti di passaggi prima di tirare.', member: 'SIMO' },
          { text: 'Ramsey e Rabiot, due pesi morti che prendono milioni senza fare nulla.', member: 'FILO' }
        ]
      },
      {
        id: 3,
        text: 'Chiellini è ancora il difensore più forte del mondo?',
        choices: [
          { text: 'Sì, nettamente, la sua esperienza è la prima leva per vincere.', member: 'MARCO' },
          { text: 'Forse un tempo, a 35 anni dopo un infortunio al crociato è dura tornare top.', member: 'SIMO' },
          { text: 'Meglio Demiral, è più giovane e ha più fame di lui.', member: 'PIETRO' },
          { text: 'Senza di lui la Juve prende gol da chiunque, anche dal Verona.', member: 'FILO' },
          { text: 'È un rischio portarlo all\'Europeo se non recupera il ritmo partita.', member: 'DAVE' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi dei portieri che devono giocare con i piedi?',
        choices: [
          { text: 'Una moda stupida che porta solo a fare cazzate alla Ospina.', member: 'PIETRO' },
          { text: 'Donnarumma ne fa una a partita, il suo valore è calato a 30 milioni.', member: 'DAVE' },
          { text: 'Se il portiere sa fare assist allora vale più di 60 milioni, vedi Alisson.', member: 'SIMO' },
          { text: 'Szczesny è fortissimo, ma a volte sembra un handicap quando prova i lanci.', member: 'FILO' },
          { text: 'Buffon a 42 anni è ancora meglio di metà dei portieri di Serie A.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'La Serie A è diventata come la Premier League?',
        choices: [
          { text: 'Sì, valanghe di 5-0 ogni domenica, il livello delle difese è calato.', member: 'SIMO' },
          { text: 'No, la Premier è un campionato di lesi strapagati, noi siamo tatticamente superiori.', member: 'PIETRO' },
          { text: 'Magari lo fosse, avremmo stadi di proprietà e non saremmo a pecora.', member: 'DAVE' },
          { text: 'La Serie A è super competitiva, solo Simo pensa il contrario.', member: 'MARCO' },
          { text: 'In Premier corrono il triplo, noi camminiamo in campo.', member: 'FILO' }
        ]
      },
      {
        id: 6,
        text: 'Chi è l\'attaccante più forte della Serie A oggi?',
        choices: [
          { text: 'Immobile, i numeri parlano chiaro, è un record-man assoluto.', member: 'FILO' },
          { text: 'Ronaldo, ha 25 anni di età biologica e segna in ogni partita.', member: 'PIETRO' },
          { text: 'Dybala, quando è in forma è un Dio e gli riesce tutto.', member: 'DAVE' },
          { text: 'Lukaku, trascina l\'Inter da solo insieme a Lautaro.', member: 'SIMO' },
          { text: 'Ilicic, è buggato e fa gol da centrocampo.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa pensi di Adrien Rabiot?',
        choices: [
          { text: 'Migliore in campo in molte partite, ha fatto più interdizione di tutti.', member: 'PIETRO' },
          { text: 'Un disastro, sbaglia controlli banali e sembra a disagio col pallone.', member: 'FILO' },
          { text: 'Giocatore tecnico ma pigro, dovrebbe dimezzarsi lo stipendio.', member: 'DAVE' },
          { text: 'Ha bisogno di tempo per adattarsi ai ritmi del calcio italiano.', member: 'SIMO' },
          { text: 'Un altro parametro zero che ci perseguiterà fino a fine contratto.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Il Verona di Juric è la vera sorpresa dell\'anno?',
        choices: [
          { text: 'Sì, giocano bene a calcio con una squadraccia di scarti.', member: 'SIMO' },
          { text: 'Hanno sculato un sacco di partite, non dureranno.', member: 'PIETRO' },
          { text: 'Kumbulla e Faraoni sono giocatori da top club ora.', member: 'MARCO' },
          { text: 'Hanno battuto la Juve perché noi eravamo in crisi nera.', member: 'DAVE' },
          { text: 'Meriterebbero di lottare per l\'Europa League.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Cosa succederà alla Champions League quest\'anno?',
        choices: [
          { text: 'La vince il Bayern Monaco, sono gli unici che non hanno sospeso il campionato.', member: 'PIETRO' },
          { text: 'L\'Atalanta può arrivare in semifinale se becca il Lipsia.', member: 'MARCO' },
          { text: 'Sarà un terno al lotto per via dello stop di tre mesi.', member: 'DAVE' },
          { text: 'Il Real di Zidane è immortale, vincerà ancora lui.', member: 'SIMO' },
          { text: 'La vincerà chi ha più grinta e meno positivi al Covid.', member: 'FILO' }
        ]
      },
      {
        id: 10,
        text: 'Cosa pensi dell\'esclusione di Emre Can dalla lista Champions?',
        choices: [
          { text: 'Una scelta scellerata che ha svalutato un giocatore da 40 milioni.', member: 'SIMO' },
          { text: 'Giusto, non era adatto al gioco di Sarri e bisognava tagliarlo.', member: 'DAVE' },
          { text: 'Sarri lo ha rovinato, la società non lo ha protetto per niente.', member: 'PIETRO' },
          { text: 'Poteva essere utile come difensore aggiunto in emergenza.', member: 'MARCO' },
          { text: 'Can è forte, lo ha dimostrato al Dortmund facendo gol pazzeschi.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Qual è il modulo perfetto per la Juve?',
        choices: [
          { text: '4-3-3 con esterni a piede invertito per fare il bel giogo.', member: 'DAVE' },
          { text: '4-3-1-2 con Dybala trequartista dietro Ronaldo e Higuain.', member: 'FILO' },
          { text: 'Difesa a 3 con Bonucci mediano al rientro di Chiellini.', member: 'PIETRO' },
          { text: 'Albero di Natale, 4-3-2-1, per coprire meglio il centrocampo.', member: 'SIMO' },
          { text: '3-5-2 per sfruttare gli esterni che corrono come pazzi.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Arthur del Barcellona è un buon acquisto?',
        choices: [
          { text: 'Il miglior centrocampista del mondo, tecnico e fisico insieme.', member: 'SIMO' },
          { text: 'Fa panchina al Barça, è il "vecino" dei blaugrana.', member: 'PIETRO' },
          { text: 'Un altro giocatore di 1 metro e 70 che non serve a nulla.', member: 'FILO' },
          { text: 'Ha il fisico di un 13enne, non mi convince per niente.', member: 'DAVE' },
          { text: 'Speriamo che si adatti subito, ma il suo disrespect per la Juve è tanto.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'La Serie A a porte chiuse: chi ne beneficia?',
        choices: [
          { text: 'L\'Inter, perché ha una panchina corta e meno pressione dal pubblico.', member: 'DAVE' },
          { text: 'La Lazio, perché non ha le coppe e può concentrarsi solo sul campo.', member: 'SIMO' },
          { text: 'Nessuno, è un\'atmosfera da amichevole estiva che deprime tutti.', member: 'PIETRO' },
          { text: 'Le squadre piccole, perché giocare allo Stadium vuoto è più facile.', member: 'MARCO' },
          { text: 'La Juve, perché Agnelli ha il peso politico per decidere i rinvii.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'Bernardeschi "mezzala": invenzione o colpo di genio?',
        choices: [
          { text: 'Invenzione di Sarri perché non sa dove metterlo, giocatore inutile.', member: 'SIMO' },
          { text: 'Può funzionare se impara a fare gli inserimenti che faceva a Firenze.', member: 'DAVE' },
          { text: 'Da vendere subito alla Roma per Zaniolo o Pellegrini.', member: 'PIETRO' },
          { text: 'Bernardeschi è da radiare, non sa nemmeno in che posizione gioca.', member: 'FILO' },
          { text: 'Una pena così non si vedeva da anni, spero lo vendano.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Chi è il miglior trequartista italiano del momento?',
        choices: [
          { text: 'Lorenzo Pellegrini, giocatore completo che cambia gli equilibri.', member: 'PIETRO' },
          { text: 'Castrovilli, ha fatto il fenomeno quest\'anno alla Fiorentina.', member: 'DAVE' },
          { text: 'Zaccagni del Verona, ha dimostrato di valere un top club.', member: 'SIMO' },
          { text: 'Saponara, da quando è al Lecce ha svoltato la squadra.', member: 'FILO' },
          { text: 'Non ce ne sono di forti, il livello è calato troppo.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'calciomanagement',
    title: 'Calcio & Management: La fiera del DS leso',
    description: 'Calciomercato, Tudor, Comolli, Marotta e gli esuberi.',
    questions: [
      {
        id: 1,
        text: 'Kolo Muani alla Juve per 60 milioni. Qual è il tuo verdetto?',
        choices: [
          { text: 'È un leso, ne vale massimo 35. A 80 prendevi Gyokeres.', member: 'FILO' },
          { text: 'Se spendi 60 per metterlo trequartista meriti il fallimento.', member: 'DAVE' },
          { text: 'Il PSG ha alzato il prezzo perché Comolli è un demente.', member: 'SIMO' },
          { text: 'Incredibile che lo strapaghino dopo averlo avuto in prestito.', member: 'PIETRO' },
          { text: 'Solo noi possiamo pagare 50 milioni un cesso del genere.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'L’Inter affida la panchina a Chivu. Cosa ne pensi?',
        choices: [
          { text: 'Chivu al Ravenna? Sarebbe il suo livello.', member: 'MARCO' },
          { text: 'Chivu è un neofita, non arriverà in Champions.', member: 'SIMO' },
          { text: 'Meglio lui del "giochismo" di Thiago Motta.', member: 'DAVE' },
          { text: 'Con Chivu l\'Inter è a rischio decimo posto.', member: 'FILO' },
          { text: 'Vediamo se è un Pirlo o se dura fino a Natale.', member: 'PIETRO' }
        ]
      },
      {
        id: 3,
        text: 'Manuel Locatelli titolare inamovibile. Reazione?',
        choices: [
          { text: 'È il cancro della squadra, ma gli allenatori lo amano.', member: 'PIETRO' },
          { text: 'BASTA LOCATELLI! Non fa un passaggio verticale neanche per sbaglio.', member: 'FILO' },
          { text: 'Prende 6.5 anche se svirgola ogni pallone. Mafia.', member: 'SIMO' },
          { text: 'Passano gli anni ma lui è sempre lì a fare danni.', member: 'DAVE' },
          { text: 'Schifo, vergogna e putridume.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Comolli come Direttore Sportivo della Juve.',
        choices: [
          { text: 'Sta dormendo da tre mesi, ridatemi Nedved.', member: 'FILO' },
          { text: 'Peggio di Paratici e Giuntoli messi insieme.', member: 'MARCO' },
          { text: 'Si affida agli algoritmi ma compra solo gente che si rompe.', member: 'PIETRO' },
          { text: 'Vende i giovani a 10 e compra i rottami a 40.', member: 'DAVE' },
          { text: 'Ha venduto Nico Gonzalez a 33 milioni, bisogna chiedergli scusa.', member: 'SIMO' }
        ]
      },
      {
        id: 5,
        text: 'La gestione di Lautaro Martinez all’Inter.',
        choices: [
          { text: 'Vale 100 milioni? Se qualcuno li offre gli danno la 104.', member: 'FILO' },
          { text: 'È uno dei più forti al mondo, ma Chivu non lo valorizza.', member: 'SIMO' },
          { text: 'Meglio scambiarlo con uno che corre 90 minuti.', member: 'DAVE' },
          { text: 'Lautaro meglio di Trezeguet, ma i juventini non lo ammettono.', member: 'PIETRO' },
          { text: 'Un montato scarsissimo, starebbe bene al Ravenna.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Douglas Luiz torna in Premier League.',
        choices: [
          { text: 'Ennesima minusvalenza di un giocatore che non ha mai giocato.', member: 'DAVE' },
          { text: 'Lo avrei tenuto titolare a palleggiare con Fagioli.', member: 'FILO' },
          { text: 'Venduto per pagare la buonuscita di Vlahovic.', member: 'SIMO' },
          { text: 'In Premier tornerà un fenomeno, la Juve brucia tutti.', member: 'PIETRO' },
          { text: 'Altra operazione da deficienti.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Cosa pensi di Alberto Costa?',
        choices: [
          { text: 'Chi è? Mai sentito nominare.', member: 'FILO' },
          { text: 'Venduto a 20 milioni? Comolli è un mostro o gli altri sono scemi.', member: 'SIMO' },
          { text: 'Peggio di Kelly, non sa stare in campo.', member: 'MARCO' },
          { text: 'Un prospetto che diventerà forte in un ambiente non marcio.', member: 'PIETRO' },
          { text: 'Classico acquisto da "algoritmo" che non ha mai debuttato.', member: 'DAVE' }
        ]
      },
      {
        id: 8,
        text: 'L\'Atalanta rifiuta 45 milioni per Lookman.',
        choices: [
          { text: 'Lo tengono in ostaggio, hanno un retaggio razziale.', member: 'PIETRO' },
          { text: 'A 45 milioni era da vendere bendati.', member: 'MARCO' },
          { text: 'Se resta fuori rosa perdono capitale e stipendio. Lesi.', member: 'SIMO' },
          { text: 'Meglio per noi, almeno non va a rinforzare l\'Inter.', member: 'DAVE' },
          { text: 'Lookman a 45? Ma se ne vale massimo 25.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Il mercato della Lazio di Lotito.',
        choices: [
          { text: 'Lotito continua a cucinare con due spicci.', member: 'PIETRO' },
          { text: 'Squadra da metà classifica, non mi interessa.', member: 'FILO' },
          { text: 'Hanno preso Tavares che è un rottame peggio di Cabal.', member: 'DAVE' },
          { text: 'Lotito è il padre dei mafiosi ma sa vendere.', member: 'MARCO' },
          { text: 'Se prendono Rovella a 40 milioni Marotta è drogato.', member: 'SIMO' }
        ]
      },
      {
        id: 10,
        text: 'Vlahovic e la risoluzione del contratto.',
        choices: [
          { text: 'Finalmente! Giocatore da Serie C.', member: 'MARCO' },
          { text: 'Costa 24 milioni l\'anno, è una zavorra che blocca tutto.', member: 'SIMO' },
          { text: 'Lo svincolano per prendere un altro nero con le treccine.', member: 'PIETRO' },
          { text: 'Si fa svincolare per rubare l\'ingaggio altrove. Pezzo di merda.', member: 'DAVE' },
          { text: 'Tribuna fissa tutto l\'anno se non rinnova al ribasso.', member: 'FILO' }
        ]
      },
      {
        id: 11,
        text: 'Il ritorno di Massimiliano Allegri al Milan.',
        choices: [
          { text: 'Farà passare un quarto posto per un miracolo.', member: 'PIETRO' },
          { text: 'È un mostro, vince lo scudetto con una squadra di morti.', member: 'SIMO' },
          { text: 'Allegri > Conte, ma non volete ammetterlo.', member: 'FILO' },
          { text: 'Spero che la squadra gli giochi contro dal primo giorno.', member: 'DAVE' },
          { text: 'Schifo, giocherà con il 5-4-1 in casa.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Nico Paz al Como per 10 milioni.',
        choices: [
          { text: 'Paz > Yildiz. L\'unico colpo serio dell\'estate.', member: 'PIETRO' },
          { text: 'Il Como ha più ambizione della Juve.', member: 'DAVE' },
          { text: 'Il Real ha la recompra, il Como non decide nulla.', member: 'SIMO' },
          { text: 'Magari lo avessimo preso noi invece di spendere 40 per Nico Gonzalez.', member: 'FILO' },
          { text: 'Bel giocatore, ma sparirà nel giro di un anno.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'Il ruolo di trequartista per McKennie.',
        choices: [
          { text: 'È un insulto al calcio, ma Tudor è un fenomeno per voi.', member: 'SIMO' },
          { text: 'Parte ogni anno fuori rosa e finisce capitano. Inesplicabile.', member: 'DAVE' },
          { text: 'Almeno si inserisce, meglio di Koopmeiners che dorme.', member: 'FILO' },
          { text: 'Sarebbe il titolare perfetto per la Lazio di Sarri.', member: 'PIETRO' },
          { text: 'Panzone paracarro, fuori dai coglioni.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'La cessione di Soule alla Roma.',
        choices: [
          { text: 'Errore storico, valeva 50 milioni.', member: 'FILO' },
          { text: 'Per ora non ha dimostrato nulla più dei 25 milioni incassati.', member: 'SIMO' },
          { text: 'Meglio di Conceicao a mani basse.', member: 'DAVE' },
          { text: 'La Juve svende il futuro per comprare il presente bollito.', member: 'PIETRO' },
          { text: 'Giuntoli ci ha disintegrati vendendo lui.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Le amichevoli estive della Juventus.',
        choices: [
          { text: 'Perdere col Benevento e col Parma è un segnale di scudetto?', member: 'DAVE' },
          { text: 'Risultati inutili, conta solo la condizione atletica.', member: 'FILO' },
          { text: 'Tudor out se non vince la prossima.', member: 'MARCO' },
          { text: 'Mi sto segando sulle vostre sconfitte estive.', member: 'PIETRO' },
          { text: 'Avete la squadra in turnover e Bremer rotto, cosa volete?', member: 'SIMO' }
        ]
      }
    ]
  },
  {
    id: 'logistica',
    title: 'Logistica & Grandi Eventi: Il Manuale del Pacco',
    description: 'Reunion, trasporti, BlaBlaCar e imprevisti domestici.',
    questions: [
      {
        id: 1,
        text: 'È giovedì pomeriggio e devi decidere come scendere a Ravenna.',
        choices: [
          { text: 'Vengo in macchina così non ho pensieri per la domenica.', member: 'DAVE' },
          { text: 'Prendo il treno delle 18:53 da Bologna, alle 19:53 sono lì.', member: 'SIMO' },
          { text: 'BlaBlaCar a 12€, risparmio e viaggio con una bionda.', member: 'FILO' },
          { text: 'Arrivo sabato a pranzo, venerdì ho un compleanno a Vado.', member: 'PIETRO' },
          { text: 'Io sono già qui, vi aspetto per i pop-corn.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Ti montano i condizionatori proprio il giorno della reunion. Cosa fai?',
        choices: [
          { text: 'Annulliamo tutto, devo pulire il tufo e i mobili spostati.', member: 'DAVE' },
          { text: 'Ma falli montare un altro giorno, sei un leso enorme!', member: 'FILO' },
          { text: 'Vengo a Monza ad aiutarti a pulire se serve.', member: 'SIMO' },
          { text: 'Ennesima scusa per non venire, non reggi la pressione.', member: 'PIETRO' },
          { text: 'La reunion con l\'idraulico sì e la nostra no?', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Il viaggio con "Silvana" di BlaBlaCar per 12 euro.',
        choices: [
          { text: 'Dave ha perso ore di reunion per 12 euro e una 45enne.', member: 'FILO' },
          { text: 'Se è antipatica è un fallimento totale, dacci il nome!', member: 'SIMO' },
          { text: 'L\'ho portata fino a Lido Adriano, mi è costato più di benzina.', member: 'DAVE' },
          { text: 'Dave taxi dei maranza, non vale la pena per 8 euro netti.', member: 'PIETRO' },
          { text: 'Doveva essere una topa e invece era una zia.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Prenotazione cena alla "Casa delle Aie" senza essere soci.',
        choices: [
          { text: 'Andiamo alle 22:30, vedrete che non c\'è fila.', member: 'MARCO' },
          { text: 'Ma serve la tessera, altrimenti facciamo 2 ore di coda!', member: 'SIMO' },
          { text: 'Se non c\'è il tavolo io non vengo, odio stare in piedi.', member: 'FILO' },
          { text: 'Mi immagino Salvini ai fornelli in quel posto di destra.', member: 'PIETRO' },
          { text: 'Kebabberia e via, non complichiamo la vita.', member: 'DAVE' }
        ]
      },
      {
        id: 5,
        text: 'La gestione del sonno post-serata barcaccia.',
        choices: [
          { text: 'Se dormo 4 ore sto benissimo... (e poi svengo).', member: 'DAVE' },
          { text: 'Mi sono svegliato ora (alle 13:00), ero in riserva.', member: 'MARCO' },
          { text: 'Ho preso un caffè doppio a mezzanotte e non ho dormito nulla.', member: 'FILO' },
          { text: 'Mi sveglio alle 10, faccio colazione e sono operativo.', member: 'SIMO' },
          { text: 'Io parto alle 2 di notte per non trovare traffico.', member: 'PIETRO' }
        ]
      },
      {
        id: 6,
        text: 'Il "People Mover" di Bologna a 16 euro.',
        choices: [
          { text: 'Una truffa, non ho mai pagato così tanto in Europa.', member: 'DAVE' },
          { text: 'Visionario, ti porta in aeroporto in 7 minuti.', member: 'SIMO' },
          { text: 'Meglio il bus urbano a 2 euro, siete degli spendaccioni.', member: 'FILO' },
          { text: 'Io vado a piedi piuttosto che dare soldi a Lepore.', member: 'PIETRO' },
          { text: 'In Cina lo avrebbero costruito in 6 giorni e gratis.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Smart working dalla reunion. Dove ti piazzi?',
        choices: [
          { text: 'Balconcino con arietta e fibra ottica per i business.', member: 'SIMO' },
          { text: 'Bar marcio sotto l\'ufficio, tanto non c\'è mai nessuno.', member: 'FILO' },
          { text: 'Luogo privato, se sentono le tazzine di caffè mi licenziano.', member: 'DAVE' },
          { text: 'Io lavoro solo se mi pagano un milione come i chirurghi.', member: 'PIETRO' },
          { text: 'Io sono in ferie, ma il capo mi ha fatto lavorare sabato mattina.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'L\'abbigliamento ufficiale per la serata al Matilda/Touche.',
        choices: [
          { text: 'Maglietta "Fight Fight Fight" di Trump.', member: 'FILO' },
          { text: 'Camicia sbottonata e Rolex falso per puntare le Gilf.', member: 'PIETRO' },
          { text: 'Qualcosa di sobrio, non siamo più adolescenti.', member: 'DAVE' },
          { text: 'Polo Palace regalata a Londra, un tocco di classe.', member: 'SIMO' },
          { text: 'Costume e infradito, tanto siamo al mare.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Il ritorno a Milano la domenica sera.',
        choices: [
          { text: 'Parto alle 16:43 col treno diretto, non voglio rischiare.', member: 'DAVE' },
          { text: 'Rimanete a dormire, lunedì facciamo smart insieme!', member: 'SIMO' },
          { text: 'Ripartire domenica è una merda, meglio il lunedì mattina.', member: 'FILO' },
          { text: 'Io vado via alle 23:00, la notte la strada è mia.', member: 'PIETRO' },
          { text: 'Ma restiamo a vedere la F1 e poi si decide.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'La batteria della macchina che muore prima di partire.',
        choices: [
          { text: 'Successo ieri sera, 210 euro bruciati. Zio cane.', member: 'DAVE' },
          { text: 'È un classico, potevi cambiarla 10 anni fa.', member: 'FILO' },
          { text: 'Colpa delle auto diesel vecchie, passa all\'elettrico.', member: 'SIMO' },
          { text: 'Dave ha la freccetta blu di PES, è sfigato forte.', member: 'PIETRO' },
          { text: 'Almeno è successo a casa e non in autostrada.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Dove parcheggiare a Bologna per l\'aeroporto?',
        choices: [
          { text: 'Parcheggio dell\'aeroporto, costa ma sei comodo.', member: 'SIMO' },
          { text: 'Mettila a Borgo Panigale e prendi un taxi, ti pelano meno.', member: 'PIETRO' },
          { text: 'Evita Borgo, è un dormitorio di maranza pericolosi.', member: 'DAVE' },
          { text: 'Chiedo a mio cugino se mi lascia il garage.', member: 'FILO' },
          { text: 'Io vado in stazione e prendo il treno, zero sbatte.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Organizzare l\'addio al celibato di Simo.',
        choices: [
          { text: 'Las Vegas o Amsterdam, quartiere a luci rosse.', member: 'FILO' },
          { text: 'Un tavolo riservato "Barcaccia" lontano da Vera.', member: 'DAVE' },
          { text: 'Basta che ci sia da bere e belle simmenthal.', member: 'PIETRO' },
          { text: 'Lo organizzo io: tour dei reattori nucleari in Francia.', member: 'SIMO' },
          { text: 'Mi basta che non finisca in rissa come l\'asta.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'La spesa per il weekend barcaccia.',
        choices: [
          { text: '40€ per un pranzo? Mi sento un napoletano derubato.', member: 'PIETRO' },
          { text: 'Ho stimato 100€ tra benzina e casello, meglio il treno.', member: 'DAVE' },
          { text: 'Paghiamo tutto con le quote del Fanta che Pietro deve dare.', member: 'SIMO' },
          { text: 'Io non ho abbonamenti, risparmio tutto per il casino.', member: 'FILO' },
          { text: 'Dividiamo tutto per 5 e non rompiamo i coglioni.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'L\'ospitalità a casa Medri.',
        choices: [
          { text: 'Letto a una piazza e mezza o materasso gonfiabile?', member: 'SIMO' },
          { text: 'Se mi aprite alle 3 di notte vi porto una tisana.', member: 'PIETRO' },
          { text: 'Vengo solo se c\'è l\'aria condizionata a palla.', member: 'DAVE' },
          { text: 'Palazzo Palace è pronto per ospitare l\'elite.', member: 'FILO' },
          { text: 'Basta che non russate come dei trichechi.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Il traffico del venerdì pomeriggio verso la riviera.',
        choices: [
          { text: 'Bollino nero, una follia mettersi in strada.', member: 'FILO' },
          { text: 'Maps dice 3 ore, ma io ce ne metto 2 e 40.', member: 'SIMO' },
          { text: 'Mi becco l\'ora di punta a Bologna, sono spacciato.', member: 'DAVE' },
          { text: 'Io parto sabato mattina, partenza intelligente.', member: 'PIETRO' },
          { text: 'Se piove non c\'è nessuno, spero nel temporale.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'ideologie',
    title: 'Ideologie & Visione del Mondo: Tra Trump e il Green',
    description: 'Politica, Trump, Green, Immigrazione, Israele e Palestina.',
    questions: [
      {
        id: 1,
        text: 'Cosa ne pensi del limite di 30 km/h a Bologna?',
        choices: [
          { text: 'Lepore è un genio visionario, ha risparmiato 150 milioni.', member: 'SIMO' },
          { text: 'Una cagata ideologica che danneggia solo chi lavora.', member: 'DAVE' },
          { text: 'Inutile, le bici vanno più forte delle macchine ora.', member: 'PIETRO' },
          { text: 'Grazie Lepore, ora ci mettiamo il doppio per fare 2 km.', member: 'FILO' },
          { text: 'In Cina corrono a 500 orari e noi torniamo al medioevo.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'Donald Trump ha dichiarato la fine della guerra in 24 ore.',
        choices: [
          { text: 'Numero 1 assoluto, l\'unico che capisce qualcosa.', member: 'FILO' },
          { text: 'È un matto pericoloso, egoista e senza scrupoli.', member: 'SIMO' },
          { text: 'Ha risolto 7 guerre a parole, nei fatti è un meme.', member: 'PIETRO' },
          { text: 'Meglio lui dei comunisti che vogliono le tasse al 50%.', member: 'DAVE' },
          { text: 'Un buffone, ma almeno fa ridere.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'La questione dei Diesel Euro 5 e il blocco della circolazione.',
        choices: [
          { text: 'Una macchina di 10 anni è nuova, vietarla è da criminali.', member: 'FILO' },
          { text: 'Serve un incentivo statale, non si può obbligare la gente a spendere 30k.', member: 'PIETRO' },
          { text: 'In Pianura Padana moriamo di cancro, i catorci vanno rottamati.', member: 'SIMO' },
          { text: 'Misura inutile, lo smog viene dalle caldaie non dalle auto.', member: 'DAVE' },
          { text: 'Io tra 10 anni vorrei trovare un\'auto a meno di 15.000€.', member: 'MARCO' }
        ]
      },
      {
        id: 4,
        text: 'Il conflitto in Medio Oriente e il ruolo di Israele.',
        choices: [
          { text: 'È un genocidio sistematico per motivi economici.', member: 'SIMO' },
          { text: 'Israele ha il diritto di difendersi dai terroristi.', member: 'FILO' },
          { text: 'Stato canaglia e terrorista, fuori dall\'Europa subito.', member: 'PIETRO' },
          { text: 'Una minaccia costante, non so come facciano a farsi odiare così.', member: 'DAVE' },
          { text: 'Un massacro schifoso, ma zio Adolfo era peggio.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Cosa pensi di Ilaria Salis e della sinistra attuale?',
        choices: [
          { text: 'Personaggi di poco spessore, andrebbero mandati in Ungheria.', member: 'FILO' },
          { text: 'La odiate solo perché la destra vi ha fatto il lavaggio del cervello.', member: 'PIETRO' },
          { text: 'Rappresenta un\'istanza corretta ma comunicata male.', member: 'SIMO' },
          { text: 'Una zecca che cavalca le mode del momento.', member: 'DAVE' },
          { text: 'Schifo e pena, nient\'altro.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'L\'integrazione e la sicurezza nelle stazioni italiane.',
        choices: [
          { text: 'Ci vogliono le ronde e l\'esercito, pulizia immediata.', member: 'FILO' },
          { text: 'Il problema sono i contesti degradati, non la razza.', member: 'PIETRO' },
          { text: 'Bisogna scortare le donne alle auto, è diventato pericoloso.', member: 'SIMO' },
          { text: 'I maranza vanno sgominati o mandati via col foglio di via.', member: 'DAVE' },
          { text: 'In carcere campano meglio che a lavoro, 400 euro di multa è ridicolo.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Matteo Renzi: Genio o Viscido?',
        choices: [
          { text: 'Il miglior politico italiano, porta tutti a spasso.', member: 'PIETRO' },
          { text: 'Un viscido che cambia alleanza ogni mezz\'ora.', member: 'FILO' },
          { text: 'Qualità pura, l\'unico vero riformista rimasto.', member: 'SIMO' },
          { text: 'Ha rovinato tutto personalizzando il referendum.', member: 'DAVE' },
          { text: 'Un pagliaccio, ma almeno sa parlare inglese.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'La "Global Solidarity Flottilla" per Gaza.',
        choices: [
          { text: 'Eroi della pace, meriterebbero il Nobel al posto di Trump.', member: 'PIETRO' },
          { text: 'Un branco di provocatori che rischia di far scoppiare la guerra.', member: 'DAVE' },
          { text: 'Manie di protagonismo che spostano il focus dai veri problemi.', member: 'SIMO' },
          { text: 'Andrebbero bombardati direttamente da Mattarella.', member: 'FILO' },
          { text: 'Stupidi che si fanno tenere 24 ore senza mangiare per un post.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Le auto elettriche cinesi (Xiaomi, Leapmotor).',
        choices: [
          { text: 'Superiorità umiliante, l\'Europa ha già perso questa sfida.', member: 'SIMO' },
          { text: 'Plasticoni cinesi, ridatemi il motore a scoppio.', member: 'FILO' },
          { text: 'Ottime se costano 25k e hanno la tecnologia avanzata.', member: 'PIETRO' },
          { text: 'Se si rompe un pezzo devi aspettare mesi, non convengono.', member: 'DAVE' },
          { text: 'Io spero solo che tra 10 anni costino meno.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'La Russia di Putin e il conflitto in Ucraina.',
        choices: [
          { text: 'Preferisco la Russia all\'Ucraina e a Zelensky.', member: 'FILO' },
          { text: 'Zelensky vuole solo guadagnarci, è uno schifoso.', member: 'DAVE' },
          { text: 'Putin deve morire, ha distrutto l\'ordine mondiale.', member: 'SIMO' },
          { text: 'La NATO sta provocando da anni, non siamo innocenti.', member: 'PIETRO' },
          { text: 'Meglio le ucraine delle israeliane comunque.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Il ponte sullo Stretto di Messina.',
        choices: [
          { text: 'Fondamentale per la NATO e la difesa europea.', member: 'FILO' },
          { text: 'Uno spreco di miliardi mentre le strade cadono a pezzi.', member: 'PIETRO' },
          { text: 'Atto di invasione dei giudici comunisti contro il progresso.', member: 'DAVE' },
          { text: 'Un disastro ecologico annunciato, basta cemento.', member: 'SIMO' },
          { text: 'In Cina lo avrebbero finito nel 2012.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'La settimana lavorativa di 4 giorni o 72 ore?',
        choices: [
          { text: 'Piuttosto vado a rubare, 72 ore è la morte.', member: 'SIMO' },
          { text: 'Meno proteste e più lavoro, la Grecia ha capito tutto.', member: 'FILO' },
          { text: 'Smart working obbligatorio al 33% per tutti.', member: 'PIETRO' },
          { text: 'Preferirei lavorare di notte e stare al mare di giorno.', member: 'DAVE' },
          { text: 'Basta che lo stipendio rimanga uguale.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'La pirateria uccide il calcio?',
        choices: [
          { text: 'Dazn è una truffa, viva il pezzotto non tracciabile.', member: 'DAVE' },
          { text: '10 euro al mese per la propria squadra è onesto.', member: 'PIETRO' },
          { text: 'Mi godo i miei 9.99€ al mese e rido di voi.', member: 'SIMO' },
          { text: 'Guardo tutto gratis su link arabi in 4k.', member: 'FILO' },
          { text: 'La pubblicità col bambino che piange è ridicola.', member: 'MARCO' }
        ]
      },
      {
        id: 14,
        text: 'Elon Musk e l\'America Party.',
        choices: [
          { text: 'Un genio riformista, lo voterei subito.', member: 'PIETRO' },
          { text: 'Troppo potere in mano a un solo uomo, inquietante.', member: 'SIMO' },
          { text: 'Sta coprendo i suoi interessi economici con la politica.', member: 'DAVE' },
          { text: 'Meglio lui di Kamala o della Schlein.', member: 'FILO' },
          { text: 'I Pokémon nel suo video erano fuori luogo.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Il rapporto tra religione e geopolitica.',
        choices: [
          { text: 'Gli ebrei tengono per le palle il mondo intero.', member: 'PIETRO' },
          { text: 'Smettetela di credere a libri fantasy di 2000 anni fa.', member: 'SIMO' },
          { text: 'I musulmani sono una minaccia alla sicurezza nazionale.', member: 'FILO' },
          { text: 'Ogni fede portata all\'estremismo è un cancro.', member: 'DAVE' },
          { text: 'Almeno il Natale lo festeggiamo ancora?', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'sportnicchia',
    title: 'Sport di Nicchia & Performance: Sinner e la F1',
    description: 'Tennis (Sinner/Alcaraz), Formula 1 (Ferrari/Verstappen) e atletica.',
    questions: [
      {
        id: 1,
        text: 'Jannik Sinner ha un dolore al gomito durante il match. Cosa pensi?',
        choices: [
          { text: 'Solita sceneggiata medica per deconcentrare l\'avversario.', member: 'DAVE' },
          { text: 'È un leso, Alcaraz lo asfalta se non sta bene.', member: 'FILO' },
          { text: 'Ha ragione lui, si gestisce come un top player.', member: 'SIMO' },
          { text: 'È il calo dovuto ai bottoni della maglia troppo pesanti.', member: 'PIETRO' },
          { text: 'Sinner nuovo Tamberi? Capiamo.', member: 'MARCO' }
        ]
      },
      {
        id: 2,
        text: 'La strategia della Ferrari al GP di Spa.',
        choices: [
          { text: 'Vasseur out, non capiscono niente di gomme.', member: 'DAVE' },
          { text: 'Leclerc non si prende mai la responsabilità, hulkenberg è meglio.', member: 'PIETRO' },
          { text: 'Il box Ferrari andrebbe licenziato in tronco.', member: 'SIMO' },
          { text: 'Gara noiosissima, mi sono addormentato al giro 12.', member: 'FILO' },
          { text: 'Altra prestazione imbarazzante, come al solito.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Max Verstappen vince ancora. È il GOAT?',
        choices: [
          { text: 'Ha la macchina migliore, mettetelo sulla Racing Bull.', member: 'PIETRO' },
          { text: 'Un fenomeno, ha vinto con la Ferrari prima di Hamilton.', member: 'SIMO' },
          { text: 'Gara a senso unico, troppo superiore.', member: 'MARCO' },
          { text: 'Meglio lui di quegli smidollati che piangono.', member: 'DAVE' },
          { text: 'La F1 ha rotto il cazzo, non la seguo più.', member: 'FILO' }
        ]
      },
      {
        id: 4,
        text: 'Cosa pensi di Kimi Antonelli?',
        choices: [
          { text: 'Troppo bravo ragazzo, non ha la faccia da cazzo.', member: 'PIETRO' },
          { text: 'Ha pianto in intervista? Debolezza inaccettabile.', member: 'DAVE' },
          { text: 'Fa cagare, sparirà nel giro di due anni.', member: 'SIMO' },
          { text: 'Un altro sopravvalutato dalla stampa italiana.', member: 'FILO' },
          { text: 'Speriamo non faccia la fine di Colapinto.', member: 'MARCO' }
        ]
      },
      {
        id: 5,
        text: 'Lewis Hamilton e il suo record in Canada.',
        choices: [
          { text: 'È rincoglionito o la macchina è oscena.', member: 'PIETRO' },
          { text: 'Ha capito che vinceva solo per la macchina.', member: 'FILO' },
          { text: 'Sta rivivendo Cars 3 in prima persona.', member: 'DAVE' },
          { text: 'Leclerc lo sta umiliando in ogni qualifica.', member: 'SIMO' },
          { text: 'Una pena vederlo ridotto così.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Il "Six Kings Slam" di tennis in Arabia.',
        choices: [
          { text: 'Competizione cringe che non vale punti ATP.', member: 'DAVE' },
          { text: 'Lo hanno fatto solo per i soldi degli sceicchi.', member: 'FILO' },
          { text: 'Sinner lo ha vinto dimostrando di essere il numero 1.', member: 'SIMO' },
          { text: 'Guardare una partita in silenzio con gente che stappa champagne è una merda.', member: 'PIETRO' },
          { text: 'Sport ormai diventato solo marketing.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'Tamberi e Jacobs dopo le delusioni post-Olimpiche.',
        choices: [
          { text: 'Lamentoni incredibili, Jacobs è sparito nel nulla.', member: 'PIETRO' },
          { text: 'Tamberi lo radierei dallo sport, è insopportabile.', member: 'FILO' },
          { text: 'Hanno avuto infortuni, bisogna avere rispetto.', member: 'SIMO' },
          { text: 'Sono implosi in modo clamoroso, fine del ciclo.', member: 'DAVE' },
          { text: 'Meglio il nuoto, stiamo andando fortissimo lì.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'La pallavolo e gli altri sport "minori".',
        choices: [
          { text: 'Mi sento oppresso a giocare con la maglietta, meglio la canotta.', member: 'DAVE' },
          { text: 'Il volley femminile campione del mondo ci salva l\'onore.', member: 'SIMO' },
          { text: 'Basket? Si corrono e nessuno ruba la palla, noioso.', member: 'PIETRO' },
          { text: 'Non seguo nulla che non abbia un motore o 22 lesi in campo.', member: 'FILO' },
          { text: 'Il Ravenna in Serie C attira più spettatori della Davis.', member: 'MARCO' }
        ]
      },
      {
        id: 9,
        text: 'Il cambio di format della Champions League.',
        choices: [
          { text: 'Una truffa, hanno rubato un format del 2006.', member: 'SIMO' },
          { text: 'Mi mancano i gironi classici, questo è un casino.', member: 'FILO' },
          { text: 'Serve solo a far giocare più partite e rompere i giocatori.', member: 'DAVE' },
          { text: 'Entro il 2028 vedremo anche i club arabi in Champions.', member: 'PIETRO' },
          { text: 'Formula schifosa, ma la Juve perderebbe comunque.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Gli stipendi dei tennisti vs calciatori.',
        choices: [
          { text: '7k per un biglietto di Wimbledon? Siete pazzi.', member: 'PIETRO' },
          { text: 'I tennisti guadagnano troppo per quanto poco giocano.', member: 'FILO' },
          { text: 'Ci sono chirurghi che prendono un milione, i calciatori sono poveri.', member: 'DAVE' },
          { text: 'Se fossi milionario vivrei a Montecarlo come loro.', member: 'SIMO' },
          { text: 'Yamal a 17 anni prende più di quanto vedremo in 10 vite.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Sinner e il rapporto con l\'Italia (Vespa, Mattarella).',
        choices: [
          { text: 'Vespa è un sionista, Sinner ha fatto bene a paccare.', member: 'PIETRO' },
          { text: 'Gli italiani devono tifare Sinner a prescindere.', member: 'SIMO' },
          { text: 'Non è un purosangue, ha l\'accento di Hitler.', member: 'FILO' },
          { text: 'Le polemiche politiche nello sport sono noiose.', member: 'DAVE' },
          { text: 'Mattarella di merda, Sinner nr 1.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'Il ritiro di Djokovic contro Fritz.',
        choices: [
          { text: 'Lo ha fatto apposta per non far slittare la finale di Sinner.', member: 'DAVE' },
          { text: 'Novak è finito, spazio ai giovani maranza.', member: 'PIETRO' },
          { text: 'Senza di lui il tennis perde il 50% del fascino.', member: 'FILO' },
          { text: 'Sinner ha sculato il sorteggio come sempre.', member: 'MARCO' },
          { text: 'È questione di umidità, la palla saltava troppo.', member: 'SIMO' }
        ]
      },
      {
        id: 13,
        text: 'Adrian Newey non va in Ferrari.',
        choices: [
          { text: 'Mi viene da ridere, nel 2026 ci passa davanti l\'Aston Martin.', member: 'SIMO' },
          { text: 'Ferrari is my Red Flag, lo sapevo che fallivamo.', member: 'PIETRO' },
          { text: 'Ennesima dimostrazione di incapacità dirigenziale.', member: 'MARCO' },
          { text: 'Meglio investire quei soldi in piloti che non si stampano.', member: 'DAVE' },
          { text: 'Chi se ne frega, tanto non vincono da 20 anni.', member: 'FILO' }
        ]
      },
      {
        id: 14,
        text: 'La preparazione atletica nel calcio moderno.',
        choices: [
          { text: 'I giocatori di oggi sono degli handicappati, non reggono 3 gare.', member: 'DAVE' },
          { text: 'Bisognava mandarli tutti in palestra a fare pesi.', member: 'FILO' },
          { text: 'Chivu viaggia a 67 punti di media, è quello il dato.', member: 'SIMO' },
          { text: 'Gli allenatori italiani sono i migliori a gestire i carichi.', member: 'PIETRO' },
          { text: 'Si rompono perché pensano solo alla figa.', member: 'MARCO' }
        ]
      },
      {
        id: 15,
        text: 'Qual è lo sport più inutile oggi?',
        choices: [
          { text: 'La Moto GP, l\'ultimo mondiale serio era Rossi vs Marquez.', member: 'DAVE' },
          { text: 'Il salto con l\'asta, a meno che non ci sia Duplantis.', member: 'SIMO' },
          { text: 'Il basket, corrono e non succede nulla.', member: 'PIETRO' },
          { text: 'La Formula E, un insulto ai motori.', member: 'FILO' },
          { text: 'Il calcio della Juve degli ultimi 5 anni.', member: 'MARCO' }
        ]
      }
    ]
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Curiosità Barcaccia: Dagli Hamburger alle Camicie',
    description: 'Abitudini, gadget tech, ricordi del CLAMM e polemiche interne.',
    questions: [
      {
        id: 1,
        text: 'Come ordini il tuo hamburger al ristorante?',
        choices: [
          { text: 'Solo pane e carne, tolgo tutto il resto.', member: 'MARCO' },
          { text: 'Tolgo il cetriolino come al McDonald\'s.', member: 'FILO' },
          { text: 'Senza salse è immangiabile, preferisco quella vegana.', member: 'PIETRO' },
          { text: 'Barbecue americano tutta la vita, la fiorentina è sopravvalutata.', member: 'SIMO' },
          { text: 'Mangio quello che capita, basta che sia abbondante.', member: 'DAVE' }
        ]
      },
      {
        id: 2,
        text: 'Hai 1300 euro da spendere in tecnologia. Cosa compri?',
        choices: [
          { text: 'L\'AirDresser di Samsung per non stirare le camicie.', member: 'SIMO' },
          { text: 'Un iPhone nuovo per avere il simulatore del Fanta.', member: 'PIETRO' },
          { text: 'Li tengo in banca, 1300 euro sono un mese di stipendio.', member: 'DAVE' },
          { text: 'Compro azioni Juve, tanto ricapitalizzano sempre.', member: 'FILO' },
          { text: 'Mi prendo un box di One Piece e lo gradasso.', member: 'MARCO' }
        ]
      },
      {
        id: 3,
        text: 'Si parla di Filippo Turetta e del CLAMM. Ti ricordi di lui?',
        choices: [
          { text: 'Era in classe con noi, ho pure le foto.', member: 'MARCO' },
          { text: 'Io non l\'ho mai visto, eravamo nella nostra bolla.', member: 'DAVE' },
          { text: 'Ha abbandonato il primo anno, me lo ricordo vagamente.', member: 'PIETRO' },
          { text: 'Era un pazzo criminale, come i Pro-Pal.', member: 'FILO' },
          { text: 'Se ci avessi fatto un lavoro di gruppo non lo racconterei.', member: 'SIMO' }
        ]
      },
      {
        id: 4,
        text: 'Cosa sono i "Labubu"?',
        choices: [
          { text: 'Le nuove once d\'oro, bisogna investirci subito.', member: 'PIETRO' },
          { text: 'Una bolla senza senso destinata a durare un mese.', member: 'SIMO' },
          { text: 'Roba da licenziamento immediato se li vedo in ufficio.', member: 'FILO' },
          { text: 'Ne ho visto uno sulla tomba di Gramsci, pazzesco.', member: 'MARCO' },
          { text: 'Mi state prendendo in giro? Mai sentiti.', member: 'DAVE' }
        ]
      },
      {
        id: 5,
        text: 'La reunion barcaccia a Varsavia.',
        choices: [
          { text: 'Vengo solo se c\'è un interpretate per le polacche.', member: 'FILO' },
          { text: 'Dave Benjamin Merico ci porterà in giro per le banche svizzere.', member: 'PIETRO' },
          { text: 'Organizziamo tutto con un anno di anticipo o salta.', member: 'DAVE' },
          { text: 'Sarà il crossover definitivo tra la Barcaccia e Maja.', member: 'SIMO' },
          { text: 'Io prego il signore che accada il prima possibile.', member: 'MARCO' }
        ]
      },
      {
        id: 6,
        text: 'Il tuo rapporto con le scommesse e il gioco d\'azzardo.',
        choices: [
          { text: 'Punto sul live di Alcaraz per diventare ricco.', member: 'PIETRO' },
          { text: 'Ho perso 133€ al casinò di Montecarlo, a testa alta.', member: 'FILO' },
          { text: 'Scommetto 20 euro che l\'Inter finisce fuori dalla Champions.', member: 'SIMO' },
          { text: 'Non butto soldi in queste cazzate, preferisco ammortizzare l\'auto.', member: 'DAVE' },
          { text: 'Io vinco solo al Fanta grazie allo sculo di Simo.', member: 'MARCO' }
        ]
      },
      {
        id: 7,
        text: 'La "Settimana Benessere" in Fater.',
        choices: [
          { text: 'Una settimana gratis a 5 stelle per i dirigenti? Che invidia.', member: 'PIETRO' },
          { text: 'La toglieranno l\'anno prossimo, godiamocela ora.', member: 'SIMO' },
          { text: 'In Mapei se chiedi un permesso ti sputano in un occhio.', member: 'DAVE' },
          { text: 'Tipica roba da multinazionale di sinistra.', member: 'FILO' },
          { text: 'Preferirei 4000 euro netti e zero vacanze.', member: 'MARCO' }
        ]
      },
      {
        id: 8,
        text: 'Come reagisci a un infortunio di un tuo giocatore al Fanta?',
        choices: [
          { text: 'Mi strappo i capelli e insulto il DS della squadra reale.', member: 'MARCO' },
          { text: 'Non parlo più di calcio fino al 2030.', member: 'SIMO' },
          { text: 'È la sfiga che mi perseguita perché sono troppo forte.', member: 'PIETRO' },
          { text: 'Me lo aspettavo, la rosa era costruita male.', member: 'DAVE' },
          { text: 'Spero si rompa anche il tuo così siamo pari.', member: 'FILO' }
        ]
      },
      {
        id: 9,
        text: 'Il pranzo ideale della Barcaccia.',
        choices: [
          { text: 'Rosticceria da 15 euro, tanta sostanza e zero formalità.', member: 'PIETRO' },
          { text: 'Casa delle Aie, cappelletti al ragù e vino della casa.', member: 'FILO' },
          { text: 'Sushi ordinato e buttato via per dimostrare il ceto sociale.', member: 'SIMO' },
          { text: 'Qualcosa di veloce vicino all\'aeroporto per non fare tardi.', member: 'DAVE' },
          { text: 'Agriturismo a Brisighella, lontano dai maranza.', member: 'MARCO' }
        ]
      },
      {
        id: 10,
        text: 'Cosa pensi di LinkedIn e dei post aziendali?',
        choices: [
          { text: 'Odio profondo per chi posta stronzate sulle ferie illimitate.', member: 'FILO' },
          { text: 'Ci sono dei leccaculo incredibili, mi fanno schifo.', member: 'DAVE' },
          { text: 'Lo uso solo per trovare nuovi DS per la Palace.', member: 'SIMO' },
          { text: 'Utile per spiare gli ex compagni del CLAMM che hanno successo.', member: 'PIETRO' },
          { text: 'Io non apro LinkedIn da anni, troppa pressione.', member: 'MARCO' }
        ]
      },
      {
        id: 11,
        text: 'Il tuo orientamento politico (secondo la chat).',
        choices: [
          { text: 'Renziano di ferro, legge e ordine.', member: 'PIETRO' },
          { text: 'Trumpiano, pro-armi e anti-immigrati.', member: 'FILO' },
          { text: 'Radical chic di sinistra ma con il mutuo agevolato.', member: 'SIMO' },
          { text: 'Ex grillino pentito che ora vota Meloni per disperazione.', member: 'DAVE' },
          { text: 'Apolitico, basta che non mi alzino le tasse sulla Cola.', member: 'MARCO' }
        ]
      },
      {
        id: 12,
        text: 'La gestione dei rifiuti e la raccolta differenziata.',
        choices: [
          { text: 'Il porta a porta è una follia che aumenta i costi.', member: 'PIETRO' },
          { text: 'Vago con i sacchi in macchina cercando un cassonetto libero.', member: 'FILO' },
          { text: 'Mi serve la tessera per l\'indifferenziata o esplodo.', member: 'SIMO' },
          { text: 'Una scusa per controllarci, viva la libertà.', member: 'DAVE' },
          { text: 'Io butto tutto nel cestino del bagno e bona.', member: 'MARCO' }
        ]
      },
      {
        id: 13,
        text: 'Il regalo di compleanno perfetto.',
        choices: [
          { text: 'Maglietta ufficiale della Juve con nome e patch.', member: 'FILO' },
          { text: 'Il libro di Lorenzo Baroncelli sul caos.', member: 'DAVE' },
          { text: 'La maglia di Neymar della squadra araba.', member: 'MARCO' },
          { text: 'Un drone stendipanni per il balcone.', member: 'SIMO' },
          { text: 'Un anno di abbonamento a Perplexity AI.', member: 'PIETRO' }
        ]
      },
      {
        id: 14,
        text: 'La tua reazione davanti a un venditore di rose.',
        choices: [
          { text: 'Lo tocco e poi corro in bagno a lavarmi le mani.', member: 'MARCO' },
          { text: 'Gli do due euro e gli dico di andare a Gaza.', member: 'FILO' },
          { text: 'Gli chiedo se ha il POS per pagare con Revolut.', member: 'PIETRO' },
          { text: 'Gli compro tutto il mazzo per fare colpo sulla simmenthal.', member: 'SIMO' },
          { text: 'Lo ignoro fingendo di essere al telefono in inglese.', member: 'DAVE' }
        ]
      },
      {
        id: 15,
        text: 'Il ricordo più bello del CLAMM a Bologna.',
        choices: [
          { text: 'Le lezioni di econometria e la lavagna tattica.', member: 'SIMO' },
          { text: 'Le discussioni sulla difesa a 3 nel corridoio.', member: 'DAVE' },
          { text: 'Quando pensavamo di fare le startup e diventare milionari.', member: 'PIETRO' },
          { text: 'Le serate ignoranti al Touche (anche se non c\'eravamo).', member: 'FILO' },
          { text: 'I pranzi da 10 euro dove mangiavamo come dei maiali.', member: 'MARCO' }
        ]
      }
    ]
  }
];
