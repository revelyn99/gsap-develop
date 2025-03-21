import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)

var $lin = '.st1'

// contest timeline *******************************************************
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
  .from(
    '.h2-contest',
    { y: 20, opacity: 0, ease: 'power1.out', duration: 0.25 },
    '-=3.25'
  ) // Shortened label format
  .from('.p-contest', { opacity: 0, ease: 'power2.out', duration: 0.65 }, '-=3')
  .from('.contest-txt-col .link-out', { opacity: 0, duration: 0.85 }, '-=2.75')
// end contest timeline *******************************************************

// logo txt ************************************************************
gsap.utils.toArray('.logo-div-txt').forEach((element) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: element,
        start: '20% center',
        toggleActions: 'play reverse play reverse',
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
    end: '500%',
    pin: true,
    scrub: 1,
    toggleActions: 'restart restart none restart',
    markers: true,
    onUpdate: (self) => console.log('Progress:', self.progress),
  },
  duration: 1,
})

logo
  // Initial state
  .to('.svg-logo', { scale: 1.1, x: '50%', duration: 0.05 }, 0)
  .to('.feathers .l', { opacity: 0, duration: 0.05 }, '<')
  .to('.hawk-head', { opacity: 0, duration: 0.05 }, '<')
  .to('.date', { opacity: 0, duration: 0.05 }, '<')

  // Stop 1
  .to('.date', { opacity: 1, duration: 0.05 }, 0.2)
  .to('.50bg, .50fg', { opacity: 0, duration: 0.05 }, '<')

  // 🔁 Redundantly ensure hawk-head is 0 before showing it again (safe)
  .set('.hawk-head', { opacity: 0 }, 0.39)

  // Stop 2 — should now work
  .to('.hawk-head', { opacity: 1, duration: 0.1 }, 0.4)
  .to('.hawk-head', { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 }, 0.4) // just for visibility
  .to('.date', { opacity: 0, duration: 0.05 }, '<')

  // Stop 3 — no changes right now
  .to('.svg-logo', {}, 0.6)

  // Stop 4 — no changes right now
  .to('.svg-logo', {}, 0.8)

// Force timeline duration to 1
logo.totalDuration(1)

// stop 3 ***
// .to(
//   '.feathers .l',
//   {
//     opacity: 1,
//     scale: 1.5,
//     transformOrigin: '50% 50%', // center center
//     stagger: {
//       amount: 0.1,
//       ease: 'power3.inOut',
//     },
//   },
//   '+=60%'
// )
// .to('.hawk-head', { opacity: 0 }, '<')
