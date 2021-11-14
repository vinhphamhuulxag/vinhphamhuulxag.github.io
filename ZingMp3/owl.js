
    $('.explore__slider').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      nav: false,
      dots: false,
      slideBy: 5,
      smartSpeed: 80,
      navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
  0:{
      items:1,
     

  },
  600:{
      items:2,
      margin:20
  },
  1200: {
  items: 3,
  
  
},
2000: {
  items: 3,
 
},
}
})
$('.container__playlist').owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 5,
  smartSpeed: 80,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:3,
  margin: 10,

},
600:{
  items:4,
  margin:20
},
1200: {
items: 5,


},
2000: {
items: 5,

},
}
})
// MV
$('.container__mv').owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 3,
  smartSpeed: 80,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:1
},
600:{
  items:2,
  margin:20


},
1200: {
items: 3,

},
2000: {
items: 3,

},
}
})
// singer
$('.container__singer').owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 5,
  smartSpeed: 80,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:2
},
600:{
  items:3,
  margin:20

},
1200: {
items: 5,

},
2000: {
items: 5,

},
}
})
// radio
$('.container__radio-highlight').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 5,
  smartSpeed: 80,
  // rewind: true,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:3,
  margin: 10
},
600:{
  items:5,

},
1200: {
items: 7,

},
2000: {
items: 7,

},
}
})
// Mix
$('.container__mix').owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 5,
  smartSpeed: 80,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:3,
  margin: 10
},
600:{
  items:4,
  margin:20

},
1200: {
items: 5,

},
2000: {
items: 5,

},
}
})
// singer
$('.container__explore-singer').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 5,
  smartSpeed: 60,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:3,
  margin:10
},
600:{
  items:4,
  margin:20

},
1200: {
items: 5,

},
2000: {
items: 5,

},
}
})
// event
$('.container__explore-event').owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 3,
  smartSpeed: 60,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:1,
  autoplay:true,
  autoplayTimeout:3000,
  loop:true,
  smartSpeed:100
},
600:{
  items:2,
  margin:20

},
1200: {
items: 3,

},
2000: {
items: 3,

},
}
})

// release
$('.container__release').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 3,
  smartSpeed: 100,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:1
},
600:{
  items:2,
  margin:20

},
1200: {
items: 3,

},
2000: {
items: 3,

},
}
})
// 
$('.container__no-title').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  nav: false,
  dots: false,
  slideBy: 5,
  smartSpeed: 60,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:3,
  margin:10
},
600:{
  items:4,
  margin:20

},
1200: {
items: 5,

},
2000: {
items: 5,

},
}
})
// singer favorite
$('.container__singer-favorite').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  nav: true,
  dots: false,
  slideBy: 3,
  smartSpeed: 60,
  navText: ['<i class="bi bi-chevron-left  playlist--button-left"></i>', '<i class="bi bi-chevron-right playlist--button-right "></i>'],
responsive:{
0:{
  items:2,
  margin:10
},
600:{
  items:2,
  margin:20

},
1200: {
items: 3,

},
2000: {
items: 3,

},
}
})