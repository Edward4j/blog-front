import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  isbn: DS.attr(),
  price: DS.attr()
});
