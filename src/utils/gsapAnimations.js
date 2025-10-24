import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Fade In Animation
export const fadeIn = (element, duration = 1, delay = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: duration,
    delay: delay,
    ease: 'power3.out',
  });
};

// Fade In with Scroll Trigger
export const fadeInScrollTrigger = (element, triggerElement = element, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Stagger Animation (for lists/grids)
export const staggerAnimation = (elements, options = {}) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Scale Up Animation
export const scaleUp = (element, options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Slide In from Left
export const slideInLeft = (element, options = {}) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Slide In from Right
export const slideInRight = (element, options = {}) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Parallax Effect
export const parallaxEffect = (element, speed = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Text Reveal Animation (split text effect)
export const textReveal = (element, options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power4.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Counter Animation
export const counterAnimation = (element, endValue, duration = 2) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration: duration,
    ease: 'power1.out',
    onUpdate: () => {
      element.textContent = Math.floor(obj.value);
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

// Rotate In Animation
export const rotateIn = (element, options = {}) => {
  return gsap.from(element, {
    rotation: -180,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      ...options,
    },
  });
};

// Image Reveal with Overlay
export const imageReveal = (element, options = {}) => {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primary-500);
    z-index: 1;
  `;
  
  element.parentNode.style.position = 'relative';
  element.parentNode.style.overflow = 'hidden';
  element.parentNode.appendChild(overlay);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
      ...options,
    },
  });

  tl.to(overlay, {
    scaleX: 1,
    transformOrigin: 'left',
    duration: 0.8,
    ease: 'power3.inOut',
  })
    .to(overlay, {
      scaleX: 0,
      transformOrigin: 'right',
      duration: 0.8,
      ease: 'power3.inOut',
    })
    .from(
      element,
      {
        scale: 1.3,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.8'
    );

  return tl;
};

// Pin Section (for sticky content)
export const pinSection = (element, options = {}) => {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: '+=500',
    pin: true,
    pinSpacing: false,
    ...options,
  });
};

// Hover Animation
export const hoverScale = (element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};

// Magnetic Button Effect
export const magneticEffect = (element) => {
  element.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  });
};

// Refresh ScrollTrigger (call after DOM updates)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Kill all ScrollTriggers
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

export default {
  fadeIn,
  fadeInScrollTrigger,
  staggerAnimation,
  scaleUp,
  slideInLeft,
  slideInRight,
  parallaxEffect,
  textReveal,
  counterAnimation,
  rotateIn,
  imageReveal,
  pinSection,
  hoverScale,
  magneticEffect,
  refreshScrollTrigger,
  killAllScrollTriggers,
};

