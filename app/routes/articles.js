import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  },

  model(params) {

    return this.store.query('article', { page: {
        number: params.page,
        size: params.size
      }
    });

    // return this.get('store').findAll('article');
    //return this.store.findAll('article');
  }
});
