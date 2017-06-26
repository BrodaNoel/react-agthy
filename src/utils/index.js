let clickEvent;
let keyEvent;

export default {
  /*
   * Will attach Click and ESC keydown event to close Agthy.
   */
  attachCloseEvents(hideAgthy) {
    clickEvent = e => {
      const isAnAgthyElement = e.target.className.indexOf('Agthy') === 0;

      if (!isAnAgthyElement) {
        this.removeCloseEvents();
        hideAgthy();
      }
    };

    keyEvent = e => {
      const isESC = e.keyCode === 27;

      if (isESC) {
        this.removeCloseEvents();
        hideAgthy();
      }
    };

    document.addEventListener('click', clickEvent);
    document.addEventListener('keydown', keyEvent);
  },

  removeCloseEvents() {
    document.removeEventListener('click', clickEvent);
    document.removeEventListener('keydown', keyEvent);
  }
};
