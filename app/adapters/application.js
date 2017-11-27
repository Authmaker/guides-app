import DS from 'ember-data';
import Config from 'guides-app/config/environment';

export default DS.JSONAPIAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    let prefix = Config.apiHost || '';

    if (prefix && Config.apiNamespace) {
      prefix += `/${Config.apiNamespace}`;
    } else if(prefix) {
      prefix += Config.apiNamespace;
    }

    if (requestType === 'queryRecord') {
      return `${prefix}/${modelName}/${query.version}/${query.path}.json`;
    } else if(requestType === 'query' && modelName === 'page') {
      return `${prefix}/content/${query.version}/pages.json`;
    }

    return this._super(...arguments);
  },
});
