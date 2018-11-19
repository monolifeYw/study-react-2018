// document event On(html, body)

/* export function setModalEvent() {
  document.body.addEventListener('on.modal.open', () => {
    const $body = document.body;
    $body.style.overflow = 'hidden';
  });

  document.body.addEventListener('on.modal.close', () => {
    const $body = document.body;
    $body.style.overflowX = 'hidden';
    $body.style.overflowY = 'auto';
  });
} */

/* export function dispatchModal(dispatchName) {
  document.body.dispatchEvent(dispatchName);
} */
export default class DocumentModalControl {

  static isInit = false;
  static OPEN = 'on.modal.open';
  static CLOSE = 'on.modal.close';

  static setEvent() {
    if (this.isInit) {
      return;
    }
    document.addEventListener('on.modal.open', () => {
      document.body.style.overflow = 'hidden';
    });

    document.addEventListener('on.modal.close', (e) => {
      console.log('e', e);
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    });

    this.isInit = true;
  }

  static dispatchEventer(dispatchName) {
    document.dispatchEvent(new Event(dispatchName));
  }
}


