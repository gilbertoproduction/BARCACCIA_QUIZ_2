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
  }
];
