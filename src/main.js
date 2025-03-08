import gsap from 'gsap'

gsap.from('.box', {
  scrollTrigger: {
    trigger: '.flex',
    pin: true,
    markers: true,
    scrub: 2,
    start: 'top center',
    end: '+=900 center',
  },
  y: -100,
  ease: 'back.out(4)',
  stagger: {
    amount: 3,
    from: 'random',
  },
  markers: true,
})
