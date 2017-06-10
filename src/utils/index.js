export default {
  /*
   * Will attach Click and ESC keydown event to close Agthy.
   */
  attachCloseEvents(hideAgthy) {
    let clickEvent;
    let keyEvent;

    clickEvent = e => {
      const isAnAgthyElement = document.querySelector('.Agthy').contains(e.target);

      if (!isAnAgthyElement) {
        document.removeEventListener('click', clickEvent);
        document.removeEventListener('keydown', keyEvent);
        hideAgthy();
      }
    };

    keyEvent = e => {
      const isESC = e.keyCode === 27;

      if (isESC) {
        document.removeEventListener('click', clickEvent);
        document.removeEventListener('keydown', keyEvent);
        hideAgthy();
      }
    };

    document.addEventListener('click', clickEvent);
    document.addEventListener('keydown', keyEvent);
  }
};
