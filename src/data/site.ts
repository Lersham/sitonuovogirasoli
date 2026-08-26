// Fonte unica di verità per contatti/orari/geo — usata sia dalla sezione
// contatti visibile che dal JSON-LD, così non possono disallinearsi.

export const site = {
  nome: "Gira.Soli",
  nomeCompleto: "APS Gira.Soli — Centro Psicologico",
  tagline: "Centro per l'età evolutiva",
  telefono: "328 287 20 84",
  telefonoE164: "+393282872084",
  email: "segreteriagira.soli@gmail.com",
  indirizzo: {
    via: "Via Santi Martiri di Selva Candida 7",
    cap: "00166",
    citta: "Roma",
    provincia: "RM",
    paese: "IT",
  },
  geo: {
    lat: "41.9504149",
    lon: "12.3760417",
  },
  orari: [
    { giorni: "Lunedì – Venerdì", ore: "08:00 – 20:00" },
    { giorni: "Sabato", ore: "08:00 – 14:00" },
    { giorni: "Domenica", ore: "Chiuso" },
  ],
  orariSchema: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    { dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
  instagram: "https://www.instagram.com/centro_gira.soli/",
  instagramHandle: "@centro_gira.soli",
  whatsapp: "https://wa.me/393282872084",
  formspreeAction: "https://formspree.io/f/mqaznkjj",
  dominio: "https://gira-soli.it",
} as const;
