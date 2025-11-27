// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    site: "https://joseandnahomi.com",
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: ['macbook-pro.tail9203de.ts.net'],
        },
    }
});