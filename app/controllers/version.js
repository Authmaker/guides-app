import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  page: service(),

  init() {
    this.versions = [
      'v1.10.0',
      'v1.11.0',
      'v1.12.0',
      'v1.13.0',
      'v2.0.0',
      'v2.1.0',
      'v2.2.0',
      'v2.3.0',
      'v2.4.0',
      'v2.5.0',
      'v2.6.0',
      'v2.7.0',
      'v2.8.0',
      'v2.9.0',
      'v2.10.0',
      'v2.11.0',
      'v2.12.0',
      'v2.13.0',
      'v2.15.0',
    ];
    this._super(...arguments);
  },

  actions: {
    selectVersion(version) {
      this.transitionToRoute('version', version)
    }
  }
});