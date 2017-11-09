import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { decamelize } from '@ember/string';
import Config from 'guides-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: Config.apiHost,
  namespace: Config.apiNamespace,
  buildURL() {
    return `${this._super(...arguments)}.json`;
  },

  pathForType: function(modelName) {
    if (modelName === 'content') {
      return '';
    }

    var decamelized = decamelize(modelName);
    return pluralize(decamelized);
  }
});
