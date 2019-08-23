import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  queryParams: ['page', 'size'],
  page: 1,
  size: 5,

  @computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number')

  get count() {
    const total = this.model.meta.pagination.last.number || model.meta.pagination.self.number;
    if (!total) return [];
    return new Array(total+1).join('x').split('').map((e,i) => i + 1);
  },

  actions: {

    //createArticle: function () {
    //  // Get the article title set by the "New Article" text field
    //  var author = this.get('author');
    //  if (!author.trim()) { return; }
    //
    //  var title = this.get('title');
    //  if (!title.trim()) { return; }
    //
    //  var isbn = this.get('isbn');
    //  if (!title.trim()) { return; }
    //  validate(isbn, { integer: true, positive: true });
    //
    //  var price = this.get('price');
    //  if (!price.trim()) { return; }
    //  validate(price, { positive: true });
    //
    //  // Create the new Article model
    //  var article = this.store.createRecord('article', {
    //    author: author,
    //    title: title,
    //    isbn: isbn,
    //    price: price
    //  });
    //
    //  // Clear the "New Article" text field
    //  this.set('author', '');
    //  this.set('title', '');
    //  this.set('isbn', '');
    //  this.set('price', '');
    //
    //  // Save the new model
    //  article.save();
    //
    //}

  }

});
