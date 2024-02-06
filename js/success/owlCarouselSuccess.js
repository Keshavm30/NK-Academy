const nextIcon = '<img src="../../assets/right-arrow.svg" alt="right">';
const prevIcon = '<img src="../../assets/left-arrow.svg" alt="left" >';

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 6000,
  margin:10,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      992:{
          items:3
      }
  }
})