import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

// var $logo = '.svg-logo'
// var $bg = '.background'
// var $sec1 = '.sec-1'
// var $sec2 = '.sec-2'
// var $sec3 = '.sec-3'
// var $sec4 = '.sec-4'
// var $sec5 = '.sec-5'
var $lin = '.st1'

// // prettier-ignore

// prettier-ignore
const tl = gsap.timeline({ 
  scrollTrigger: { 
    trigger: '#sec-contest', 
    start: 'top 80%', // Adjust for better timing
    end: 'bottom 20%', // Optional: Define when it stops
    // markers: true, 
    toggleActions: 'restart none none none', 
  } 
});

//
// prettier-ignore
tl.from($lin, { duration: 3.5, drawSVG: 1, delay: 0.25 })
  .from('.h2-contest', { y: 20, opacity: 0, ease: 'power1.out', duration: 0.25 }, '-=3.25') // Shortened label format
  .from('.p-contest', { opacity: 0, ease: 'power2.out', duration: 0.65 }, '-=3')
  .from('.contest-txt-col .link-out', { opacity: 0, duration: 0.85 }, '-=2.75');

// pin

let logo = gsap.timeline({
  scrollTrigger: {
    trigger: '.logo-div',
    start: 'center center',
    end: '500%',
    pin: true,
    scrub: 1, // Smooth scrubbing
    toggleActions: 'restart restart none restart',
    markers: true, // Uncomment for debugging
    onUpdate: (self) => console.log('Progress:', self.progress),
  },
})

// // prettier-ignore
logo
  .to('.svg-logo', { scale: 1.1, x: '50%' }) // Slight enlargement
  .to('.svg-logo', { rotation: 8 }, '+=40%') // Increase scale more
  .to('.svg-logo', { rotation: 15 }, '+=60%') // Slight tilt
  .to('.svg-logo', { skewX: 10 }, '+=80%') // Subtle skew
  .to('.svg-logo', { rotation: -15 }, '+=100%') // Fade slightly
// // prettier-ignore
gsap.utils.toArray('.logo-div-txt').forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: '20% center',
        toggleActions: 'play reverse play reverse', // This will reverse on scroll out
        // markers: true, // Remove this in production
      },
    })
    .from(element.querySelector('.logo-txt'), {
      opacity: 0, // Ensures it fades in
      duration: 0.65,
    })
})
