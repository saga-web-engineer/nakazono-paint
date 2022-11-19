/**
 * 1880px以上のデバイスで200pxスクロールするとバナー出現
 */

const fixBanner = () => {
  const banner = document.querySelector<HTMLAnchorElement>('#fix-banner');

  if (!banner) return;

  if (200 < window.scrollY && window.matchMedia('(min-width: 1880px)').matches) {
    banner.classList.add('is-active');
  } else {
    banner.classList.remove('is-active');
  }
};

addEventListener('scroll', fixBanner, false);

export {};
