
let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js','public/js').vue();

mix.sass('resources/assets/sass/app.scss','public/app.css');