/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import(app.bowerDirectory + '/select2/dist/css/select2.css');
  app.import(app.bowerDirectory + '/select2/dist/js/select2.js');
  app.import(app.bowerDirectory + '/select2/dist/js/i18n/en.js');

  return app.toTree();
};
