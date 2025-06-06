import gsap from 'gsap'
import { DrawSVGPlugin, ScrollSmoother } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, ScrollSmoother)
var $lin = '.st1'
var $lin2 = '.lst1'

ScrollSmoother.create({
  content: '#smooth-content',
  wrapper: '#smooth-wrapper',
  smooth: 2,
  effects: true,
  normalizeScroll: true,
  ignoreMobileResize: true,
  // Disable on mobile
  smoothTouch: 0,
})

// *************************

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#sec-scroll',
    start: 'top 80%', // Adjust for better timing
    end: 'bottom 20%', // Optional: Define when it stops
    // markers: true,
    toggleActions: 'restart none none none',
  },
})

tl2.from($lin2, { duration: 3.5, drawSVG: 1, delay: 0.25 })

// contest timeline **************************************************
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#sec-contest',
    start: 'top 80%', // Adjust for better timing
    end: 'bottom 20%', // Optional: Define when it stops
    // markers: true,
    toggleActions: 'restart none none none',
  },
})

tl.from($lin, { duration: 3.5, drawSVG: 1, delay: 0.25 })

// logo txt ************************************************************
gsap.utils.toArray('.logo-div-txt').forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: '20% bottom',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
    })
    .from(element.querySelector('.logo-txt'), {
      opacity: 0, // Ensures it fades in
      duration: 0.65,
    })
})
// end logo txt ************************************************************

// *********************
// *********************

let logo = gsap.timeline({
  scrollTrigger: {
    trigger: '.logo-div',
    start: 'center center',
    end: '433%',
    pin: true,
    scrub: 1,
    toggleActions: 'restart restart none restart',
    // markers: true,
    onUpdate: (self) => console.log('Progress:', self.progress),
  },
  duration: 1,
})

window.addEventListener('load', () => {
  gsap.to('#sec-hero-intro *', {
    opacity: 1,
    duration: 1,
    scale: 1.02,
    delay: 0.5,
    ease: 'power2.out',
    stagger: 0.05, // smooth stagger
  })
})

window.addEventListener('load', () => {
  gsap.to('.hero-img, .sec-scroll', {
    opacity: 1,
    duration: 1,
    delay: 0.5,
  })
})

logo
  .addLabel('stop0', 0) // Start
  .addLabel('stop1', 0.0) // Show "The Bold 50"
  .addLabel('stop2', 0.35) // Show "Est. 1976"
  .addLabel('stop3', 0.7) // Show Hawk Head
  .addLabel('stop4', 1.1) // Show Feathers
  .addLabel('stop5', 1.6) // Final touch: slight rotation

  // stop 0
  .to('.hawk-head', { opacity: 0, scale: 0.95, duration: 0.1 }, 'stop0')
  .to('.date', { opacity: 0.1, duration: 0.1 }, 'stop0')
  .to('.feathers .l', { opacity: 0.1, duration: 0.1 }, 'stop0')
  .to('.date', { opacity: 0.1, duration: 0.1 }, 'stop0')
  .to('.svg-logo', { x: '50%', duration: 0.1 }, 'stop0')

  // stop 1 The Bold 50
  .to(
    '.numBg, .numFg',
    {
      opacity: 1,
      duration: 0.1,
    },
    'stop1'
  )

  // stop 2 Est. 1976
  .to('.numFg', { opacity: 0.2, duration: 0.1 }, 'stop2')
  .to('.numBg', { opacity: 0.1, duration: 0.1 }, 'stop2')
  .to('.date', { opacity: 1, duration: 0.1 }, 'stop2')

  // stop 3 The Hawk Head
  .to('.date', { opacity: 0.1, duration: 0.1 }, 'stop3')

  .to(
    '.hawk-head',
    {
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center',
      y: -5,
      duration: 0.1,
    },
    'stop3'
  )

  // stop 4 Feathers
  .to('.hawk-head', { opacity: 0, duration: 0.01 }, 'stop4')
  .to(
    '.feathers .l',
    {
      opacity: 1,
      x: '20%',
      scale: 1,
      stagger: { amount: 0.3, from: 'left' },
      duration: 0.1,
    },
    'stop4'
  )

  // stop 5
  .to('.hawk-head', { opacity: 1, y: '0', duration: 0.1 }, 'stop5')
  .to('.date', { opacity: 1, duration: 0.1 }, 'stop5')
  .to('.feathers .l', { opacity: 1, duration: 0.4 }, 'stop5')
  .to('.date', { opacity: 1, duration: 0.1 }, 'stop5')
  .to('.numBg, .numFg', { opacity: 1, duration: 0.1 }, 'stop5')

logo.totalDuration(3)
