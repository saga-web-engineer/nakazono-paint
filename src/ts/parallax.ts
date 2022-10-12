import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parallax = document.querySelectorAll<HTMLDivElement>('.js-parallax');

parallax.forEach((target) => {
  gsap.fromTo(
    target.querySelector<HTMLImageElement>('img'),
    {
      y: -200,
    },
    {
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    },
  );
});

export {};
