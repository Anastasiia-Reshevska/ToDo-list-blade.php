import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/pages/home.scss', 'resources/js/pages/home.js'],
            refresh: true,
        }),
    ],
});
