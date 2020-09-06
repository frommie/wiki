const mix = require('laravel-mix');
const webpack = require('webpack');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
      resolve: {
        alias: {
          'jquery$': path.resolve(path.join(__dirname, 'node_modules', 'jquery')),
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          Vue: ['vue/dist/vue.esm.js', 'default'],
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery',
        }),
      ],
    });
