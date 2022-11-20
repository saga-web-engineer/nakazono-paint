/**
 * アコーディオンのアニメーション
 */

import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  setUpAccordion();
});

const setUpAccordion = () => {
  const details = document.querySelectorAll<HTMLElement>('.js-details');
  const IS_OPENED_CLASS = 'is-open';

  details.forEach((element) => {
    const summary = element.querySelector<HTMLElement>('.js-summary');
    const content = element.querySelector<HTMLElement>('.js-content');

    if (!summary) return;

    summary.addEventListener('click', (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();

      // is-openクラスの有無で判定
      if (element.classList.contains(IS_OPENED_CLASS) && content !== null) {
        element.classList.toggle(IS_OPENED_CLASS);

        closingAnim(content, element).restart();
      } else {
        element.classList.toggle(IS_OPENED_CLASS);

        // open属性を付与
        element.setAttribute('open', 'true');

        if (!content) return;
        openingAnim(content).restart();
      }
    });
  });
};

const closingAnim = (content: HTMLElement, element: HTMLElement) =>
  gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.4,
    ease: 'power3.out',
    overwrite: true,
    onComplete: () => {
      // アニメーションの完了後にopen属性を取り除く
      element.removeAttribute('open');
    },
  });

const openingAnim = (content: HTMLElement) =>
  gsap.fromTo(
    content,
    {
      height: 0,
      opacity: 0,
    },
    {
      height: 'auto',
      opacity: 1,
      duration: 0.4,
      ease: 'power3.out',
      overwrite: true,
    },
  );
