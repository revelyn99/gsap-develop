import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

var $logo = '.svg-logo'
// var $scrollspace = '.scroll-space'

// gsap.set($logo, { scale: 0.5 })

// var tl = gsap.timeline()
// // prettier-ignore
// tl

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: $logo,
    start: 'center center',
    end: '200%',
    markers: true,
    pin: true,
    toggleActions: 'restart none none pause',
  },
})

tl.to($logo, {
  rotation: 360,
  scale: 1,
  ease: 'bounce.out',
})
