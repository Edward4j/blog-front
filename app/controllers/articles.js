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
  }

});
