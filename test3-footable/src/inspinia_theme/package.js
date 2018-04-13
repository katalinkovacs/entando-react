// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'inspinia_theme',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'the template for ANPI projects',
  version: '1.0.0',
  git: 'https://github.com/MaheshwaranRamasamy/inspinia_theme.git'
});

Package.onUse(function (api) {
  api.addFiles([
    'dist/css/style.css'
  ], 'client');
});
