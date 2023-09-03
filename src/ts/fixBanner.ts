/**
 * 1880px以上のデバイスで200pxスクロールするとバナー出現
 */

const fixBanner = () => {
  const banner = document.querySelector<HTMLAnchorElement>('#fix-banner');

  if (200 < window.scrollY && window.matchMedia('(min-width: 1880px)').matches) {
    banner?.setAttribute('aria-hidden', 'false');
  } else {
    banner?.setAttribute('aria-hidden', 'true');
  }
};

addEventListener('scroll', fixBanner, false);

export {};
