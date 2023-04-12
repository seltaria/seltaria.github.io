export function scrollColor() {

  ScrollTrigger.create({
    trigger: 'h2.skills__title_full',
    markers: true,
    start: "top 50%",
    end: "bottom 0%",

    onEnter: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#2E385D' })
    },

    onLeaveBack: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#4A436D' })
    },
  })

  ScrollTrigger.create({
    trigger: 'h2.skills__title_also',
    markers: true,
    start: "top 50%",
    end: "bottom 0%",

    onEnter: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: 'rgb(57 81 135)' })
    },

    onLeaveBack: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#2E385D' })
    },
  })

  ScrollTrigger.create({
    trigger: 'section#react',
    markers: true,
    start: "top 50%",
    end: "bottom 0%",

    onEnter: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: '#4A436D' })
    },

    onLeaveBack: () => {
      gsap.to('body', { duration: 1.0, backgroundColor: 'rgb(57 81 135)' })
    },
  })

}