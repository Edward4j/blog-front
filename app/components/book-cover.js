import Component from '@ember/component';

export default Component.extend({

  actions: {

    open() {
      this.set('isShowingModal', true);
    },

    close() {
      this.set('isShowingModal', false);
    }

  }

});
