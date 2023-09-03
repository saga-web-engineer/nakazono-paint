import MicroModal from 'micromodal';

MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true,
});

addEventListener('pagehide', () => {
  document.querySelector<HTMLElement>('[data-micromodal-close]')?.click();
});

export {};
