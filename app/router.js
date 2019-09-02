import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('articles');

  //this.route('articles', function() {
  //  this.route('edit', { path: '/:article_id' });
  //});

  this.route('articles.edit', { path: 'articles/edit/:article_id'});

  this.route('articles.show', { path: '/articles/:article_id' });
  //this.route('article', { path: '/articles/:article_id' });

  //this.route('articles', function() {
  //  this.route('show', { path: '/:article_id' });
  //});
  this.route('books', { path: '/' });
  this.route('author', { path: '/authors/:author_id' });

  /*
  this.route('article', function() {
    this.route('new');
  });
  */

  this.route('article.new', { path: 'articles/new' });

  this.route('greetings');

  this.route('not-found', { path: '/*path' });
});

export default Router;
