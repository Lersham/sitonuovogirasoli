// Nessun nome/credenziale reale è disponibile: PRODUCT.md vieta esplicitamente
// di inventarli. Questi resettano segnaposto dichiarati finché l'utente non
// fornisce i dati veri.

export type MembroPlaceholder = {
  ruoloGenerico: string;
  campi: { etichetta: string; valore: string }[];
};

export const team: MembroPlaceholder[] = [
  {
    ruoloGenerico: "[Ruolo — es. Psicologa, Psicoterapeuta]",
    campi: [
      { etichetta: "Iscrizione", valore: "[Ordine degli Psicologi del Lazio, n. 00000]" },
      { etichetta: "Formazione", valore: "[Laurea e specializzazione: dove e in cosa]" },
      { etichetta: "Si occupa di", valore: "[Le due o tre aree specifiche, non l'elenco completo dei servizi]" },
    ],
  },
  {
    ruoloGenerico: "[Ruolo — es. Neuropsichiatra infantile]",
    campi: [
      { etichetta: "Iscrizione", valore: "[Ordine dei Medici di Roma, n. 00000]" },
      { etichetta: "Formazione", valore: "[Laurea e specializzazione: dove e in cosa]" },
      { etichetta: "Si occupa di", valore: "[Le due o tre aree specifiche]" },
    ],
  },
  {
    ruoloGenerico: "[Ruolo — es. Pedagogista, Tutor DSA]",
    campi: [
      { etichetta: "Titolo", valore: "[Titolo o iscrizione, se prevista per questa professione]" },
      { etichetta: "Formazione", valore: "[Laurea, master, corsi accreditati]" },
      { etichetta: "Si occupa di", valore: "[Le due o tre aree specifiche]" },
    ],
  },
];
