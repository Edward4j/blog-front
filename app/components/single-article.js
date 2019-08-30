import Component from '@ember/component';

export default Component.extend({

  isShowingBody: false,

  actions: {
    toggleBody() {
      //let body = this.get('isShowingBody');

      this.toggleProperty('isShowingBody');

      //if (body) {
      //  //return this.get('article').get('body');
      //  return this.body;
      //}
    }
  }

});
