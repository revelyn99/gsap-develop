import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)
var $lin2 = '.lst1'

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
