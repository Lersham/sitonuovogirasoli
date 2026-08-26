export type Tappa = {
  numero: string;
  nome: string;
  descrizione: string;
  stato: "partenza" | "latente";
  statoEtichetta: string;
};

export const percorso: Tappa[] = [
  {
    numero: "01",
    nome: "Il primo colloquio",
    descrizione: "Ascoltiamo cosa avete osservato a casa e cosa segnala la scuola. Serve a capire se e come possiamo essere utili — non è ancora una valutazione.",
    stato: "partenza",
    statoEtichetta: "Sempre il punto di partenza",
  },
  {
    numero: "02",
    nome: "La valutazione",
    descrizione: "Colloqui, test standardizzati, questionari e osservazione clinica costruiscono un profilo di sviluppo: dove sono le risorse e dove i limiti.",
    stato: "latente",
    statoEtichetta: "Da definire insieme",
  },
  {
    numero: "03",
    nome: "L'intervento",
    descrizione: "Riabilitazione, psicomotricità, tutoraggio, sostegno psicologico o parent training: si sceglie ciò che il profilo indica, non un pacchetto predefinito.",
    stato: "latente",
    statoEtichetta: "Da definire insieme",
  },
  {
    numero: "04",
    nome: "La scuola e la famiglia",
    descrizione: "Incontri con insegnanti e referenti perché le strategie funzionino anche in classe, e con voi perché funzionino a casa.",
    stato: "latente",
    statoEtichetta: "Da definire insieme",
  },
];
