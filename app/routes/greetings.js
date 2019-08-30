import Route from '@ember/routing/route';
//import fetch from 'fetch';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    //console.log('The model hook just ran!');
    //return [
    //  { title: 'Ember Roadmap' },
    //  { title: 'Accessibility in Ember' },
    //  { title: 'EmberConf Recap' }
    //]

    //return fetch('/home/eduard/projects/blog-front/package.json').then(function(response) {
    //  return response.json();
    //})

    //Ember.$.getJSON('/home/eduard/projects/blog-front/package.json').then(function(response) {
    //  return response.json();
    //});


    return RSVP.hash({
      articles: this.store.findAll('article'),
      books: this.store.findAll('book')
    })
  }
});
