const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js(
    ['resources/views/components/header/header.js'],
    'public/js/pages/home.js'
  )
  .sass('resources/scss/pages/home.scss', 'public/css');
