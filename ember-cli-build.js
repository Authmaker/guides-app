/* eslint-env node */
'use strict';

var env = process.env.EMBER_ENV;
var deploy = require('./config/deploy.js')(env);

const StaticSiteJson = require('broccoli-static-site-json');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

const guidesSourcePublic = new Funnel('node_modules/@authmaker/guides-source/public');

const jsonTree = new StaticSiteJson('node_modules/@authmaker/guides-source', {
  contentFolder: `content/current`,
  type: 'content',
});

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-prism': {
      'theme': 'okaidia',
      'components': ['scss', 'javascript', 'handlebars', 'http', 'json'],
      'plugins': ['line-numbers', 'normalize-whitespace']
    },

    fingerprint: {
      prepend: `${deploy.gcloudUrl}/${deploy['gcloud-storage'] ? deploy['gcloud-storage'].bucket : ''}/`
    }
  });

  app.import('node_modules/compare-versions/index.js');

  return new BroccoliMergeTrees([app.toTree(), guidesSourcePublic, jsonTree]);
};
