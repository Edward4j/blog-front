import Component from '@ember/component';

export default Component.extend({

  actions: {

    open() {
      // We will make sure we get the latest price when opening the modal by reload()ing the model:
      this.get('book').reload().then(() => {
        this.set('isShowingModal', true);
        this.get('blurBackground')(true);
      });
    },

    close() {
      this.set('isShowingModal', false);
      this.get('blurBackground')(false);
    }

  }

});
