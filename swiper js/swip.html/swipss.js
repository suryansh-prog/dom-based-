var swiper = new Swiper(".swiper", {
    // autoplay:true,
    // loop:true,
    // navigation:{
    //     nextEl:'.swiper-button-next',
    //     prevEl:'.swiper-button-prev'
    // },
    // pagination:{
    //     el:'.swiper-pagination',
    //     dynamicBullets:true
    // },
    // autoplay:{
    //     delay:500
    // }
    loop:true,
    effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
      },
      autoplay:{
        delay:4000
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets:true
      },
  });