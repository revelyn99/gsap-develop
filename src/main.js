import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './styles/style.css'

gsap.registerPlugin(ScrollTrigger)

gsap.to('.svg-logo', {
  rotation: 360,
  duration: 2,
  ease: 'bounce.out',
  markers: true,
})

// live
