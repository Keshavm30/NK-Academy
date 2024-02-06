const nextIcon = '<img src="./assets/right-arrow.svg" alt="right">';
const prevIcon = '<img src="./assets/left-arrow.svg" alt="left" >';




if (window.matchMedia("(min-width: 1420px)").matches) {
  // Viewport is greater than 1420 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 350,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else if (window.matchMedia("(min-width: 1380px)").matches) {
  // Viewport is greater than 1380 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 340,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else if (window.matchMedia("(min-width: 1340px)").matches) {
  // Viewport is greater than 1340 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 330,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else if (window.matchMedia("(min-width: 1280px)").matches) {
  // Viewport is greater than 1280 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 300,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else if (window.matchMedia("(min-width: 1170px)").matches) {
  // Viewport is greater than 1170 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 250,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else if (window.matchMedia("(min-width: 1060px)").matches) {
  // Viewport is greater than 1060 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 190,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else if (window.matchMedia("(min-width: 992px)").matches) {
  // Viewport is greater than 1060 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    stagePadding: 150,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}
else {
  // Viewport is less than 992 pixels wide
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    margin: 10,
    nav: true,
    navText: [
      prevIcon,
      nextIcon
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  })
}