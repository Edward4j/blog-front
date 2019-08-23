import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return {};
  },

  actions: {
    save() {

      // Get the article title from the "New Article" text field
      //var author = this.get('author');
      var author = this.controller.author;
      if (!author.trim()) { return; }

      //var title = this.get('title');
      var title = this.controller.title;
      if (!title.trim()) { return; }

      //var isbn = this.get('isbn');
      var isbn = this.controller.isbn;
      if (!title.trim()) { return; }
      //validate(isbn, { integer: true, positive: true });

      //var price = this.get('price');
      var price = this.controller.price;
      if (!price.trim()) { return; }
      //validate(price, { positive: true });

      // Create the new Article model
      var newArticle = this.store.createRecord('article', {
        author: author,
        title: title,
        isbn: isbn,
        price: price
      });

      // Clear the "New Article" text field
      this.set('controller.author', '');
      this.set('controller.title', '');
      this.set('controller.isbn', '');
      this.set('controller.price', '');

      // Save the new model
      newArticle.save().then((article) => {
        this.transitionTo('articles.show', article);
      });

      //const newArticle = this.store.createRecord('article', this.currentModel);
      //newArticle.save().then((article) => {
      //  this.transitionTo('article', article);
      //});
    },
    cancel() {
      // Clear all input fields:
      var inputs = document.querySelectorAll('input');
      //inputs.forEach(function(element) { element.value = "" });
      inputs.forEach((element) => element.value = "");
      this.transitionTo('articles');
    }
  }

});
