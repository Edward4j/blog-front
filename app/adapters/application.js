import DS from 'ember-data';
import config from 'blog-front/config/environment';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
  //host: 'http://localhost:3000'
  //namespace: 'api'

  host: computed('config.environment', function() {
    if (config.environment === 'production') {
      return 'https://bookstore-back.herokuapp.com'
    } else {
      return 'http://localhost:3000'
    }
  })

});
