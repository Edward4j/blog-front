import Route from '@ember/routing/route';

export default Route.extend({
  templateName: 'articles/show',

  model(params) {
    console.dir(params, { color: true });
    console.log("params.article_id: " + params.article_id);
    return this.store.findRecord('article', params.article_id);
  }

});
