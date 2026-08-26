// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Build con `GH_PAGES=true npm run build` per la preview su GitHub Pages
// (che vive sotto /sitonuovogirasoli/, non alla radice del dominio). Il
// deploy reale su gira-soli.it si fa con una build normale, senza questa
// variabile: nessun codice da "smontare" più avanti, solo un flag da non
// passare.
const ghPages = process.env.GH_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
	site: ghPages ? 'https://lersham.github.io' : 'https://gira-soli.it',
	base: ghPages ? '/sitonuovogirasoli/' : '/',
	integrations: [sitemap()],
});
