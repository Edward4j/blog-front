import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.get('store').findAll('article');
    return this.store.findAll('article');
  }
});
