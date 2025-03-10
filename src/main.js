import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

var $logo = '.svg-logo'
var $bg = '.background'
var $sec1 = '.sec-1'
var $sec2 = '.sec-2'
var $sec3 = '.sec-3'
var $sec4 = '.sec-4'
var $sec5 = '.sec-5'
// var $scrollspace = '.scroll-space'

// gsap.set($logo, { scale: 0.5 })

// var tl = gsap.timeline()
// // prettier-ignore
// tl

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: $logo,
    scale: 1,
    start: 'center center',
    end: '200%',
    markers: true,
    pin: true,
    toggleActions: 'restart none none restart',
  },
})

tl
  // prettier-ignore

  .to($logo, {
    rotation: 360,
    scale: 1.2,
    ease: 'bounce.out',
  })
  .to($sec1, { opacity: 1 })
  .to($sec2, { opacity: 1 })
  .to($sec3, { opacity: 0 })
  .to($sec4, { opacity: 0 })
  .to($sec5, { opacity: 0 })
  .to($bg, { opacity: 0 })
