import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/pages/home.scss', 'resources/views/components/header/header.js', 'resources/views/components/todo-list/todo-list.js'],
            refresh: true,
        }),
    ],
});
