import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const horizontalScroll = gsap.timeline({
  scrollTrigger: {
    trigger: '.js-horizontalScroll-trigger',
    start: 'top 15%',
    pin: true,
    end: `+=${innerHeight}`,
    scrub: 0.5,
  },
});

const target = document.querySelector<HTMLElement>('.js-horizontalScroll');

if (target !== null) {
  horizontalScroll.to(target, {
    delay: 0.1,
    x: -target.clientWidth + innerWidth,
    ease: 'none',
  });
}

gsap.set('.js-show', {
  opacity: 0,
});

ScrollTrigger.batch('.js-show', {
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
    }),
  start: 'top 80%',
  once: true,
});

gsap.set('.js-toTop', {
  opacity: 0,
  y: 50,
});

ScrollTrigger.batch('.js-toTop', {
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
    }),
  start: 'top 80%',
  once: true,
});

gsap.set('.js-toBottom', {
  opacity: 0,
  y: -30,
});

ScrollTrigger.batch('.js-toBottom', {
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
    }),
  start: 'top 60%',
  once: true,
});

ScrollTrigger.create({
  trigger: '.js-overlay-trigger',
  start: 'top 80%',
  end: 'bottom 30%',
  toggleClass: {
    targets: '.js-overlay-target',
    className: 'js-overlay',
  },
});

const parallax = document.querySelectorAll<HTMLDivElement>('.js-parallax');

parallax.forEach((target) => {
  gsap.fromTo(
    target.querySelector<HTMLImageElement>('img'),
    {
      y: -80,
    },
    {
      y: -50,
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
