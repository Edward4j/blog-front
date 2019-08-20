/*
import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  books: hasMany('book')
});
*/

import Publisher from './publisher';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  name: attr(),
  books: hasMany()
});
