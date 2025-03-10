import gsap from 'gsap'
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(DrawSVGPlugin)

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

// gsap.from($sec2, { duration: 1, drawSVG: 0 })

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: $logo,
    scale: 1,
    start: 'center center',
    end: '550%',
    markers: true,
    pin: true,
    toggleActions: 'restart none none restart',
  },
})

tl
  // prettier-ignore

  .to($logo, {
    // rotation: 360,
    // scale: 1.2,
    // ease: 'bounce.out',
  })
  .to($sec1, { opacity: 1 })
  .to($sec2, { opacity: 1, drawSVG: true })
  .to($sec3, { opacity: 0 })
  .to($sec4, { opacity: 0 })
  .to($sec5, { opacity: 0 })
  .to($bg, { opacity: 0 })
  .to($sec3, { opacity: 1 })
  .to($sec4, { opacity: 1 })
  .to($sec5, { opacity: 1 })
  .to($bg, { opacity: 1 })
