/**
 * Chromeで開いたときだけfavicon.icoの読み込みを削除
 */
document.addEventListener(
  'DOMContentLoaded',
  () => {
    if (navigator.userAgent.indexOf('Chrome') !== -1) {
      const faviconTag = document.querySelector('link[rel="icon"][sizes="any"]') as HTMLLinkElement;

      if (faviconTag.parentNode) faviconTag.parentNode.removeChild(faviconTag);
    }
  },
  false,
);
