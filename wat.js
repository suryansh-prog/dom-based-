// var tl=gsap.timeline();
// tl.from(".left h2",{
//     y:-200,
//     opacity:0,
//     duration:.8,
// })
// tl.from(".right h2",{
//     y:-200,
//     opacity:0,
//     duration:.8,
//     stagger:.5
// })
// tl.from(".wel h1",{
//     x:-200,
//     opacity:0,a
//     duration:.8,
// },'p')
// tl.from(".wel button",{
//     x:-200,
//     opacity:0,
//     duration:.8,
// },)
// tl.from(".ima",{
//     x:200,
//     opacity:0,
//     duration:.8,
// },'p')
// tl.from(".wel button i",{
//    marginLeft: '20px',
//    duration:.7,
//    repeat:-1,
//    yoyo:true
   
// },)


// gsap.from(".page1 .box1",{
//     scale:0,
//     duration: 3,
//     delay: 1,
//     rotate : 360,
//     // scrollTrigger:{
//     //     trigger:'.page1 .box1',
//     //     scroller:'body',
//     // }
// })
// gsap.from(".page2 .card",{
//     y:130,
//     opacity:0,
//     delay:2,
//     duration: 1,
//     stagger:.5,
//     // rotate : 10,
//     scrollTrigger:{
//         trigger:'.page2 .card',
//         scroller:'body',
//         markers:true,
//         start:'top 70%',
//         end: 'top 30%',
//         scrub:2

//     }
// })
// var tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:'body',
//         markers:'true',
//         start:"top 0%",
//         end:"top -60%",
//         pin:true,
//         scrub:2
//     }
// });

// tl.to(".box",{
//     scale:5,
//     delay:1,
//     duration:1
// })
// tl.to(".inner",{
//     scale:1.1,
//     delay:1,
//     duration:1
// })

// tl.to(".innn",{
//     scale:1.3,
//     delay:1,
//     duration:1
// })
// tl.to(".innn h3",{
//     scale:1,
//     stagger:.3,
    
//     delay:1,
//     duration:1
// })
var main=document.querySelector(".main");
var Loco= new LocomotiveScroll({
    el:main,
    smooth:true,
    lerp:.1 /// lachakk
})

console.log(Loco);