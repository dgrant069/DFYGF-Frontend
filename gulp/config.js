'use strict';

module.exports = {
  'serverport': 3000,

  'html': {
    'src': './src/index.html',
    'dest': './build/'
  },

  'scripts': {
    'src': './src/**/*.js',
    'dest': './build/js/'
  },

  'images': {
    'src': './src/assets/images/**/*.{jpeg,jpg,png}',
    'dest': './build/images/'
  },

  'fonts': {
    'src': './src/assets/fonts/**/*',
    'dest': './build/fonts/'
  },

  'icons': {
    'src': './src/assets/icons/**/*.{ico,png}',
    'dest': './build/icons/'
  },

  'styles': {
    'src': './src/**/*.scss',
    'dest': './build/css/'
  },

  'sourceDir': './src/',

  'buildDir': './build'
};