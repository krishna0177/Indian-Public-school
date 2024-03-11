let cn = gsap.timeline()

cn.from(".navbar",{
     y:-100,
     duration:0.2,
     delay:0.1,
     opacity:0,
     
})
.from(".nav-container a",{
     y:30,
     duration:0.5,
     opacity:0,
     stagger:0.5
})
.from(".home-text h1, .home-text h3, .home-text p ",{
     y:100,
     duration:0.3,
     opacity:0,
     stagger:0.5
})

// gsap.from(".home-image",{
//      scale:0.2,
//      duration:0.3,
//      opacity:0,
//      delay:0.5
    
    
// })
gsap.from(".about ,.vision , .mission, .education, .faculty,.Parental",{
     y:-200,
     duration:0.5,
     opacity:0,
     stagger:0.5,
     scrollTrigger: {
          trigger: ".",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=500", // end after scrolling 500px beyond the start
          scrub: 1, 

     }
})



