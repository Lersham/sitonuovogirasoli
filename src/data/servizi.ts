// Contenuto reale portato 1:1 da girasoli/index.html (versione "La Tavola Botanica").
// `placeholder: true` marca i due servizi il cui testo è ancora una bozza da
// far approvare dal professionista competente prima della pubblicazione —
// non va tolto né "migliorato" senza conferma.

export type Servizio = {
  numero: string;
  slug: string;
  icona: "valutazione" | "neuropsichiatria" | "riabilitazione" | "psicomotricita" | "tutoraggio" | "sostegno" | "parentTraining" | "equipe" | "inglese";
  nome: string;
  sommario: string;
  placeholder?: boolean;
  notaPlaceholder?: string;
  corpo: string[]; // paragrafi
  liste?: { titolo: string; voci: string[] }[];
};

export const servizi: Servizio[] = [
  {
    numero: "01",
    slug: "valutazione",
    icona: "valutazione",
    nome: "Valutazione",
    sommario: "Inquadramento diagnostico e profilo di sviluppo, con certificazione accreditata dalla Regione Lazio.",
    corpo: [
      "Le attività si svolgono attraverso colloqui, test standardizzati, questionari ed osservazione clinica. Il processo permette di acquisire un profilo completo, individuando risorse e limiti per impostare un piano di intervento mirato.",
      "Sui risultati costruiamo un piano di trattamento personalizzato, adattato alle esigenze del singolo bambino e della sua famiglia.",
    ],
    liste: [
      {
        titolo: "Cosa comprende",
        voci: [
          "Colloqui approfonditi con il bambino e con i genitori",
          "Test standardizzati per attenzione, iperattività e impulsività",
          "Osservazioni comportamentali in situazioni diverse",
          "Valutazione delle performance scolastiche e delle interazioni sociali",
        ],
      },
    ],
  },
  {
    numero: "02",
    slug: "neuropsichiatria-infantile",
    icona: "neuropsichiatria",
    nome: "Neuropsichiatria Infantile",
    sommario: "Valutazione medica specialistica dello sviluppo neuropsichico.",
    placeholder: true,
    notaPlaceholder:
      "Testo da confermare. Questa descrizione è una bozza scritta sulla base dei servizi già presenti: va rivista e approvata dal medico neuropsichiatra prima della pubblicazione, perché descrive una prestazione sanitaria.",
    corpo: [
      "La visita neuropsichiatrica inquadra dal punto di vista medico lo sviluppo neuropsichico del bambino e dell'adolescente, in raccordo con gli altri professionisti del centro. Consente di integrare la valutazione psicologica con la lettura clinica dello sviluppo neurologico e affettivo.",
    ],
  },
  {
    numero: "03",
    slug: "riabilitazione",
    icona: "riabilitazione",
    nome: "Riabilitazione",
    sommario: "Trattamenti per i disturbi specifici dell'apprendimento (DSA) e per l'ADHD.",
    corpo: [
      "Rivolta a bambini e ragazzi con disturbi specifici dell'apprendimento (DSA) e con deficit dell'attenzione e iperattività (ADHD). L'obiettivo è superare le difficoltà legate all'apprendimento e al comportamento, migliorando la qualità della vita scolastica e sociale.",
      "Collaboriamo con famiglie e scuole per creare un ambiente che sostenga il bambino anche fuori dalle sedute.",
    ],
    liste: [
      { titolo: "Nei DSA il lavoro riguarda", voci: ["Lettura", "Scrittura", "Calcolo", "Comprensione del testo"] },
      { titolo: "Nell'ADHD il lavoro riguarda", voci: ["Gestione della concentrazione", "Controllo degli impulsi", "Organizzazione delle attività quotidiane"] },
    ],
  },
  {
    numero: "04",
    slug: "psicomotricita",
    icona: "psicomotricita",
    nome: "Psicomotricità",
    sommario: "Sviluppo del movimento, dello schema corporeo e della regolazione emotiva.",
    placeholder: true,
    notaPlaceholder:
      "Testo da confermare. Bozza scritta sulla base dei servizi già presenti: va rivista dal professionista che tiene il servizio, in particolare per le fasce d'età e le modalità (individuale o piccolo gruppo).",
    corpo: [
      "Percorsi in cui il movimento è lo strumento di lavoro: attraverso il gioco corporeo il bambino costruisce lo schema del proprio corpo, l'orientamento nello spazio e la capacità di regolare tensione ed emozioni. Utile nei primi anni e in tutte le situazioni in cui il corpo esprime ciò che le parole non raggiungono ancora.",
    ],
  },
  {
    numero: "05",
    slug: "tutoraggio-specialistico",
    icona: "tutoraggio",
    nome: "Tutoraggio Specialistico",
    sommario: "Metodo di studio personalizzato, strumenti compensativi e misure dispensative.",
    corpo: [
      "Il tutor lavora a stretto contatto con lo studente per costruire un metodo di studio su misura, che tenga conto delle sue esigenze e delle sue potenzialità. Il percorso si basa su una comprensione approfondita delle difficoltà di apprendimento: dislessia, discalculia, disortografia e altri DSA.",
    ],
    liste: [
      {
        titolo: "Su cosa si concentra",
        voci: [
          "Individuazione degli strumenti compensativi efficaci per quello studente: software specifici, mappe concettuali, schemi visivi",
          "Applicazione delle misure dispensative per ridurre il carico: riduzione degli esercizi scritti, interrogazioni programmate",
        ],
      },
      {
        titolo: "Su cosa si lavora",
        voci: ["Autonomia nello studio", "Capacità di autogestione e fiducia nelle proprie possibilità", "Monitoraggio costante dei progressi con incontri regolari"],
      },
    ],
  },
  {
    numero: "06",
    slug: "sostegno-psicologico",
    icona: "sostegno",
    nome: "Sostegno Psicologico",
    sommario: "Sostegno e psicoterapia per bambini, adolescenti e famiglie.",
    corpo: [
      "Un percorso per aiutare la persona a gestire meglio le proprie emozioni e a migliorare le relazioni interpersonali. È rivolto a bambini, adolescenti e famiglie.",
      "I nostri psicologi e psicoterapeuti lavorano a contatto con le famiglie per creare un ambiente di supporto e comprensione.",
    ],
    liste: [
      { titolo: "Obiettivi", voci: ["Promuovere il benessere emotivo", "Sostenere il processo di crescita e cambiamento", "Rafforzare la capacità di affrontare le sfide quotidiane"] },
    ],
  },
  {
    numero: "07",
    slug: "parent-training",
    icona: "parentTraining",
    nome: "Parent Training",
    sommario: "I genitori guidati nell'applicazione di strategie concrete a casa.",
    corpo: [
      "Un percorso in cui i genitori sono guidati da un professionista nell'apprendimento di strategie utili per modificare i comportamenti problematici dei figli e per incrementare quelli positivi.",
      "Le strategie vengono adattate alle esigenze specifiche del bambino e della famiglia, e messe in pratica con l'accompagnamento del professionista.",
    ],
    liste: [
      { titolo: "Obiettivi", voci: ["Migliorare la gestione delle dinamiche familiari", "Rafforzare le competenze genitoriali", "Creare un ambiente domestico più sereno e costruttivo"] },
    ],
  },
  {
    numero: "08",
    slug: "lavoro-di-equipe",
    icona: "equipe",
    nome: "Lavoro di Équipe",
    sommario: "Incontri con la scuola, i terapisti e la famiglia, allo stesso tavolo.",
    corpo: [
      "Colloqui individuali o di gruppo tra il personale scolastico, i terapisti e la famiglia, per individuare le strategie educative e didattiche che sostengono lo sviluppo del bambino.",
      "Dalla collaborazione tra tutte le figure coinvolte nasce un piano condiviso: è ciò che permette al lavoro fatto in studio di continuare in classe e a casa.",
    ],
  },
  {
    numero: "09",
    slug: "corso-di-inglese",
    icona: "inglese",
    nome: "Corso di Inglese",
    sommario: "Corsi per bambini divisi per fasce d'età, con approccio narrativo e corporeo.",
    corpo: [
      "Il corso si ispira a metodologie come il format narrativo Hocus&Lotus, per creare un ambiente di apprendimento coinvolgente in cui la lingua si acquisisce come si acquisisce la lingua madre.",
    ],
    liste: [
      {
        titolo: "Durante il corso i bambini",
        voci: [
          "Imparano attraverso storie interattive e ripetute, che simulano l'acquisizione naturale del linguaggio",
          "Partecipano a lezioni basate su teatro e narrazione, con gesti, mimica e giochi di ruolo",
          "Sviluppano una connessione affettiva con la lingua",
          "Esplorano il linguaggio con canzoni e attività multisensoriali",
        ],
      },
    ],
  },
];
