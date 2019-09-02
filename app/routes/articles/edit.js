import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    console.log('From Edit Articles Router - params.article_id: ', params.article_id);

    return this.store.findRecord('article', params.article_id);
  },

  //let self = this,

  actions: {
    update(article) {
      var author = this.controller.model.author;
      if (author === undefined || !author.trim()) { return; }

      var title = this.controller.model.title;
      if (title === undefined || !title.trim()) { return; }

      var body = this.controller.model.body;
      if (body === undefined || !body.trim()) { return; }

      var isbn = this.controller.model.isbn;
      if (isbn === undefined || !isbn.trim()) { return; }

      var price = this.controller.model.price;
      if (price === undefined || !price.trim()) { return; }

      article.set('author', author);
      article.set('title', title);
      article.set('body', body);
      article.set('isbn', isbn);
      article.set('price', price);

      // Save the new model
      article.save().then((updatedArticle) => {
        this.transitionTo('articles.show', updatedArticle);
      });
    },
    cancel(article) {
      article.rollbackAttributes();
      this.get('controller').transitionToRoute('articles.show', article);
    }
  }

});
